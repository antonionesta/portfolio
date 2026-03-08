import type { Metadata } from "next";
import { JetBrains_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Analytics } from "@vercel/analytics/next"

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://antonionesta.dev";
const metadataBase = new URL(siteUrl);

const monoFont = JetBrains_Mono({
  variable: "--font-mono-tech",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const displayFont = Space_Grotesk({
  variable: "--font-display-tech",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  metadataBase,
  title: {
    default: "Antonio Nesta | Portfolio",
    template: "%s | Antonio Nesta",
  },
  description:
    "Portfolio di Antonio Nesta, Frontend Team Leader e Software Engineer specializzato in applicazioni web moderne, performance e scalabilita.",
  applicationName: "Antonio Nesta Portfolio",
  authors: [{ name: "Antonio Nesta", url: siteUrl }],
  creator: "Antonio Nesta",
  publisher: "Antonio Nesta",
  keywords: [
    "Antonio Nesta",
    "Portfolio",
    "Frontend Engineer",
    "Frontend Team Leader",
    "Angular",
    "React",
    "Next.js",
    "TypeScript",
    "Software Engineer",
  ],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "it_IT",
    url: siteUrl,
    siteName: "Antonio Nesta | Portfolio",
    title: "Antonio Nesta | Portfolio",
    description:
      "Frontend Team Leader e Software Engineer: applicazioni web moderne, affidabili e scalabili.",
    images: [
      {
        url: "/icon.svg",
        width: 512,
        height: 512,
        alt: "Logo AN",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Antonio Nesta | Portfolio",
    description:
      "Frontend Team Leader e Software Engineer: applicazioni web moderne, affidabili e scalabili.",
    images: ["/icon.svg"],
  },
  manifest: "/site.webmanifest",
  icons: {
    icon: [{ url: "/icon.svg?v=2", type: "image/svg+xml" }],
    shortcut: [{ url: "/icon.svg?v=2", type: "image/svg+xml" }],
    apple: [{ url: "/icon.svg?v=2", type: "image/svg+xml" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // La classe tema puo differire tra SSR e client (preferenza in localStorage/sistema),
    // quindi sopprimiamo i warning di hydration su <html> per questo mismatch atteso.
    <html lang="it" suppressHydrationWarning className={cn("font-mono", monoFont.variable)}>
      <head>
        <link rel="icon" href="/icon.svg?v=2" type="image/svg+xml" />
        <link rel="shortcut icon" href="/icon.svg?v=2" type="image/svg+xml" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Esegue prima dell'hydration di React per evitare il flash del tema (FOUC):
              // 1) legge la preferenza esplicita da localStorage
              // 2) in fallback usa la preferenza del sistema operativo
              // 3) aggiunge/rimuove la classe .dark su <html>
              (function () {
                try {
                  var saved = localStorage.getItem("theme");
                  var isDark = saved ? saved === "dark" : window.matchMedia("(prefers-color-scheme: dark)").matches;
                  document.documentElement.classList.toggle("dark", isDark);
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className={`${displayFont.variable} ${monoFont.variable} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
