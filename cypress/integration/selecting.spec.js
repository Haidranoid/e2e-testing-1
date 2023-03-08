describe("textbox with mas characters", () => {
    it('should displays the appropriate remaining characters count', function () {
        cy.visit("http://localhost:3000/example-3");



        cy.get('[data-cy="last-name-chars-left-count"]')
            .invoke("text")
            .should('equal','15')

        cy.get('[data-cy="input-last-name"]')
            .type('hello')

        cy.get('[data-cy="last-name-chars-left-count"]')
            .invoke("text")
            .should('equal','10')

        cy.get('[data-cy="input-last-name"]')
            .type(' my friend');

        cy.get('[data-cy="last-name-chars-left-count"]')
            .invoke('text')
            .should('equal','0')
    });

    it('should prevent the user from typing more characters once max', function () {
        cy.visit("http://localhost:3000/example-3");

        cy.get('[data-cy="input-last-name"]')
            .type('abdcefghijklmñopqrstuvwxyz')

        cy.get('[data-cy="input-last-name"]')
            .should('have.attr','value','abdcefghijklmño')
    });
})