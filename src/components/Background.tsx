import { Award, GraduationCap } from "lucide-react";
import Section from "./Section";
import { certifications, education } from "../data";

export default function Background() {
  return (
    <Section id="background" index="04" title="Background">
      <div className="grid gap-6">
        <div className="rounded-xl border border-line bg-panel/60 p-6 sm:p-8">
          <div className="flex items-center gap-3">
            <GraduationCap size={24} className="text-mint" />
            <h3 className="font-display text-xl font-semibold text-bright">
              Education
            </h3>
          </div>
          <div className="mt-6 grid gap-6 md:grid-cols-2 md:items-center">
            <div>
              <p className="font-display text-xl font-semibold text-bright">
                {education.degree}
              </p>
              <p className="mt-1.5 text-base">{education.school}</p>
              <p className="mt-1.5 font-mono text-sm text-fog">
                {education.period} · {education.note}
              </p>
            </div>
            <p className="border-t border-line pt-5 text-base leading-relaxed md:border-l md:border-t-0 md:pl-6 md:pt-0">
              Ranked in the top 5% of IIT Madras' Python for Data Science
              course, and an active contributor to open source through
              GirlScript Summer of Code.
            </p>
          </div>
        </div>

        <div className="rounded-xl border border-line bg-panel/60 p-6 sm:p-8">
          <div className="flex items-center gap-3">
            <Award size={24} className="text-mint" />
            <h3 className="font-display text-xl font-semibold text-bright">
              Certifications
            </h3>
          </div>
          <ul className="mt-6 grid gap-x-12 gap-y-4 md:grid-cols-2">
            {certifications.map((cert) => (
              <li
                key={cert.name}
                className="flex items-baseline justify-between gap-4 border-b border-line/60 pb-3 text-base"
              >
                <span className="leading-snug">{cert.name}</span>
                <span className="shrink-0 font-mono text-sm text-mint">
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
