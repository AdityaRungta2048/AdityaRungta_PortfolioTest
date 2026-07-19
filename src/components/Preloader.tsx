import { useEffect, useState } from "react";

// Short branded intro shown while the page settles, then fades out.
export default function Preloader() {
  const [phase, setPhase] = useState<"show" | "fade" | "done">(() =>
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
      ? "done"
      : "show",
  );

  useEffect(() => {
    if (phase === "done") return;
    const timeout = setTimeout(
      () => setPhase(phase === "show" ? "fade" : "done"),
      phase === "show" ? 1300 : 450,
    );
    return () => clearTimeout(timeout);
  }, [phase]);

  if (phase === "done") return null;

  return (
    <div
      aria-hidden
      className={`fixed inset-0 z-[90] flex flex-col items-center justify-center gap-5 bg-ink transition-opacity duration-500 ${
        phase === "fade" ? "opacity-0" : "opacity-100"
      }`}
    >
      <span className="font-mono text-4xl font-medium text-mint">
        ar<span className="text-bright">.</span>
      </span>
      <span className="h-0.5 w-44 overflow-hidden rounded-full bg-line">
        <span className="loadbar block h-full w-full origin-left bg-mint" />
      </span>
    </div>
  );
}
