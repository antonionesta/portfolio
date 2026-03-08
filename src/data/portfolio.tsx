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
      "Attualmente come stack tecnologico utilizzo i framework Angular e Spring Boot uniti a un DB SQL Server. Lato frontend, gestire applicativi enterprise di una certa dimensione e un compito abbastanza arduo, per questo non riesco a fare a meno di NgRx, uno state manager reattivo ispirato al pattern Redux.",
      "Per la parte di testing mi affido alle librerie JUnit e Karma per i test unitari e Cypress per i test end-to-end.",
      "Ho avuto modo di conoscere anche altre librerie e framework, sia per lavoro che per progetti personali: React, Next.js, StencilJs e molti altri. Ho scritto e pubblicato anche una piccola app con Flutter.",
      "In poche parole, se non lo aveste ancora capito, adoro sviluppare e sono curioso di scoprire e studiare sempre cose nuove.",
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
      period: "2022 - Presente",
      role: "Senior Software Engineer",
      company: "Tech Corp",
      summary:
        "Guida del team frontend, architettura micro-frontend, mentoring junior developers.",
      stack: ["React", "TypeScript", "AWS"],
    },
    {
      period: "2019 - 2022",
      role: "Full Stack Developer",
      company: "Startup Innovativa",
      summary:
        "Sviluppo prodotto da zero a lancio, gestione infrastruttura cloud, integrazione API.",
      stack: ["Node.js", "Vue.js", "PostgreSQL"],
    },
    {
      period: "2017 - 2019",
      role: "Junior Developer",
      company: "Digital Agency",
      summary:
        "Sviluppo siti web e applicazioni per clienti nazionali e internazionali.",
      stack: ["JavaScript", "PHP", "MySQL"],
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
