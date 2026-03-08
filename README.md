# Antonio Nesta | Portfolio

Portfolio personale sviluppato con Next.js (App Router), TypeScript e Tailwind CSS.

## Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- Framer Motion
- Lucide React

## Funzionalita principali

- Sezioni: Hero, Chi sono, Esperienze, La mia storia.
- Navigazione ad ancore con scroll smooth e offset per navbar fissa.
- Tema dark/light con persistenza in `localStorage`.
- Design system basato su Tailwind CSS (`globals.css`).

## Avvio locale

Prerequisiti:

- Node.js 20+
- pnpm

Installazione e avvio:

```bash
pnpm install
pnpm dev
```

App disponibile su `http://localhost:3000`.

## Script utili

```bash
pnpm dev        # sviluppo
pnpm build      # build produzione
pnpm start      # avvio build produzione
pnpm lint       # linting
pnpm -s tsc --noEmit  # type-check
```

## Struttura progetto

- `src/app`: routing, layout globale, stili globali.
- `src/components`: componenti UI e sezioni pagina.
- `src/data`: contenuti del portfolio.
- `src/types`: tipi TypeScript del dominio.
- `src/lib`: utility condivise (es. scroll alle sezioni).

## Note

- Font principali: `Space Grotesk` e `JetBrains Mono`.
- Lingua UI: Italiano.
