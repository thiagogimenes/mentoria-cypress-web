/// <reference types="cypress" /> 

import { faker } from '@faker-js/faker'

describe('Teste de login', () => {
  it('Login com sucesso', () => {
    cy.visit('https://automationpratice.com.br/login')
    cy.get('#user').type(faker.internet.email())
    cy.get('#password').type(faker.string.numeric(6))
    cy.get('#btnLogin').click()
    cy.get('#swal2-title')
      .should('have.text', 'Login realizado')
      .should('be.visible')
  })

  it('Login email inválido', () => {
    cy.visit('https://automationpratice.com.br/login')
    cy.get('#user').type('cyThiago')
    cy.get('#password').type(faker.string.numeric(6))
    cy.get('#btnLogin').click()
    cy.get('.invalid_input')
      .should('have.text', 'E-mail inválido.')
      .should('be.visible')
  });

  it('Login email vazio', () => {
    cy.visit('https://automationpratice.com.br/login')
    cy.get('#password').type(faker.string.numeric(6))
    cy.get('#btnLogin').click()
    cy.get('.invalid_input')
      .should('have.text', 'E-mail inválido.')
      .should('be.visible')
  });

  it('Login senha inválida', () => {
    cy.visit('https://automationpratice.com.br/login')
    cy.get('#user').type('cyThiago@mock.com')
    cy.get('#password').type(faker.string.numeric(2))
    cy.get('#btnLogin').click()
    cy.get('.invalid_input')
      .should('have.text', 'Senha inválida.')
      .should('be.visible')
  });

  it('Login senha vazia', () => {
    cy.visit('https://automationpratice.com.br/login')
    cy.get('#user').type('cyThiago@mock.com')
    cy.get('#btnLogin').click()
    cy.get('.invalid_input')
      .should('have.text', 'Senha inválida.')
      .should('be.visible')
  });

  it('Botão ainda não tem conta', () => {
    cy.visit('https://automationpratice.com.br/login') 
    cy.get('#createAccount').click()
    cy.url().should('eq', 'https://automationpratice.com.br/register')
    cy.get('.account_form')
      .find('h3')
      .should('have.text','Cadastro de usuário')
      .should('be.visible')
  });
})