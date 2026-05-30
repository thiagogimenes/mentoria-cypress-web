/// <reference types="cypress" />

describe('Cadastro de usuário', () => {

    it('Cadastro de usuário sem nome', () => {
        cy.visit('https://automationpratice.com.br/register')
        cy.get('#email').type('thiago@mock.com')
        cy.get('#password').type('123456')
        cy.get('#btnRegister').click()
        cy.get('#errorMessageFirstName').should('have.text', 'O campo nome deve ser prenchido')
    });

    it('Cadastro de usuário sem email', () => {
        cy.visit('https://automationpratice.com.br/register')
        cy.get('#user').type('thiago')
        cy.get('#password').type('123456')
        cy.get('#btnRegister').click()
        cy.get('#errorMessageFirstName').should('have.text', 'O campo e-mail deve ser prenchido corretamente')
    });

    it('Cadastro de usuário com senha de 5 digítos', () => {
        cy.visit('https://automationpratice.com.br/register')
        cy.get('#user').type('thiago')
        cy.get('#email').type('thiago@mock.com')
        cy.get('#password').type('12345')
        cy.get('#btnRegister').click()
        cy.get('#errorMessageFirstName').should('have.text', 'O campo senha deve ter pelo menos 6 dígitos')
    });

    it('Cadastro de usuário sem informar senha', () => {
        cy.visit('https://automationpratice.com.br/register')
        cy.get('#user').type('thiago')
        cy.get('#email').type('thiago@mock.com')
        cy.get('#btnRegister').click()
        cy.get('#errorMessageFirstName').should('have.text', 'O campo senha deve ter pelo menos 6 dígitos')
    });

    it('Cadastro de usuário sem email e sem senha', () => {
        cy.visit('https://automationpratice.com.br/register')
        cy.get('#user').type('thiago')
        cy.get('#btnRegister').click()
        cy.get('#errorMessageFirstName').should('have.text', 'O campo e-mail deve ser prenchido corretamente')
    });

    it('Cadastro de usuário sem nome e sem email', () => {
        cy.visit('https://automationpratice.com.br/register')
        cy.get('#password').type('123456')
        cy.get('#btnRegister').click()
        cy.get('#errorMessageFirstName').should('have.text', 'O campo nome deve ser prenchido')
    });

    it('Cadastro de usuário sem nome e sem senha', () => {
        cy.visit('https://automationpratice.com.br/register')
        cy.get('#email').type('thiago@mock.com')
        cy.get('#btnRegister').click()
        cy.get('#errorMessageFirstName').should('have.text', 'O campo nome deve ser prenchido')
    });

    it('Cadastro sem preencher nenhum campo', () => {
        cy.visit('https://automationpratice.com.br/register')
        cy.get('#btnRegister').click()
        cy.get('#errorMessageFirstName').should('have.text', 'O campo nome deve ser prenchido')
    });

    it('Cadastro de usuário com sucesso', () => {
        cy.visit('https://automationpratice.com.br/register')
        cy.get('#user').type('thiago')
        cy.get('#email').type('thiago@mock.com')
        cy.get('#password').type('123456')
        cy.get('#btnRegister').click()
        cy.get('#swal2-title').should('have.text', 'Cadastro realizado!')
        cy.get('#swal2-html-container').should('have.text', 'Bem-vindo thiago')
        cy.get('.swal2-confirm').click()
    });
});
