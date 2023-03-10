alert(Cypress.env('MY_ENV_VARIABLE'))

describe("Basic page interactions", () => {
    beforeEach(() => {
        cy.visit('/example-4')
    })

    it('should set the header text to the item\'s name when double clicked', function () {
        cy.get('[data-cy="box-1-items-list"] > :nth-child(2)')
            .dblclick();

        cy.get('[data-cy="box-1-selected-name"]')
            .invoke("text")
            .should('equal','Option Two')
    });

    it('should display the correct count for the number of selected checkboxes', function () {
        cy.get('[data-cy="box-2-checkboxes"] > :nth-child(1) input')
            .check()

        cy.get('[data-cy="box-2-selected-count"]')
            .invoke('text')
            .should('equal','1')
    });

    it('should display the name of the currently selected item', function () {
        cy.get('[data-cy="box-3-dropdown"]')
            .select('Option Three')

        cy.get('[data-cy="box-3-selected-name"]')
            .invoke('text')
            .should('equal','Option Three')
    });

    it('should display the name of the most recently hovered item', function () {
        cy.get('[data-cy="box-4-items-list"] > :nth-child(2)')
            .trigger('mouseover')
            //.select('Option Three')

        cy.get('[data-cy="box-4-selected-name"]')
            .invoke('text')
            .should('equal','Option Two')
    });
})