// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })Cypress.Commands.add('login', (email, password) => {
Cypress.Commands.add('login', (email, pass) => {
  cy.visit('/');
  cy.contains('Log in').click();
  cy.get('#mail').type(email);
  cy.get('#pass').type(pass);
  cy.contains('Submit').click();
  cy.contains(`Добро пожаловать ${email}`).should('be.visible');
});

Cypress.Commands.add('addBook', (title, author) => {
  cy.contains('Add new').click(); // Убрал 'button' для универсальности
  cy.get('#title').type(title);
  cy.get('#authors').type(author); // ⚠️ Изменил на #authors (множественное число)
  cy.contains('Submit').click();
  cy.contains(title).should('be.visible');
});

Cypress.Commands.add('addToFavorites', (title) => {
  cy.contains(title)
    .closest('a[href*="book/"]')
    .find('.card-footer > .btn')
    .click({ force: true });
});

Cypress.Commands.add('removeFromFavorites', (title) => {
  cy.contains(title)
    .closest('a[href*="book/"]')
    .find('.card-footer > .btn')
    .click({ force: true });
});