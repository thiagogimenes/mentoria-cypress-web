/// <reference types="cypress" />

import { faker } from '@faker-js/faker'
import { 
    acessarCadastro, 
    cadastrar, 
    preencherEmail, 
    preencherNome, 
    preencherSenha, 
    preencherSenhaInvalida, 
    validaCadastroRealizado, 
    validaCampoEmail, 
    validaCampoNome, 
    validaCampoSenha, 
    validaSenhaInvalida } from '../support/pages/cadastro_usuario_page';

describe('Cadastro de usuário', () => {

    beforeEach(() => {
        acessarCadastro()
    })

    it('Cadastro de usuário com sucesso', () => {
        preencherNome()
        preencherEmail()
        preencherSenha()
        cadastrar()
        validaCadastroRealizado()
    });

    it('Cadastro de usuário sem nome', () => {
        preencherEmail()
        preencherSenha()
        cadastrar()
        validaCampoNome()
    });

    it('Cadastro de usuário sem email', () => {
        preencherNome()
        preencherSenha()
        cadastrar()
        validaCampoEmail()
    });

    it('Cadastro de usuário com senha de 5 digítos', () => {
        preencherNome()
        preencherEmail()
        preencherSenhaInvalida()
        cadastrar()
        validaCampoSenha()
    });

    it('Cadastro de usuário sem informar senha', () => {
        preencherNome()
        preencherEmail()
        cadastrar()
        validaCampoSenha()
    });

    it('Cadastro de usuário sem email e sem senha', () => {
        preencherNome()
        cadastrar()
        validaCampoEmail()
    });

    it('Cadastro de usuário sem nome e sem email', () => {
        preencherSenha()
        cadastrar()
        validaCampoNome()
    });

    it('Cadastro de usuário sem nome e sem senha', () => {
        preencherEmail()
        cadastrar()
        validaCampoNome()
    });

    it('Cadastro sem preencher nenhum campo', () => {
        cadastrar()
        validaCampoNome()
    });
});
