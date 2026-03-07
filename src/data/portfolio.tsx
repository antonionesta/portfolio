import type { NavItem, PortfolioContent } from "@/types/portfolio";
import { LucideGithub, LucideLinkedin } from "lucide-react";

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
      { label: "GitHub", href: "https://github.com", icon: <LucideGithub className="size-4" /> },
      { label: "LinkedIn", href: "https://linkedin.com", icon: <LucideLinkedin /> }
    ],
  },
  about: {
    title: "About Me",
    paragraphs: [
      "Sono uno sviluppatore orientato al prodotto, con esperienza nella costruzione di soluzioni web moderne e scalabili.",
      "Lavoro su architetture frontend solide, design system e processi di delivery per ridurre il debito tecnico nel tempo.",
    ],
    snippet: [
      "const developer = {",
      '  passione: "infinita",',
      '  caffe: "necessario",',
      '  bugFixes: Infinity',
      "};",
    ],
    specialties: [
      { title: "Frontend", stack: "React, TypeScript, Tailwind" },
      { title: "Backend", stack: "Node.js, Python, Go" },
      { title: "Cloud", stack: "AWS, Docker, K8s" },
      { title: "DevOps", stack: "CI/CD, Terraform, Monitoring" },
    ],
  },
  experiences: {
    title: "Le Mie Esperienze",
    items: [
      {
        period: "2022 - Presente",
        role: "Senior Software Engineer",
        company: "Tech Corp",
        summary: "Guida del team frontend, architettura micro-frontend, mentoring junior developers.",
        stack: ["React", "TypeScript", "AWS"],
      },
      {
        period: "2019 - 2022",
        role: "Full Stack Developer",
        company: "Startup Innovativa",
        summary: "Sviluppo prodotto da zero a lancio, gestione infrastruttura cloud, integrazione API.",
        stack: ["Node.js", "Vue.js", "PostgreSQL"],
      },
      {
        period: "2017 - 2019",
        role: "Junior Developer",
        company: "Digital Agency",
        summary: "Sviluppo siti web e applicazioni per clienti nazionali e internazionali.",
        stack: ["JavaScript", "PHP", "MySQL"],
      },
    ],
  },
  story: {
    title: "La Mia Storia",
    items: [
      {
        year: "2014",
        title: "L'inizio",
        text: 'Il primo "Hello World" ha cambiato tutto. Da quel momento, il codice e diventato il mio linguaggio preferito.',
      },
      {
        year: "2017",
        title: "La formazione",
        text: "Laurea in Informatica e prime esperienze professionali. Ogni progetto una lezione, ogni bug un'opportunita di crescita.",
      },
      {
        year: "2020",
        title: "Il salto",
        text: "La decisione di specializzarmi nel full-stack development e di abbracciare le tecnologie cloud-native.",
      },
      {
        year: "Oggi",
        title: "La passione continua",
        text: "Continuo a imparare, a costruire e a condividere. Il viaggio e appena iniziato.",
      },
    ],
  },
  footerText: "Costruito con passione e codice",
};
