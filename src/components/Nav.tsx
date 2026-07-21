import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks } from "../data";
import { useResume } from "./ResumeProvider";
import ThemeToggle from "./ThemeToggle";
import ModeToggle from "./ModeToggle";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const { open: openResume } = useResume();

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
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <a href="#top" className="font-mono text-sm font-medium text-mint">
          aditya<span className="text-bright">.</span>rungta
        </a>

        <ul className="hidden items-center gap-5 md:flex">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className={`font-mono text-sm transition-colors ${
                  active === link.id ? "text-mint" : "text-fog hover:text-mint"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <ModeToggle />
          </li>
          <li>
            <ThemeToggle />
          </li>
          <li>
            <button
              onClick={openResume}
              className="rounded border border-mint px-3.5 py-1.5 font-mono text-xs text-mint transition-colors hover:bg-mint/10"
            >
              Resume
            </button>
          </li>
        </ul>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setOpen(!open)}
            className="text-bright"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-line bg-ink/95 px-6 py-6 backdrop-blur-md md:hidden">
          <ul className="flex flex-col gap-5">
            <li className="mb-1">
              <ModeToggle />
            </li>
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={() => setOpen(false)}
                  className="font-mono text-sm text-fog hover:text-mint"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <button
                onClick={() => {
                  openResume();
                  setOpen(false);
                }}
                className="inline-block rounded border border-mint px-4 py-2 font-mono text-sm text-mint"
              >
                Resume
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
