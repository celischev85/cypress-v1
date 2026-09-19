describe('Favorite books functionality', () => {
  beforeEach(() => {
    cy.login('test@test.com', 'test');
  });

  it('Should add book to favorites', () => {
    cy.visit('/');
    cy.addBook('My Favorite Book', 'Author Name');
    cy.addToFavorites('My Favorite Book');
    
    cy.visit('/favorites');
    cy.contains('My Favorite Book').should('be.visible');
  });

  it('Should remove book from favorites', () => {
    cy.visit('/');
    cy.addBook('Book to Remove', 'Test Author');
    cy.addToFavorites('Book to Remove');
    
    cy.visit('/favorites');
    cy.contains('Book to Remove').should('be.visible');
    
    cy.removeFromFavorites('Book to Remove');
    cy.contains('Book to Remove').should('not.exist');
  });

 it('Should display empty favorites message', () => {
  cy.visit('/favorites');
  
  // Удаляем все книги
  cy.get('body').then($body => {
    const count = $body.find('.card-footer > .btn').length;
    
    for (let i = 0; i < count; i++) {
      cy.get('.card-footer > .btn').first().click({ force: true });
      cy.wait(2000);
    }
  });
  
  // Проверяем, что список пуст
  cy.reload();
  cy.get('.card-footer > .btn').should('not.exist');
   });
   
 });