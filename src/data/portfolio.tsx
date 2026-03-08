import type { NavItem, PortfolioContent } from "@/types/portfolio";
import {
  BookOpen,
  Code2,
  Cpu,
  Globe,
  GraduationCap,
  Heart,
  LucideGithub,
  LucideLinkedin,
  Rocket,
  Zap,
} from "lucide-react";

export const navItems: NavItem[] = [
  { label: "HOME", href: "#home" },
  { label: "CHI SONO", href: "#about" },
  { label: "ESPERIENZE", href: "#experiences" },
  { label: "LA MIA STORIA", href: "#story" },
];

export const portfolioContent: PortfolioContent = {
  brand: "<Portfolio />",
  hero: {
    greeting: "ciao, mi chiamo",
    firstName: "Antonio",
    lastName: "Nesta",
    roles: ["Software Engineer", "Full Stack Developer", "Tech Enthusiast"],
    summary:
      "Progetto e Sviluppo applicazioni moderne con focus su performance e stabilità.",
    ctaPrimary: { label: "Scopri Chi Sono", href: "#about" },
    ctaSecondary: { label: "Vedi Esperienze", href: "#experiences" },
    socialLinks: [
      {
        label: "GitHub",
        href: "https://github.com",
        icon: <LucideGithub className="size-4" />,
      },
      {
        label: "LinkedIn",
        href: "https://linkedin.com",
        icon: <LucideLinkedin />,
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
          <Code2 className="mb-3 h-6 w-6 text-primary transition-all group-hover:neon-text" />
        ),
        label: "Frontend",
        desc: "Angular, React, NextJs, Tailwind",
      },
      {
        icon: (
          <Cpu className="mb-3 h-6 w-6 text-primary transition-all group-hover:neon-text" />
        ),
        label: "Backend",
        desc: "Express, Fastify, Spring Boot",
      },
      {
        icon: (
          <Globe className="mb-3 h-6 w-6 text-primary transition-all group-hover:neon-text" />
        ),
        label: "Cloud",
        desc: "Docker",
      },
      {
        icon: (
          <Zap className="mb-3 h-6 w-6 text-primary transition-all group-hover:neon-text" />
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
      role: "Responsabile E-Commerce",
      company: "Mazzeo S.R.L.",
      summary: "Gestione operativa e commerciale di canali e-commerce.",
      highlights: [
        "Gestione rapporti con clienti web e customer service pre/post vendita.",
        "Inserimento professionale prodotti e gestione ordini/magazzino.",
        "Gestione marketplace Amazon ed eBay.",
        "Utilizzo CMS OpenCart, Infinity Portal e Magento.",
        "Gestione template grafico del sito web.",
        "Supporto campagne pubblicitarie con Google Analytics e AdWords.",
      ],
      stack: ["Magento", "OpenCart", "Amazon", "eBay", "Google Analytics", "AdWords"],
    },
    {
      period: "Settembre 2015",
      role: "IT Technical Specialist",
      company: "NetMassa.it",
      summary: "Supporto tecnico su hardware, software e reti locali.",
      highlights: [
        "Risoluzione problemi hardware e software.",
        "Manutenzione periodica di componenti e sistemi.",
        "Installazione e configurazione di cablaggi, hardware e software.",
        "Documentazione tecnica per reportistica.",
        "Diagnostica con strumenti di test.",
        "Installazione e amministrazione reti domestiche e piccole aziende.",
      ],
      stack: ["Hardware", "Software", "Networking", "Diagnostica"],
    },
  ],
  story: [
    {
      icon: <GraduationCap className="h-6 w-6 text-primary" />,
      year: "2014",
      title: "L'inizio",
      text: 'Il primo "Hello World" ha cambiato tutto. Da quel momento, il codice e diventato il mio linguaggio preferito.',
    },
    {
      icon: <BookOpen className="h-6 w-6 text-primary" />,
      year: "2017",
      title: "La formazione",
      text: "Laurea in Informatica e prime esperienze professionali. Ogni progetto una lezione, ogni bug un'opportunita di crescita.",
    },
    {
      icon: <Rocket className="h-6 w-6 text-primary" />,
      year: "2020",
      title: "Il salto",
      text: "La decisione di specializzarmi nel full-stack development e di abbracciare le tecnologie cloud-native.",
    },
    {
      icon: <Heart className="h-6 w-6 text-primary" />,
      year: "Oggi",
      title: "La passione continua",
      text: "Continuo a imparare, a costruire e a condividere. Il viaggio e appena iniziato.",
    },
  ]
};
