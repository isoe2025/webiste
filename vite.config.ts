import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import fs from "fs";
import { componentTagger } from "lovable-tagger";

// Plugin to copy index.html to 404.html for GitHub Pages SPA routing
const spa404Plugin = () => ({
  name: "spa-404-plugin",
  closeBundle() {
    const indexPath = path.resolve(__dirname, "dist/index.html");
    const notFoundPath = path.resolve(__dirname, "dist/404.html");
    if (fs.existsSync(indexPath)) {
      fs.copyFileSync(indexPath, notFoundPath);
    }
  },
});

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: '/webiste/',
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react(), spa404Plugin(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
