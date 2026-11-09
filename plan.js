// Upplägg per nivå ("gron", "bla", "rod"): formatet för ett träningstillfälle.
// "cat" = momentet får en övning vald ur den kategorin (se upplagg.html).
window.PLAN = {
  gron: {
    meta: "60 min · minst 3 ledare",
    rows: [
      {
        moment: "Upprop",
        text: "Hälsa välkommen, ta närvaro. Starta samlingen, skapa fokus.",
        tid: "5 min",
      },
      { moment: "Uppvärmning", text: "Lekfull aktivering.", tid: "5 min", cat: "Uppvärmning" },
      {
        moment: "Stationer (parallellt)",
        text: "Bryt efter 8 min för vatten.",
        tid: "30 min (3×10 min)",
        sub: [
          { moment: "Station 1", tid: "8+2 min", cat: "Station" },
          { moment: "Station 2", tid: "8+2 min", cat: "Station" },
          { moment: "Station 3", tid: "8+2 min", cat: "Station" },
        ],
      },
      {
        moment: "Lekfull avslutning",
        text: "Rörelse och lagglädje.",
        tid: "8 min",
        cat: "Lekar/slutövning",
      },
      {
        moment: "Ring med ramsa",
        text: "Lagglädje, utvärdering och sammanhållning.",
      },
    ],
  },
  bla: {
    meta: "",
    rows: [
      { moment: "Upprop", tid: "5 min" },
      { moment: "Uppvärmning", text: "Alla.", tid: "10 min", cat: "Uppvärmning" },
      {
        moment: "Stationsövningar",
        text: "2 min vattenpaus.",
        tid: "3×7 min",
        sub: [
          { moment: "Grupp 1", text: "Halvplan.", cat: "Station" },
          { moment: "Grupp 2", text: "Halvplan.", cat: "Station" },
          { moment: "Grupp 3", text: "Fys på sidan.", cat: "Fys" },
        ],
      },
      {
        moment: "Match 4 mot 4",
        text: "2 min vattenpaus. Tredje gruppen kör teknik på sidan.",
        tid: "3×6 min",
      },
      { moment: "Stafett/Avslutning", cat: "Lekar/slutövning" },
    ],
  },
  rod: {
    meta: "",
    rows: [
      { moment: "Inledande samling", text: "Kort genomgång av passets tema och syfte." },
      {
        moment: "Förberedelse",
        text: "Uppvärmning med atletiska moment, gärna ett kort styrkemoment och skadeförebyggande träning.",
        cat: "Uppvärmning",
      },
      {
        moment: "Färdighetsövningar",
        text: "Tekniska moment i mindre grupper.",
        sub: [
          { moment: "Grupp 1", cat: "Station" },
          { moment: "Grupp 2", cat: "Station" },
          { moment: "Grupp 3", cat: "Station" },
        ],
      },
      {
        moment: "Spel",
        text: "Variera antal spelare, planstorlek och förutsättningar, t.ex. fler mål eller felvända mål.",
        cat: "Station",
      },
      {
        moment: "Avslutande samling",
        text: "Utanför planen: vad har vi tränat på idag, och vad tyckte ni om passet?",
      },
    ],
  },
};
