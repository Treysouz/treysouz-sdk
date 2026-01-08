import { defineConfig } from "@playwright/test";
import baseConfig from "@repo/playwright-config/base";

export default defineConfig({
  ...baseConfig,
  testDir: "./e2e",
});
