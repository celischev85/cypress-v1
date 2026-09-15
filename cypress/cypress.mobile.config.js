const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000',
    viewportWidth: 375,  // iPhone SE
    viewportHeight: 667,
    setupNodeEvents(on, config) {
    },
  },
});