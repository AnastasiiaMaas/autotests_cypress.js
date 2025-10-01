describe('Тesting of pokemonbattle', function () {

     it('Покупка аватара', function () {
        cy.visit('https://pokemonbattle.ru/');
        cy.get('#k_email').type('USER_LOGIN');
        cy.get('#k_password').type('USER_PASSWORD');
        cy.get('.MuiButton-root').click();
        cy.wait(1000);
        cy.get('.header_card_trainer').click();
        cy.wait(1000);
        cy.get('[data-qa="shop"] > #dropdown > img').click();
        cy.get(':nth-child(1) > .shop__button').click();
        cy.get('.payment_form_card_form > :nth-child(2) > .style_1_base_input').type('4620869113632996');
        cy.get(':nth-child(1) > .style_1_base_input').type('1226');
        cy.get('.payment_form_card_form_inputs > :nth-child(2) > .style_1_base_input').type('125');
        cy.get('.payment_form_card_form_input_last > .style_1_base_input').type('NAME');
        cy.get('.style_1_base_button_payment_body > .style_1_base_button_payment').click();
        cy.wait(1000);
        cy.get('.style_1_base_input').type('56456');
        cy.get('.style_1_base_button_payment_body > .style_1_base_button_payment').click();
        cy.get('.payment_status_top_title').should('be.visible');
        cy.get('.payment_status_top_title').contains('Покупка прошла успешно');
        })
})