import { useMode, type Mode } from "./ModeProvider";

const options: { key: Mode; label: string }[] = [
  { key: "cinematic", label: "Cinematic" },
  { key: "recruiter", label: "Recruiter" },
];

export default function ModeToggle() {
  const { mode, requestSwitch } = useMode();

  return (
    <div className="inline-flex items-center rounded-full border border-line bg-panel/60 p-1">
      {options.map((option) => (
        <button
          key={option.key}
          onClick={() => requestSwitch(option.key)}
          aria-pressed={mode === option.key}
          className={`rounded-full px-3.5 py-1.5 font-mono text-xs transition-colors ${
            mode === option.key
              ? "bg-mint/15 text-mint"
              : "text-fog hover:text-bright"
          }`}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}
