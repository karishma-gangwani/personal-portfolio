import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000',
    setupNodeEvents(_on, config) {
      // implement node event listeners here if needed
      return config
    },
    specPattern: 'cypress/e2e/**/*.cy.{js,ts}'
  }
})
