describe('Проверка авторизации', function () {

    it('Верный логин и верный пароль', function () {
         cy.visit('https://login.qa.studio/'); // Зашли на сайт
         cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Проверяю цыет кнопки Восстановить пароль
         cy.get('#mail').type('german@dolnikov.ru'); // Ввели верный логин
         cy.get('#pass').type('iLoveqastudio1'); // Ввели верный пароль
         cy.get('#loginButton').click(); // Нажал кнопку Войти
         cy.get('#messageHeader').contains('Авторизация прошла успешно'); // Проверяю, что после авт. вижу текст
         cy.get('#messageHeader').should('be.visible'); // Текст виден
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден
        })

        it('Верный логин и неверный пароль', function () {
            cy.visit('https://login.qa.studio/'); // Зашли на сайт
            cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Проверяю цыет кнопки Восстановить пароль
            cy.get('#mail').type('german@dolnikov.ru'); // Ввели верный логин
            cy.get('#pass').type('iLoveqastudio10'); // Ввели неверный пароль
            cy.get('#loginButton').click(); // Нажал кнопку Войти
            cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Проверяю, что после авт. вижу текст
            cy.get('#messageHeader').should('be.visible'); // Текст виден
            cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден
           })

           it('Неверный логин и верный пароль', function () {
            cy.visit('https://login.qa.studio/'); // Зашли на сайт
            cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Проверяю цыет кнопки Восстановить пароль
            cy.get('#mail').type('valera@dolnikov.ru'); // Ввели верный логин
            cy.get('#pass').type('iLoveqastudio1'); // Ввели неверный пароль
            cy.get('#loginButton').click(); // Нажал кнопку Войти
            cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Проверяю, что после авт. вижу текст
            cy.get('#messageHeader').should('be.visible'); // Текст виден
            cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден
           })

           it('Проверка, что в логине есть @', function () {
            cy.visit('https://login.qa.studio/'); // Зашли на сайт
            cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Проверяю цыет кнопки Восстановить пароль
            cy.get('#mail').type('germandolnikov.ru'); // Ввели логин без @
            cy.get('#pass').type('iLoveqastudio1'); // Ввели верный пароль
            cy.get('#loginButton').click(); // Нажал кнопку Войти
            cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); // Проверяю, что после авт. вижу текст
            cy.get('#messageHeader').should('be.visible'); // Текст виден
            cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден
           })

           it('Проверка восстановления пароля', function () {
            cy.visit('https://login.qa.studio/'); // Зашли на сайт
            cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Проверяю цыет кнопки Восстановить пароль
            
            cy.get('#forgotEmailButton').click(); // Нажал кнопку Восстановить пароль
            cy.get('#mailForgot').type('valera@mail.ru'); // Ввел почту для восстановления
            cy.get('#restoreEmailButton').click(); // Нажал на кнопку Отправить код
            cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); // Проверяю, что после авт. вижу текст
            cy.get('#messageHeader').should('be.visible'); // Текст виден
            cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден
           })

           it('Проверку на приведение к строчным буквам в логине', function () {
            cy.visit('https://login.qa.studio/'); // Зашли на сайт
            cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Проверяю цыет кнопки Восстановить пароль
            cy.get('#mail').type('gerMan@dolnikov.ru'); // Ввели верный логин
            cy.get('#pass').type('iLoveqastudio1'); // Ввели верный пароль
            cy.get('#loginButton').click(); // Нажал кнопку Войти
            cy.get('#messageHeader').contains('Авторизация прошла успешно'); // Проверяю, что после авт. вижу текст
            cy.get('#messageHeader').should('be.visible'); // Текст виден
            cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден
           })
 })
 