import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:5173',
    setupNodeEvents(on, config) {
      // implement node event listeners here if needed
      return config
    },
    specPattern: 'cypress/e2e/**/*.cy.{js,ts}'
  }
})
