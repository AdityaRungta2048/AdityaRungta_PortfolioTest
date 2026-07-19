import { motion } from "framer-motion";
import type { ReactNode } from "react";

type Props = {
  id: string;
  index: string;
  title: string;
  children: ReactNode;
};

export default function Section({ id, index, title, children }: Props) {
  return (
    <section id={id} className="scroll-mt-28 py-16 sm:py-24">
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.55, ease: "easeOut" }}
      >
        <h2 className="mb-10 flex items-center gap-4 font-display text-2xl font-semibold text-bright sm:text-[1.65rem]">
          <span className="font-mono text-lg font-medium text-mint">
            {index}.
          </span>
          <span className="whitespace-nowrap">{title}</span>
          <span aria-hidden className="h-px min-w-8 flex-1 bg-line" />
        </h2>
        {children}
      </motion.div>
    </section>
  );
}
