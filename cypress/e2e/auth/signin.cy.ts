describe('Sign In Page', () => {
  it('successfully loads', () => {
    cy.visit('/auth/signin');

    cy.contains('Sign in');
  });
});
