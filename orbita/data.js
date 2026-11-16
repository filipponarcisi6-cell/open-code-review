// SPDX-License-Identifier: Apache-2.0
// Copyright 2026 alibaba/open-code-review Contributors

// Seed del censimento ORBITA (fase T-02). Ogni fatto qui sotto viene da una
// fonte pubblica linkata nel record: niente casi inventati. budgetMin e' una
// STIMA di fascia d'ingresso fatta da ORBITA per il test, non un listino.
// stato: "network" = nomi del network di partenza (doc ORBITA, slide 10);
//        "censimento" = realta' pubblica mappata, non ancora aderente.
window.ORBITA_VERIFICA = "16 novembre 2026";

window.ORBITA_ISOLE = [
  // ───────────── NETWORK DI PARTENZA ─────────────
  {
    id: "the-blink-fish", nome: "The Blink Fish", stato: "network",
    tipo: "Casa di produzione", citta: "Milano", zona: "Via Donizetti",
    dimensione: "indipendente", budgetMin: 20,
    pitch: "Collettivo creativo diventato casa di produzione: fashion film, commercial, documentari.",
    servizi: ["produzione", "editoria"], settori: ["moda", "cultura"],
    sito: "",
    casi: [
      {
        titolo: "Behind the Curtain", cliente: "Camera Nazionale della Moda Italiana", anno: "2020",
        sfida: "Raccontare la Milano Fashion Week da dietro le quinte, in un formato film.",
        cosa: "Fashion film per CNMI, dentro una collaborazione con la Camera Moda attiva dal 2016.",
        crediti: { Cliente: "CNMI", Produzione: "The Blink Fish" },
        servizi: ["produzione"], settori: ["moda"],
        fonte: "https://lafashionfestival.com/lafff-studio-archive/behind-the-curtain"
      },
      {
        titolo: "Stories for Sandro", cliente: "Progetto documentario", anno: "",
        sfida: "Portare un racconto documentario nei mercati e nei festival di settore.",
        cosa: "Produzione del documentario, presentato all'industry campus di Biografilm.",
        crediti: { Produzione: "The Blink Fish" },
        servizi: ["produzione", "editoria"], settori: ["cultura"],
        fonte: "https://biografilm.it/assets/Uploads/Stories-for-Sandro-project-focus.pdf"
      }
    ],
    note: "Fondatori citati dalle fonti: Giacomo Boeri e Matteo Grimaldi."
  },
  {
    id: "giga-design-studio", nome: "Giga Design Studio", stato: "network",
    tipo: "Studio di design", citta: "Milano", zona: "Via Tonale",
    dimensione: "boutique", budgetMin: 10,
    pitch: "Design, tecnologia e comunicazione strategica, con ricerca propria su estetica computazionale.",
    servizi: ["design", "brand", "digital", "eventi"], settori: ["moda", "design", "cultura", "lusso"],
    sito: "https://giga-design-studio.pages.dev/projects",
    casi: [
      {
        titolo: "Fornasetti Profumi, ASMR Rooms", cliente: "Fornasetti", anno: "",
        sfida: "Far sentire un profumo attraverso uno schermo.",
        cosa: "Esperienza web costruita sul video, premiata ai Webby nella categoria Craft (Best Use of Video or Moving Image).",
        crediti: { Cliente: "Fornasetti Profumi", "Design e sviluppo": "Giga Design Studio" },
        servizi: ["digital", "design"], settori: ["lusso", "design"],
        fonte: "https://www.webbyawards.com/crafted-with-code/fornasetti-profumi-asmr-rooms/"
      },
      {
        titolo: "Ways of Seeing", cliente: "cc-tapis", anno: "2025",
        sfida: "Un evento per la Milano Design Week che non fosse il solito showroom.",
        cosa: "Cura di una mostra collettiva per cc-tapis durante la Design Week 2025.",
        crediti: { Cliente: "cc-tapis", Curatela: "Giga Design Studio" },
        servizi: ["eventi", "design"], settori: ["design"],
        fonte: "https://gigadesignstudio.substack.com/p/11-ways-of-seeing"
      },
      {
        titolo: "Catalogo 3D zucchettidesign.it", cliente: "Zucchetti", anno: "",
        sfida: "Rendere navigabile un catalogo di componenti tecnici.",
        cosa: "Nuovo sito con catalogo dei componenti visualizzati in 3D.",
        crediti: { Cliente: "Zucchetti", "Design e sviluppo": "Giga Design Studio" },
        servizi: ["digital", "design"], settori: ["design"],
        fonte: "https://fontsinuse.com/uses/60888/zucchetti-website"
      }
    ]
  },
  {
    id: "pittogramma", nome: "Pittogramma", stato: "network",
    tipo: "Editoria e community", citta: "Milano", zona: "",
    dimensione: "boutique", budgetMin: 3,
    pitch: "Piattaforma e rivista sul graphic design italiano giovane: progetti, risorse, open call.",
    servizi: ["editoria", "design", "social"], settori: ["design", "cultura"],
    sito: "https://pittogramma.substack.com",
    casi: [
      {
        titolo: "Caratteri Inediti", cliente: "Pittogramma 01", anno: "",
        sfida: "Dare spazio ai type designer italiani under 30.",
        cosa: "Open call per caratteri inediti, con la rivista distribuita gratis a studi, librerie e scuole di design.",
        crediti: { Ideazione: "Mario Rizzotti e Santiago Villa" },
        servizi: ["editoria", "design"], settori: ["design"],
        fonte: "https://www.typeroom.eu/pittogramma-an-open-call-for-unpublished-typefaces-designed-by-italian-type-designers-under-30"
      }
    ],
    note: "Non e' uno studio: e' una piattaforma editoriale. Utile per scouting di giovani designer."
  },
  {
    id: "alkemy", nome: "Alkemy", stato: "network",
    tipo: "Gruppo digital", citta: "Milano", zona: "",
    dimensione: "network", budgetMin: 60,
    pitch: "Digital enabler: consulenza, dati, marketing, creativita', design e tecnologia nella stessa filiera.",
    servizi: ["strategia", "digital", "dati", "adv", "social", "design"], settori: ["finanza", "moda", "tech", "energia", "salute"],
    sito: "https://www.alkemy.com",
    casi: [],
    note: "Nel 2026 l'integrazione con Retex ha creato Alkemy Group (oltre 1.000 clienti dichiarati). Fonte: comunicati societari."
  },
  { id: "supersans", nome: "Supersans", stato: "network", tipo: "Studio di design", citta: "Milano", dimensione: "boutique", budgetMin: null, pitch: "", servizi: ["design", "brand"], settori: [], sito: "", casi: [], note: "Scheda da completare con l'isola: nessuna fonte pubblica trovata." },
  { id: "studio-sopa", nome: "Studio Sopa", stato: "network", tipo: "Studio", citta: "Milano", dimensione: "boutique", budgetMin: null, pitch: "", servizi: [], settori: [], sito: "", casi: [], note: "Scheda da completare con l'isola." },
  { id: "nautes", nome: "Nautes", stato: "network", tipo: "Consulenza dati e digitale", citta: "Milano", zona: "Foro Buonaparte", dimensione: "indipendente", budgetMin: null, pitch: "Soluzioni data-driven per le decisioni di business e progetti di ricerca e innovazione.", servizi: ["dati", "digital", "strategia"], settori: ["tech"], sito: "", casi: [], note: "Omonimia da verificare: i dati pubblici sono di Nautes S.p.A. (spin-off universitario, sedi Milano e Jesi)." },
  { id: "ewt", nome: "EWT", stato: "network", tipo: "Da definire", citta: "Milano", dimensione: "", budgetMin: null, pitch: "", servizi: [], settori: [], sito: "", casi: [], note: "Scheda da completare con l'isola." },
  { id: "analytics-art", nome: "Analytics Art", stato: "network", tipo: "Dati", citta: "", dimensione: "", budgetMin: null, pitch: "", servizi: ["dati"], settori: [], sito: "", casi: [], note: "Scheda da completare con l'isola." },
  { id: "the-jack-stupid", nome: "The Jack Stupid", stato: "network", tipo: "Agenzia creativa", citta: "", dimensione: "", budgetMin: null, pitch: "", servizi: [], settori: [], sito: "", casi: [], note: "Scheda da completare con l'isola: nessuna fonte pubblica trovata." },
  { id: "hypefy", nome: "Hypefy", stato: "network", tipo: "Piattaforma influencer", citta: "", dimensione: "indipendente", budgetMin: 5, pitch: "Piattaforma AI per campagne con creator Instagram e TikTok, anche white label per agenzie.", servizi: ["influencer", "social"], settori: ["moda", "food", "retail"], sito: "https://www.hypefy.ai", casi: [], note: "E' un software, non un'agenzia con sede a Milano." },
  { id: "green-media", nome: "Green Media House", stato: "network", tipo: "PR e comunicazione", citta: "Milano", dimensione: "", budgetMin: null, pitch: "", servizi: ["pr"], settori: [], sito: "", casi: [], note: "Nome da verificare: online risulta Green Media Lab (vedi scheda nel censimento)." },
  { id: "mattia-locatelli", nome: "Mattia Locatelli", stato: "network", tipo: "Freelance, design", citta: "Milano", dimensione: "freelance", budgetMin: null, pitch: "Designer del network di partenza.", servizi: ["design", "brand"], settori: [], sito: "", casi: [], note: "Professionista: portfolio e casi solo con consenso." },
  { id: "sibilla-villani", nome: "Sibilla Villani", stato: "network", tipo: "Freelance, copy", citta: "Milano", dimensione: "freelance", budgetMin: null, pitch: "Copywriter del network di partenza.", servizi: ["comunicazione", "editoria"], settori: [], sito: "", casi: [], note: "Professionista: portfolio e casi solo con consenso." },
  { id: "chiara-decorato", nome: "Chiara Decorato", stato: "network", tipo: "Freelance, client direction", citta: "Milano", dimensione: "freelance", budgetMin: null, pitch: "Client director e strategy del network di partenza.", servizi: ["strategia", "gestione"], settori: [], sito: "", casi: [], note: "Professionista: portfolio e casi solo con consenso." },

  // ───────────── CENSIMENTO PUBBLICO ─────────────
  {
    id: "leftloft", nome: "Leftloft", stato: "censimento",
    tipo: "Studio di branding", citta: "Milano", dimensione: "indipendente", budgetMin: 25,
    pitch: "Studio indipendente di branding e communication design, dal 1997.",
    servizi: ["brand", "design", "digital", "comunicazione"], settori: ["sport", "design", "cultura"],
    sito: "https://leftloft.com",
    casi: [
      {
        titolo: "Inter, 365 days of football", cliente: "FC Internazionale Milano", anno: "2014",
        sfida: "Partito come spinta alla vendita dei biglietti, diventato il rinnovo di tutta la comunicazione del club.",
        cosa: "Revisione dello stemma e dei sotto-brand, valori del club (milanese, internazionale, leggendario, sorprendente, leale), campagne ticketing rivolte ai milanesi e font custom Metric FC.",
        crediti: { Cliente: "FC Internazionale Milano", "Brand e design": "Leftloft", "Font Metric FC": "Klim Type Foundry, su direzione Leftloft" },
        servizi: ["brand", "design", "comunicazione"], settori: ["sport"],
        fonte: "https://leftloft.com/case-study/inter-365-days-of-football"
      },
      {
        titolo: "Fiera Milano, sito", cliente: "Fiera Milano", anno: "",
        sfida: "Un sito per un ecosistema di fiere e pubblici diversi.",
        cosa: "Progetto del sito web.",
        crediti: { Cliente: "Fiera Milano", Design: "Leftloft" },
        servizi: ["digital", "design"], settori: ["eventi-fiere"],
        fonte: "https://leftloft.com/case-study/fiera-milano-website"
      }
    ]
  },
  {
    id: "interbrand-milano", nome: "Interbrand Milano", stato: "censimento",
    tipo: "Consulenza di brand", citta: "Milano", dimensione: "network", budgetMin: 80,
    pitch: "Brand strategy e identita' per marchi che vogliono cambiare scala.",
    servizi: ["strategia", "brand", "design"], settori: ["sport", "lusso", "finanza"],
    sito: "https://interbrand.com",
    casi: [
      {
        titolo: "Juventus, oltre il calcio", cliente: "Juventus", anno: "2017",
        sfida: "Un club che voleva andare 'beyond football' e parlare a un pubblico globale.",
        cosa: "Nuova identita' guidata dall'ufficio di Milano: un simbolo da strisce, scudetto e J, applicato a tutti i touchpoint fisici e digitali da luglio 2017.",
        crediti: { Cliente: "Juventus", "Brand strategy e identita'": "Interbrand Milano" },
        servizi: ["brand", "strategia", "design"], settori: ["sport"],
        fonte: "https://www.designweek.co.uk/issues/16-22-january-2017/juventus-seeks/"
      }
    ]
  },
  {
    id: "robilant", nome: "Robilant", stato: "censimento",
    tipo: "Studio di branding", citta: "Milano", dimensione: "indipendente", budgetMin: 30,
    pitch: "Branding e packaging dal 1984, con una specializzazione storica in vino e drink.",
    servizi: ["brand", "design", "strategia"], settori: ["drink", "food", "design"],
    sito: "https://robilant.it/works",
    casi: [
      {
        titolo: "Campari, il genius loci", cliente: "Campari", anno: "",
        sfida: "Rinnovare un marchio iconico senza perdere il legame con Milano.",
        cosa: "Lavoro sull'identita' del brand, con un landmark milanese dentro la forma della bottiglia.",
        crediti: { Cliente: "Campari", Branding: "Robilant" },
        servizi: ["brand", "design"], settori: ["drink"],
        fonte: "https://creativepool.com/creativepool-editorial/news/intercepting-the-genius-loci-for-campari-behindthebrand.30200"
      },
      {
        titolo: "LaCimbali Supera", cliente: "LaCimbali", anno: "",
        sfida: "Lanciare una macchina professionale per il caffe'.",
        cosa: "Branding, video di lancio, sito e configuratore interattivo.",
        crediti: { Cliente: "LaCimbali", "Branding e lancio": "Robilant" },
        servizi: ["brand", "digital", "produzione"], settori: ["food", "design"],
        fonte: "https://robilant.it/works/lacimbali-supera"
      }
    ]
  },
  {
    id: "studio-fm", nome: "Studio FM milano", stato: "censimento",
    tipo: "Studio di design", citta: "Milano", dimensione: "indipendente", budgetMin: 15,
    pitch: "Graphic design dal 1996: identita', wayfinding, packaging, mostre, digitale.",
    servizi: ["design", "brand", "eventi", "digital"], settori: ["design", "moda", "cultura"],
    sito: "https://www.behance.net/StudioFMmilano",
    casi: [
      {
        titolo: "Pedrali, nuova identita'", cliente: "Pedrali", anno: "2021",
        sfida: "Dare un linguaggio unico a un marchio d'arredo in crescita.",
        cosa: "Definizione della nuova identita' visiva. Lo studio ha ricevuto un bronzo agli European Design Awards 2021.",
        crediti: { Cliente: "Pedrali", Design: "Studio FM milano" },
        servizi: ["brand", "design"], settori: ["design"],
        fonte: "https://awards.europeandesign.org/winner/243425"
      },
      {
        titolo: "Archive and the City", cliente: "Biennale Architettura", anno: "2025",
        sfida: "Un progetto speciale per la Biennale di Venezia.",
        cosa: "Partecipazione alla Biennale Architettura 2025 con un progetto speciale.",
        crediti: { Progetto: "Studio FM milano" },
        servizi: ["eventi", "design"], settori: ["cultura"],
        fonte: "https://asac.labiennale.org/persone/523931"
      }
    ]
  },
  {
    id: "we-are-social", nome: "We Are Social Italia", stato: "censimento",
    tipo: "Agenzia social", citta: "Milano", zona: "Corso San Gottardo", dimensione: "network", budgetMin: 40,
    pitch: "Una delle agenzie di social media piu' grandi in Italia, dentro un network internazionale.",
    servizi: ["social", "influencer", "adv", "comunicazione"], settori: ["moda", "food", "tech", "retail"],
    sito: "https://wearesocial.com/it/",
    casi: [], note: "Casi da raccogliere dal portfolio ufficiale."
  },
  {
    id: "caffeina", nome: "Caffeina", stato: "censimento",
    tipo: "Agenzia digitale", citta: "Milano / Parma", dimensione: "indipendente", budgetMin: 30,
    pitch: "Agenzia digitale indipendente: consulenza ed execution di marketing digitale.",
    servizi: ["digital", "social", "adv", "comunicazione"], settori: ["food", "drink", "lusso"],
    sito: "https://caffeina.com",
    casi: [
      {
        titolo: "Estathe', campagne digitali", cliente: "Estathe'", anno: "",
        sfida: "Tenere vivo un brand di largo consumo sui canali digitali.",
        cosa: "Campagne di marketing digitale per il brand.",
        crediti: { Cliente: "Estathe'", Digital: "Caffeina" },
        servizi: ["digital", "social"], settori: ["drink"],
        fonte: "https://www.designrush.com/agency/profile/caffeina"
      }
    ],
    note: "NC Digital Awards 2019: agenzia digitale indipendente dell'anno."
  },
  {
    id: "dlv-bbdo", nome: "DLV BBDO", stato: "censimento",
    tipo: "Agenzia pubblicitaria", citta: "Milano", dimensione: "network", budgetMin: 80,
    pitch: "Agenzia creativa del network BBDO in Italia.",
    servizi: ["adv", "comunicazione", "strategia", "social"], settori: ["energia", "food", "drink", "salute"],
    sito: "",
    casi: [
      {
        titolo: "Make Italy Green, The Floating Boat", cliente: "E.ON", anno: "2024",
        sfida: "Rendere visibile l'impegno ambientale di un'utility.",
        cosa: "Operazione outdoor premiata con un Leone d'oro (Outdoor) a Cannes Lions 2024. Firmata BBDO Italy: le fonti divergono sulla sede.",
        crediti: { Cliente: "E.ON", Agenzia: "BBDO Italy" },
        servizi: ["adv", "eventi"], settori: ["energia"],
        fonte: "https://lovethework.com/work-awards/campaigns/make-italy-green-the-floating-boat-1581505"
      },
      {
        titolo: "#thanks4thecoffee", cliente: "illy", anno: "2017",
        sfida: "Dare al caffe' un gesto di gratitudine da condividere.",
        cosa: "Campagna in concorso a Cannes Lions.",
        crediti: { Cliente: "illy", Agenzia: "DLV BBDO Milano" },
        servizi: ["adv", "social"], settori: ["food"],
        fonte: "https://lovethework.com/work-awards/campaigns/thanks4thecoffee-35101"
      }
    ]
  },
  {
    id: "ogilvy-italia", nome: "Ogilvy Italia", stato: "censimento",
    tipo: "Agenzia pubblicitaria", citta: "Milano", dimensione: "network", budgetMin: 80,
    pitch: "Best Agency agli ADCI Awards 2026.",
    servizi: ["adv", "comunicazione", "strategia", "social", "pr"], settori: ["retail", "drink", "moda", "salute", "finanza"],
    sito: "https://www.ogilvy.com/it",
    casi: [
      {
        titolo: "Bumerang, per non tornare indietro", cliente: "IKEA Italia", anno: "2026",
        sfida: "Un tema sociale raccontato da un brand di casa.",
        cosa: "Campagna premiata agli ADCI Awards 2026, l'anno in cui Ogilvy e' stata nominata Best Agency.",
        crediti: { Cliente: "IKEA Italia", Agenzia: "Ogilvy" },
        servizi: ["adv", "comunicazione"], settori: ["retail"],
        fonte: "https://www.italiaoggi.it/marketing-e-media/marketing/adci-awards-2026-ecco-i-vincitori-del-premi-alla-creativita-qngry3pm"
      },
      {
        titolo: "BeHer", cliente: "Peroni", anno: "2025",
        sfida: "Parlare di parita' di genere da una birra.",
        cosa: "Campagna uscita a maggio 2025.",
        crediti: { Cliente: "Peroni", Agenzia: "Ogilvy" },
        servizi: ["adv", "comunicazione"], settori: ["drink"],
        fonte: "https://www.ogilvy.com/it/ideas"
      }
    ]
  },
  {
    id: "armando-testa", nome: "Armando Testa", stato: "censimento",
    tipo: "Agenzia pubblicitaria", citta: "Torino / Milano", dimensione: "indipendente", budgetMin: 70,
    pitch: "La grande agenzia indipendente italiana: advertising, brand, contenuti.",
    servizi: ["adv", "comunicazione", "brand", "strategia", "produzione"], settori: ["food", "salute", "retail", "auto"],
    sito: "https://www.armandotesta.it",
    casi: [
      {
        titolo: "Io sono il Monzino", cliente: "Centro Cardiologico Monzino", anno: "2026",
        sfida: "Raccogliere il 5x1000 per un centro di ricerca milanese.",
        cosa: "Campagna 5x1000.",
        crediti: { Cliente: "Centro Cardiologico Monzino", Agenzia: "Armando Testa" },
        servizi: ["adv", "comunicazione"], settori: ["salute"],
        fonte: "https://www.armandotesta.it/io-sono-il-monzino-al-via-la-nuova-campagna-5x1000-firmata-da-armando-testa-per-il-centro-cardiologico-monzino/"
      },
      {
        titolo: "Mulino Bianco", cliente: "Barilla", anno: "2026",
        sfida: "Rinnovare la comunicazione di un marchio storico.",
        cosa: "Barilla affida all'agenzia la nuova comunicazione di Mulino Bianco (gennaio 2026).",
        crediti: { Cliente: "Barilla", Agenzia: "Armando Testa" },
        servizi: ["adv", "brand"], settori: ["food"],
        fonte: "https://www.armandotesta.it/barilla-sceglie-armando-testa-per-la-nuova-comunicazione-di-mulino-bianco/"
      }
    ]
  },
  {
    id: "indiana-production", nome: "Indiana Production", stato: "censimento",
    tipo: "Casa di produzione", citta: "Milano", dimensione: "indipendente", budgetMin: 60,
    pitch: "Casa di produzione indipendente per pubblicita', cinema e TV, dal 2005.",
    servizi: ["produzione"], settori: ["retail", "food", "pubblico", "auto"],
    sito: "https://indianaproduction.com/en/about",
    casi: [
      {
        titolo: "La pesca", cliente: "Esselunga", anno: "2023",
        sfida: "Un supermercato che vuole emozionare, non promuovere.",
        cosa: "Cortometraggio girato a Milano, regia di Rudi Rosenberg, su idea dell'agenzia Small. Ha acceso il dibattito nazionale.",
        crediti: { Cliente: "Esselunga", Agenzia: "Small", Regia: "Rudi Rosenberg", Produzione: "Indiana Production" },
        servizi: ["produzione"], settori: ["retail", "food"],
        fonte: "https://lbbonline.com/work/98491"
      },
      {
        titolo: "No Decision Without Us", cliente: "CoorDown", anno: "2025",
        sfida: "Campagna internazionale sui diritti delle persone con sindrome di Down.",
        cosa: "Produzione del film.",
        crediti: { Cliente: "CoorDown", Produzione: "Indiana Production" },
        servizi: ["produzione"], settori: ["pubblico"],
        fonte: "https://lbbonline.com/work/132056?edition=uk"
      }
    ]
  },
  {
    id: "the-family", nome: "The Family", stato: "censimento",
    tipo: "Casa di produzione", citta: "Milano", dimensione: "indipendente", budgetMin: 50,
    pitch: "Commercial, short film e branded content da Milano, dal 2002.",
    servizi: ["produzione"], settori: ["finanza", "drink", "auto"],
    sito: "https://lbbonline.com/profile/the-family-2",
    casi: [
      {
        titolo: "Allianz Ultra Salute", cliente: "Allianz", anno: "",
        sfida: "Raccontare in TV un prodotto assicurativo con i 'grandi gesti d'amore'.",
        cosa: "Produzione dello spot con Ogilvy.",
        crediti: { Cliente: "Allianz", Agenzia: "Ogilvy", Produzione: "The Family" },
        servizi: ["produzione"], settori: ["finanza"],
        fonte: "https://www.ogilvy.com/it/eng/ideas/ogilvy-ed-allianz-portano-tv-i-grandi-gesti-damore"
      },
      {
        titolo: "Spillo", cliente: "Birra Moretti", anno: "2017",
        sfida: "Uno spot che si guarda girando lo schermo.",
        cosa: "Produzione dello spot, regia di Vesa Manninen, agenzia Armando Testa.",
        crediti: { Cliente: "Birra Moretti", Agenzia: "Armando Testa", Regia: "Vesa Manninen", Produzione: "The Family" },
        servizi: ["produzione"], settori: ["drink"],
        fonte: "https://lbb.lbbonline.com/news/tilt-your-screen-for-this-zany-new-birra-moretti-ad-from-the-family"
      }
    ]
  },
  {
    id: "filmmaster", nome: "Filmmaster", stato: "censimento",
    tipo: "Eventi e cerimonie", citta: "Milano / Roma", dimensione: "indipendente", budgetMin: 150,
    pitch: "Grandi eventi e cerimonie: una delle poche societa' al mondo accreditate per le cerimonie olimpiche.",
    servizi: ["eventi", "produzione"], settori: ["sport", "cultura", "pubblico"],
    sito: "",
    casi: [
      {
        titolo: "Milano Cortina 2026, chiusura olimpica", cliente: "Fondazione Milano Cortina 2026", anno: "2026",
        sfida: "Chiudere i Giochi all'Arena di Verona.",
        cosa: "Cerimonia di chiusura olimpica (22 febbraio) e apertura paralimpica (6 marzo) all'Arena di Verona. Nel 2026 l'azienda compie 50 anni; aveva prodotto anche le quattro cerimonie di Torino 2006.",
        crediti: { Cliente: "Fondazione Milano Cortina 2026", Produzione: "Filmmaster" },
        servizi: ["eventi"], settori: ["sport"],
        fonte: "https://www.qualitytravel.it/filmmaster-celebra-i-50-anni-con-la-cerimonia-di-chiusura-olimpica-di-milano-cortina-2026/179576"
      }
    ]
  },
  {
    id: "balich-wonder-studio", nome: "Balich Wonder Studio", stato: "censimento",
    tipo: "Eventi e cerimonie", citta: "Italia", dimensione: "indipendente", budgetMin: 200,
    pitch: "Live show e cerimonie su scala globale, guidati da Marco Balich.",
    servizi: ["eventi", "produzione"], settori: ["sport", "cultura"],
    sito: "",
    casi: [
      {
        titolo: "Armonia, apertura Milano Cortina 2026", cliente: "Fondazione Milano Cortina 2026", anno: "2026",
        sfida: "Aprire le Olimpiadi invernali a San Siro, nel centenario dello stadio.",
        cosa: "Cerimonia di apertura del 6 febbraio 2026: palco LED a spirale, 61.000 spettatori, cerimonia diffusa.",
        crediti: { Cliente: "Fondazione Milano Cortina 2026", "Direzione creativa": "Marco Balich", Produzione: "Balich Wonder Studio" },
        servizi: ["eventi"], settori: ["sport"],
        fonte: "https://www.livedesignonline.com/news/winter-olympics-opening-ceremony-stage-designed-harmony"
      }
    ]
  },
  {
    id: "casta-diva", nome: "Casta Diva Group", stato: "censimento",
    tipo: "Eventi e contenuti", citta: "Milano", dimensione: "network", budgetMin: 80,
    pitch: "Gruppo quotato di comunicazione, eventi e produzione di contenuti (ricavi 2025: 134,9 milioni).",
    servizi: ["eventi", "produzione", "comunicazione"], settori: ["sport", "cultura", "auto", "finanza"],
    sito: "",
    casi: [
      {
        titolo: "Italian Souvenir", cliente: "Fondazione Milano Cortina 2026", anno: "2026",
        sfida: "La chiusura delle Paralimpiadi invernali a Cortina.",
        cosa: "Cerimonia di chiusura paralimpica del 15 marzo 2026, firmata dalla controllata G2 Eventi.",
        crediti: { Cliente: "Fondazione Milano Cortina 2026", Produzione: "G2 Eventi, Casta Diva Group" },
        servizi: ["eventi"], settori: ["sport"],
        fonte: "https://www.websim.it/azioni/small-mid-cap/notizie/casta-diva-successo-per-la-cerimonia-di-chiusura-delle-paralimpiadi/"
      }
    ]
  },
  {
    id: "doxa", nome: "BVA Doxa", stato: "censimento",
    tipo: "Istituto di ricerca", citta: "Milano", dimensione: "network", budgetMin: 15,
    pitch: "Ricerche di mercato, sondaggi e ricerca sociale dal 1946. Oggi nel perimetro Ipsos.",
    servizi: ["ricerca", "audit", "dati"], settori: ["retail", "finanza", "pubblico", "immobiliare"],
    sito: "https://www.ipsos.com/it-it",
    casi: [
      {
        titolo: "Osservatorio casa Milano", cliente: "FIMAA Milano", anno: "2022",
        sfida: "Capire come cambia la domanda di casa a Milano.",
        cosa: "Indagine annuale sul mercato immobiliare milanese in partnership con FIMAA.",
        crediti: { Cliente: "FIMAA Milano", Ricerca: "BVA Doxa" },
        servizi: ["ricerca"], settori: ["immobiliare"],
        fonte: "https://www.fimaamilano.it/public/filetiny/Eventi/comunicatostampaevento19.10.22.pdf"
      }
    ],
    note: "Servizi citati: customer experience, NPS, mystery shopping, etnografia. Societa' Benefit dal 2022."
  },
  {
    id: "sec-newgate", nome: "SEC Newgate Italia", stato: "censimento",
    tipo: "PR e public affairs", citta: "Milano", zona: "Via Aporti", dimensione: "network", budgetMin: 30,
    pitch: "Relazioni pubbliche, public affairs, comunicazione corporate e finanziaria, crisi.",
    servizi: ["pr", "publicaffairs", "comunicazione", "strategia"], settori: ["finanza", "energia", "pubblico"],
    sito: "",
    casi: [],
    note: "Nata a Milano nel 1989 come SEC. Societa' Benefit. Iscritta al registro dei rappresentanti di interessi della Camera."
  },
  {
    id: "community-group", nome: "Community Group", stato: "censimento",
    tipo: "PR e reputazione", citta: "Milano", dimensione: "indipendente", budgetMin: 25,
    pitch: "Gestione della reputazione a 360 gradi: comunicazione strategica, digitale, media training, public affairs.",
    servizi: ["pr", "publicaffairs", "comunicazione", "ricerca"], settori: ["finanza", "salute", "energia"],
    sito: "",
    casi: [],
    note: "Partnership con FTI Consulting per progetti internazionali. Nel 2018 fonda Reputation Science con Reputation Manager."
  },
  {
    id: "green-media-lab", nome: "Green Media Lab", stato: "censimento",
    tipo: "PR e comunicazione", citta: "Milano", zona: "Via Tertulliano", dimensione: "boutique", budgetMin: 10,
    pitch: "B Corp di media relations, digital e consulenza ESG per outdoor, sport e lifestyle.",
    servizi: ["pr", "social", "comunicazione", "strategia"], settori: ["sport", "moda", "energia"],
    sito: "https://www.bcorporation.net/en-us/find-a-b-corp/company/greenmedialab-brand-di-sportmaker-srl",
    casi: [
      {
        titolo: "The Sostainables", cliente: "Progetto proprietario", anno: "2023",
        sfida: "Far emergere giovani imprenditori e creativi sulla sostenibilita'.",
        cosa: "Contest lanciato nella sede di via Tertulliano a Milano.",
        crediti: { Ideazione: "Green Media Lab" },
        servizi: ["eventi", "pr"], settori: ["energia"],
        fonte: "https://www.renewablematter.eu/green-media-lab-studios-milano-nasce-hub-creativo-esg"
      }
    ],
    note: "Potrebbe essere la 'Green Media House' del network: da verificare."
  },
  {
    id: "bip", nome: "Bip", stato: "censimento",
    tipo: "Consulenza", citta: "Milano", zona: "San Babila", dimensione: "network", budgetMin: 80,
    pitch: "Consulenza di business transformation: strategia, dati, design thinking, cybersecurity.",
    servizi: ["strategia", "gestione", "dati", "digital", "audit"], settori: ["energia", "finanza", "tech"],
    sito: "https://www.bip-group.com",
    casi: [], note: "Ha acquisito, tra le altre, Sketchin (design thinking e UX)."
  },
  {
    id: "le-balene", nome: "Le Balene", stato: "censimento",
    tipo: "Agenzia creativa", citta: "Milano", zona: "Via Alessandria", dimensione: "boutique", budgetMin: 12,
    pitch: "Agenzia fondata nel 1980 da Enzo Baldoni: uffici, studio di shooting, montaggio e spazio eventi nella stessa sede.",
    servizi: ["comunicazione", "produzione", "eventi", "adv"], settori: [],
    sito: "https://www.behance.net/LeBalene",
    casi: [], note: "Casi da raccogliere dal portfolio."
  }
];
