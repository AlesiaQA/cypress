describe('Проверка авторизации', function () {

   it('Верный логин и верный пароль', function () {
        cy.visit('https://login.qa.studio/');  // Зашли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); //проверяю цвет кнопки
        cy.get('#mail').type('german@dolnikov.ru'); //ввели верный лоигн
        cy.get('#pass').type('qa_one_love1'); //ввели верный пароль
        cy.get('#loginButton').click() // нажал войти
        cy.get('#messageHeader').contains('Авторизация прошла успешно'); //проверяю,что после авт.вижу текст
        cy.get('#messageHeader').should('be.visible'); //текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //естькрестик и он виден

   })

 it('Верный логин и неверный пароль', function () {
        cy.visit('https://login.qa.studio/');  // Зашли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); //проверяю цвет кнопки
        cy.get('#mail').type('german@dolnikov.ru'); //ввели верный лоигн
        cy.get('#pass').type('qa_one_love11'); //ввели неверный пароль
        cy.get('#loginButton').click() // нажал войти
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); //проверяю,что после авт.вижу текст
        cy.get('#messageHeader').should('be.visible'); //текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //естькрестик и он виден

   })

 it('Проверка, что в логине есть @', function () {
        cy.visit('https://login.qa.studio/');  // Зашли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); //проверяю цвет кнопки
        cy.get('#mail').type('germandolnikov.ru'); //ввели логин без @
        cy.get('#pass').type('qa_one_love1'); //ввели верный пароль
        cy.get('#loginButton').click() // нажал войти
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); //проверяю,что после авт.вижу текст
        cy.get('#messageHeader').should('be.visible'); //текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //естькрестик и он виден

   })
 it('Проверка восстановления пароля', function () {
        cy.visit('https://login.qa.studio/');  // Зашли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); //проверяю цвет кнопки

        cy.get('#forgotEmailButton').click() // нажал восстановить пароль
        cy.get('#mailForgot').type('german@dolnikov.ru'); //ввел почту для восстановления
        cy.get('#restoreEmailButton').click(); //Нажал отправить код
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); //проверяю на совпад текст
        cy.get('#messageHeader').should('be.visible'); //текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //естькрестик и он виден

   })
 it(' Неверный логин и верный пароль', function () {
        cy.visit('https://login.qa.studio/');  // Зашли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); //проверяю цвет кнопки
        cy.get('#mail').type('germandolnikovv.ru'); //ввели  неверный логин
        cy.get('#pass').type('qa_one_love1'); //ввели верный пароль
        cy.get('#loginButton').click() // нажал войти
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); //проверяю,что после авт.вижу текст
        cy.get('#messageHeader').should('be.visible'); //текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //естькрестик и он виден})

 })
it('Приведение к строчным буквам', function () {
        cy.visit('https://login.qa.studio/');  // Зашли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); //проверяю цвет кнопки
        cy.get('#mail').type('GerMan@Dolnikov.ru'); //ввели  логин со строч букв
        cy.get('#pass').type('qa_one_love1'); //ввели верный пароль
        cy.get('#loginButton').click() // нажал войти
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); //проверяю,что после авт.вижу текст
        cy.get('#messageHeader').should('be.visible'); //текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //естькрестик и он виден
})
})
