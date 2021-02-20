/// <reference types="Cypress" />


describe('Minimal Github Repo Explorer Test', () => {
    it('Visits the Minimal Github Repo Explorer And tests Pull Request Counter', () => {
        cy.visit('https://refactored--dia-slender-explorer-qa.netlify.app')

        //Find input elements and insert token and repo
        cy.get('input').eq(0).type('fc406e9bea7c6fff28866cfacf644145d41862e2');
        cy.get('input').eq(1).type('Sven-66/svenTestRepo');

        //Press the button and show the data
        cy.get('button').should('have.class','styles_search__1YRvI').click();

        //Select Pull Request tab assert url change
        cy.contains('Pull Request')
        .click()
        .url().should('include','/pull-requests');

        //Find lower Pull Requests Counter that shows open number of issues = 3 (should be default)
        cy.get('.styles_title__uhysM')
        .should('contain', 'Pull requests')
        .and('contain', '3');

        //Change Selection to closed. Counter = 0
        cy.get('select')
        .select('closed')
        .should('have.value', 'closed');

        cy.get('.styles_title__uhysM')
        .should('contain', 'Pull requests')
        .and('contain', '0');

        //Change Selection to merged. Counter = 2
        cy.get('select')
        .select('merged')
        .should('have.value', 'merged');

        cy.get('.styles_title__uhysM')
        .should('contain', 'Pull requests')
        .and('contain', '2');

    })
})