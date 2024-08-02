describe('Sign Up Page', () => {
  it('successfully loads', () => {
    cy.visit('/auth/signup');

    cy.contains('Sign up');
  });
});
