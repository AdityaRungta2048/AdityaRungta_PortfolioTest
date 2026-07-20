import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Check, Copy, Download } from "lucide-react";
import { email, githubUrl, linkedinUrl } from "../data";

const resumeHref = `${import.meta.env.BASE_URL}resume.pdf`;

function SignalPulse() {
  return (
    <div className="relative mx-auto mb-9 flex h-32 w-32 items-center justify-center sm:h-36 sm:w-36">
      <div className="absolute h-16 w-16 rounded-full bg-mint/25 blur-2xl" />
      {/* expanding ripples */}
      <span className="absolute h-14 w-14 animate-ping rounded-full border border-mint/50 [animation-duration:2.6s] motion-reduce:hidden" />
      <span className="absolute h-14 w-14 animate-ping rounded-full border border-mint/40 [animation-delay:1.3s] [animation-duration:2.6s] motion-reduce:hidden" />
      {/* static rings */}
      <span className="absolute h-28 w-28 rounded-full border border-line sm:h-32 sm:w-32" />
      <span className="absolute h-20 w-20 rounded-full border border-line/60" />
      {/* glowing core */}
      <span className="relative h-4 w-4 rounded-full bg-mint shadow-[0_0_18px_2px_rgba(45,212,191,0.5)]" />
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
