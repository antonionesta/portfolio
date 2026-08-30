# Portfolio

Sito personale a singola pagina (Next.js) che presenta Antonio Nesta: chi è, le sue competenze, il suo percorso lavorativo e la sua storia professionale.

## Language

**Portfolio Content**:
L'aggregato radice che raccoglie tutto il contenuto testuale del sito a singola pagina (hero, about, experiences, story).
_Avoid_: Page content, site data

**Experience**:
Un impiego o incarico formale ricoperto in un'azienda in un determinato periodo, con ruolo, sommario, highlights e tag associati. Renderizzata come voce della timeline "Esperienze".
_Avoid_: Job, position

**Highlight**:
Un punto elenco di risultato o responsabilità specifica all'interno di una Experience. Distinto dal `summary`, che è la sintesi in una riga dell'Experience.
_Avoid_: Bullet, achievement

**Tag** (Experience):
Una parola chiave libera associata a una Experience: può essere una tecnologia (Angular, Spring Boot) o una competenza/area non tecnologica (Diagnostica, Troubleshooting). Non è ristretta al solo stack tecnologico.
_Avoid_: Stack, tech stack

**Tagline** (Hero):
Una frase di autodescrizione dell'identità professionale dichiarata, mostrata a rotazione nella sezione hero (es. "Tech Enthusiast"). È un'affermazione di identità, non un fatto storico verificabile.
_Avoid_: Role, job title (quando riferito all'hero)

**Role** (Experience):
Il titolo di lavoro formale effettivamente ricoperto in una specifica Experience, legato a un'azienda e a un periodo. Concetto distinto dalla Tagline dell'hero.
_Avoid_: Tagline, job description

**Story**:
Un capitolo tematico del percorso personale/professionale, con icona, titolo e testo narrativo. È una narrazione indipendente per fasi, non legata 1:1 a una singola Experience.
_Avoid_: Milestone, timeline entry

**Skill** (About):
Un'area di competenza mostrata nella sezione "About" (es. Frontend, Backend, Cloud, DevOps), con una breve descrizione delle tecnologie associate. Concetto distinto dai Tag di Experience, che sono per singola esperienza lavorativa.
_Avoid_: Competence, expertise
