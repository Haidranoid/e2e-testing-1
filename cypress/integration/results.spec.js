describe("textbox with mas characters", () => {
    it('should displays the appropriate remaining characters count', function () {
        cy.visit("http://localhost:3000/example-3");

        cy.get('[data-cy="last-name-chars-left-count"]')
            .as('charsLeftSpan')

        cy.get('[data-cy="input-last-name"]')
            .as('inputLastName')

        cy.get('@charsLeftSpan')
            .then($charsLeftSpan => {
                expect($charsLeftSpan.text()).to.equal('15')
            })

        cy.get('@inputLastName')
            .type('hello')

        cy.get('@charsLeftSpan')
            .invoke("text")
            .should('equal','10')

        cy.get('@inputLastName')
            .type(' my friend');

        cy.get('@charsLeftSpan')
            .invoke('text')
            .should('equal','0')
    });

    it('should prevent the user from typing more characters once max', function () {
        cy.visit("http://localhost:3000/example-3");

        cy.get('[data-cy="input-last-name"]')
            .as('inputLastName')

        cy.get('@inputLastName')
            .type('abdcefghijklmñopqrstuvwxyz')

        cy.get('@inputLastName')
            .should('have.attr','value','abdcefghijklmño')
    });
})