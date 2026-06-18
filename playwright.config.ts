import { defineConfig } from '@playwright/test';

export default defineConfig({

  reporter: [
    ['html', {
      open: 'always',
      outputFolder: './reports',
    }]
  ],

  use: {
    viewport: null,
    baseURL: 'https://www.amazon.com',
    launchOptions: {
      args: ['--start-maximized'],
    },
  },

  projects: [
    {
      name: 'chromium',
      use: { browserName: 'chromium' },
    },
    {
      name: 'firefox',
      use: { browserName: 'firefox' },
    },
  ],
});