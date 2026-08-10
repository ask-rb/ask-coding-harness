import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import path from "node:path";

// ask-ui-kit is consumed from source (sibling repo) so there is no build
// ordering and no stale dist. Swap for the npm package when publishing.
const askUiKitSrc = path.resolve(__dirname, "../../ask-ui-kit/src");

export default defineConfig({
  plugins: [svelte()],
  resolve: {
    alias: {
      "ask-ui-kit": askUiKitSrc,
    },
  },
  build: {
    outDir: "../public",
    emptyOutDir: true,
  },
  publicDir: "static",
  server: {
    port: 5173,
    proxy: {
      "/api": "http://localhost:8080",
    },
  },
});
