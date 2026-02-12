import { defineConfig } from "@playwright/test";

export default defineConfig({
  use: {
    headless: true,
    viewport: { width: 1280, height: 720 },
  },

  reporter: [
    ["html", { open: "never" }],
  ],

  projects: [
    {
      name: "chromium",
      use: { browserName: "chromium" },
    },
  ],
});
