import { defineConfig, mergeConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import baseConfig from "./base";

export default defineConfig(
  mergeConfig(baseConfig, {
    plugins: [react()],
    test: {
      environment: "jsdom",
      setupFiles: ["./vitest.setup.ts"],
    },
  })
);
