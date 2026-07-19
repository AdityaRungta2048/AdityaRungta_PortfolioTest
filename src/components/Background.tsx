import { Award, GraduationCap } from "lucide-react";
import Section from "./Section";
import { certifications, education, involvement } from "../data";

export default function Background() {
  return (
    <Section id="background" index="04" title="Background">
      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-lg border border-line bg-panel/60 p-6 sm:p-7">
          <div className="flex items-center gap-3">
            <GraduationCap size={22} className="text-mint" />
            <h3 className="font-display text-lg font-semibold text-bright">
              Education
            </h3>
          </div>
          <div className="mt-5">
            <p className="font-medium text-bright">{education.degree}</p>
            <p className="mt-1">{education.school}</p>
            <p className="mt-1 font-mono text-xs text-fog">
              {education.period} · {education.note}
            </p>
          </div>

          <h4 className="mt-8 font-display text-sm font-semibold uppercase tracking-wider text-fog">
            Open source &amp; volunteering
          </h4>
          <ul className="mt-3 space-y-2">
            {involvement.map((line) => (
              <li key={line} className="flex gap-3 text-sm leading-relaxed">
                <span aria-hidden className="text-mint">
                  ▹
                </span>
                {line}
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-lg border border-line bg-panel/60 p-6 sm:p-7">
          <div className="flex items-center gap-3">
            <Award size={22} className="text-mint" />
            <h3 className="font-display text-lg font-semibold text-bright">
              Certifications
            </h3>
          </div>
          <ul className="mt-5 space-y-4">
            {certifications.map((cert) => (
              <li
                key={cert.name}
                className="flex items-baseline justify-between gap-4 text-sm"
              >
                <span className="leading-snug">{cert.name}</span>
                <span className="shrink-0 font-mono text-xs text-mint">
                  {cert.year}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
