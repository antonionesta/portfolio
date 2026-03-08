import type { Metadata } from "next";
import { JetBrains_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

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
  title: "Antonio Nesta | Portfolio"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // La classe tema puo differire tra SSR e client (preferenza in localStorage/sistema),
    // quindi sopprimiamo i warning di hydration su <html> per questo mismatch atteso.
    <html lang="en" suppressHydrationWarning className={cn("font-mono", monoFont.variable)}>
      <head>
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
      </body>
    </html>
  );
}
