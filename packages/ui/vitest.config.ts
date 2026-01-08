import { defineConfig, mergeConfig } from "vitest/config";
import reactConfig from "@repo/vitest-config/react";

export default defineConfig(mergeConfig(reactConfig, {}));
