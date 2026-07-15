import { motion, type Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";

const resumeHref = `${import.meta.env.BASE_URL}resume.pdf`;

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

export default function Hero() {
  return (
    <section className="relative flex min-h-svh flex-col justify-center pb-16 pt-24">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 left-1/2 -z-10 h-[480px] w-[720px] max-w-full -translate-x-1/2 rounded-full bg-mint/[0.05] blur-3xl"
      />

      <motion.div variants={container} initial="hidden" animate="show">
        <motion.p variants={item} className="mb-5 font-mono text-mint">
          Hi, my name is
        </motion.p>

        <motion.h1
          variants={item}
          className="font-display text-5xl font-bold tracking-tight text-bright sm:text-6xl lg:text-7xl"
        >
          Aditya Rungta.
        </motion.h1>

        <motion.h2
          variants={item}
          className="mt-2 font-display text-4xl font-bold tracking-tight text-fog/80 sm:text-5xl lg:text-6xl"
        >
          I build the parts you don't see.
        </motion.h2>

        <motion.p variants={item} className="mt-6 max-w-xl leading-relaxed">
          I'm a final-year computer-science student at Amity University working
          across <span className="text-bright">backend systems</span>,{" "}
          <span className="text-bright">mobile apps</span> and{" "}
          <span className="text-bright">applied machine learning</span>. Most
          recently: real-time multiplayer game systems at Jabsz Gaming Studios,
          and a context-aware customer-support chatbot as my final-year
          project.
        </motion.p>

        <motion.div
          variants={item}
          className="mt-6 flex items-center gap-2.5 font-mono text-xs text-fog"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-mint opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-mint" />
          </span>
          Open to backend &amp; full-stack roles · class of 2026
        </motion.div>

        <motion.div variants={item} className="mt-10 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded border border-mint px-6 py-3 font-mono text-sm text-mint transition-colors hover:bg-mint/10"
          >
            Check out my work
            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </a>
          <a
            href={resumeHref}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center rounded px-6 py-3 font-mono text-sm text-fog transition-colors hover:text-mint"
          >
            View résumé
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
