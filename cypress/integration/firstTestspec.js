/// <reference types="cypress" />

describe('Ngetes pake cypress', () => {
    it('Isi form dan check pada form pertama', () => {
        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()
        // INLINE FORM
        cy.get('.form-inline').within(() => {
            cy.get('input:eq(0)').should('have.attr', 'placeholder', 'Jane Doe').type("Nuruddin Ismail")
            cy.get('input:eq(1)').should('have.attr', 'placeholder', 'Email').type("nurudin_@live.com")
            cy.get('span.custom-checkbox').click()
        })

        // USING THE GRID FORM
        cy.get('[data-cy="imputEmail1"]').type("email@myemail.com")
        cy.get('#inputPassword2').type("Mypassword")
        cy.get('#inputPassword2')
            .parents('form')
            .contains('Option 2').click()

        // BASIC FORM
        cy.get('#exampleInputEmail1').type("email@myemail.com")
        cy.get('#exampleInputPassword1').type("mypassword")
        cy.get('#exampleInputPassword1')
            .parents('form')
            .find('nb-checkbox').click()

        // FORM WITHOUT LABELS
        cy.contains('Form without labels')
            .parents('nb-card')
            .find('[placeholder="Recipients"]')
            .type("Bapak DPR yang terhormat")
        cy.contains('Form without labels')
            .parents('nb-card')
            .find('[placeholder="Subject"]')
            .type("Siap bang jago")
        cy.contains('Form without labels')
            .parents('nb-card')
            .find('[placeholder="Message"]')
            .type("Sehat sehat aman sentosa joss gandoss ewew")

        // BLOCK FORM
        cy.get('#inputFirstName').type('Nuruddin')
        cy.get('#inputLastName').type('Ismail')
        cy.get('#inputEmail').type('email@example.com')
        cy.get('#inputWebsite').type('yaruthab.org')
    })
})