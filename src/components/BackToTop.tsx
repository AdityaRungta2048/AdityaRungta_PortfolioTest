import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      className="fixed bottom-6 right-6 z-40 rounded-full border border-line bg-panel/90 p-3 text-fog shadow-lg backdrop-blur transition-all hover:-translate-y-1 hover:border-mint/50 hover:text-mint xl:hidden"
    >
      <ArrowUp size={18} />
    </button>
  );
}
