/// <reference types="Cypress" />


describe('Minimal Github Repo Explorer Test', () => {
    it('Visits the Minimal Github Repo Explorer And tests Star Counter', () => {
        cy.visit('https://refactored--dia-slender-explorer-qa.netlify.app');

        //Find input elements and insert token and repo
        cy.get('input').eq(0).type('fc406e9bea7c6fff28866cfacf644145d41862e2');
        cy.get('input').eq(1).type('Sven-66/svenTestRepo');

        //Press the button and show the data
        cy.get('button').should('have.class','styles_search__1YRvI').click();

        //Find and assert star/unstar button
        cy.get('span').eq(0).should('contain', '0');

        cy.get('button')
        .should('contain', 'Star')
        .eq(1).click();
        
        cy.get('span').eq(0).should('contain', '1');

        cy.get('button')
        .should('contain', 'Unstar')
        .eq(1).click();

        //Reset counter
        cy.get('span').eq(0).should('contain', '0');

    })
})