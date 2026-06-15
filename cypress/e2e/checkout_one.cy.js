/// <reference types="cypress" />

import { faker } from '@faker-js/faker'
import {
    acessaCheckout,
    salvar,
    preencherCompany,
    preencherEmail,
    preencherFirstName,
    preencherLastName,
    preencherMessage,
    preencherStreetAddress,
    preencherZipCode,
    selecionaMaterialUncheck,
    selecionarCity,
    selecionarCountry,
    validaCompany,
    validaCountry,
    validaEmail,
    validaFinalizacaoCompra,
    validaFirtName,
    validaLastName,
    validaMensagemVendaRegistrada,
    validaCity,
    validaZipCode,
    validaAdditinalNotes,
    validaAddress,
    selecionaDirectBankTransfer,
    selecionaMobileBanking,
    selecionaPayPal,
    validaMensagemDirectBankTransfer,
    clicaDirectBankTransfer,
    validaMensagemPreenchaDadosPagamentos,
    validaMensagemDirectMobileTransfer,
    validaMensagemPaypal
} from '../support/pages/checkout_one_page';

describe('Cadastro de checkout-one', () => {

    beforeEach(() => {
        acessaCheckout()
    });

    it('Cadastro de faturamento com sucesso', () => {
        preencherFirstName()
        preencherLastName()
        preencherCompany()
        preencherEmail()
        selecionarCountry()
        selecionarCity()
        preencherZipCode()
        preencherStreetAddress()
        preencherMessage()
        selecionaMaterialUncheck()
        salvar()
        validaMensagemVendaRegistrada()
        validaFinalizacaoCompra()
    });

    it('Cadsatro de checkout sem firstName ', () => {

        preencherLastName()
        preencherLastName()
        preencherCompany()
        preencherEmail()
        selecionarCountry()
        selecionarCity()
        preencherZipCode()
        preencherStreetAddress()
        preencherMessage()
        selecionaMaterialUncheck()
        salvar()
        validaMensagemVendaRegistrada()
        validaFirtName()
    });

    it('Cadastro de checkout sem lastName', () => {
        preencherFirstName()
        preencherCompany()
        preencherEmail()
        selecionarCountry()
        selecionarCity()
        preencherZipCode()
        preencherStreetAddress()
        preencherMessage()
        selecionaMaterialUncheck()
        salvar()
        validaMensagemVendaRegistrada()
        validaFinalizacaoCompra()
        validaLastName()
    });

    it('Cadastro de checkout sem companyName', () => {
        preencherFirstName()
        preencherLastName()
        preencherEmail()
        selecionarCountry()
        selecionarCity()
        preencherZipCode()
        preencherStreetAddress()
        preencherMessage()
        selecionaMaterialUncheck()
        salvar()
        validaCompany()
        validaMensagemVendaRegistrada()
        validaFinalizacaoCompra()
    });

    it('Cadastro de checkout sem emailAddress', () => {
        preencherFirstName()
        preencherLastName()
        preencherCompany()
        selecionarCountry()
        selecionarCity()
        preencherZipCode()
        preencherStreetAddress()
        preencherMessage()
        selecionaMaterialUncheck()
        salvar()
        validaEmail()
    });

    it('Cadastro de checkout sem country', () => {
        preencherFirstName()
        preencherLastName()
        preencherCompany()
        preencherEmail()
        selecionarCity()
        preencherZipCode()
        preencherStreetAddress()
        preencherMessage()
        selecionaMaterialUncheck()
        salvar()
        validaCountry()
    });

    it('Cadastro de checkout sem state/city', () => {
        preencherFirstName()
        preencherLastName()
        preencherCompany()
        preencherEmail()
        selecionarCountry()
        preencherZipCode()
        preencherStreetAddress()
        preencherMessage()
        selecionaMaterialUncheck()
        salvar()
        validaCity()        
    });

    it('Cadastro de chekcout sem zip code', () => {
        preencherFirstName()
        preencherLastName()
        preencherCompany()
        preencherEmail()
        selecionarCountry()
        selecionarCity()
        preencherStreetAddress()
        preencherMessage()
        selecionaMaterialUncheck()
        salvar()
        validaZipCode()
    });

    it('Cadastro de checkout sem full address', () => {
        preencherFirstName()
        preencherLastName()
        preencherCompany()
        preencherEmail()
        selecionarCountry()
        selecionarCity()
        preencherZipCode()
        preencherMessage()
        selecionaMaterialUncheck()
        salvar()
        validaAddress()
    });

    it('Cadastro de checkout sem additional notes', () => {
        preencherFirstName()
        preencherLastName()
        preencherCompany()
        preencherEmail()
        selecionarCountry()
        selecionarCity()
        preencherStreetAddress()
        preencherZipCode()
        selecionaMaterialUncheck()
        salvar()
        validaAdditinalNotes()
    });

    it('Cadastro de pagamento com Direct Bank Transfer sem informar dados Billing Information', () => {
        selecionaDirectBankTransfer()
        validaMensagemDirectBankTransfer()
        clicaDirectBankTransfer()
        validaMensagemPreenchaDadosPagamentos()
    });

    it('Cadastro de pagamento com Mobile Banking sem informar dados Billing Information', () => {
        selecionaMobileBanking()
        validaMensagemDirectMobileTransfer()
        clicaDirectBankTransfer()
        validaMensagemPreenchaDadosPagamentos()
    });

    it('Cadastro de pagamento com paypal sem informar dados Billing Information', () => {
        selecionaPayPal()
        validaMensagemPaypal()
        clicaDirectBankTransfer()
        validaMensagemPreenchaDadosPagamentos()
    });
});