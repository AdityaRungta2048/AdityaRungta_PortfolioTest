import type { CSSProperties } from "react";
import Section from "./Section";
import { skills } from "../data";

export default function About() {
  return (
    <Section id="about" index="01" title="About me">
      <div className="max-w-3xl space-y-4 leading-relaxed">
        <p>
          Hello! I'm Aditya, a computer-science student at Amity University
          (class of 2026). The work I enjoy most happens behind the interface —
          data models, APIs, and the logic that has to be right.
        </p>
        <p>
          Over the last few years I've shipped an Android food-ordering app, a
          healthcare management system, a real-time emotion-recognition
          pipeline and a context-aware support chatbot — and spent a summer at{" "}
          <span className="text-mint">Jabsz Gaming Studios</span> building the
          game logic and real-time state for a multiplayer betting game.
        </p>
        <p>
          Outside of coursework I've contributed to open source through
          GirlScript Summer of Code and volunteered with Kind Beings, an NGO.
        </p>
      </div>

      <div className="mt-10 rounded-xl border border-line bg-panel/60 p-6">
        <p className="font-mono text-xs text-mint">$ ls ~/toolbox</p>
        <ul className="mt-5 flex flex-wrap gap-2.5">
          {skills.map((skill) => (
            <li key={skill.name}>
              <span
                className="skill-chip flex items-center gap-2 rounded-lg border border-line bg-ink/40 px-3 py-2 font-mono text-[13px] transition-colors hover:border-mint/40"
                style={{ "--brand": `#${skill.icon.hex}` } as CSSProperties}
              >
                <svg
                  role="img"
                  aria-hidden
                  viewBox="0 0 24 24"
                  className="h-4 w-4 fill-current text-fog"
                >
                  <path d={skill.icon.path} />
                </svg>
                {skill.name}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
