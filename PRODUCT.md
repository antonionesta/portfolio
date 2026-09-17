# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Due pubblici in egual misura, entrambi in Italiano:
- Recruiter/HR e hiring manager che valutano Antonio Nesta per un ruolo frontend/tech lead, spesso con poco tempo per pagina.
- Colleghi e rete professionale (developer, contatti LinkedIn) che vogliono farsi un'idea del percorso e delle competenze, senza intento di selezione.

Nessun pubblico prevalente tra i due: il sito deve restare leggibile e convincente sia in lettura rapida (screening) sia in lettura approfondita (networking).

## Product Purpose

Sito personale a singola pagina che presenta Antonio Nesta: chi è, le sue competenze, il suo percorso lavorativo e la sua storia professionale. Funziona come vetrina professionale passiva, non come strumento di ricerca attiva di lavoro: non è orientato a massimizzare contatti o candidature, ma a rafforzare reputazione e reperibilità online con un profilo credibile e coerente nel tempo.

## Positioning

Non è un sito da developer generico: posiziona Antonio come Frontend Team Leader con profondità tecnica reale (Angular/Spring Boot enterprise, TanStack Query, testing) unita a esperienza di leadership e mentoring del team. La combinazione "guida tecnica + gestione persone", più un percorso professionale atipico (supporto IT e e-commerce prima del frontend), è ciò che un profilo puramente tecnico non potrebbe rivendicare con la stessa credibilità.

## Operating Context

- Sito Next.js (App Router) a pagina singola con navigazione ad ancore: Home, Chi Sono, Esperienze, La Mia Storia.
- Contenuti gestiti come dati tipizzati in `src/data/portfolio.tsx` (non CMS esterno).
- Tema dark/light con persistenza in `localStorage` e rilevamento preferenza di sistema.
- Lingua UI e contenuti: italiano (`lang="it"`).
- Deploy su dominio proprio (`antonionesta.dev` via `NEXT_PUBLIC_SITE_URL`), con Vercel Analytics e Speed Insights attivi.

## Capabilities and Constraints

- Contenuti (esperienze, storia, skill, tagline) sono dati reali e curati a mano in `src/data/portfolio.tsx`; nessun sistema di generazione o import automatico.
- Nessun form di contatto o meccanismo di lead capture presente: il contatto avviene tramite i link social (GitHub, LinkedIn) nell'hero.
- Nessun CV/resume scaricabile presente in `public/`; unico asset personale è la foto `public/me.png`.
- Design system basato su Tailwind CSS 4 con componenti shadcn/radix-ui in `src/components/ui`.
- Font: Space Grotesk (display) e JetBrains Mono (mono/tech).

## Brand Commitments

- Nome e brand mark: "Antonio Nesta", visualizzato anche come `<AntonioNesta />` (stile "codice") nell'hero.
- Identità dichiarata a rotazione nell'hero: "Team Leader Frontend", "Software Engineer", "Tech Enthusiast".
- Estetica "tech": font monospace/display abbinati, icone Lucide, tono sobrio e concreto (niente claim di marketing generici).
- Foto personale in `public/me.png` come asset di identità.

## Evidence on Hand

- Storico professionale reale e verificato dall'utente in `src/data/portfolio.tsx`: tre esperienze lavorative (GRAF Industries dal 2018 come Frontend Team Leader, Mazzeo S.R.L. 2016 come E-Commerce Manager, NetMassa.it 2015 come IT Support Specialist), ciascuna con ruolo, periodo, summary, highlights e tag.
- Narrazione "La Mia Storia" in quattro tappe tematiche, coerente con le esperienze ma non mappata 1:1 su di esse.
- Nessuna testimonianza, case study, dato quantitativo di business o riferimento cliente presente: il lavoro futuro non deve inventarne.
- Nessun vincolo aggiuntivo dichiarato dall'utente oltre a quanto già presente nel codice.

## Product Principles

- Credibilità prima dell'effetto: ogni claim deve poggiare su contenuti reali già presenti nei dati, mai inventati.
- Doppia leggibilità: la pagina deve reggere sia una scansione rapida (recruiter) sia una lettura approfondita (rete professionale), senza sacrificare l'una per l'altra.
- Presenza stabile, non da funnel: nessuna pressione a convertire (niente CTA aggressive di contatto/candidatura); il tono resta quello di una vetrina professionale duratura.
- Identità "tech" coerente: la componente visiva e tipografica da sviluppatore (monospace, dark/light, brand `<AntonioNesta />`) è parte del posizionamento, non un dettaglio estetico intercambiabile.
