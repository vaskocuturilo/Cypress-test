const { defineConfig } = require('cypress')

module.exports = defineConfig({

  viewportHeight: 1080,
  viewportWidth: 1920,
  e2e: {
    baseUrl: 'http://127.0.0.1:8080/',
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}'
  },
})