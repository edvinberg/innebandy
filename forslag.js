// Förslag på övningar. TILLFÄLLIG MOCK tills Firestore är uppsatt:
// bara hårdkodade exempelförslag, inget som skrivs in sparas.
// Samma gränssnitt byts sedan mot Firestore-anrop.
(function () {
  const A = (t) => [["Anvisningar", t]];
  const SAMPLES = [
    { name: "Passningsfyrkant med två bollar", levels: ["bla", "rod"], info: A("Fyra spelare i en fyrkant passar medsols. Efter en stund kommer boll nummer två in."), status: "mottagen", kommentar: "", skapad: "2026-11-02" },
    { name: "Skott efter vändning", levels: ["rod"], info: A("Spelaren tar emot med ryggen mot mål, vänder och skjuter direkt."), status: "godkand", kommentar: "Inlagd som Station på röd nivå.", skapad: "2026-10-27" },
    { name: "Dribbla runt koner", levels: ["gron", "bla"], info: A("Dribbla sicksack mellan koner och skjut på mål."), status: "avbojd", kommentar: "Finns redan i banken.", skapad: "2026-10-20" },
  ];
  window.Forslag = {
    STATUS: { mottagen: "Mottagen", godkand: "Godkänd", avbojd: "Avböjd" },
    // Sparar ingenting än.
    async add() {},
    async list() {
      return SAMPLES;
    },
  };
})();
