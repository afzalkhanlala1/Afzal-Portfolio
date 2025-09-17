import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
// Remove Lovable component tagger in production build to avoid logo/badge injection
// import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  // IMPORTANT: Set this to your GitHub repo name for Pages
  base: mode === "production" ? "/afzal-ai-craft/" : "/",
  server: {
    host: "::",
    port: 8080,
  },
  // No lovable tagger plugin to keep output clean
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
