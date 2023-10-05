import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    specPattern: "src/tests/cypress/e2e/**/*.{cy,spec}.{js,jsx,ts,tsx}",
    baseUrl: "http://localhost:4173/open-map-data-multi-layers-demo/",
    fixturesFolder: "src/tests/cypress/fixtures",
    screenshotsFolder: "src/tests/cypress/screenshots",
    videosFolder: "src/tests/cypress/videos",
    downloadsFolder: "src/tests/cypress/downloads",
    supportFile: "src/tests/cypress/support/e2e.ts",
  },
});
