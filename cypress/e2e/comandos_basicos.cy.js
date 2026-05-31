/// <reference types="cypress" />

describe("Comandos básicos", () => {
    it("Abrir url", () => {
        // visit() - acessa url
        cy.visit("https://automationpratice.com.br/");
    });

    it("Encontrar elementos", () => {
        cy.visit("https://automationpratice.com.br/login");
        //get() - pega elemento
        cy.get("#user");
        // find() - encontra um elemento
        cy.get(".mc-form").find(".form-control");
        //contais() - encontra um elemento pelo texto
        //diminui o escopo com o get()
        cy.get(".mc-form").contains("Send");
    });

    it("Preencher um campo", () => {
        cy.visit("https://automationpratice.com.br/login");
        //cy.get("#user").type("teste@teste.com");
        //cy.get("#password").type('123456')
        cy.get('.mc-form').find('.form-control').type('meuemail@teste.com{enter}')

    });

    it("Click no elemento", () => {
        cy.visit("https://automationpratice.com.br/login");
        //clicar no elemento
        cy.get('#btnLogin').click()
        //clicar em cordenadas
        cy.get('#btnLogin').click(10, 10)
        // clicar com o botão direito
        cy.get('#btnLogin').rightclick()
        //clicar duas vezes no elemento
        cy.get('#btnLogin').dblclick()

    });

    it("Select / Dropdown", () => {
        cy.visit("https://automationpratice.com.br/checkout-one");
        cy.get('#country').select(1)
    });

    it("Checkbox / radioButton", () => {
        cy.visit("https://automationpratice.com.br/checkout-one");
        // marcar
        cy.get('#materialUnchecked').check()
        // desmarcar
        cy.get('#materialUnchecked').uncheck()
        // não pode ser uncheck para radioButton
        cy.get('#css').check()
    });

    it("validar elemento", () => {
        cy.visit("https://automationpratice.com.br/login");
        cy.get('#user').type('teste@mock.com')
        cy.get('#password').type('123456')
        cy.get('#btnLogin').click()
        cy.get('#swal2-title').should('be.visible').should('have.text', 'Login realizado')
    });

});
