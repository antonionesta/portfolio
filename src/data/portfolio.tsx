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
  { label: "CHI SONO", href: "#chi-sono" },
  { label: "ESPERIENZE", href: "#esperienze" },
  { label: "LA MIA STORIA", href: "#storia" },
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
    ctaPrimary: { label: "Scopri Chi Sono", href: "#chi-sono" },
    ctaSecondary: { label: "Vedi Esperienze", href: "#esperienze" },
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
      "Sono uno sviluppatore orientato al prodotto, con esperienza nella costruzione di soluzioni web moderne e scalabili.",
      "Lavoro su architetture frontend solide, design system e processi di delivery per ridurre il debito tecnico nel tempo.",
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
