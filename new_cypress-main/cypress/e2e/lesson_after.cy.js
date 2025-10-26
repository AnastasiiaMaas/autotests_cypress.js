describe('Проверка авторизации', function () {

   beforeEach('Начало теста', function () {
         cy.visit('/');
         cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');
           });

   afterEach('Конец теста', function () {
         cy.get('#exitMessageButton > .exitIcon').should('be.visible');
        });

   it('Верный пароль и верный логин', function () {
        cy.get('#mail').type('correct_email');
        cy.get('#pass').type('correct_password');
        cy.get('#loginButton').click();
        cy.get('#messageHeader').should('be.visible');
        cy.get('#messageHeader').contains('Авторизация прошла успешно');
    })

      it('Верный логин и неверный пароль', function () {
        cy.get('#mail').type('correct_email');
        cy.get('#pass').type('incorrect_password');
        cy.get('#loginButton').click();
        cy.get('#messageHeader').should('be.visible');
        cy.get('#messageHeader').contains('Такого логина или пароля нет');
    })
      it('Валидация на наличие @', function () {
        cy.get('#mail').type('email_without_@');
        cy.get('#pass').type('correct_password');
        cy.get('#loginButton').click();
        cy.get('#messageHeader').should('be.visible');
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации');
    })

       it('Восстановление пароля', function () {
        cy.get('#forgotEmailButton').click();
        cy.get('#mailForgot').type('email');
        cy.get('#restoreEmailButton').click();
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail');
    })
})


// npx cypress run --spec cypress/e2e/poke.cy.js --browser chrome
