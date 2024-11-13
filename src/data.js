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
      photo: "/NextGen.png",
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
      titolo: "BollBnb",
      photo: "/BollBnb.mp4",
      photoDescription: "photo of chat clone",
      teamOrg: "Questo progetto mi ha messo alla prova e mi ha permesso di imparare moltissimo. Si trattava di un lavoro di gruppo, dove ciascuno si è occupato di una parte specifica per raggiungere l’obiettivo finale. Io mi sono concentrato principalmente sulla creazione dello scaffolding e sull'integrazione di Vue con Laravel. Ho deciso di inserire Vue all'interno della cartella resources di Laravel, modificando alcune impostazioni di base e montando l’app tramite una pagina Blade. Successivamente, ho integrato Sanctum e Fortify per gestire la registrazione e l’autenticazione degli utenti. Mi sono anche occupato di creare le chiamate API verso l'endpoint di TomTom per la ricerca degli indirizzi, implementando una tendina che appariva solo al termine della scrittura, con suggerimenti sui luoghi cercati. Ho realizzato i filtri della pagina di ricerca, il layout e lo stile della stessa. Inoltre, ho integrato il sistema di pagamenti tramite Braintree, simulando il pagamento da parte di uno sponsor per gli appartamenti. Infine, mi sono occupato della gestione e creazione dei dati per le statistiche visualizzabili dagli utenti tramite Chart.js. Inoltre, grazie alla mia propensione alla risoluzione dei problemi, sono stato incaricato di affrontare e risolvere i bug più complessi che si presentavano durante lo sviluppo.",

      descrizione: "Si tratta di un progetto Fullstack sviluppato in gruppo, che riproduce una piattaforma di prenotazione simile a quelle per BnB, ma focalizzata su appartamenti in Italia. Il progetto utilizza Laravel per la gestione del database e Vue per le chiamate API. La piattaforma è completa e include una Home page, accessibile anche agli utenti non registrati, dove è possibile visualizzare gli appartamenti disponibili. È presente una pagina di ricerca che mostra i risultati con due colonne: una per gli appartamenti e una per la geolocalizzazione. Gli utenti registrati hanno accesso a una dashboard dove possono gestire i propri appartamenti, visualizzarli o eliminarli. Gli appartamenti sono comunque mantenuti nel sito per il calcolo delle statistiche globali. Inoltre, nella sezione di inserimento appartamenti, gli utenti possono visualizzare in anteprima i propri immobili, leggere i messaggi ricevuti e sponsorizzare il loro appartamento per farlo apparire in cima ai risultati.",

      solution: "Questo progetto mi ha messo duramente alla prova e mi ha permesso di crescere molto. La prima sfida è stata integrare Vue con Laravel e gestire l'autenticazione. Con il mio background in Laravel, avevo già esperienza con Breeze, ma non mi convinceva come soluzione. Ho quindi cercato la via migliore e ho deciso di integrare Vue direttamente in Laravel, utilizzando Sanctum e Fortify per gestire l'autenticazione. Ho passato notti a capire come far funzionare tutto, ma alla fine sono riuscito a far comunicare Laravel e Vue tramite rotte API fornite da Fortify, ottenendo una grande soddisfazione quando finalmente ha funzionato. La seconda grande difficoltà è stata l'integrazione dei pagamenti con Braintree. La documentazione mi sembrava complessa, ma dopo aver guardato video e fatto ricerche, sono riuscito a comprenderne il funzionamento. In sintesi, tramite una chiamata API di Vue, Laravel comunica con Braintree, ottiene un token che passa a Vue, che lo utilizza per aprire un modulo di pagamento. Dopo l'inserimento dei dati della carta, Vue invia un token di verifica a Braintree, che restituisce un altro token se i dati sono corretti. Questo token viene passato a Laravel per completare il pagamento. È stato complicato da implementare in due giorni, ma sono felice di aver superato la sfida.",
      tipo: ["Front-End"],
      tecnologie: ["Vue", 'Laravel'],
      isVisible: false,
      link: "https://tgboolzclone.netlify.app/",
      linkGit: "https://github.com/TommasoGalistu/BnB-FullStack-vue-laravel",
    },
    {
      id: 3,
      titolo: "Chat Clone",
      photo: "/Chat Clone.png",
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
      id: 4,
      titolo: "Netflix",
      photo: "/Netflix.png",
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
      id: 5,
      titolo: "Slider",
      photo: "/Slider.png",
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
      id: 6,
      titolo: "Dashboard",
      photo: "/Dashboard.png",
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
      id: 7,
      titolo: "Spotify Web",
      photo: "/Spotify Web.png",
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
