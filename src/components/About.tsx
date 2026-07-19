import Section from "./Section";
import { skills } from "../data";

export default function About() {
  return (
    <Section id="about" index="01" title="About me">
      <div className="grid gap-10 lg:grid-cols-5">
        <div className="space-y-4 leading-relaxed lg:col-span-3">
          <p>
            Hello! I'm Aditya, a computer-science student at Amity University
            (class of 2026). The work I enjoy most happens behind the interface
            — data models, APIs, and the logic that has to be right.
          </p>
          <p>
            Over the last few years I've shipped an Android food-ordering app,
            a healthcare management system, a real-time emotion-recognition
            pipeline and a context-aware support chatbot — and spent a summer
            at{" "}
            <span className="text-mint">Jabsz Gaming Studios</span> building
            the game logic and real-time state for a multiplayer betting game.
          </p>
          <p>
            Outside of coursework I've contributed to open source through
            GirlScript Summer of Code and volunteered with Kind Beings, an NGO.
            Here's what's in my toolbox these days:
          </p>
        </div>

        <div className="lg:col-span-2">
          <div className="rounded-lg border border-line bg-panel/60 p-6">
            <p className="font-mono text-xs text-mint">$ ls ~/toolbox</p>
            <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2 font-mono text-[13px]">
              {skills.map((skill) => (
                <li key={skill} className="flex items-center gap-2">
                  <span aria-hidden className="text-mint">
                    ▹
                  </span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}
