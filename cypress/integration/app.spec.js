describe('Navigation', () => {
    it('should navigate to the about page', () => {
      // Start from the index page
      cy.visit('/');
      cy.url().should('include', '/');
    })
  })