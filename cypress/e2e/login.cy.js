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
  validaFormRegistrar} from '../support/pages/login_page'

describe('Teste de login', () => {

  beforeEach(() => {
    acessarLogin()
  });

  it('Login com sucesso', () => {
    preencherEmailUsuario()
    preencherSenha()
    clicarLogar()
    validaLoginRealizado()
  })

  it('Login email inválido', () => {
    preencherEmailInvalido()
    preencherSenha()
    clicarLogar()
    validaEmailInvalido()
  });

  it('Login email vazio', () => {
    preencherSenha()
    clicarLogar()
    validaEmailInvalido()
  });

  it('Login senha inválida', () => {
    preencherEmailUsuario()
    preencherSenhaInvalida()
    clicarLogar()
  });

  it('Login senha vazia', () => {
    preencherEmailUsuario()
    clicarLogar()
    validaSenhaInvalida()
  });

  it('Botão ainda não tem conta', () => {
    criaConta()
    validaUrlRegistrar()
    validaFormRegistrar()
  });
})