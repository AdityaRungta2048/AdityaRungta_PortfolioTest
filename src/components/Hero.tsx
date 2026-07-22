import {
  useEffect,
  useRef,
  type AnchorHTMLAttributes,
  type ReactNode,
} from "react";
import { motion, type Variants } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { useResume } from "./ResumeProvider";

// Buttons gently gravitate toward the pointer while hovered.
function MagneticLink({
  children,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement> & { children: ReactNode }) {
  const ref = useRef<HTMLAnchorElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(pointer: coarse)").matches) return;

    const move = (e: PointerEvent) => {
      const rect = el.getBoundingClientRect();
      const dx = (e.clientX - (rect.left + rect.width / 2)) * 0.25;
      const dy = (e.clientY - (rect.top + rect.height / 2)) * 0.25;
      el.style.transform = `translate(${dx.toFixed(1)}px, ${dy.toFixed(1)}px)`;
    };
    const leave = () => {
      el.style.transform = "";
    };

    el.addEventListener("pointermove", move);
    el.addEventListener("pointerleave", leave);
    return () => {
      el.removeEventListener("pointermove", move);
      el.removeEventListener("pointerleave", leave);
    };
  }, []);

  return (
    <a ref={ref} {...props} className={`magnetic ${props.className ?? ""}`}>
      {children}
    </a>
  );
}

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

export default function Hero() {
  const { open: openResume } = useResume();

  return (
    <section className="relative flex min-h-[88svh] flex-col justify-center pb-10 pt-24">
      <div aria-hidden className="bg-grid absolute inset-0 -z-10" />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 left-1/2 -z-10 h-[480px] w-[720px] max-w-full -translate-x-1/2 rounded-full bg-mint/[0.06] blur-3xl"
      />

      <motion.div variants={container} initial="hidden" animate="show">
        <motion.p variants={item} className="mb-5 font-mono text-mint">
          Hi, my name is
        </motion.p>

        <motion.h1
          variants={item}
          className="font-display text-6xl font-bold tracking-tight text-bright sm:text-7xl lg:text-8xl"
        >
          Aditya Rungta.
        </motion.h1>

        <motion.h2
          variants={item}
          className="mt-4 max-w-3xl font-display text-2xl font-bold leading-snug tracking-tight text-bright sm:text-3xl lg:text-4xl"
        >
          I build context-aware AI assistants, real-time multiplayer game
          systems, computer-vision pipelines, backend services, and mobile apps
          that <span className="text-mint">turn data into action</span>.
        </motion.h2>

        <motion.p
          variants={item}
          className="mt-6 max-w-2xl text-lg leading-relaxed text-fog"
        >
          A CS fresher with hands-on projects across{" "}
          <span className="text-bright">backend systems</span>,{" "}
          <span className="text-bright">applied AI / ML</span>,{" "}
          <span className="text-bright">full-stack development</span> and{" "}
          <span className="text-bright">real-time systems</span> — plus
          experience at Jabsz Gaming Studios and GirlScript Summer of Code.
        </motion.p>

        <motion.div
          variants={item}
          className="mt-6 flex items-center gap-2.5 font-mono text-xs text-fog"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-mint opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-mint" />
          </span>
          Open to AI + full-stack roles · class of 2026
        </motion.div>

        <motion.div variants={item} className="mt-10 flex flex-wrap gap-4">
          <MagneticLink
            href="#projects"
            className="group inline-flex items-center gap-2 rounded border border-mint px-6 py-3 font-mono text-sm text-mint transition-colors hover:bg-mint/10"
          >
            Check out my work
            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </MagneticLink>
          <button
            onClick={openResume}
            className="magnetic inline-flex items-center rounded px-6 py-3 font-mono text-sm text-fog transition-colors hover:text-mint"
          >
            Download resume
          </button>
        </motion.div>
      </motion.div>

      <motion.a
        href="#about"
        aria-label="Scroll to about section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-fog transition-colors hover:text-mint"
      >
        <ChevronDown size={22} className="animate-bounce" />
      </motion.a>
    </section>
  );
}
