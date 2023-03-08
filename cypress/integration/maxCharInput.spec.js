describe("textbox with mas characters", () => {
    it('should displays the appropriate remaining characters count', function () {
        cy.visit("http://localhost:3000/example-2");

        cy.get('span')
            .invoke("text")
            .should('equal','15')

        cy.get('input')
            .type('hello')

        cy.get('span')
            .invoke("text")
            .should('equal','10')

        cy.get('input')
            .type(' my friend');

        cy.get('span')
            .invoke('text')
            .should('equal','0')
    });

    it('should prevent the user from typing more characters once max', function () {
        cy.visit("http://localhost:3000/example-2");

        cy.get('input')
            .type('abdcefghijklmñopqrstuvwxyz')

        cy.get('input')
            .should('have.attr','value','abdcefghijklmño')
    });
})