describe('React-redux-starter-kit', () => {
  it('should display the product list', () => {
    cy.visit('http://localhost:8080');
    cy.title().should('include', `Steven's Starter kit`);
  });

  it('should be able to view screenWrapper area', () => {
    cy.getByTestId('ScreenWrapper').should('have.length', 1);
  });

  it('select should have 5 options by default', () => {
    cy.getByTestId('DisplayNumberSelect').should('have.length', 1);
    cy.get('option').should('have.length', 5);
  });

  it('select number change should change the number of displayed items', () => {
    cy.get('li').should('have.length', 15);
    cy.getByTestId('DisplayNumberSelect').select('10');
    cy.get('li').should('have.length', 21);
  });
});

// ScreenWrapper
