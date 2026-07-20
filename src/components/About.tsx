import Section from "./Section";

export default function About() {
  return (
    <Section id="about" index="01" title="About me">
      <div className="max-w-3xl space-y-4 leading-relaxed">
        <p>
          Hello! I'm Aditya, a computer-science student at Amity University
          (class of 2026). The work I enjoy most happens behind the interface -
          data models, APIs, and the logic that has to be right.
        </p>
        <p>
          Over the last few years I've shipped an Android food-ordering app, a
          healthcare management system, a real-time emotion-recognition
          pipeline and a context-aware support chatbot - and spent a summer at{" "}
          <span className="text-mint">Jabsz Gaming Studios</span> building the
          game logic and real-time state for a multiplayer betting game.
        </p>
        <p>
          Outside of coursework I've contributed to open source through
          GirlScript Summer of Code and volunteered with Kind Beings, an NGO.
        </p>
      </div>
    </Section>
  );
}
