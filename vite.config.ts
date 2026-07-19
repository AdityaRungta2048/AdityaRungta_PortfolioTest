import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// Relative base so the same build works from any mount point:
// the domain root on Vercel, or /AdityaRungta_PortfolioTest/ on GitHub Pages.
export default defineConfig({
  base: "./",
  plugins: [react(), tailwindcss()],
});
