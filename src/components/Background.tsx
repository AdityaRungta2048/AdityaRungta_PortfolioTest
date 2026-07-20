import { Award, GraduationCap } from "lucide-react";
import Section from "./Section";
import { certifications, education } from "../data";

export default function Background() {
  return (
    <Section id="background" index="04" title="Background">
      <div className="grid gap-6">
        <div className="rounded-xl border border-line bg-panel/60 p-6 sm:p-7">
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
          <p className="mt-6 border-t border-line pt-5 text-sm leading-relaxed">
            Ranked in the top 5% of IIT Madras' Python for Data Science course,
            and an active contributor to open source through GirlScript Summer
            of Code.
          </p>
        </div>

        <div className="rounded-xl border border-line bg-panel/60 p-6 sm:p-7">
          <div className="flex items-center gap-3">
            <Award size={22} className="text-mint" />
            <h3 className="font-display text-lg font-semibold text-bright">
              Certifications
            </h3>
          </div>
          <ul className="mt-5 space-y-3.5">
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
