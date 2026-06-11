/// <reference types="cypress" />

import { faker } from '@faker-js/faker'

export function acessarLogin() {
    cy.visit('/login')
}

export function preencherEmailUsuario() {
    cy.get('#user').type(faker.internet.email())
}

export function preencherEmailInvalido() {
    cy.get('#user').type('cyThiago')
}

export function preencherSenha() {
    cy.get('#password').type(faker.string.numeric(6))
}

export function preencherSenhaInvalida() {
    cy.get('#password').type(faker.string.numeric(2))
}

export function clicarLogar() {
    cy.get('#btnLogin').click()
}

export function validaLoginRealizado() {
    cy.get('#swal2-title')
        .should('have.text', 'Login realizado')
        .should('be.visible')
}

export function validaEmailInvalido() {
    cy.get('.invalid_input')
        .should('have.text', 'E-mail inválido.')
        .should('be.visible')
}

export function validaSenhaInvalida() {
    cy.get('.invalid_input')
        .should('have.text', 'Senha inválida.')
        .should('be.visible')
}

export function criaConta() {
    cy.get('#createAccount').click()
}

export function validaUrlRegistrar() {
    cy.url().should('eq', 'https://automationpratice.com.br/register')
}

export function validaFormRegistrar() {
    cy.get('.account_form')
      .find('h3')
      .should('have.text', 'Cadastro de usuário')
      .should('be.visible')
}