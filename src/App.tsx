import { MotionConfig } from "framer-motion";
import { ResumeProvider } from "./components/ResumeProvider";
import { ModeProvider, useMode } from "./components/ModeProvider";
import Preloader from "./components/Preloader";
import Cinematic from "./components/Cinematic";
import RecruiterMode from "./components/RecruiterMode";

function ModeSwitcher() {
  const { mode } = useMode();
  return mode === "cinematic" ? <Cinematic /> : <RecruiterMode />;
}

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <ResumeProvider>
        <ModeProvider>
          <Preloader />
          <ModeSwitcher />
        </ModeProvider>
      </ResumeProvider>
    </MotionConfig>
  );
}
