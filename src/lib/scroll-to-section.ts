export function scrollToSection(href: string): boolean {
  const id = href.startsWith("#") ? href.slice(1) : href;
  const el = document.getElementById(id);
  if (!el) {
    return false;
  }

  const nav = document.querySelector("nav");
  const navHeight = nav instanceof HTMLElement ? nav.offsetHeight : 65;
  const targetTop = el.getBoundingClientRect().top + window.scrollY - (navHeight - 60);

  window.scrollTo({
    top: Math.max(0, targetTop),
    behavior: "smooth",
  });
  window.history.replaceState(null, "", `#${id}`);

  return true;
}
