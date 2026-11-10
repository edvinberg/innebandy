# Innebandy övningsbank

Övningar som ritade, animerade skisser i stället för bara text.

## Filer

| Fil          | Vad den gör                                                                  |
| ------------ | ---------------------------------------------------------------------------- |
| `index.html` | Startsida. Här väljer du nivå: grön, blå eller röd.                                 |
| `ovningar.html` | Övningsbanken, med flikar för Uppvärmning, Fys, Station, Lekar/slutövning och Småövning.                 |
| `upplagg.html` | Skapa träning (första sidan efter nivåval). Formatet för ett träningstillfälle per nivå. Välj en övning per moment; valen sparas i webbläsaren. |
| `foresla.html` | Skapa övning. Formulär med bara text; skissen (`img`) ritas senare. Förslaget sparas inte än. |
| `plan.js`    | Momenten till Upplägg per nivå (`gron`, `bla`, `rod`). `cat` = vilken kategori momentets övning väljs ur. |
| `meta.html`  | Vårt spel. Spelidén i delar, med text och skiss för varje del.                |
| `game.js`    | Texterna och skisserna till Vårt spel per nivå (`gron`, `bla`, `rod`), i samma format som övningarna, plus principerna per nivå (`PRINCIPLES`). |
| `nav.js`     | Navbaren som syns överst på alla sidor.                                       |
| `admin.html` | Admin. Visar varje övnings JSON bredvid skissen, med förklaring av fälten.  |
| `drills.js`  | Alla övningar. Det är den enda filen som ändras när du lägger till övningar. |
| `board.js`   | Ritar planen och animerar övningen. Används av båda sidorna.                 |

Allt ligger i den här mappen och fungerar utan internet (förutom typsnittet).

Mappen ligger i hemmappen (`~/personal/innebandy`). Lägg den inte i Dokument, Skrivbord, iCloud Drive
eller Dropbox: där hindrar macOS webbläsaren från att läsa `drills.js` och `board.js`, och sidan
blir tom. Vill du ha backup, kopiera `drills.js` dit då och då.

## Så funkar det

Varje övning är en beskrivning i text (JSON) av:

- **vilka som finns på planen**: spelare, målvakter och koner med position,
- **vad som händer, steg för steg**: löpningar, passningar, bolldriv och skott,
- **texten på bladet**: Vad?, Varför?, Hur?, Organisation, Anvisningar.

Sidan läser beskrivningen och ritar planen, pilarna och animationen själv. Därför ser alla
övningar likadana ut och är lätta att ändra.

## Admin

`admin.html` är till för att förstå formatet. Välj en övning i listan så ser du dess JSON bredvid
skissen, och en förklaring av varje fält. Klicka på planen för att se koordinaterna för en punkt.
Admin ändrar ingenting.

## Skapa en övning

Ge Claude övningen som text eller skärmbild och säg vilken kategori den hör till. Claude lägger
till den i `drills.js`. Ladda om `ovningar.html` för att se den.

## Formatet

### Planen och koordinater

Planen är 40 × 20 m och står upprätt.

- `x` = meter **nedåt** från övre kortsidan (0–40). Mittlinjen ligger på 20.
- `y` = meter **från vänster** långsida (0–20). Mitten är 10.
- Målet uppe ligger på x 2,35–3,5 och y 9,2–10,8. Målet nere ligger på x 36,5–37,65.

`"view": [0, 20]` visar övre halvan, `[0, 40]` hela planen och `[0, 13]` bara ytan närmast
övre målet.

### En övning

```json
{
  "name": "Anfall 2 mot 1",
  "category": "Station",
  "levels": ["bla"],
  "spelare": [4, 9],
  "view": [0, 22],
  "info": [
    ["Vad?", "Anfall 2 mot 1."],
    ["Anvisningar", "..."]
  ],
  "entities": {
    "A": { "type": "player", "team": "home", "x": 3.2, "y": 3 },
    "C": { "type": "player", "team": "away", "x": 1.5, "y": 12.2 },
    "G": { "type": "goalie", "team": "away", "x": 4.2, "y": 10 },
    "X1": { "type": "cone", "x": 16, "y": 4.5 }
  },
  "ball": { "holder": "C" },
  "labels": [{ "text": "A", "at": [4.6, 1.6] }],
  "balls": [
    [0.7, 3.7],
    [1.2, 4.1]
  ],
  "lines": [{ "from": [10, 0], "to": [10, 20] }],
  "steps": [
    {
      "text": "A springer upp längs sargen.",
      "actions": [{ "type": "run", "who": "A", "to": [14.5, 3] }]
    }
  ]
}
```

