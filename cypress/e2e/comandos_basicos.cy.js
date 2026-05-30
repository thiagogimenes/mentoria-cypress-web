/// <reference types="cypress" /> 

describe('Comandos básicos', () => {
    
    it('Abrir url', () => {
        cy.visit('https://automationpratice.com.br/')
    });

    it('Encontrar elementos', () => {
        cy.visit('https://automationpratice.com.br/')

        cy.get('#user')

        cy.get('.mc-form').find('.form-control')
    });
});
