import { motion } from "framer-motion";
import { email } from "../data";

export default function Contact() {
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
          just want to say hi — my inbox is open, and I actually reply.
        </p>
        <a
          href={`mailto:${email}`}
          className="mt-10 inline-block rounded border border-mint px-8 py-4 font-mono text-sm text-mint transition-colors hover:bg-mint/10"
        >
          Say hello
        </a>
      </motion.div>
    </section>
  );
}
