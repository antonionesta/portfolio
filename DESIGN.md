---
name: Antonio Nesta Portfolio
description: Vetrina professionale a pagina singola con estetica da terminale/IDE scuro
colors:
  terminal-green: "hsl(160 100% 50%)"
  terminal-green-light: "oklch(0.508 0.118 165.612)"
  signal-violet: "hsl(270 100% 65%)"
  signal-violet-light: "hsl(270 80% 50%)"
  primary-foreground: "oklch(0.979 0.021 166.113)"
  surface-dark: "oklch(0.141 0.005 285.823)"
  surface-light: "oklch(1 0 0)"
  card-dark: "oklch(0.21 0.006 285.885)"
  card-light: "oklch(1 0 0)"
  secondary-dark: "oklch(0.274 0.006 286.033)"
  secondary-light: "oklch(0.967 0.001 286.375)"
  muted-foreground-dark: "hsl(215 15% 57%)"
  muted-foreground-light: "oklch(0.552 0.016 285.938)"
  border-dark: "oklch(1 0 0 / 10%)"
  border-light: "hsl(220 18% 86%)"
typography:
  display:
    fontFamily: "Space Grotesk, sans-serif"
    fontSize: "clamp(3rem, 8vw, 6rem)"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Space Grotesk, sans-serif"
    fontSize: "clamp(1.875rem, 4vw, 2.25rem)"
    fontWeight: 700
    lineHeight: 1.2
  body:
    fontFamily: "Space Grotesk, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.625
  label:
    fontFamily: "JetBrains Mono, monospace"
    fontSize: "0.75rem"
    fontWeight: 500
    letterSpacing: "0.1em"
rounded:
  sm: "5px"
  md: "6px"
  lg: "8px"
  xl: "11px"
  2xl: "14px"
  full: "9999px"
spacing:
  xs: "8px"
  sm: "16px"
  md: "24px"
  lg: "48px"
  xl: "128px"
components:
  surface-card:
    backgroundColor: "{colors.card-dark}"
    textColor: "{colors.muted-foreground-dark}"
    rounded: "{rounded.lg}"
    padding: "24px"
  surface-card-hover:
    backgroundColor: "{colors.card-dark}"
    textColor: "{colors.terminal-green}"
  tag-chip:
    backgroundColor: "{colors.secondary-dark}"
    textColor: "{colors.muted-foreground-dark}"
    typography: "{typography.label}"
    rounded: "{rounded.sm}"
    padding: "2px 8px"
  button-primary:
    backgroundColor: "{colors.terminal-green}"
    textColor: "{colors.primary-foreground}"
    rounded: "{rounded.lg}"
    padding: "0 10px"
    height: "32px"
  button-primary-hover:
    backgroundColor: "{colors.terminal-green}"
---

# Design System: Antonio Nesta Portfolio

## Overview

**Creative North Star: "The Terminal Session"**

Il sito si presenta come un terminale/IDE dal vivo: tela scura come stato di default, prompt e label in monospace, un cursore concettuale che pulsa di verde neon sugli elementi che contano davvero. Il tono è precisa e sicuro di sé, senza esagerare: il neon è un segnale raro e controllato, non uno spettacolo, coerente con un profilo che vende credibilità tecnica e leadership, non hype. Ogni superficie è piatta a riposo; il bagliore compare solo come risposta a un'interazione, mai come decorazione gratuita.

La griglia di sfondo (`grid-bg`) e il rumore sottile (`noise`) danno la sensazione di una console tecnica reale, non di un template marketing. La modalità scura è quella nativa e di default (SSR e fallback risolvono su dark); la modalità chiara è un adattamento dello stesso sistema, non un mondo visivo separato: stessi ruoli, stessa gerarchia, colori più tenui.

**Key Characteristics:**
- Dark-first: la tela scura è lo stato nativo del sistema, il chiaro è un adattamento tonale.
- Monospace come voce tecnica: label, prompt (`// about me`), tag e periodo sono sempre in JetBrains Mono, maiuscolo/tracciato largo.
- Piatto a riposo, vivo al tocco: nessuna ombra strutturale; il bagliore neon (`neon-text`, `neon-border`, `neon-avatar`) è feedback di stato, non ornamento permanente.
- Verde come firma, viola come nota secondaria: il colore non è mai decorativo, ogni uso ha un ruolo semantico preciso.

