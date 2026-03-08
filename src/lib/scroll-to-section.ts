export function scrollToSection(href: string): boolean {
  // Accetta sia "#about" sia "about" e normalizza in un id elemento.
  const id = href.startsWith("#") ? href.slice(1) : href;
  const el = document.getElementById(id);
  if (!el) {
    return false;
  }

  // Calcola una posizione top stabile tenendo conto della navbar fissa.
  // L'offset extra mantiene il titolo sezione leggermente sotto la navbar.
  const nav = document.querySelector("nav");
  const navHeight = nav instanceof HTMLElement ? nav.offsetHeight : 65;
  const targetTop = el.getBoundingClientRect().top + window.scrollY - (navHeight - 60);

  window.scrollTo({
    top: Math.max(0, targetTop),
    behavior: "smooth",
  });
  // Mantiene l'hash URL allineato alla sezione senza forzare un salto pagina.
  window.history.replaceState(null, "", `#${id}`);

  return true;
}
