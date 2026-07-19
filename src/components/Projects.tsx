import { useEffect, useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import Section from "./Section";
import GitHubActivity from "./GitHubActivity";
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

function FeaturedCard({ project }: { project: Project }) {
  const tiltRef = useTilt<HTMLElement>();
  const accent = accentStyles[project.accent];
  const Icon = project.icon;

  return (
    <article
      ref={tiltRef}
      className="tilt group flex flex-col overflow-hidden rounded-xl border border-line bg-panel/60 transition-colors hover:border-mint/40"
    >
      <div
        className={`relative flex h-40 items-center justify-center overflow-hidden bg-gradient-to-br to-transparent ${accent.band}`}
      >
        <div aria-hidden className="bg-dots absolute inset-0 opacity-60" />
        <Icon
          size={56}
          strokeWidth={1.4}
          className={`relative transition-transform duration-300 group-hover:scale-110 ${accent.icon}`}
        />
        <ArrowUpRight
          size={18}
          className="absolute right-5 top-5 text-fog transition-colors group-hover:text-mint"
        />
      </div>

      <div className="flex flex-1 flex-col p-7">
        <span className="font-mono text-xs text-mint">{project.label}</span>
        <h3 className="mt-2 font-display text-xl font-semibold text-bright">
          {project.title}
        </h3>
        <p className="mt-3 flex-1 leading-relaxed">{project.blurb}</p>
        <ul className="mt-5 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <li
              key={t}
              className={`rounded-full px-3 py-1 font-mono text-xs ${accent.chip}`}
            >
              {t}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <Section id="projects" index="03" title="Things I've built">
      <div className="grid gap-6 lg:grid-cols-2">
        {featuredProjects.map((project) => (
          <FeaturedCard key={project.title} project={project} />
        ))}
      </div>

      <h3 className="mb-6 mt-14 font-display text-lg font-semibold text-bright">
        Also built
      </h3>
      <div className="grid gap-5 md:grid-cols-3">
        {moreProjects.map((project) => {
          const accent = accentStyles[project.accent];
          const Icon = project.icon;
          return (
            <article
              key={project.title}
              className="group rounded-xl border border-line bg-panel/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-mint/40"
            >
              <span
                className={`inline-flex rounded-lg p-2.5 ${accent.chip.split(" ")[0]}`}
              >
                <Icon
                  size={22}
                  strokeWidth={1.6}
                  className={`transition-transform group-hover:scale-110 ${accent.icon}`}
                />
              </span>
              <h4 className="mt-4 font-display text-base font-semibold text-bright">
                {project.title}
              </h4>
              <p className="mt-2 text-sm leading-relaxed">{project.blurb}</p>
              <ul className="mt-4 flex flex-wrap gap-x-3 gap-y-1 font-mono text-[11px] text-fog">
                {project.tech.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </article>
          );
        })}
      </div>

      <GitHubActivity />
    </Section>
  );
}
