describe('Home Page', () => {
  it('debería mostrar una lista de cursos', () => {
    cy.visit('/');
    cy.get('.article').find('footer')
  });
});
