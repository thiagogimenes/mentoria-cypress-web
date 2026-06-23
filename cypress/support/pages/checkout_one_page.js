/// <reference types="cypress" />

import { faker } from '@faker-js/faker'

export function acessaCheckout() {
    cy.visit('/checkout-one');
}

export function preencherFirstName() {
    cy.get('#fname')
        .type(faker.person.firstName())
}

export function preencherLastName() {
    cy.get('#lname')
        .should('be.visible')
        .type(faker.person.lastName())
}

export function preencherCompany() {
    cy.get('#cname')
        .should('be.visible')
        .type(faker.company.name())
}

export function preencherEmail() {
    cy.get('#email')
        .type(faker.internet.email())
}

export function selecionarCountry() {
    cy.get('#country')
        .select(1)

}

export function selecionarCity() {
    cy.get('#city')
        .select(1)
}

export function preencherZipCode() {
    cy.get('#zip')
        .type(faker.location.zipCode())
}

export function preencherStreetAddress() {
    cy.get('#faddress')
        .type(faker.location.streetAddress())
}

export function preencherMessage() {
    cy.get('#messages')
        .type(faker.lorem.slug(5))
}

export function selecionaMaterialUncheck() {
    cy.get('#materialUnchecked')
        .check()
}

export function salvar() {
    cy.get('.checkout-area-bg > .theme-btn-one')
        .click()
}

export function validaMensagemVendaRegistrada() {
    cy.get(':nth-child(2) > h3')
        .should('have.text', 'Billings Information registred with success!')
}

export function validaFinalizacaoCompra() {

    cy.get('#headingThree > div > [name="payment"]').check()
    cy.get(':nth-child(2) > :nth-child(2) > .theme-btn-one').click()
    cy.get('h2').should('have.text', 'Order success!')
    cy.get('body > div.fade.modal.show > div > div > div > div > div > div > div.col-lg-12 > div > div.col-lg-7.col-md-6 > div > h3')
        .should('have.text', 'Congrats! Your order was created with sucess!')
}

export function validaFirtName() {

    cy.get('#errorMessageFirstName').should('have.text', 'O campo First Name deve ser prenchido')
}

export function validaLastName() {
    cy.get('#errorMessageFirstName').should('have.text', 'O campo Last Name deve ser prenchido')
}

export function validaCompany() {
    cy.get('#errorMessageFirstName').should('have.text', 'O campo Company deve ser preenchido')
}

export function validaEmail() {
    cy.get('#errorMessageFirstName').should('have.text', 'O campo E-mail deve ser prenchido ou é inválido')
}

export function validaCountry() {
    cy.get('#errorMessageFirstName').should('have.text', 'O campo Country deve ser prenchido')
}

export function validaCity() {
    cy.get('#errorMessageFirstName').should('have.text', 'O campo City deve ser prenchido')
}

export function validaZipCode() {
    cy.get('#errorMessageFirstName').should('have.text', 'O campo Zip Code deve ser prenchido')
}

export function validaAddress() {
    cy.get('#errorMessageFirstName').should('have.text', 'O campo Address deve ser prenchido')
}

export function validaAdditinalNotes() {
    cy.get('#errorMessageFirstName').should('have.text', 'O campo Additional Notes deve ser prenchido')
}

export function selecionaDirectBankTransfer() {
    cy.get('#headingOne > div > [name="payment"]').click()
}

export function validaMensagemDirectBankTransfer() {
    cy.get('#collapseOne > .payment_body > p').should('be.visible').should('have.text', 'Direct Bank Transfer')
}

export function clicaDirectBankTransfer() {
    cy.get(':nth-child(2) > :nth-child(2) > .theme-btn-one').click()
}

export function validaMensagemPreenchaDadosPagamentos() {
    cy.get('#errorMessageFirstName').should('have.text', 'Preencha os dados de pagamento!')
}

export function selecionaMobileBanking() {
    cy.get('#headingTwo > div > [name="payment"]').click()
}

export function validaMensagemDirectMobileTransfer() {
    cy.get('#collapseTwo > .payment_body > p').should('be.visible').should('have.text', 'Direct Mobile Transfer')
}

export function selecionaPayPal() {
    cy.get('#headingThree > div > [name="payment"]').click()
}

export function validaMensagemPaypal() {
    cy.get('#collapseThree > .payment_body > p').should('be.visible').should('have.text', 'Some placeholder content for the second accordion panel. This panel is hidden by default.')
}