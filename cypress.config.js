const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000',
    viewportWidth: 1920,  // Full HD
    viewportHeight: 1080,
    setupNodeEvents(on, config) {
    },
  },
});