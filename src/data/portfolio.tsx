import type { NavItem, PortfolioContent } from "@/types/portfolio";
import {
  Code2,
  Cpu,
  Globe,
  LucideGithub,
  LucideLinkedin,
  MonitorSmartphone,
  ShoppingCart,
  Rocket,
  Users,
  Zap,
} from "lucide-react";

export const navItems: NavItem[] = [
  { label: "HOME", href: "#home" },
  { label: "CHI SONO", href: "#about" },
  { label: "ESPERIENZE", href: "#experiences" },
  { label: "LA MIA STORIA", href: "#story" },
];

export const portfolioContent: PortfolioContent = {
  brand: "<AntonioNesta />",
  hero: {
    greeting: "ciao, mi chiamo",
    firstName: "Antonio",
    lastName: "Nesta",
    roles: ["Team Leader Frontend", "Software Engineer", "Tech Enthusiast"],
    summary:
      "Costruisco frontend solidi, veloci e scalabili.",
    ctaPrimary: { label: "Scopri Chi Sono", href: "#about" },
    ctaSecondary: { label: "Vedi Esperienze", href: "#experiences" },
    socialLinks: [
      {
        label: "GitHub",
        href: "https://github.com/antonionesta",
        icon: <LucideGithub className="size-4" />,
      },
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/antonio-nesta-an94",
        icon: <LucideLinkedin className="size-4" />,
      },
    ],
  },
  about: {
    title: "About Me",
    paragraphs: [
      "Appassionato di informatica e tecnologia in generale, attualmente mi occupo dello sviluppo di web app. Mi ritengo principalmente uno sviluppatore frontend, dato che e l'ambito in cui sono maggiormente formato, ma sviluppo anche lato backend.",
      "Attualmente utilizzo quotidianamente i framework Angular e Spring Boot. Lato frontend, gestire applicativi enterprise di una certa dimensione e un compito abbastanza arduo, per questo non riesco a fare a meno di Tanstack Query, uno state manager asincrono solido e performante.",
      "Ho avuto modo di conoscere anche altre librerie e framework, sia per lavoro che per progetti personali: React, Next.js, StencilJs e molti altri. Ho anche scritto una piccola app con Flutter."
    ],
    skills: [
      {
        icon: (
          <Code2 className="h-6 w-6 text-primary transition-all group-hover:neon-text" />
        ),
        label: "Frontend",
        desc: "Angular, React, NextJs, Tailwind",
      },
      {
        icon: (
          <Cpu className="h-6 w-6 text-primary transition-all group-hover:neon-text" />
        ),
        label: "Backend",
        desc: "Express, Fastify, Spring Boot",
      },
      {
        icon: (
          <Globe className="h-6 w-6 text-primary transition-all group-hover:neon-text" />
        ),
        label: "Cloud",
        desc: "Docker",
      },
      {
        icon: (
          <Zap className="h-6 w-6 text-primary transition-all group-hover:neon-text" />
        ),
        label: "DevOps",
        desc: "CI/CD",
      },
    ],
  },
  experiences: [
    {
      period: "Luglio 2018 - Oggi",
      role: "Fronted Team Leader",
      company: "GRAF Industries S.p.A.",
      summary: "Sviluppo applicativo enterprise TAG Application.",
      highlights: [
        "Technical leadership del team frontend, mentoring degli sviluppatori e code review.",
        "Definizione di standard di sviluppo e best practice.",
        "Collaborazione cross-team con backend, UX/UI e stakeholder per la progettazione delle soluzioni.",
        "Supporto alla pianificazione delle attività e alla gestione delle priorità di sviluppo.",
        "Analisi e sviluppo di applicativi web con stack Angular / Spring Boot.",
        "Gestione dello stato applicativo e data fetching con TanStack Query.",
        "Implementazione di test unitari ed e2e con Vitest."
      ],
      stack: ["Angular", "Spring Boot", "Tanstack Query", "Vitest"],
    },
    {
      period: "Giugno 2016",
      role: "E-Commerce Manager",
      company: "Mazzeo S.R.L.",
      summary: "Responsabile della gestione operativa e commerciale del canale e-commerce.",
      highlights: [
        "Gestione delle relazioni con i clienti online e del customer care pre/post vendita.",
        "Pubblicazione e ottimizzazione del catalogo prodotti con focus su qualità delle schede.",
        "Supervisione del ciclo ordine: acquisizione, evasione e coordinamento con il magazzino.",
        "Amministrazione dei marketplace Amazon ed eBay.",
        "Gestione dei contenuti e della struttura del sito tramite OpenCart, Infinity Portal e Magento.",
        "Supporto alle attività marketing con monitoraggio campagne in Google Analytics e AdWords.",
      ],
      stack: ["Magento", "OpenCart", "Infinity Portal", "Amazon", "eBay", "Google Analytics", "AdWords"],
    },
    {
      period: "Settembre 2015",
      role: "IT Support Specialist",
      company: "NetMassa.it",
      summary: "Assistenza tecnica ai clienti finali su dispositivi, software e reti domestiche.",
      highlights: [
        "Troubleshooting e risoluzione di problemi hardware/software su PC e periferiche personali.",
        "Manutenzione preventiva e correttiva di dispositivi e componenti IT domestici.",
        "Installazione e configurazione di hardware, software e cablaggi in contesti residenziali.",
        "Configurazione, ottimizzazione e supporto tecnico su smartphone e tablet (Android/iOS).",
        "Diagnostica avanzata con strumenti di test per l'analisi delle cause radice.",
        "Configurazione e amministrazione di reti LAN/Wi-Fi domestiche per utenti privati.",
      ],
      stack: ["Diagnostica", "Troubleshooting", "Networking LAN", "Smartphone", "Tablet"],
    },
  ],
  story: [
    {
      icon: <MonitorSmartphone className="h-6 w-6 text-primary" />,
      title: "Dalla passione alla pratica",
      text: "Ho iniziato aiutando clienti finali con problemi tecnici quotidiani: PC, reti domestiche e diagnostica. E stata la fase in cui ho imparato metodo, precisione e attenzione alle persone.",
    },
    {
      icon: <ShoppingCart className="h-6 w-6 text-primary" />,
      title: "Visione prodotto e business",
      text: "Come E-Commerce Manager ho lavorato tra catalogo, ordini, marketplace e customer care. Qui ho capito quanto contino insieme esperienza utente, organizzazione e risultati.",
    },
    {
      icon: <Rocket className="h-6 w-6 text-primary" />,
      title: "Specializzazione frontend",
      text: "Dal 2018 mi sono specializzato nel frontend, soprattutto con Angular in contesti enterprise. Ho costruito gran parte delle mie competenze con un percorso intenso da autodidatta, in un contesto di studio e lavoro continui.",
    },
    {
      icon: <Users className="h-6 w-6 text-primary" />,
      title: "Leadership e mentoring",
      text: "Oggi coordino il team frontend, allineo standard di sviluppo e supporto la crescita dei colleghi. Collaborazione, confronto e responsabilita condivisa sono centrali nel mio lavoro.",
    },
  ]
};
