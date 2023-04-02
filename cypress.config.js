const { defineConfig } = require('cypress')

module.exports = defineConfig({

  viewportHeight: 1080,
  viewportWidth: 1920,
  e2e: {
    baseUrl: 'http://test-engineer.online/',
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}'
  },
})