import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@vite-monorepo/vite-lib": path.resolve(
        __dirname,
        "../vite-lib/src/main.ts"
      ),
    },
  },
});
