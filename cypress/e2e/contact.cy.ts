describe('Contact form', () => {
  it('fills and submits the contact form', () => {
    cy.visit('/contact')
    cy.get('input[name="name"]').type('Test User')
    cy.get('input[name="email"]').type('test@example.com')
    cy.get('input[name="subject"]').type('Test Subject')
    cy.get('textarea[name="message"]').type('This is a test message')
    cy.contains('Send Message').click()
    cy.contains('Message Sent!')
  })
})
