import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Copy } from "lucide-react";
import { email } from "../data";

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
    <section id="contact" className="scroll-mt-28 py-24 sm:py-32">
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.55, ease: "easeOut" }}
        className="mx-auto max-w-xl text-center"
      >
        <p className="font-mono text-mint">05. What's next?</p>
        <h2 className="mt-4 font-display text-4xl font-bold text-bright sm:text-5xl">
          Get in touch
        </h2>
        <p className="mt-5 leading-relaxed">
          I'm finishing my degree in 2026 and looking for backend and
          full-stack opportunities. Whether you've got a role, a question, or
          just want to say hi - my inbox is open, and I actually reply.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href={`mailto:${email}`}
            className="inline-block rounded border border-mint px-8 py-4 font-mono text-sm text-mint transition-colors hover:bg-mint/10"
          >
            Say hello
          </a>
          <button
            onClick={copyEmail}
            className="inline-flex items-center gap-2 rounded px-6 py-4 font-mono text-sm text-fog transition-colors hover:text-mint"
          >
            {copied ? (
              <>
                <Check size={16} className="text-mint" /> Copied!
              </>
            ) : (
              <>
                <Copy size={16} /> Copy email
              </>
            )}
          </button>
        </div>
      </motion.div>
    </section>
  );
}
