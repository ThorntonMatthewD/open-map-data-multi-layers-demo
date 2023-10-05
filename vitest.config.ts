import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globalSetup: ["./src/tests/vitest.global.ts"],
    setupFiles: ["tests/support/override-fetch.ts"],
  },
});
