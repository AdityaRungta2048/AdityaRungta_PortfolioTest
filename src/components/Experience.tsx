import Section from "./Section";
import { timeline } from "../data";

export default function Experience() {
  return (
    <Section id="experience" index="02" title="Experience">
      <ol className="relative space-y-10 border-l border-line pl-8">
        {timeline.map((entry) => (
          <li key={`${entry.org}-${entry.period}`} className="relative">
            <span
              aria-hidden
              className="absolute -left-[2.45rem] top-1.5 h-3.5 w-3.5 rounded-full border-2 border-mint bg-ink"
            />
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="font-display text-lg font-semibold text-bright">
                {entry.title} · <span className="text-mint">{entry.org}</span>
              </h3>
              <span className="font-mono text-xs text-fog">{entry.period}</span>
            </div>

            <ul className="mt-3 space-y-2.5">
              {entry.points.map((point) => (
                <li key={point} className="flex gap-3 leading-relaxed">
                  <span aria-hidden className="mt-0.5 text-mint">
                    ▹
                  </span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            {entry.tags.length > 0 && (
              <ul className="mt-4 flex flex-wrap gap-2">
                {entry.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-full bg-mint/10 px-3 py-1 font-mono text-xs text-mint"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ol>
    </Section>
  );
}
