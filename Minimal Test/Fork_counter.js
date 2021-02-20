/// <reference types="Cypress" />


describe('Minimal Github Repo Explorer Test', () => {
    it('Visits the Minimal Github Repo Explorer And tests Star Counter', () => {
        cy.visit('https://refactored--dia-slender-explorer-qa.netlify.app')

        //Find input elements and insert token and repo
        cy.get('input').eq(0).type('fc406e9bea7c6fff28866cfacf644145d41862e2');
        cy.get('input').eq(1).type('Sven-66/svenTestRepo');

        //Press the button and show the data
        cy.get('button').should('have.class','styles_search__1YRvI').click();

        //Select Pull Request tab assert url change
        cy.contains('Forks')
        .click()
        .url().should('include','/forks');

        //Find lower Forks Counter that shows open number of issues = 1 (should be default)
        cy.get('.styles_title__uhysM')
        .should('contain', 'Forks')
        .and('contain', '1');

        //Change Selection to private. Counter = 0
        cy.get('select')
        .select('private')
        .should('have.value', 'private');

        cy.get('.styles_title__uhysM')
        .should('contain', 'Forks')
        .and('contain', '0');

        //Change Selection to all. Counter = 0
        cy.get('select')
        .select('all')
        .should('have.value', 'all');

        cy.get('.styles_title__uhysM')
        .should('contain', 'Forks')
        .and('contain', '1');
    })
})