import * as main_page from '../locators/main_page.json'
describe('Тesting of login.qa.studio', function () {

     it('Позитивная проверка с верным логином и паролем', function () {
        cy.visit('https://login.qa.studio/');
        cy.get(main_page.email).type('german@dolnikov.ru');
        cy.get('#pass').type('qa_one_love1');
        cy.get('#loginButton').click();
        cy.get('#messageHeader').should('be.visible');
        cy.get('#messageHeader').contains('Авторизация прошла успешно');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
        })


    it('Проверка функции восстановления пароля', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#forgotEmailButton').click();
        cy.get('#forgotForm > .header').should('be.visible');
        cy.get('#forgotForm > .header').contains('Восстановите пароль')
        cy.get('#exitRestoreButton > .exitIcon').should('be.visible');
        cy.get('#mailForgot').type('german@dolnikov.ru');
        cy.get('#restoreEmailButton').click();
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    })


    it('Негативная проверка с верным логином и неверным паролем', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('german@dolnikov.ru');
        cy.get('#pass').type('qa_one_love');
        cy.get('#loginButton').click();
        cy.get('#messageHeader').should('be.visible');
        cy.get('#messageHeader').contains('Такого логина или пароля нет');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
        })


        it('Негативная проверка с неверным логином и верным паролем', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('german1@dolnikov.ru');
        cy.get('#pass').type('qa_one_love1');
        cy.get('#loginButton').click();
        cy.get('#messageHeader').should('be.visible');
        cy.get('#messageHeader').contains('Такого логина или пароля нет');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
        })   


        it('Негативная проверка на валидацию логина и верным паролем', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('germandolnikov.ru');
        cy.get('#pass').type('qa_one_love1');
        cy.get('#loginButton').click();
        cy.get('#messageHeader').should('be.visible');
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
        })   


         it('Проверка на приведение к строчным буквам в логине с верным паролем', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('GerMan@Dolnikov.ru');
        cy.get('#pass').type('qa_one_love1');
        cy.get('#loginButton').click();
        cy.get('#messageHeader').should('be.visible');
        cy.get('#messageHeader').contains('Авторизация прошла успешно');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
        }) 
})
