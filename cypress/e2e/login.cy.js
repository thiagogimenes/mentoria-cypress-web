/// <reference types="cypress" /> 

import { faker } from '@faker-js/faker'
import {
  acessarLogin,
  clicarLogar,
  preencherEmailUsuario,
  preencherSenha,
  validaLoginRealizado,
  preencherEmailInvalido,
  validaEmailInvalido,
  preencherSenhaInvalida,
  validaSenhaInvalida,
  criaConta,
  validaUrlRegistrar,
  validaFormRegistrar
} from '../support/pages/login_page'

const telas = [
  { dispositivo: 'Desktop', largura: 1280, altura: 720 },
  { dispositivo: 'Tablet', largura: 768, altura: 1024 },
  { dispositivo: 'Celular (iPhone X)', largura: 405, altura: 812 }
]

telas.forEach((tela) => {
  describe(`Login - ${tela.dispositivo}`, () => {

    beforeEach(() => {
      cy.viewport(tela.largura, tela.altura)
      acessarLogin()
    });

    it(`Login com sucesso - ${tela.largura, tela.altura}`, () => {
      preencherEmailUsuario()
      preencherSenha()
      clicarLogar()
      validaLoginRealizado()
    })

    it(`Login email inválido - ${tela.largura, tela.altura}`, () => {
      preencherEmailInvalido()
      preencherSenha()
      clicarLogar()
      validaEmailInvalido()
    });

    it(`Login email vazio -  ${tela.largura, tela.altura}`, () => {
      preencherSenha()
      clicarLogar()
      validaEmailInvalido()
    });

    it(`Login senha inválida - ${tela.largura, tela.altura}`, () => {
      preencherEmailUsuario()
      preencherSenhaInvalida()
      clicarLogar()
    });

    it(`Login senha vazia - ${tela.largura, tela.altura}`, () => {
      preencherEmailUsuario()
      clicarLogar()
      validaSenhaInvalida()
    });

    it(`Botão ainda não tem conta - ${tela.largura, tela.altura}`, () => {
      criaConta()
      validaUrlRegistrar()
      validaFormRegistrar()
    });
  })

})