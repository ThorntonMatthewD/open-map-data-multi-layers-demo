import { defineConfig } from "cypress";
import create_talkback_server from "./src/tests/support/talkback-server";


export default defineConfig({
  e2e: {
    specPattern: "src/tests/cypress/e2e/**/*.{cy,spec}.{js,jsx,ts,tsx}",
    baseUrl: "http://localhost:4173/open-map-data-multi-layers-demo/",
    fixturesFolder: "src/tests/cypress/fixtures",
    screenshotsFolder: "src/tests/cypress/screenshots",
    videosFolder: "src/tests/cypress/videos",
    downloadsFolder: "src/tests/cypress/downloads",
    supportFile: "src/tests/cypress/support/e2e.ts",
    setupNodeEvents(on, config) {
      on("before:run", (details) => {
        create_talkback_server();
      });
    }
  },
});
