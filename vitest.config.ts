import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globalSetup: ["./vitest.global.ts"],
    setupFiles: ["../override-fetch.ts"],
  },
});
