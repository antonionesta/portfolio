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
  title: "Portfolio Tech | Personal Site",
  description:
    "Sito personale tech-style con stile dark, accenti neon e animazioni scroll.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("font-mono", monoFont.variable)}>
      <body className={`${displayFont.variable} ${monoFont.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
