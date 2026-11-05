const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: false,

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  reporter: 'mochawesome',
  reporterOptions: {
    reporterDir: 'cypress/reports',
    overwrite: true,
    html: true,
    json: false,
    timestamp: 'dddmmyyyy_HHMMss',
  }
});
