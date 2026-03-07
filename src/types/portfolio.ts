import { ReactElement } from "react";

export type SocialLink = {
  label: string;
  href: string;
  icon?: ReactElement
};

export type NavItem = {
  label: string;
  href: string;
};

export type AboutSpecialty = {
  title: string;
  stack: string;
};

export type ExperienceItem = {
  period: string;
  role: string;
  company: string;
  summary: string;
  stack: string[];
};

export type StoryItem = {
  year: string;
  title: string;
  text: string;
};

export type PortfolioContent = {
  brand: string;
  hero: {
    greeting: string;
    firstName: string;
    lastName: string;
    roles: string[];
    summary: string;
    ctaPrimary: { label: string; href: string };
    ctaSecondary: { label: string; href: string };
    socialLinks: SocialLink[];
  };
  about: {
    title: string;
    paragraphs: string[];
    snippet: string[];
    specialties: AboutSpecialty[];
  };
  experiences: {
    title: string;
    items: ExperienceItem[];
  };
  story: {
    title: string;
    items: StoryItem[];
  };
  footerText: string;
};
