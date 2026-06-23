/// <reference types="cypress" />

import { faker } from '@faker-js/faker'

export function acessarCadastro() {
    cy.visit('/register')
}

export function preencherNome() {
    cy.get('#user').type(faker.person.fullName())
}

export function preencherEmail() {
    cy.get('#email').type(faker.internet.email())
}

export function preencherSenha() {
    cy.get('#password').type(faker.string.numeric(6))
}

export function preencherSenhaInvalida() {
    cy.get('#password').type(faker.string.numeric(5))
}

export function cadastrar() {
    cy.get('#btnRegister').click()
}

export function cadastroUsuario(nome, email, senha) {
    acessarCadastro()
    cy.get('#user').type(faker.person.fullName())
    cy.get('#email').type(faker.internet.email())
    cy.get('#password').type(faker.string.numeric(6))
    cy.get('#btnRegister').click()
    cadastrar()
}

export function validaCadastroRealizado() {
    cy.get('#swal2-title').should('have.text', 'Cadastro realizado!')
    //cy.get('#swal2-html-container').should('contain.text', fullName)
    cy.get('.swal2-confirm').click()
}

export function validaCampoNome() {
    cy.get('#errorMessageFirstName').should('have.text', 'O campo nome deve ser prenchido')
}

export function validaCampoEmail() {
    cy.get('#errorMessageFirstName').should('have.text', 'O campo e-mail deve ser prenchido corretamente')
}

export function validaCampoSenha() {
    cy.get('#errorMessageFirstName').should('have.text', 'O campo senha deve ter pelo menos 6 dígitos')
}