describe('App', () => {
  it('should navigate to page', () => {
    // Start from the index page
    cy.visit('/');
    cy.url().should('include', '/');
  })
  it('should render an input', () => {
    cy.get('[id=input-filter-component]').should('exist');
  })
  it('should render a blog post dashboard', () => {
    cy.get('[id=blog-post-component]').should('exist');
  })
  it('should render a list of blog post cards', () => {
    cy.get('[id=blog-post-card-component-1]').should('exist');
    cy.get('[id=blog-post-card-component-100]').should('exist');
  })
  it('should render a header', () => {
    cy.get('[id=bloggy-header]').should('exist');
  })
  it('should type non existent title and return no results', () => {
    cy.get('[id=input-filter-component]').type('bloggy something something darkside');
    cy.get('[id=blog-post-card-component-1]').should('not.exist');
  })
})