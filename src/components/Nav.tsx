import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks } from "../data";

const resumeHref = `${import.meta.env.BASE_URL}resume.pdf`;

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll-spy: highlight the nav item for the section in the middle of the viewport
  useEffect(() => {
    const sections = navLinks
      .map((l) => document.getElementById(l.id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-line bg-ink/85 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="font-mono text-lg font-medium text-mint">
          ar<span className="text-bright">.</span>
        </a>

        <ul className="hidden items-center gap-7 md:flex">
          {navLinks.map((link, i) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className={`font-mono text-[13px] transition-colors ${
                  active === link.id ? "text-mint" : "text-fog hover:text-mint"
                }`}
              >
                <span className="text-mint/70">0{i + 1}.</span> {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={resumeHref}
              target="_blank"
              rel="noreferrer"
              className="rounded border border-mint px-4 py-2 font-mono text-[13px] text-mint transition-colors hover:bg-mint/10"
            >
              Résumé
            </a>
          </li>
        </ul>

        <button
          onClick={() => setOpen(!open)}
          className="text-bright md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-line bg-ink/95 px-6 py-6 backdrop-blur-md md:hidden">
          <ul className="flex flex-col gap-5">
            {navLinks.map((link, i) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={() => setOpen(false)}
                  className="font-mono text-sm text-fog hover:text-mint"
                >
                  <span className="text-mint/70">0{i + 1}.</span> {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={resumeHref}
                target="_blank"
                rel="noreferrer"
                className="inline-block rounded border border-mint px-4 py-2 font-mono text-sm text-mint"
              >
                Résumé
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
