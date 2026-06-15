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
    validaSenhaInvalida
} from '../support/pages/cadastro_usuario_page';

const telas = [
    { dispositivo: 'Desktop', largura: 1280, altura: 720 },
    { dispositivo: 'Tablet', largura: 768, altura: 1024 },
    { dispositivo: 'Celular (iPhone X)', largura: 405, altura: 812 }
]

telas.forEach((tela) => {
    describe(`Cadastro de usuário - ${tela.dispositivo}`, () => {

        beforeEach(() => {
            cy.viewport(tela.largura, tela.altura)
            acessarCadastro()
        })

        it(`Cadastro de usuário com sucesso - ${tela.largura, tela.altura}`, () => {
            preencherNome()
            preencherEmail()
            preencherSenha()
            cadastrar()
            validaCadastroRealizado()
        });

        it(`Cadastro de usuário sem nome - ${tela.largura, tela.altura}`, () => {
            preencherEmail()
            preencherSenha()
            cadastrar()
            validaCampoNome()
        });

        it(`Cadastro de usuário sem email - ${tela.largura, tela.altura}`, () => {
            preencherNome()
            preencherSenha()
            cadastrar()
            validaCampoEmail()
        });

        it(`Cadastro de usuário com senha de 5 digítos - ${tela.largura, tela.altura}`, () => {
            preencherNome()
            preencherEmail()
            preencherSenhaInvalida()
            cadastrar()
            validaCampoSenha()
        });

        it(`Cadastro de usuário sem informar senha - ${tela.largura, tela.altura}`, () => {
            preencherNome()
            preencherEmail()
            cadastrar()
            validaCampoSenha()
        });

        it(`Cadastro de usuário sem email e sem senha - ${tela.largura, tela.altura}`, () => {
            preencherNome()
            cadastrar()
            validaCampoEmail()
        });

        it(`Cadastro de usuário sem nome e sem email - ${tela.largura, tela.altura}`, () => {
            preencherSenha()
            cadastrar()
            validaCampoNome()
        });

        it(`Cadastro de usuário sem nome e sem senha - ${tela.largura, tela.altura}`, () => {
            preencherEmail()
            cadastrar()
            validaCampoNome()
        });

        it(`Cadastro sem preencher nenhum campo - ${tela.largura, tela.altura}`, () => {
            cadastrar()
            validaCampoNome()
        });
    })
})