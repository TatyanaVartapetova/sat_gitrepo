/// <reference types="cypress" /> 

describe('kuchaknig first suite', () => {
    it('новые книги за сегодня', () => {
        cy.visit('https://kuchaknig.org') 
        let date = new Date()
        const dateNow = date.toLocaleDateString()
        cy.get('#custom_menu').contains('Новинки').click()
        cy.get('.book_card_date').eq(0).find('span').should('contain', dateNow)
    })
    
    it('title страницы книги', () => {
        cy.visit('https://kuchaknig.org/avtor/ken-kizi/kniga-nad-kukushkinym-gnezdom-19028/') 
        cy.get('title').should('contain', 'Книга Над кукушкиным гнездом - читать онлайн бесплатно без регистрации, Кен Элтон Кизи')
    })

    it('title страницы автора', () => {
        cy.visit('https://kuchaknig.org/avtor/aleksandra-marinina/') 
        cy.get('title').should('contain', 'Александра Маринина скачать бесплатно все книги в txt, pdf, DjVu, rtf или читать онлайн')
    })

    it('Неизменность страницы чтения онлайн', () => {
        cy.visit('https://kuchaknig.org/avtor/haled-hosseyni/kniga-tysyacha-siyauschih-solnc-292897/read/') 
        cy.get('#place_where_text_set').should('contain', 'Роман Халеда Хоссейни невообразимо трагичен и неотразимо прекрасен, как ветхозаветная история. Читатели, которых подкупил его первый роман «Бегущий за ветром», полюбят и «Тысячу сияющих солнц».')
    })

    it.only('Доступность главной', () => {
        cy.request('https://kuchaknig.org')
        .its('status')
        .should('eq', 200)
    })
})