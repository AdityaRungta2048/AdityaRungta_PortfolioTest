import { AnimatePresence, motion } from "framer-motion";
import {
  createContext,
  useCallback,
  useContext,
  useRef,
  useState,
  type ReactNode,
} from "react";

export type Mode = "cinematic" | "recruiter";

type ModeCtx = {
  mode: Mode;
  requestSwitch: (target: Mode) => void;
  switching: boolean;
};

const ModeContext = createContext<ModeCtx>({
  mode: "cinematic",
  requestSwitch: () => {},
  switching: false,
});

export function useMode() {
  return useContext(ModeContext);
}

const labels: Record<Mode, string> = {
  cinematic: "Cinematic",
  recruiter: "Recruiter",
};

function readStored(): Mode {
  try {
    return localStorage.getItem("mode") === "recruiter"
      ? "recruiter"
      : "cinematic";
  } catch {
    return "cinematic";
  }
}

export function ModeProvider({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<Mode>(readStored);
  const [overlay, setOverlay] = useState<Mode | null>(null);
  const busy = useRef(false);

  const requestSwitch = useCallback(
    (target: Mode) => {
      if (busy.current || target === mode) return;
      busy.current = true;
      setOverlay(target);

      // swap the underlying mode once the blur curtain has covered the screen
      window.setTimeout(() => {
        setMode(target);
        try {
          localStorage.setItem("mode", target);
        } catch {
          /* private browsing */
        }
        window.scrollTo(0, 0);
      }, 640);

      // then lift the curtain to reveal the new mode
      window.setTimeout(() => {
        setOverlay(null);
        busy.current = false;
      }, 1250);
    },
    [mode],
  );

  return (
    <ModeContext.Provider value={{ mode, requestSwitch, switching: !!overlay }}>
      {children}

      <AnimatePresence>
        {overlay && (
          <motion.div
            key="mode-overlay"
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.62, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[95] flex flex-col items-center justify-center overflow-hidden bg-ink/80 backdrop-blur-2xl"
          >
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_45%,rgba(79,140,255,0.12),transparent_70%)]"
            />
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.15, duration: 0.4 }}
              className="relative font-mono text-xs uppercase tracking-[0.5em] text-fog"
            >
              Entering
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, filter: "blur(10px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              transition={{ delay: 0.18, duration: 0.5, ease: "easeOut" }}
              className="relative mt-4 bg-gradient-to-r from-sky-300 via-mint to-violet-300 bg-clip-text font-display text-4xl font-bold uppercase tracking-[0.15em] text-transparent sm:text-6xl"
            >
              {labels[overlay]} Mode
            </motion.h2>
            <motion.span
              aria-hidden
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.22, duration: 0.6, ease: "easeInOut" }}
              className="relative mt-5 h-px w-40 origin-center bg-gradient-to-r from-transparent via-mint to-transparent"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </ModeContext.Provider>
  );
}
