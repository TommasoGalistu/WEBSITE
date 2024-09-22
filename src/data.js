import { reactive } from "vue";

export const data = reactive({
  styleHeader: {},
  styleMenu: {},
  isActiveHeader: false,
  containerMain: {},
  cardProject: [
    {
      id: 1,
      titolo: "NextGen",
      photo: "/Pj1.png",
      photoDescription: "photo of nexgen project",
      teamOrg:
        "Il mio ruolo è stato quello di team leader, ho inizializzato il progetto e ho creato le rotte per permettere a tutto il team di cominciare il lavoro. Oltre alle rotte ho creato e personalizzato tutta la pagina Home con le relative animazioni custom, ho creato e finito l'header, il footer e molte delle funzioni che gestiscono la terza pagina shop. E' stato un lavoro entusiasmante poichè mi ha permesso di mettermi alla prova con la risoluzione dei problemi del progetto.",
      descrizione:
        "Questo è un progetto che riproduce una pagina front-end di un'azienda che propone dei servizi a dei clienti. La pagina è stata totalmente gestita dal framework Vue di JavaScript",
      solution:
        "Ho riscontrato diversi problemi, soprattutto nelle animazioni complesse della home page, in particolare il movimento dei quadrati. Alcuni colleghi mi avevano suggerito di utilizzare una registrazione dello schermo come sfondo, ma non mi piaceva l'idea poiché avrebbe limitato la mia capacità di risolvere il problema. Ho scelto di risolverlo passo dopo passo, animando un quadrato alla volta e affinando gradualmente il controllo sugli spostamenti, fino a ottenere il risultato desiderato. Questa metodologia mi ha permesso di migliorare la mia comprensione delle animazioni in CSS e Vue.",
      tipo: ["Front-End"],
      tecnologie: ["Html", "Css", "Js", "Vue", "Vite"],
      isVisible: false,
      link: "https://projectgalistu.netlify.app/",
      linkGit: "https://github.com/TommasoGalistu/proj-html-vuejs",
    },
    {
      id: 2,
      titolo: "Chat Clone",
      photo: "/Pj2.png",
      photoDescription: "photo of chat clone",
      teamOrg:
        "Questo progetto è stato eseguito interamente da solo. Mi sono occupato della progettazione, dello sviluppo e della risoluzione dei problemi relativi alla gestione delle chat e delle interazioni utente. L'assenza di dati persistenti ha reso il lavoro un'interessante sfida di simulazione di interazioni reali.",
      descrizione:
        "Un progetto personale riguardante alcune famose funzionalità di WhatsApp. La chat è stata creata con le Composition API di Vue. Nel progetto ho riprodotto il layout di WhatsApp con l'interfaccia utente e tutte le chat cliccabili. I dati non sono persistenti e le risposte automatiche sono casuali. È possibile personalizzare i colori della chat, cliccare le chat, eliminare i messaggi e scrivere nella chat che, in maniera simulata, risponde con testi casuali.",
      solution:
        "Uno dei problemi principali è stato gestire la reattività delle risposte automatiche e la personalizzazione della chat. Non potendo persistere i dati, ho dovuto trovare un modo efficiente per simulare le interazioni senza complicare troppo la logica di gestione degli stati. Ho risolto il problema implementando un sistema di risposte casuali che cambia dinamicamente con ogni messaggio, mantenendo il codice semplice e gestibile.",
      tipo: ["Front-End"],
      tecnologie: ["Html", "Css", "Js", "Vue", "Composition API"],
      isVisible: false,
      link: "https://tgboolzclone.netlify.app/",
      linkGit: "https://github.com/TommasoGalistu/vue-boolzapp",
    },
    {
      id: 3,
      titolo: "Netflix",
      photo: "/Pj3.png",
      photoDescription: "photo of netflix clone",
      teamOrg:
        "Ho realizzato questo progetto individualmente, occupandomi dell'integrazione dell'API per il recupero dei dati sui film e della gestione della UI. La sfida principale è stata gestire le risposte incomplete dell'API in modo da garantire un'esperienza utente coerente.",
      descrizione:
        "Un progetto personale che utilizza una famosa API per ottenere dati sui film. Il progetto riproduce la funzionalità di ricerca dei film. Le card riprodotte dopo la richiesta sono interattive e mostrano, nella parte frontale, la copertina e il nome del film. Nel retro della card ci sono informazioni aggiuntive come la descrizione del film, la nazionalità (con bandiera) e il rating, se disponibile.",
      solution:
        "L'integrazione dell'API è stata la parte più impegnativa, poiché le risposte non erano sempre coerenti. Per esempio, alcuni film non avevano informazioni complete, il che richiedeva una gestione degli stati per evitare che le card si rompessero o mostrassero informazioni incomplete. Ho implementato un fallback per le informazioni mancanti e reso le card più flessibili per gestire questi casi.",
      tipo: ["Front-End"],
      tecnologie: ["Html", "Css", "Js", "Vue", "Option API", "Vite", "APIs"],
      isVisible: false,
      link: "https://tgboolfix.netlify.app/",
      linkGit: "https://github.com/TommasoGalistu/vite-boolflix",
    },
    {
      id: 4,
      titolo: "Slider",
      photo: "/Pj4.png",
      photoDescription: "photo of slider superhero",
      teamOrg:
        "Ho sviluppato questo progetto da solo, occupandomi della creazione dello slider e della gestione delle interazioni utente. L'obiettivo principale era rendere fluide le transizioni e garantire un'esperienza interattiva senza interruzioni.",
      descrizione:
        "Un progetto personale di uno slider interattivo. Lo slider parte con una rotazione automatica delle foto, che si interrompe quando l'utente passa il mouse sopra lo slider o interagisce con i pulsanti. I pulsanti sulla destra permettono all'utente di avanzare, tornare indietro o invertire la direzione dell'animazione.",
      solution:
        "Il principale problema era garantire che l'interazione dell'utente interrompesse l'animazione senza glitch. Ho dovuto implementare un sistema che potesse interrompere e riprendere l'animazione in modo fluido. Ho risolto utilizzando una combinazione di `setInterval` per il movimento automatico e `clearInterval` per interrompere l'animazione quando necessario, rendendo l'interazione più reattiva.",
      tipo: ["Front-End"],
      tecnologie: ["Html", "Css", "Js", "Vue Cdn"],
      isVisible: false,
      link: "https://tgslidervue.netlify.app",
      linkGit: "https://github.com/TommasoGalistu/vue-slider",
    },
    {
      id: 5,
      titolo: "Dashboard",
      photo: "/Pj5.png",
      photoDescription: "photo of dashboard",
      teamOrg:
        "Questo progetto è stato sviluppato da solo con l'obiettivo di creare una dashboard responsive utilizzando Bootstrap. Mi sono occupato di tutta la progettazione e sviluppo, concentrandomi sulla disposizione dei componenti e sulla reattività.",
      descrizione:
        "Un progetto personale che riproduce una dashboard semplice e reattiva. La pagina simula una dashboard aziendale che gestisce varie classi e funzionalità. La dashboard è stata creata con il framework Bootstrap, che semplifica la reattività e riduce la complessità del codice.",
      solution:
        "L'implementazione della reattività con Bootstrap è stata in generale fluida, ma ho incontrato problemi con la disposizione dei widget in modalità mobile. Ho risolto sfruttando le utility di Bootstrap per la gestione delle colonne e utilizzando media queries per regolare la visualizzazione dei componenti più complessi nei diversi breakpoint.",
      tipo: ["Front-End"],
      tecnologie: ["Html", "Css", "Bootstrap", "Js"],
      isVisible: false,
      link: "https://tgdashboardboot.netlify.app",
      linkGit: "https://github.com/TommasoGalistu/html-css-bootstrap-dashboard",
    },
    {
      id: 6,
      titolo: "Spotify Web",
      photo: "/Pj6.png",
      photoDescription: "photo of spotify",
      teamOrg:
        "Questo progetto è stato interamente realizzato da solo come primo approccio allo sviluppo front-end. Mi sono occupato della creazione del layout responsive, cercando di riprodurre l'interfaccia complessa di Spotify.",
      descrizione:
        "Uno dei miei primi progetti personali che riproduce solamente il layout di Spotify. Il progetto è responsive e riproduce l'interfaccia utente con tutte le funzionalità per usare la WebApp.",
      solution:
        "Poiché si trattava di uno dei miei primi progetti, ho riscontrato alcune difficoltà nel gestire il layout responsivo, specialmente per l'interfaccia utente complessa di Spotify. Ho imparato molto lavorando con il layout a griglia e utilizzando media queries per garantire che l'interfaccia funzionasse correttamente su dispositivi di diverse dimensioni.",
      tipo: ["Front-End"],
      tecnologie: ["Html", "Css", "Responsive"],
      isVisible: false,
      link: "https://tgspotifyweb.netlify.app",
      linkGit: "https://github.com/TommasoGalistu/html-css-spotifyweb",
    },
  ],
});
