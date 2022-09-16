/// <reference types="cypress" /> 

describe('litportal first suite', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
      })
      
      it('новые книги за сегодня', function () {
        cy.visit('https://litportal.ru/')
        cy.wait(500)
        cy.get('.b_left_menu').contains('Новинки').click()
        let date = new Date()
        const dateNow = date.toLocaleDateString()
        cy.get('.book__item').eq(0).find('.book__item_date').should('contain', dateNow)
      })

      it('title страницы книги', () => {
        cy.visit('https://litportal.ru/avtory/rey-bredberi/kniga-vino-iz-oduvanchikov-942959.html') 
        cy.get('title').should('contain', 'Книга Вино из одуванчиков - скачать бесплатно в fb2, txt, pdf, epub, Рэй Дуглас Брэдбери')
      })

      it('title страницы автора', () => {
        cy.visit('https://litportal.ru/avtory/rey-bredberi/') 
        cy.get('title').should('contain', 'Рэй Дуглас Брэдбери - все книги скачать или читать онлайн бесплатно')
      })
 
      it('Неизменность страницы чтения онлайн', () => {
        cy.visit('https://litportal.ru/avtory/gregori-devid-roberts/read/page/1/kniga-shantaram-237792.html') 
        cy.get('.read_online__text').should('contain', 'В своем романе Робертc описывает то, что сам видел и пережил, но книга выходит за рамки автобиографического жанра. Да не отпугнет вас ее объем: «Шантарам» – одно из самых захватывающих повествований о человеческом искуплении в мировой литературе')
      })

      it('Доступность главной', () => {
        cy.request('https://litportal.ru')
        .its('status')
        .should('eq', 200)
      })

      it.only('Доступность страницы книги', () => {
        cy.request('https://litportal.ru/avtory/rey-bredberi/kniga-vino-iz-oduvanchikov-942959.html')
        .its('status')
        .should('eq', 200)
      })
}) 