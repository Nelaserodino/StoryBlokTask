const { defineConfig } = require('cypress');
require('dotenv').config();

module.exports = defineConfig({
  // 1280×720 is considered to be the most suitable screen resolution for the desktop website version:
  viewportWidth: 1920,
  viewportHeight: 1080,
  reporterOptions: {
    reportDir: 'cypress/reports/mochawesome',
  },
  e2e: {
    experimentalStudio: true,
    experimentalSessionAndOrigin: true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  env: {
    StoryBlok: {
      email: process.env.STORYBLOK_EMAIL,
      password: process.env.STORYBLOK_PASSWORD,
    },
  },
});
