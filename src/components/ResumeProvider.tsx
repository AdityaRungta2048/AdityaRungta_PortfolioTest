import {
  createContext,
  useCallback,
  useContext,
  type ReactNode,
} from "react";

const resumeHref = `${import.meta.env.BASE_URL}resume.pdf`;

const ResumeContext = createContext<{ open: () => void }>({ open: () => {} });

export function useResume() {
  return useContext(ResumeContext);
}

// `open` now downloads the PDF directly rather than showing a viewer.
export function ResumeProvider({ children }: { children: ReactNode }) {
  const open = useCallback(() => {
    const a = document.createElement("a");
    a.href = resumeHref;
    a.download = "Aditya_Rungta_Resume.pdf";
    a.rel = "noopener";
    document.body.appendChild(a);
    a.click();
    a.remove();
  }, []);

  return (
    <ResumeContext.Provider value={{ open }}>{children}</ResumeContext.Provider>
  );
}
