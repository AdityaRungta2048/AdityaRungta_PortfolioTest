import type { PipelineStep } from "../data";

// Connected step boxes showing a project's flow. Active steps are
// highlighted; the rest are dimmed roadmap steps.
export default function Pipeline({ steps }: { steps: PipelineStep[] }) {
  return (
    <div className="flex flex-wrap items-stretch gap-y-3">
      {steps.map((step, i) => (
        <div key={step.title} className="flex items-center">
          <div
            className={`rounded-lg border px-3.5 py-2 ${
              step.active
                ? "border-mint/60 bg-mint/[0.07]"
                : "border-line bg-panel/40"
            }`}
          >
            <p
              className={`font-display text-sm font-semibold ${
                step.active ? "text-bright" : "text-fog"
              }`}
            >
              {step.title}
            </p>
            {step.sub && (
              <p className="mt-0.5 font-mono text-[11px] text-fog">{step.sub}</p>
            )}
          </div>
          {i < steps.length - 1 && (
            <span
              aria-hidden
              className={`mx-2 h-px w-5 shrink-0 ${
                step.active ? "bg-mint/60" : "bg-line"
              }`}
            />
          )}
        </div>
      ))}
    </div>
  );
}
