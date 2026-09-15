describe('Auth tests', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.contains('Log in').click();
  });

  it('Should successfully login', () => {
    cy.get('#mail').type('test@test.com');
    cy.get('#pass').type('test');
    cy.contains('Submit').click();
    cy.contains('Добро пожаловать test@test.com').should('be.visible');
  });

  it('Should not login with empty login', () => {
    cy.get('#mail').type(' ');
    cy.get('#pass').type('test');
    cy.contains('Submit').click();
    cy.get('#mail').then(el => el[0].checkValidity()).should('be.false');
  });

  it('Should not login with empty password', () => {
    cy.get('#mail').type('test@test.com');
    cy.contains('Submit').click();
    cy.get('#pass').then(el => el[0].checkValidity()).should('be.false');
  });

  it('Should not login with invalid email format', () => {
    cy.get('#mail').type('invalid-email');
    cy.get('#pass').type('test');
    cy.contains('Submit').click();
    cy.get('#mail').then(el => el[0].checkValidity()).should('be.false');
  });

it('Should not login with wrong credentials', () => {
  cy.get('#mail').type('wrong@test.com');
  cy.get('#pass').type('wrongpassword');
  cy.contains('Submit').click();
  cy.contains('Добро пожаловать').should('not.exist');
  cy.get('#mail').should('be.visible');
});
  it('Should not login with empty form', () => {
    cy.contains('Submit').click();
    cy.get('#mail').then(el => el[0].checkValidity()).should('be.false');
    cy.get('#pass').then(el => el[0].checkValidity()).should('be.false');
  });
});