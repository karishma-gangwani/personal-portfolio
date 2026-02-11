describe('Navigation', () => {
  it('loads the home page and navigates to About and Services', () => {
    cy.visit('/')
    cy.contains('Karishma Gangwani')
    cy.contains('About').click()
    cy.url().should('include', '/about')
    cy.contains('About Me')
    cy.contains('Services').click()
    cy.url().should('include', '/services')
    cy.contains('Comprehensive Consulting Services')
  })
})
