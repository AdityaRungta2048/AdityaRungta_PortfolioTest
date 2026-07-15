import { ArrowUpRight, Folder } from "lucide-react";
import Section from "./Section";
import { featuredProjects, moreProjects } from "../data";

export default function Projects() {
  return (
    <Section id="projects" index="03" title="Things I've built">
      <div className="grid gap-6 lg:grid-cols-2">
        {featuredProjects.map((project) => (
          <article
            key={project.title}
            className="group rounded-lg border border-line bg-panel/60 p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-mint/40"
          >
            <div className="flex items-start justify-between gap-4">
              <span className="font-mono text-xs text-mint">
                {project.label}
              </span>
              <ArrowUpRight
                size={18}
                className="shrink-0 text-fog transition-colors group-hover:text-mint"
              />
            </div>
            <h3 className="mt-3 font-display text-xl font-semibold text-bright">
              {project.title}
            </h3>
            <p className="mt-3 leading-relaxed">{project.blurb}</p>
            <ul className="mt-5 flex flex-wrap gap-x-4 gap-y-1 font-mono text-xs text-fog">
              {project.tech.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <h3 className="mb-6 mt-14 font-display text-lg font-semibold text-bright">
        Also built
      </h3>
      <div className="grid gap-5 md:grid-cols-3">
        {moreProjects.map((project) => (
          <article
            key={project.title}
            className="group rounded-lg border border-line bg-panel/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-mint/40"
          >
            <Folder
              size={22}
              className="text-mint transition-transform group-hover:scale-110"
            />
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
        ))}
      </div>
    </Section>
  );
}
