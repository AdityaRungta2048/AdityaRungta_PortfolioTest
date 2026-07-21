import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { Download, X } from "lucide-react";

const resumeHref = `${import.meta.env.BASE_URL}resume.pdf`;

const ResumeContext = createContext<{ open: () => void }>({ open: () => {} });

export function useResume() {
  return useContext(ResumeContext);
}

function ResumeModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[85] flex flex-col bg-ink/90 p-4 backdrop-blur-sm sm:p-6"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Resume"
    >
      <div
        className="mx-auto flex h-full w-full max-w-4xl flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mb-3 flex items-center justify-between gap-3">
          <p className="font-mono text-sm text-mint">Aditya Rungta — Resume</p>
          <div className="flex items-center gap-2">
            <a
              href={resumeHref}
              download
              className="inline-flex items-center gap-2 rounded-full border border-line px-4 py-2 font-mono text-xs text-fog transition-colors hover:border-mint/50 hover:text-mint"
            >
              <Download size={14} /> Download
            </a>
            <button
              onClick={onClose}
              aria-label="Close resume"
              className="rounded-full border border-line p-2 text-fog transition-colors hover:border-mint/50 hover:text-mint"
            >
              <X size={16} />
            </button>
          </div>
        </div>

        <object
          data={`${resumeHref}#view=FitH`}
          type="application/pdf"
          className="min-h-0 flex-1 rounded-xl border border-line bg-white"
          aria-label="Resume PDF"
        >
          <div className="flex h-full flex-col items-center justify-center gap-4 p-8 text-center">
            <p className="text-fog">
              Your browser can't show the PDF here.
            </p>
            <a
              href={resumeHref}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-mint px-5 py-2.5 font-mono text-sm text-mint transition-colors hover:bg-mint/10"
            >
              Open the resume
            </a>
          </div>
        </object>
      </div>
    </div>
  );
}

export function ResumeProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <ResumeContext.Provider value={{ open: () => setOpen(true) }}>
      {children}
      <ResumeModal open={open} onClose={() => setOpen(false)} />
    </ResumeContext.Provider>
  );
}