## Colors

Palette ristretta e ad alto contrasto: quasi tutta la superficie è neutra (background, bordi, testo muto), e il colore compare solo dove deve guidare l'occhio.

### Primary
- **Terminal Green** (`hsl(160 100% 50%)` in dark, `oklch(0.508 0.118 165.612)` in light): colore di firma del sistema. Marca il cognome nell'hero, le etichette `//` a inizio sezione, la parola evidenziata nei titoli di sezione, lo stato attivo/hover di link e bordi. In light mode la stessa risorsa diventa un teal smorzato invece del verde acceso, per restare leggibile su sfondo chiaro senza perdere identità.

### Secondary
- **Signal Violet** (`hsl(270 100% 65%)` in dark, `hsl(270 80% 50%)` in light): nota secondaria, usata per il nome azienda nella timeline Esperienze (`neon-purple-text`) e per i bagliori diffusi di sfondo (hero, barra di progresso in alto). Segnala un dato "di contorno" rispetto al verde primario, mai un'azione. Come per Terminal Green, in light mode il token usa una variante più scura e satura (`hsl(270 80% 50%)`, 6.58:1 su bianco) invece del valore acceso del tema scuro: il viola acceso originale scende sotto la soglia AA (4.11:1) su sfondo bianco, quindi light e dark ora hanno valori `--accent` distinti, sullo stesso modello già usato per Terminal Green.

### Neutral
- **Surface** (`oklch(0.141 0.005 285.823)` dark / `oklch(1 0 0)` light): sfondo principale della pagina.
- **Card** (`oklch(0.21 0.006 285.885)` dark / `oklch(1 0 0)` light): superficie di card, con bordo a fare la differenza rispetto allo sfondo più che il colore stesso.
- **Secondary surface** (`oklch(0.274 0.006 286.033)` dark / `oklch(0.967 0.001 286.375)` light): sfondo dei tag/chip e delle icone social a riposo.
- **Muted foreground** (`hsl(215 15% 57%)` dark / `oklch(0.552 0.016 285.938)` light): testo secondario — paragrafi, descrizioni, label mono non evidenziate. Il valore del tema scuro è stato alzato da `50%` a `57%` di lightness per portare il testo mutato sopra la soglia AA 4.5:1 sia su sfondo card (5.37:1) sia su sfondo secondario/tag (4.51:1), mantenendo comunque la resa "smorzata" rispetto al testo primario.
- **Border** (`oklch(1 0 0 / 10%)` dark / `hsl(220 18% 86%)` light): unico strumento di separazione tra superfici; niente ombre a riposo.

