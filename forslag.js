// Förslag på övningar. TILLFÄLLIG MOCK tills Firestore är uppsatt:
// exempelförslag + det du skickar själv (sparas bara i din webbläsare).
// Samma gränssnitt byts sedan mot Firestore-anrop.
(function () {
  const KEY = "forslag-mock";
  const A = (t) => [["Anvisningar", t]];
  const SAMPLES = [
    { name: "Fyrfärgsjakten", levels: ["gron"], info: A("Koner i fyra färger utspridda. Tränaren ropar en färg och alla dribblar till en kon i den färgen."), status: "mottagen", kommentar: "", skapad: "2026-11-08" },
    { name: "Passningsfyrkant med två bollar", levels: ["bla", "rod"], info: A("Fyra spelare i en fyrkant passar medsols. Efter en stund kommer boll nummer två in."), status: "mottagen", kommentar: "", skapad: "2026-11-02" },
    { name: "Skott efter vändning", levels: ["rod"], info: A("Spelaren tar emot med ryggen mot mål, vänder och skjuter direkt."), status: "godkand", kommentar: "Inlagd som Station på röd nivå.", skapad: "2026-10-27" },
    { name: "Dribbla runt koner", levels: ["gron", "bla"], info: A("Dribbla sicksack mellan koner och skjut på mål."), status: "avbojd", kommentar: "Finns redan i banken.", skapad: "2026-10-20" },
  ];
  const own = () => {
    try {
      return JSON.parse(localStorage.getItem(KEY)) || [];
    } catch {
      return [];
    }
  };
  window.Forslag = {
    STATUS: { mottagen: "Mottagen", godkand: "Godkänd", avbojd: "Avböjd" },
    async add(drill) {
      const entry = { ...drill, status: "mottagen", kommentar: "", skapad: new Date().toISOString().slice(0, 10) };
      try {
        localStorage.setItem(KEY, JSON.stringify([...own(), entry]));
      } catch {}
      return entry;
    },
    async list() {
      return [...own(), ...SAMPLES].sort((a, b) => b.skapad.localeCompare(a.skapad));
    },
  };
})();
