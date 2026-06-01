/// <reference types="cypress" />

import { faker } from '@faker-js/faker'

describe('Cadastro de checkout-one', () => {

    beforeEach(() => {
        cy.visit('https://automationpratice.com.br/checkout-one');
        
    });


    it('Cadastro de faturamento com sucesso', () => {

        cy.get('h3')
            .contains('Billing Details')
            .should('be.visible')

        cy.get('#fname')
            .should('be.visible')
            .type(faker.person.firstName())
        
        cy.get('#lname')
            .should('be.visible')
            .type(faker.person.lastName())

        cy.get('#cname')
            .should('be.visible')
            .type(faker.company.name())
        cy.get('#email')
            .should('be.visible')
            .and('not.be.visible')
            .type(faker.internet.email())
        
        cy.get('#country')
            .select(1)
        cy.get('#city')
            .select(1)
        cy.get('#zip')
            .type(faker.location.zipCode())
        cy.get('#faddress')
            .type(faker.location.streetAddress())
        cy.get('#messages')
            .type(faker.lorem.slug(5))
        cy.get('#materialUnchecked')
            .check()
        cy.get('.checkout-area-bg > .theme-btn-one')
            .click()
        cy.get(':nth-child(2) > h3')
            .should('have.text','Billings Information registred with success!')
        cy.get('wfd-id="id9')
            .check()
        cy.get(':nth-child(2) > :nth-child(2) > .theme-btn-one')
            .click()
    });

    it.only('Cadsatro de checkout sem firstName ', () => {
        
        cy.get('#lname')
            .type(faker.person.lastName())
        cy.get('#cname')
            .type(faker.company.name())
        cy.get('#email')
            .should('be.visible')
        cy.get('#email')
            .type(faker.internet.email())
        cy.get('#country')
            .select(1)
        cy.get('#city')
            .select(1)
        cy.get('#zip')
            .type(faker.location.zipCode())
        cy.get('#faddress')
            .type(faker.location.streetAddress())
        cy.get('#messages')
            .type(faker.lorem.slug(5))
        cy.get('#materialUnchecked')
            .check()
        cy.get('.checkout-area-bg > .theme-btn-one')
            .click()
        cy.get(':nth-child(2) > h3')
            .should('have.text','Billings Information registred with success!')
        cy.get('wfd-id="id9')
            .check()
        cy.get(':nth-child(2) > :nth-child(2) > .theme-btn-one')
            .click()
    });
});