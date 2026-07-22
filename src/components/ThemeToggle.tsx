import { useState } from "react";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState(
    () => document.documentElement.dataset.theme ?? "dark",
  );

  const toggle = () => {
    const next = theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    document.documentElement.style.backgroundColor =
      next === "light" ? "#f5f6f8" : "#0f1115";
    try {
      localStorage.setItem("theme", next);
    } catch {
      /* private browsing */
    }
    setTheme(next);
  };

  return (
    <button
      onClick={toggle}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
      className="rounded-full border border-line p-1.5 text-fog transition-colors hover:border-mint/50 hover:text-mint"
    >
      {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
    </button>
  );
}
