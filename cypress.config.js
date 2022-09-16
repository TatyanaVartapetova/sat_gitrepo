const { defineConfig } = require("cypress");
const telegramReporter = require('cypress-telegram-reporter'); // just added 8.9.22

module.exports = defineConfig({
  reporter: 'cypress-multi-reporters',
  reporterOptions: {
    configFile: 'reporter-config.json'
  },
  "env": {
    "telegram": {
      "includeStats": true,
      "reportsPath": "./mocha-reports/*.json",
      "finalReport": "final-report.json",
      "statuses": {
        "passed": "PASSED",
        "failed": "FAILED",
        "pending": "SKIPPED"
      }
    }
  },

 // reporterEnabled: 'mocha-junit-reporter',
 // mochaJunitReporterReporterOptions: {
 //   mochaFile: 'cypress/results/junit/results-[hash].xml'
 // },
 //reporter: 'mochawesome',
  //reporterOptions: {
  // reportDir: 'cypress/results/mochawesome',
  //  overwrite: false,
//quiet: true, //just added 08/9/22
   // html: false,
   // json: true
//},
  viewportHeight: 1080,
  viewportWidth: 1920,
  video: false,
  e2e: {
    telegramReporter(on, config){}, //just added
    retries: 2,
      specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
      excludeSpecPattern: ['**/1-getting-started/*', '**/2-advanced-examples/*'],
    pageLoadTimeout: 100000
    },
  });
