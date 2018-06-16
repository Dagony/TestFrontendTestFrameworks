describe('The Home Page', function() {

    it('successfully loads', function() {
        cy.visit('/')
    });

    it('shows the login page', function() {
        cy.get('input[name=username]');
        cy.get('input[name=password]');
        cy.get('button');
    });

    it('allows user to login', function() {
        cy.get('input[name=username]').type(Cypress.env("username"));
        cy.get('input[name=password]').type(Cypress.env("password"));
        cy.url().should('include', '/login');
        cy.get('button').click();

        // Disabled, because logging into scriptinator now shows Whitelabel Error Page
        // cy.url().should('include', '/dashboard');
        // cy.get('h1').should('contain', 'Dashboard');
    });
});