| Fält       | Betydelse                                                                                     |
| ---------- | --------------------------------------------------------------------------------------------- |
| `name`     | Övningens namn.                                                                               |
| `category` | `Uppvärmning`, `Fys`, `Station`, `Lekar/slutövning` eller `Småövning`.                                                         |
| `levels`   | Nivåerna övningen hör till: `"gron"`, `"bla"` och/eller `"rod"`, t.ex. `["gron", "bla"]`. |
| `view`     | Vilken del av planen som visas, som `[från x, till x]`.                                       |
| `info`     | Rubrik och text för bladet. Rader med tom text visas inte. Radbrytning skrivs `\n`.           |
| `entities` | Alla på planen. Namnet (`A`, `C`, `X1`) används i stegen men syns inte på planen.             |
| `ball`     | Var bollen börjar: `{ "holder": "C" }` hos en spelare, eller `{ "at": [x, y] }` som lös boll. |
| `labels`   | Text på planen, till exempel ledens bokstav.                                                  |
| `balls`    | Extra bollar som ligger still, till exempel en hög vid ett led.                               |
| `lines`    | Streckade linjer, till exempel zongränser.                                                    |
| `spelare`  | Rekommenderat antal spelare `[min, max]`, målvakter inräknade. `[min, null]` = alla kan vara med. Max är satt så att kön blir kort; fler spelare = kör övningen parallellt. |
| `tranare`  | Valfri. Antal tränare som har en roll i övningen (rullar in boll, tar, ropar). Utan = ingen tränare behövs. |
| `ovrigt`   | Valfri. `true` = övningen visas under Fler övningar i sin kategori. Utan = Tränarens val. Ordningen i listan följer ordningen i `drills.js`. |
| `steps`    | Stegen i ordning. Allt i samma steg sker samtidigt.                                           |
|            | Ett steg med `"actions": []` = bara uppställning, inga knappar eller steglista (t.ex. matcher). |

### Markörer

| `type` / `team`    | Ritas som                          |
| ------------------ | ---------------------------------- |
| `player` + `home`  | X (anfall)                         |
| `player` + `away`  | ring (försvar)                     |
| `player` + `third` | ✱ (tredje lag)                     |
| `player` + `queue` | X, en spelare som väntar i ett led |
| `goalie`           | MV                                 |
| `cone`             | vit triangel                       |

### Händelser i ett steg

| Händelse          | Exempel                                                            | Ritas som                  |
| ----------------- | ------------------------------------------------------------------ | -------------------------- |
| Löpning utan boll | `{ "type": "run", "who": "A", "to": [14, 7] }`                     | streckad pil               |
| Löpning i en båge | `{ "type": "run", "who": "A", "via": [19.5, 3.2], "to": [14, 7] }` | streckad båge              |
| Bolldriv          | `{ "type": "dribble", "who": "A", "to": [9.5, 8] }`                | vågig pil                  |
| Passning          | `{ "type": "pass", "from": "C", "to": "A" }`                       | heldragen pil              |
| Inrullad boll     | `{ "type": "pass", "to": "X3" }` (lös boll i `ball.at`)            | heldragen pil              |
| Skott             | `{ "type": "shot", "who": "B" }`                                   | tjock pil mot närmaste mål |

`via` är punkten som bågen dras mot, till exempel runt en kon. Skott kan få ett eget mål med
`"to": [x, y]`.

## Tips

- En passning eller ett skott får aldrig gå genom målburen. En spelare "bakom mål" står bredvid
  buren när hen passar.
- Rör sig mottagaren i samma steg som passningen, går passningen dit mottagaren är på väg.
- Skriv stegtexten med samma bokstäver som står vid leden på planen.
