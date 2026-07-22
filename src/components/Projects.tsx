import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import Section from "./Section";
import ProjectModal from "./ProjectModal";
import { featuredProjects, moreProjects, type Accent, type Project } from "../data";

const accentStyles: Record<
  Accent,
  { band: string; icon: string; chip: string }
> = {
  teal: {
    band: "from-teal-400/25",
    icon: "text-teal-600 dark:text-teal-300",
    chip: "bg-teal-400/10 text-teal-700 dark:text-teal-300",
  },
  violet: {
    band: "from-violet-400/25",
    icon: "text-violet-600 dark:text-violet-300",
    chip: "bg-violet-400/10 text-violet-700 dark:text-violet-300",
  },
  amber: {
    band: "from-amber-400/25",
    icon: "text-amber-600 dark:text-amber-300",
    chip: "bg-amber-400/10 text-amber-700 dark:text-amber-300",
  },
  rose: {
    band: "from-rose-400/25",
    icon: "text-rose-600 dark:text-rose-300",
    chip: "bg-rose-400/10 text-rose-700 dark:text-rose-300",
  },
  sky: {
    band: "from-sky-400/25",
    icon: "text-sky-600 dark:text-sky-300",
    chip: "bg-sky-400/10 text-sky-700 dark:text-sky-300",
  },
  fuchsia: {
    band: "from-fuchsia-400/25",
    icon: "text-fuchsia-600 dark:text-fuchsia-300",
    chip: "bg-fuchsia-400/10 text-fuchsia-700 dark:text-fuchsia-300",
  },
};

// Perspective tilt that follows the pointer; skipped for touch devices.
function useTilt<T extends HTMLElement>(max = 6) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(pointer: coarse)").matches) return;

    const move = (e: PointerEvent) => {
      const rect = el.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width - 0.5;
      const py = (e.clientY - rect.top) / rect.height - 0.5;
      el.style.transform = `perspective(900px) rotateX(${(-py * max).toFixed(
        2,
      )}deg) rotateY(${(px * max).toFixed(2)}deg) translateY(-4px)`;
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
  }, [max]);

  return ref;
}

function ProjectCard({
  project,
  onOpen,
}: {
  project: Project;
  onOpen: () => void;
}) {
  const tiltRef = useTilt<HTMLElement>();
  const accent = accentStyles[project.accent];
  const Icon = project.icon;

  return (
    <article
      ref={tiltRef}
      onClick={onOpen}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onOpen();
        }
      }}
      aria-label={`${project.title} - open case study`}
      className="tilt group flex w-[85vw] max-w-[380px] shrink-0 cursor-pointer snap-start flex-col overflow-hidden rounded-xl border border-line bg-panel/60 transition-colors hover:border-mint/40 sm:w-[360px]"
    >
      <div
        className={`relative flex h-36 items-center justify-center overflow-hidden bg-gradient-to-br to-transparent ${accent.band}`}
      >
        <div aria-hidden className="bg-dots absolute inset-0 opacity-60" />
        <Icon
          size={52}
          strokeWidth={1.4}
          className={`relative transition-transform duration-300 group-hover:scale-110 ${accent.icon}`}
        />
        <ArrowUpRight
          size={18}
          className="absolute right-5 top-5 text-fog transition-colors group-hover:text-mint"
        />
      </div>

      <div className="flex flex-1 flex-col p-6">
        {project.label && (
          <span className="font-mono text-xs text-mint">{project.label}</span>
        )}
        <h3 className="mt-2 font-display text-lg font-semibold text-bright">
          {project.title}
        </h3>
        <p className="mt-2.5 flex-1 text-sm leading-relaxed">{project.blurb}</p>
        <ul className="mt-4 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <li
              key={t}
              className={`rounded-full px-2.5 py-0.5 font-mono text-[11px] ${accent.chip}`}
            >
              {t}
            </li>
          ))}
        </ul>
        <span className="mt-5 inline-flex items-center gap-1.5 font-mono text-xs text-mint">
          View case study
          <ArrowUpRight
            size={14}
            className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </span>
      </div>
    </article>
  );
}

export default function Projects() {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [selected, setSelected] = useState<Project | null>(null);
  const projects: Project[] = [...featuredProjects, ...moreProjects];

  const scroll = (dir: number) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth * 0.85, behavior: "smooth" });
  };

  return (
    <Section id="projects" index="03" title="Things I've built">
      <div className="mb-6 flex items-center justify-between gap-4">
        <p className="font-mono text-xs text-fog">Swipe or scroll to browse →</p>
        <div className="flex gap-2">
          <button
            onClick={() => scroll(-1)}
            aria-label="Previous projects"
            className="rounded-full border border-line p-2 text-fog transition-colors hover:border-mint/50 hover:text-mint"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={() => scroll(1)}
            aria-label="Next projects"
            className="rounded-full border border-line p-2 text-fog transition-colors hover:border-mint/50 hover:text-mint"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      <div
        ref={trackRef}
        className="carousel -mx-6 flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-pl-6 px-6 pb-4 sm:-mx-10 sm:scroll-pl-10 sm:px-10"
      >
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            project={project}
            onOpen={() => setSelected(project)}
          />
        ))}
      </div>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </Section>
  );
}
