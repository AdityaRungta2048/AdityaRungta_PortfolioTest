import Section from "./Section";
import { experience } from "../data";

export default function Experience() {
  return (
    <Section id="experience" index="02" title="Where I've worked">
      <div className="rounded-lg border border-line bg-panel/60 p-6 sm:p-8">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <h3 className="font-display text-lg font-semibold text-bright">
            {experience.role} ·{" "}
            <span className="text-mint">{experience.company}</span>
          </h3>
          <span className="font-mono text-xs text-fog">
            {experience.period}
          </span>
        </div>

        <ul className="mt-5 space-y-3">
          {experience.bullets.map((bullet) => (
            <li key={bullet} className="flex gap-3 leading-relaxed">
              <span aria-hidden className="mt-0.5 text-mint">
                ▹
              </span>
              <span>{bullet}</span>
            </li>
          ))}
        </ul>

        <ul className="mt-6 flex flex-wrap gap-2">
          {experience.tech.map((t) => (
            <li
              key={t}
              className="rounded-full bg-mint/10 px-3 py-1 font-mono text-xs text-mint"
            >
              {t}
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
