import { defineConfig } from "@playwright/test";
export default defineConfig({
  testDir: "./tests",
  timeout: 30000,
  use: { baseURL: process.env.BASE_URL || "http://localhost:3000", channel: process.env.CI ? undefined : "chrome", headless: true },
  reporter: [["list"], ["json", { outputFile: "test-results/results.json" }]],
  webServer: process.env.BASE_URL ? undefined : { command: "npm run start -- --port 3000", url: "http://localhost:3000", reuseExistingServer: !process.env.CI },
});