### Named Rules
**The One Signal Rule.** In qualunque vista, al massimo un elemento porta il verde acceso a riposo (il cognome nell'hero o la label `//` di sezione); tutto il resto del verde è uno stato (hover, bordo attivo), non un elemento fermo. Il viola non compare mai da solo come colore d'azione: resta un dato secondario o un bagliore ambientale.

## Typography

**Display Font:** Space Grotesk (con fallback sans-serif)
**Label/Mono Font:** JetBrains Mono (con fallback monospace)

**Character:** Space Grotesk porta la voce "umana" — nome, titoli, corpo del testo — con un tratto geometrico ma caldo. JetBrains Mono porta la voce "macchina": ogni volta che il testo parla di sistema (prompt, timestamp, tag tecnologici, label maiuscole) passa al mono, marcando esplicitamente il confine fra "chi sono" e "come è costruito il sito".

### Hierarchy
- **Display** (700, `clamp(3rem, 8vw, 6rem)`, line-height 1): nome e cognome nell'hero, unico posto dove il testo raggiunge la scala massima.
- **Headline** (700, `clamp(1.875rem, 4vw, 2.25rem)`, line-height 1.2): titolo di ogni sezione (Chi Sono, Esperienze, La Mia Storia), sempre bicolore (neutro + verde primario sull'ultima parola).
- **Body** (400, 16px, line-height 1.625): paragrafi di About, summary e highlights delle esperienze, testo delle card di Storia.
- **Label** (500, 12px, letter-spacing largo, maiuscolo): prompt `// section-name`, voci di navigazione, periodo dell'esperienza, tag tecnologici — sempre in mono.

### Named Rules
**The Prompt Rule.** Ogni sezione principale si apre con una riga mono in stile prompt (`// about me`) prima del titolo display: è la firma ricorrente che rende riconoscibile l'inizio di ogni blocco di contenuto.

## Layout

Pagina singola a sezioni full-bleed (`container` centrato, padding orizzontale 24px), navigazione ad ancore con scroll fluido e offset per la navbar fissa (`scroll-mt-24` / `scroll-padding-top`). Ritmo verticale marcato: sezioni con padding verticale 32px su mobile che sale a 128px su desktop (`py-8 md:py-32`), per dare respiro da "capitolo" a ciascun blocco.

Layout interno per sezione: About e Storia usano griglie (2 colonne desktop per About, fino a 4 colonne per Storia); Esperienze usa una timeline verticale con linea centrale e nodi alternati sinistra/destra da tablet in su, che collassa a colonna singola con nodi a sinistra su mobile. Densità media: card con padding interno 24px, gap fra elementi 16–24px.

## Elevation & Depth

Sistema piatto a riposo: nessuna ombra strutturale su card, bottoni o superfici. La profondità non è simulata con `box-shadow` generico ma comunicata con due soli strumenti — il bordo (`border-border`) per separare le superfici, e il bagliore neon colorato come feedback di stato quando l'utente interagisce (hover su card, link, avatar). Il bagliore è quindi sempre un segnale di interattività, mai un elemento a riposo.

### Shadow Vocabulary
- **Neon border glow** (`neon-border`, doppio `box-shadow` verde diffuso + inset): appare su hover di card e icone social, comunica "questo elemento reagisce".
- **Neon text glow** (`neon-text` / `neon-purple-text`, doppio `text-shadow`): applicato a testo sempre acceso (cognome, label `//`, brand in navbar), non legato a hover.
- **Avatar glow** (`neon-avatar`, tripla ombra verde con inset): trattamento permanente e più intenso, riservato alla foto profilo come punto focale dell'hero.

### Named Rules
**The Flat-By-Default Rule.** Nessuna superficie ha ombra a riposo. Un'ombra compare solo per marcare uno stato attivo (hover, focus) o un elemento a cui il sistema vuole dare enfasi permanente e dichiarata (nome, avatar).

## Shapes

Angoli morbidi ma contenuti: raggio base 8px (`--radius`), con una scala che va da ~5px per i dettagli più piccoli (chip, badge) fino a ~14px per contenitori più grandi; nessun elemento è mai completamente squadrato né eccessivamente arrotondato. L'unica forma pienamente circolare è riservata a elementi "vivi": l'avatar, i pulsanti icona social, i nodi della timeline. La linea di accento che appare sotto le card al hover (larghezza 0 → 100%) è l'unico elemento decorativo che cambia forma nel tempo, sempre ancorata al bordo inferiore.

## Components

### Cards (About skill / Story)
- **Shape:** angoli arrotondati (8px), bordo netto (`border-border`), sfondo card neutro.
- **Stato a riposo:** piatta, bordo neutro, nessun bagliore.
- **Hover:** il bordo passa a Terminal Green, appare `neon-border`, e una linea di accento verde cresce da 0 a piena larghezza sul bordo inferiore in 500ms.
- **Contenuto interno:** icona + label in headline sopra, descrizione in mono piccolo (skill) o body (storia) sotto.

### Timeline card (Esperienze) — componente firma
- **Shape:** stesso linguaggio delle card standard (8px, bordo netto), ma agganciata a un nodo circolare sulla linea temporale verticale (bordo Terminal Green, punto pieno interno).
- **Disposizione:** alternata sinistra/destra da tablet in su; colonna singola con nodi allineati a sinistra su mobile.
- **Hover:** solo il bordo si scalda verso Terminal Green (senza bagliore pieno), per restare leggibile in una lista lunga.
- **Gerarchia interna:** periodo (mono, Terminal Green) → ruolo (headline) → azienda (mono, Signal Violet) → summary (body muto) → highlights (lista puntata) → tag tecnologici (chip).

### Tags / Chip (tecnologie in Esperienze)
- **Style:** sfondo secondario neutro, bordo netto, testo mono minuscolo (10px), angoli quasi squadrati (~5px).
- **Stato:** solo a riposo; nessuna interazione propria, sono etichette informative non cliccabili.

### Icon links (social nell'hero, toggle tema)
- **Shape:** contenitore quadrato/circolare 40px, bordo netto, sfondo secondario tenue.
- **Hover:** bordo e icona passano a Terminal Green, con `neon-border` sulle icone social.
- **Uso:** unico pattern di "azione" realmente presente sulla pagina, insieme ai link di navigazione.

### Navigation
- **Style:** navbar fissa, sfondo semitrasparente con blur (`backdrop-blur-xl`), bordo inferiore netto.
- **Brand:** mono, tracciato largo, sempre in Terminal Green con `neon-text`.
- **Voci di menu:** mono maiuscolo, tracciato larghissimo, colore muto a riposo → Terminal Green su hover; nessun'ombra, nessun underline.
- **Mobile:** stesso set di link in colonna, con lo stesso trattamento hover, dentro un pannello a comparsa animato in altezza.

### Buttons (primitivo shadcn, non ancora usato nella pagina live)
- **Shape:** angoli 8px (`rounded-lg`), nessun bordo visibile nella variante default.
- **Primary:** sfondo Terminal Green, testo quasi bianco (`primary-foreground`), hover che scurisce leggermente l'opacità del verde (80%).
- **Ghost/Outline/Secondary:** varianti già definite nel componente (`src/components/ui/button.tsx`) mai renderizzate sulla pagina attuale; qualunque nuova CTA dovrebbe partire da qui invece di ridefinire uno stile bottone da zero.

## Do's and Don'ts

### Do:
- **Do** trattare il verde neon come segnale raro: un solo elemento acceso a riposo per vista, tutto il resto del verde arriva da uno stato di interazione.
- **Do** aprire ogni sezione principale con la riga prompt in mono (`// nome-sezione`) prima del titolo display, per mantenere la firma "terminale".
- **Do** usare il bordo (`border-border`), non l'ombra, come strumento primario per separare le superfici a riposo.
- **Do** riservare il bagliore pieno (`neon-border`, `neon-avatar`) a stati di interazione o a un singolo elemento permanentemente enfatizzato (l'avatar); su liste lunghe (timeline) preferire il solo cambio di colore del bordo per non affaticare l'occhio.
- **Do** mantenere il viola (Signal Violet) come dato secondario (azienda, bagliori ambientali), mai come colore di un'azione primaria.
- **Do** verificare il contrasto testo/sfondo (≥4.5:1 per testo normale, WCAG AA) ogni volta che si introduce o modifica un token colore, specialmente per combinazioni testo-su-superficie-neutra come `muted-foreground` su `card`/`secondary`.

### Don't:
- **Don't** aggiungere ombre generiche (`box-shadow` neutro/grigio) per simulare profondità: la profondità qui è solo bordo + bagliore neon colorato.
- **Don't** introdurre un secondo font oltre a Space Grotesk (voce umana) e JetBrains Mono (voce macchina); non mescolare i due ruoli (es. body copy in mono, o label tecniche in Space Grotesk).
- **Don't** rendere il verde neon permanente su più di un elemento contemporaneamente nella stessa vista: perde il suo ruolo di segnale.
- **Don't** aggiungere claim di marketing, testimonianze o dati inventati nei contenuti: il sistema visivo esiste per rendere credibile un contenuto reale, non per compensarne l'assenza.
