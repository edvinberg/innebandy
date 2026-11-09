// Gemensam navbar för alla sidor. Läggs in först i <body> med <script src="nav.js"></script>.
// Håller också reda på vald nivå: ?niva=gron|bla i adressen, annars den senast valda.
(function () {
  const LEVELS = { gron: "Grön nivå", bla: "Blå nivå" };
  const here = location.pathname.split("/").pop() || "index.html";

  const asked = new URLSearchParams(location.search).get("niva");
  let level = LEVELS[asked] ? asked : null;
  if (!level) {
    try {
      const saved = localStorage.getItem("niva");
      if (LEVELS[saved]) level = saved;
    } catch {}
  }
  if (level) {
    try {
      localStorage.setItem("niva", level);
    } catch {}
  }
  // Övningar, Upplägg och Vårt spel visas per nivå. Utan vald nivå: välj på startsidan först.
  if (!level && (here === "ovningar.html" || here === "upplagg.html" || here === "meta.html")) {
    location.replace("index.html");
    return;
  }
  window.LEVELS = LEVELS;
  window.NIVA = level;

  const style = document.createElement("style");
  style.textContent = `
    :root { --nav-h: 56px; }
    .sn {
      position: sticky; top: 0; z-index: 10; height: var(--nav-h);
      display: flex; align-items: stretch; gap: 28px; overflow-x: auto;
      background: #0b0e12; color: #fff;
      padding-left: max(24px, env(safe-area-inset-left, 0px));
      padding-right: max(24px, env(safe-area-inset-right, 0px));
      font-family: "Montserrat", "Helvetica Neue", Arial, sans-serif;
    }
    .sn-brand {
      display: flex; align-items: center; flex: none;
      font-size: 0.9375rem; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase;
      color: #fff; text-decoration: none;
    }
    .sn-level {
      align-self: center; flex: none; display: inline-flex; align-items: center; gap: 8px;
      font-size: 0.75rem; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase;
      color: #fff; text-decoration: none; padding: 5px 12px; border-radius: 999px;
      border: 1px solid rgba(255, 255, 255, 0.35);
    }
    .sn-level:hover { border-color: #fff; }
    .sn-level::before { content: ""; width: 10px; height: 10px; border-radius: 50%; background: var(--lvl); }
    .sn-links { display: flex; gap: 24px; flex: 1; }
    .sn-links a {
      display: flex; align-items: center; flex: none;
      font-size: 0.8125rem; font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase;
      color: rgba(255, 255, 255, 0.7); text-decoration: none;
      border-bottom: 3px solid transparent; border-top: 3px solid transparent;
    }
    .sn-links a:hover { color: #fff; }
    .sn-links a[aria-current="page"] { color: #fff; border-bottom-color: #2f8fe0; }
    .sn-links a:last-child { margin-left: auto; }
    .sn a:focus-visible, .sn-burger:focus-visible { outline: 2px solid #fff; outline-offset: 2px; }
    .sn-burger {
      display: none; align-self: center; flex: none; margin-left: auto;
      width: 40px; height: 40px; align-items: center; justify-content: center;
      background: transparent; color: #fff; cursor: pointer;
      border: 1px solid rgba(255, 255, 255, 0.35); border-radius: 8px;
    }
    .sn-burger svg { width: 20px; height: 20px; }
    /* Mobil: länkarna fälls ihop bakom en hamburgerknapp. */
    @media (max-width: 720px) {
      .sn { gap: 12px; overflow: visible; }
      .sn-brand { min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; display: block; align-self: center; }
      .sn-burger { display: inline-flex; }
      .sn-links {
        display: none; position: absolute; top: 100%; left: 0; right: 0;
        flex-direction: column; gap: 0; background: #0b0e12;
        border-top: 1px solid rgba(255, 255, 255, 0.12);
        padding-block: 4px 12px;
        padding-left: max(24px, env(safe-area-inset-left, 0px));
        padding-right: max(24px, env(safe-area-inset-right, 0px));
      }
      .sn.open .sn-links { display: flex; }
      .sn-links a { padding: 14px 0; border: 0; }
      .sn-links a[aria-current="page"] { border: 0; box-shadow: inset 3px 0 #2f8fe0; padding-left: 12px; }
      .sn-links a:last-child { margin-left: 0; }
    }
  `;
  document.head.appendChild(style);

  const nav = document.createElement("nav");
  nav.className = "sn";
  nav.setAttribute("aria-label", "Huvudmeny");

  const brand = document.createElement("a");
  brand.className = "sn-brand";
  brand.href = "index.html";
  brand.textContent = "Innebandyövningar";
  nav.appendChild(brand);

  if (level) {
    const pill = document.createElement("a");
    pill.className = "sn-level";
    pill.href = "index.html";
    pill.title = "Byt nivå";
    pill.textContent = LEVELS[level];
    pill.style.setProperty("--lvl", level === "gron" ? "#3fb15e" : "#2f8fe0");
    nav.appendChild(pill);
  }

  const links = document.createElement("div");
  links.className = "sn-links";
  const items = [["index.html", "Start"]];
  if (level) {
    items.push([`ovningar.html?niva=${level}`, "Övningar", "ovningar.html"]);
    items.push([`upplagg.html?niva=${level}`, "Upplägg", "upplagg.html"]);
    items.push([`meta.html?niva=${level}`, "Vårt spel", "meta.html"]);
  }
  items.push(["admin.html", "Admin"]);
  for (const [href, label, page] of items) {
    const a = document.createElement("a");
    a.href = href;
    a.textContent = label;
    if ((page || href) === here) a.setAttribute("aria-current", "page");
    links.appendChild(a);
  }
  links.id = "sn-links";
  nav.appendChild(links);

  const burger = document.createElement("button");
  burger.className = "sn-burger";
  burger.type = "button";
  burger.setAttribute("aria-label", "Meny");
  burger.setAttribute("aria-controls", "sn-links");
  burger.setAttribute("aria-expanded", "false");
  burger.innerHTML =
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 7h16M4 12h16M4 17h16"/></svg>';
  burger.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    burger.setAttribute("aria-expanded", String(open));
  });
  nav.appendChild(burger);
  document.body.prepend(nav);
})();
