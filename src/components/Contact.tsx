import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Check, Copy, Download } from "lucide-react";
import { email, githubUrl, linkedinUrl } from "../data";

const resumeHref = `${import.meta.env.BASE_URL}resume.pdf`;

function Orbital() {
  return (
    <div className="relative mx-auto mb-9 h-36 w-36 sm:h-40 sm:w-40">
      <div className="absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full bg-mint/25 blur-2xl" />
      <svg viewBox="0 0 200 200" className="relative h-full w-full text-mint">
        <g fill="none" stroke="currentColor">
          <ellipse
            cx="100"
            cy="100"
            rx="86"
            ry="30"
            strokeOpacity="0.35"
            transform="rotate(0 100 100)"
          />
          <ellipse
            cx="100"
            cy="100"
            rx="86"
            ry="30"
            strokeOpacity="0.28"
            transform="rotate(60 100 100)"
          />
          <ellipse
            cx="100"
            cy="100"
            rx="86"
            ry="30"
            strokeOpacity="0.2"
            transform="rotate(120 100 100)"
          />
        </g>
        <g className="orbit-a">
          <circle cx="100" cy="14" r="3.5" fill="currentColor" />
        </g>
        <g className="orbit-b">
          <circle cx="186" cy="100" r="3" fill="currentColor" fillOpacity="0.8" />
        </g>
        <circle className="orbit-core" cx="100" cy="100" r="6" fill="currentColor" />
      </svg>
    </div>
  );
}

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard unavailable */
    }
  };

  return (
    <section id="contact" className="scroll-mt-28 py-14 sm:py-20">
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.55, ease: "easeOut" }}
        className="relative overflow-hidden rounded-3xl border border-line bg-panel/40 px-6 py-16 text-center sm:py-20"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(45,212,191,0.12),transparent_60%)]"
        />
        <div
          aria-hidden
          className="bg-dots pointer-events-none absolute inset-0 opacity-[0.12]"
        />

        <div className="relative mx-auto max-w-xl">
          <Orbital />

          <p className="font-mono text-xs uppercase tracking-[0.35em] text-mint">
            Contact
          </p>
          <h2 className="mt-4 font-display text-4xl font-bold tracking-tight text-bright sm:text-5xl">
            Let's build something great<span className="text-mint">.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-lg leading-relaxed">
            Open to backend, full-stack and applied-ML roles starting 2026. If
            your team is building something ambitious and my skills fit, email
            is the fastest way to reach me.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href={`mailto:${email}`}
              className="inline-flex items-center rounded-full bg-mint px-7 py-3.5 font-mono text-sm font-medium text-ink shadow-lg shadow-mint/20 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-mint/30"
            >
              {email}
            </a>
            <a
              href={resumeHref}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-line px-7 py-3.5 font-mono text-sm text-bright transition-colors hover:border-mint/50 hover:text-mint"
            >
              <Download size={16} />
              Download résumé
            </a>
          </div>

          <button
            onClick={copyEmail}
            className="mx-auto mt-5 inline-flex items-center gap-2 font-mono text-xs text-fog transition-colors hover:text-mint"
          >
            {copied ? (
              <>
                <Check size={14} className="text-mint" /> Copied to clipboard
              </>
            ) : (
              <>
                <Copy size={14} /> or copy email
              </>
            )}
          </button>

          <div className="mt-10 flex items-center justify-center gap-7">
            {[
              { label: "GitHub", href: githubUrl },
              { label: "LinkedIn", href: linkedinUrl },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-1 font-mono text-sm text-fog transition-colors hover:text-mint"
              >
                {link.label}
                <ArrowUpRight
                  size={14}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
