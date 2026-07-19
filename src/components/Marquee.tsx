import { skills } from "../data";

// Infinite scrolling strip of the tech stack; pauses on hover.
export default function Marquee() {
  const row = [...skills, ...skills];

  return (
    <div className="marquee-mask -mx-6 overflow-hidden py-2 sm:-mx-10">
      <div className="marquee flex w-max items-center gap-10 px-6">
        {row.map((skill, i) => (
          <span
            key={`${skill.name}-${i}`}
            className="flex shrink-0 items-center gap-2.5 font-mono text-sm text-fog"
          >
            <svg
              role="img"
              aria-hidden
              viewBox="0 0 24 24"
              className="h-4 w-4 fill-current text-mint/70"
            >
              <path d={skill.icon.path} />
            </svg>
            {skill.name}
          </span>
        ))}
      </div>
    </div>
  );
}
