// Ritar och animerar en övning på planen. Används av index.html och admin.html.
(function () {
  const RINK_W = 40; // längd (m), x-axeln: 0 = övre kortsidan
  const RINK_H = 20; // bredd (m), y-axeln: 0 = vänster långsida
  const MARGIN = 0.8;
  const STEP_SEC = 1.7;
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const MOVE = reduce ? 0.001 : 0.75;

  const CATEGORIES = ["Uppvärmning", "Fys", "Station", "Lekar/slutövning", "Småövning"];
  const RK = {
    frame: "#ffffff",
    border: "#0d4c8f",
    rink: "#4aa6bf",
    line: "#ffffff",
    mark: "#e9b23a",
    ball: "#ffffff",
    label: "#1d2d3d",
  };

  const lerp = (a, b, t) => [
    a[0] + (b[0] - a[0]) * t,
    a[1] + (b[1] - a[1]) * t,
  ];
  const ease = (t) => (t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2);
  const clamp = (t) => Math.max(0, Math.min(1, t));
  const bez = (A, V, B, t) => {
    const u = 1 - t;
    return [
      u * u * A[0] + 2 * u * t * V[0] + t * t * B[0],
      u * u * A[1] + 2 * u * t * V[1] + t * t * B[1],
    ];
  };
  const pathPts = (A, B, via) =>
    via ? Array.from({ length: 33 }, (_, i) => bez(A, via, B, i / 32)) : [A, B];
  const isPoint = (p) =>
    Array.isArray(p) && p.length === 2 && p.every((n) => typeof n === "number");

  // ---------- data ----------
  function validate(d) {
    if (!d || typeof d !== "object" || Array.isArray(d))
      throw new Error(
        "Övningen måste vara ett JSON-objekt som börjar med { och slutar med }.",
      );
    if (!d.name) throw new Error('Övningen saknar "name".');
    if (!CATEGORIES.includes(d.category))
      throw new Error(`"category" måste vara en av: ${CATEGORIES.join(", ")}.`);
    if (
      !Array.isArray(d.levels) ||
      !d.levels.length ||
      !d.levels.every((l) => ["gron", "bla", "rod"].includes(l))
    )
      throw new Error(
        '"levels" måste vara en lista med "gron", "bla" och/eller "rod".',
      );
    if (!d.entities || typeof d.entities !== "object")
      throw new Error('Övningen saknar "entities".');
    const ids = Object.keys(d.entities);
    for (const [id, e] of Object.entries(d.entities)) {
      if (!["player", "goalie", "cone"].includes(e.type))
        throw new Error(
          `"${id}" har type "${e.type}". Använd player, goalie eller cone.`,
        );
      if (
        e.type === "player" &&
        !["home", "away", "third", "queue"].includes(e.team)
      )
        throw new Error(
          `"${id}" har team "${e.team}". Använd home, away, third eller queue.`,
        );
      if (typeof e.x !== "number" || typeof e.y !== "number")
        throw new Error(`"${id}" behöver x och y som siffror.`);
    }
    const sp = d.spelare;
    if (
      !Array.isArray(sp) ||
      sp.length !== 2 ||
      !Number.isInteger(sp[0]) ||
      sp[0] < 1 ||
      !(sp[1] === null || (Number.isInteger(sp[1]) && sp[1] >= sp[0]))
    )
      throw new Error('"spelare" ska se ut som [min, max], eller [min, null] om alla kan vara med.');
    if ("tranare" in d && !(Number.isInteger(d.tranare) && d.tranare >= 1))
      throw new Error('"tranare" ska vara ett heltal, minst 1.');
    if (d.view && !(isPoint(d.view) && d.view[0] < d.view[1]))
      throw new Error('"view" ska se ut som [0, 20].');
    if (d.ball?.holder && !ids.includes(d.ball.holder))
      throw new Error(`Bollhållaren "${d.ball.holder}" finns inte i entities.`);
    if (d.ball?.at && !isPoint(d.ball.at))
      throw new Error('"ball.at" ska se ut som [x, y].');
    for (const l of d.lines || [])
      if (!isPoint(l.from) || !isPoint(l.to))
        throw new Error(
          'Varje linje i "lines" behöver "from": [x, y] och "to": [x, y].',
        );
    for (const l of d.labels || [])
      if (!l.text || !isPoint(l.at))
        throw new Error(
          'Varje etikett i "labels" behöver "text" och "at": [x, y].',
        );
    for (const b of d.balls || [])
      if (!isPoint(b))
        throw new Error('Varje boll i "balls" ska se ut som [x, y].');
    for (const i of d.info || [])
      if (!Array.isArray(i) || i.length !== 2)
        throw new Error('Varje rad i "info" ska se ut som ["Rubrik", "Text"].');
    if (!Array.isArray(d.steps) || !d.steps.length)
      throw new Error('"steps" måste vara en lista med minst ett steg.');
    d.steps.forEach((st, i) => {
      const n = i + 1;
      if (!Array.isArray(st.actions))
        throw new Error(`Steg ${n} saknar "actions".`);
      for (const a of st.actions) {
        if (!["run", "dribble", "pass", "shot"].includes(a.type))
          throw new Error(
            `Steg ${n} har type "${a.type}". Använd run, dribble, pass eller shot.`,
          );
        if (a.type === "pass") {
          if (!ids.includes(a.to))
            throw new Error(
              `Steg ${n}: passningen går till "${a.to}", som inte finns.`,
            );
          if (a.from && !ids.includes(a.from))
            throw new Error(`Steg ${n}: "${a.from}" finns inte.`);
          if (!a.from && !d.ball?.at)
            throw new Error(
              `Steg ${n}: en passning utan "from" kräver en lös boll, "ball": { "at": [x, y] }.`,
            );
        } else if (!ids.includes(a.who)) {
          throw new Error(`Steg ${n}: "${a.who}" finns inte i entities.`);
        }
        if ((a.type === "run" || a.type === "dribble") && !isPoint(a.to))
          throw new Error(`Steg ${n}: ${a.type} behöver "to": [x, y].`);
        if (a.via && !isPoint(a.via))
          throw new Error(`Steg ${n}: "via" ska se ut som [x, y].`);
        if (a.type === "shot" && a.to && !isPoint(a.to))
          throw new Error(`Steg ${n}: skottets "to" ska se ut som [x, y].`);
      }
    });
  }

  function shotTarget(a, st) {
    if (a.to) return a.to;
    return [st.pos[a.who][0] > RINK_W / 2 ? 37.1 : 2.9, 10];
  }

  function buildStates(d) {
    const s0 = {
      pos: {},
      holder: d.ball?.holder ?? null,
      ballPos: d.ball?.at ?? null,
    };
    for (const [id, e] of Object.entries(d.entities)) s0.pos[id] = [e.x, e.y];
    const out = [s0];
    for (const step of d.steps) {
      const prev = out[out.length - 1];
      const s = {
        pos: { ...prev.pos },
        holder: prev.holder,
        ballPos: prev.ballPos,
      };
      for (const a of step.actions) {
        if (a.type === "run" || a.type === "dribble") s.pos[a.who] = a.to;
        if (a.type === "dribble") {
          s.holder = a.who;
          s.ballPos = null;
        }
        if (a.type === "pass") {
          s.holder = a.to;
          s.ballPos = null;
        }
        if (a.type === "shot") {
          s.holder = null;
          s.ballPos = shotTarget(a, prev);
        }
      }
      out.push(s);
    }
    return out;
  }

  // ---------- board ----------
  function create(canvas, wrap, onUpdate) {
    const ctx = canvas.getContext("2d");
    let drill = null,
      states = null,
      cur = 0,
      playing = false,
      last = null;
    let geom = { s: 10, x0: 0, w: 0, h: 0 };

    const P = ([x, y]) => [
      (y + MARGIN) * geom.s,
      (x - geom.x0 + MARGIN) * geom.s,
    ];
    const playerR = () => Math.max(0.5 * geom.s, 6);

    function resize() {
      if (!drill) return;
      const w = wrap.clientWidth;
      if (!w) return;
      const view = drill.view || [0, RINK_W];
      const s = w / (RINK_H + 2 * MARGIN);
      const h = Math.round((view[1] - view[0] + 2 * MARGIN) * s);
      const dpr = window.devicePixelRatio || 1;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      canvas.style.height = h + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      geom = { s, x0: view[0], w, h };
      draw();
    }

    function strokeLine(a, b) {
      const [x1, y1] = P(a),
        [x2, y2] = P(b);
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.stroke();
    }
    function strokeRect(x1, y1, x2, y2) {
      const [a, b] = P([Math.min(x1, x2), y1]),
        [c, d] = P([Math.max(x1, x2), y2]);
      ctx.beginPath();
      ctx.rect(a, b, c - a, d - b);
      ctx.stroke();
    }
    function rinkPath() {
      const [x, y] = P([0, 0]);
      ctx.beginPath();
      ctx.roundRect(x, y, RINK_H * geom.s, RINK_W * geom.s, 4 * geom.s);
    }

    function drawRink() {
      const s = geom.s;
      ctx.fillStyle = RK.frame;
      ctx.fillRect(0, 0, geom.w, geom.h);
      rinkPath();
      ctx.fillStyle = RK.rink;
      ctx.fill();
      ctx.save();
      rinkPath();
      ctx.clip();
      ctx.lineWidth = Math.max(1, 0.06 * s);
      ctx.strokeStyle = RK.line;
      ctx.fillStyle = RK.line;
      strokeLine([20, 0], [20, 20]);
      for (const m of [false, true]) {
        const f = (x) => (m ? RINK_W - x : x);
        strokeRect(f(2.85), 7.5, f(6.85), 12.5); // målområde
        strokeRect(f(2.85), 8.75, f(3.85), 11.25); // målvaktsområde
        strokeRect(f(2.35), 9.2, f(3.5), 10.8); // mål
        for (const y of [1.5, 18.5]) {
          const [dx, dy] = P([f(3.5), y]);
          ctx.beginPath();
          ctx.arc(dx, dy, 0.12 * s, 0, 7);
          ctx.fill();
        }
      }
      ctx.restore();
      rinkPath();
      ctx.lineWidth = Math.max(3, 0.3 * s);
      ctx.strokeStyle = RK.border;
      ctx.stroke();
    }

    // Punkter längs en polylinje (px), från d0 till d1, med normaler.
    function sample(pts, d0, d1, step) {
      const out = [];
      let acc = 0;
      for (let i = 1; i < pts.length; i++) {
        const [x1, y1] = pts[i - 1],
          [x2, y2] = pts[i];
        const L = Math.hypot(x2 - x1, y2 - y1);
        if (!L) continue;
        const ux = (x2 - x1) / L,
          uy = (y2 - y1) / L;
        for (let d = Math.max(d0, acc); d <= Math.min(d1, acc + L); d += step)
          out.push({
            x: x1 + ux * (d - acc),
            y: y1 + uy * (d - acc),
            nx: -uy,
            ny: ux,
            d,
          });
        acc += L;
      }
      return out;
    }
    const polyLen = (pts) =>
      pts.reduce(
        (s, p, i) =>
          i ? s + Math.hypot(p[0] - pts[i - 1][0], p[1] - pts[i - 1][1]) : 0,
        0,
      );

    function arrow(ptsM, kind, trimStart, trimEnd) {
      const pts = ptsM.map(P);
      const total = polyLen(pts);
      const L = total - trimStart - trimEnd;
      if (L < 6) return;
      const s = geom.s,
        ah = Math.min(Math.max(0.65 * s, 8), L * 0.45);
      const shaft = sample(pts, trimStart, total - trimEnd - ah, 1.5);
      if (!shaft.length) return;
      const tip =
        sample(pts, total - trimEnd - 0.5, total - trimEnd, 1)[0] ||
        shaft[shaft.length - 1];
      const base = shaft[shaft.length - 1];
      ctx.strokeStyle = RK.line;
      ctx.fillStyle = RK.line;
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      ctx.lineWidth =
        kind === "shot" ? Math.max(2.5, 0.16 * s) : Math.max(1.5, 0.09 * s);
      ctx.setLineDash(
        kind === "run" ? [Math.max(4, 0.35 * s), Math.max(3.5, 0.3 * s)] : [],
      );
      ctx.beginPath();
      const amp = kind === "dribble" ? Math.max(2.5, 0.2 * s) : 0,
        wl = Math.max(9, 0.9 * s),
        endD = total - trimEnd - ah;
      shaft.forEach((q, i) => {
        const o =
          Math.sin(((q.d - trimStart) / wl) * 2 * Math.PI) *
          amp *
          Math.min(1, (endD - q.d) / 6);
        i
          ? ctx.lineTo(q.x + q.nx * o, q.y + q.ny * o)
          : ctx.moveTo(q.x + q.nx * o, q.y + q.ny * o);
      });
      ctx.stroke();
      ctx.setLineDash([]);
      const dx = tip.x - base.x,
        dy = tip.y - base.y,
        dl = Math.hypot(dx, dy) || 1;
      const ux = dx / dl,
        uy = dy / dl;
      ctx.beginPath();
      ctx.moveTo(base.x + ux * ah, base.y + uy * ah);
      ctx.lineTo(base.x - uy * ah * 0.5, base.y + ux * ah * 0.5);
      ctx.lineTo(base.x + uy * ah * 0.5, base.y - ux * ah * 0.5);
      ctx.closePath();
      ctx.fill();
    }

    function drawArrows(activeStep, diagram) {
      const R = playerR();
      drill.steps.forEach((step, j) => {
        ctx.globalAlpha = diagram
          ? 1
          : j < activeStep
            ? 0.22
            : j === activeStep
              ? 1
              : 0.12;
        const A = states[j],
          B = states[j + 1];
        for (const a of step.actions) {
          if (a.type === "run" || a.type === "dribble")
            arrow(pathPts(A.pos[a.who], a.to, a.via), a.type, R, R * 0.6);
          else if (a.type === "pass")
            arrow(
              [a.from ? A.pos[a.from] : A.ballPos, B.pos[a.to]],
              "pass",
              a.from ? R : 0,
              R * 1.1,
            );
          else if (a.type === "shot")
            arrow([A.pos[a.who], shotTarget(a, A)], "shot", R, 0);
        }
      });
      ctx.globalAlpha = 1;
    }

    function drawEntity(e, pos) {
      const [x, y] = P(pos),
        R = playerR(),
        r = R * 0.75;
      ctx.lineWidth = 1.5;
      ctx.lineCap = "round";
      ctx.strokeStyle = RK.mark;
      if (e.type === "cone") {
        const c = Math.max(4, 0.35 * geom.s);
        ctx.beginPath();
        ctx.moveTo(x, y - c);
        ctx.lineTo(x + c * 0.9, y + c * 0.7);
        ctx.lineTo(x - c * 0.9, y + c * 0.7);
        ctx.closePath();
        ctx.fillStyle = RK.line;
        ctx.fill();
        return;
      }
      if (e.type === "goalie") {
        ctx.fillStyle = RK.mark;
        ctx.font = `600 ${Math.round(R * 1.6)}px system-ui, sans-serif`;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText("MV", x, y);
        return;
      }
      ctx.beginPath();
      if (e.team === "away") {
        ctx.arc(x, y, r, 0, 7);
      } else if (e.team === "third") {
        for (const a of [0, Math.PI / 3, (2 * Math.PI) / 3]) {
          ctx.moveTo(x - Math.sin(a) * r, y - Math.cos(a) * r);
          ctx.lineTo(x + Math.sin(a) * r, y + Math.cos(a) * r);
        }
      } else {
        ctx.moveTo(x - r, y - r);
        ctx.lineTo(x + r, y + r);
        ctx.moveTo(x + r, y - r);
        ctx.lineTo(x - r, y + r);
      }
      ctx.stroke();
    }

    function drawBall(px) {
      ctx.beginPath();
      ctx.arc(px[0], px[1], Math.max(3, 0.22 * geom.s), 0, 7);
      ctx.fillStyle = RK.ball;
      ctx.fill();
    }

    function draw() {
      if (!drill || !geom.w) return;
      ctx.clearRect(0, 0, geom.w, geom.h);
      drawRink();

      // zonlinjer
      ctx.setLineDash([Math.max(3, 0.25 * geom.s), Math.max(3, 0.25 * geom.s)]);
      ctx.lineWidth = 1;
      ctx.strokeStyle = RK.line;
      for (const l of drill.lines || []) strokeLine(l.from, l.to);
      ctx.setLineDash([]);

      const N = drill.steps.length;
      const k = Math.min(Math.floor(cur), N - 1);
      const p = cur >= N ? 1 : clamp((cur - k) / MOVE);
      const e = ease(p);
      const diagram = cur === 0 && !playing;
      drawArrows(k, diagram);

      const A = states[k],
        B = states[k + 1];
      const pos = {};
      for (const id of Object.keys(drill.entities))
        pos[id] = lerp(A.pos[id], B.pos[id], e);
      for (const a of drill.steps[k].actions)
        if (a.via) pos[a.who] = bez(A.pos[a.who], a.via, a.to, e);
      for (const [id, ent] of Object.entries(drill.entities))
        if (ent.type === "cone") drawEntity(ent, pos[id]);
      for (const [id, ent] of Object.entries(drill.entities))
        if (ent.type !== "cone") drawEntity(ent, pos[id]);

      // bollhögar och bokstäver vid leden
      for (const b of drill.balls || []) drawBall(P(b));
      ctx.fillStyle = RK.label;
      ctx.font = `600 ${Math.max(11, Math.round(0.9 * geom.s))}px Montserrat, Arial, sans-serif`;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      for (const l of drill.labels || []) {
        const [lx, ly] = P(l.at);
        ctx.fillText(l.text, lx, ly);
      }

      // bollen
      const R = playerR();
      const carry = (id) => {
        const [x, y] = P(pos[id]);
        return [x + R * 0.9, y + R * 0.75];
      };
      const step = drill.steps[k];
      const pass = step.actions.find((a) => a.type === "pass");
      const shot = step.actions.find((a) => a.type === "shot");
      if (pass && (pass.from ? A.holder === pass.from : !A.holder)) {
        const q = ease(clamp((p - 0.1) / 0.8));
        drawBall(
          lerp(pass.from ? carry(pass.from) : P(A.ballPos), carry(pass.to), q),
        );
      } else if (shot && A.holder === shot.who) {
        const q = ease(clamp((p - 0.1) / 0.6));
        drawBall(lerp(carry(shot.who), P(shotTarget(shot, A)), q));
      } else {
        const holder = p > 0 ? B.holder : A.holder;
        const ballPos = p > 0 ? B.ballPos : A.ballPos;
        if (holder) drawBall(carry(holder));
        else if (ballPos) drawBall(P(ballPos));
      }
      onUpdate && onUpdate({ k, N, diagram, playing, ended: cur >= N });
    }

    function tick(t) {
      if (!playing) {
        last = null;
        return;
      }
      if (last != null) {
        cur += (t - last) / 1000 / STEP_SEC;
        if (cur >= drill.steps.length) {
          cur = drill.steps.length;
          playing = false;
        }
      }
      last = t;
      draw();
      if (playing) requestAnimationFrame(tick);
    }

    function stepTo(dir) {
      playing = false;
      const N = drill.steps.length;
      const k = Math.min(Math.floor(cur), N - 1);
      const atEnd = cur - k >= MOVE;
      let target = dir > 0 ? (cur === 0 ? 0 : atEnd ? k + 1 : k) : k - 1;
      target = Math.max(0, Math.min(N - 1, target));
      cur = target + MOVE;
      draw();
    }

    new ResizeObserver(resize).observe(wrap);
    if (document.fonts) document.fonts.ready.then(draw);

    return {
      setDrill(d) {
        drill = d;
        states = buildStates(d);
        cur = 0;
        playing = false;
        resize();
      },
      play() {
        if (playing) {
          playing = false;
          draw();
          return;
        }
        if (cur >= drill.steps.length) cur = 0;
        playing = true;
        last = null;
        requestAnimationFrame(tick);
      },
      next() {
        stepTo(1);
      },
      prev() {
        if (cur <= MOVE) {
          playing = false;
          cur = 0;
          draw();
        } else stepTo(-1);
      },
      jump(j) {
        playing = false;
        cur = j + MOVE;
        draw();
      },
      // Skärmposition -> planens meter [x, y], avrundat till en decimal.
      toMeters(clientX, clientY) {
        const r = canvas.getBoundingClientRect();
        const y = (clientX - r.left) / geom.s - MARGIN;
        const x = (clientY - r.top) / geom.s - MARGIN + geom.x0;
        return [Math.round(x * 10) / 10, Math.round(y * 10) / 10];
      },
    };
  }

  // Rekommenderat antal, t.ex. "4–7 spelare · 1 tränare". Målvakter räknas som spelare.
  function players(d) {
    const [min, max] = d.spelare;
    let s = max === null ? `minst ${min} spelare` : min === max ? `${min} spelare` : `${min}–${max} spelare`;
    if (d.tranare) s += ` · ${d.tranare} tränare`;
    return s;
  }

  // Passar övningen n spelare? Tomt n = inget filter. Egna övningar utan antal passar alltid.
  function fits(d, n) {
    if (!n || !d.spelare) return true;
    const [min, max] = d.spelare;
    return n >= min && (max === null || n <= max);
  }

  window.DrillBoard = { create, validate, players, fits, CATEGORIES };
})();
