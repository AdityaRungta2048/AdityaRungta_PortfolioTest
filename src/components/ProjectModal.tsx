import { useEffect } from "react";
import { X } from "lucide-react";
import Pipeline from "./Pipeline";
import type { CaseStudy, Project } from "../data";

const fields: { label: string; key: keyof CaseStudy }[] = [
  { label: "Problem", key: "problem" },
  { label: "Solution", key: "solution" },
  { label: "Insight", key: "insight" },
  { label: "What exists today", key: "today" },
  { label: "Where it's going", key: "future" },
];

export default function ProjectModal({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!project) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [project, onClose]);

  if (!project?.study) return null;
  const study = project.study;
  const Icon = project.icon;

  return (
    <div
      className="fixed inset-0 z-[80] flex items-start justify-center overflow-y-auto bg-ink/80 p-4 backdrop-blur-sm sm:p-8"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`${project.title} case study`}
    >
      <div
        className="relative my-6 w-full max-w-3xl rounded-2xl border border-line bg-panel p-6 shadow-2xl sm:my-10 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 rounded-full border border-line p-2 text-fog transition-colors hover:border-mint/50 hover:text-mint"
        >
          <X size={18} />
        </button>

        <div className="flex items-center gap-2.5 pr-10">
          <Icon size={20} className="text-mint" />
          {project.label && (
            <span className="font-mono text-xs text-mint">{project.label}</span>
          )}
        </div>
        <h3 className="mt-2 font-display text-2xl font-bold text-bright sm:text-3xl">
          {project.title}
        </h3>

        <div className="mt-6 overflow-x-auto rounded-xl border border-line bg-ink/40 p-5">
          <p className="mb-4 font-mono text-xs uppercase tracking-wider text-mint">
            How it works
          </p>
          <Pipeline steps={study.pipeline} />
          {study.caption && (
            <p className="mt-4 text-sm italic text-fog">{study.caption}</p>
          )}
        </div>

        <dl className="mt-7 space-y-5">
          {fields.map(({ label, key }) => (
            <div key={key} className="border-l-2 border-line pl-4">
              <dt className="font-mono text-xs uppercase tracking-wider text-mint">
                {label}
              </dt>
              <dd className="mt-1.5 leading-relaxed text-fog">
                {study[key] as string}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
