import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react-swc";
import type { PluginOption } from "vite";

export default defineConfig({
  // Workaround: VSCode/TS may resolve different copies of `vite` types
  // causing a spurious "no overload matches this call" diagnostic.
  // The cast to `PluginOption` is correct at runtime; silence the editor here.
  // @ts-ignore
  plugins: [react() as PluginOption],
  test: {
    environment: "jsdom",
    setupFiles: ["./src/setupTests.ts"],
    globals: true,
    coverage: {
      reporter: ["text", "html"]
    }
  }
});
