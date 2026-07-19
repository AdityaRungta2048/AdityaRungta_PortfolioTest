import { useEffect, useState } from "react";

// Soft radial glow that follows the cursor. Purely decorative,
// so it sits behind everything and ignores pointer events.
export default function Spotlight() {
  const [pos, setPos] = useState({ x: -600, y: -600 });

  useEffect(() => {
    const move = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move, { passive: true });
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 hidden lg:block"
      style={{
        background: `radial-gradient(560px at ${pos.x}px ${pos.y}px, rgba(45, 212, 191, 0.055), transparent 80%)`,
      }}
    />
  );
}
