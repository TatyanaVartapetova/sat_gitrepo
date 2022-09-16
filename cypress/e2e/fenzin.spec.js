/// <reference types="cypress" /> 

describe('fenzin first suite', () => {
    /* it.skip('login, search and review test', () => {
     
             cy.visit('https://fenzin.org/') 
             cy.get('nav').find('#p_auth').click()
             cy.get('form').find('.login input').type('vartapetova')
             cy.get('form').find('[type="password"]').type('Mnododeneg26')
             cy.get('form').find('[value="Войти"]').click()
 
             cy.wait(500)
             cy.get('nav ul li').eq(3).should('contain', 'Выйти')
             cy.wait(500)
             cy.get('#menu_search').find('[placeholder="Найти"]').type('Жизни, которые мы не прожили')
             cy.get('#menu_search').find('[value="Найти"]').click()
             cy.get('.search_result').find('a').eq(0).click()
             cy.wait(500)
             cy.get('#bookReviewForm').find('textarea').type('хорошая книга')
             cy.get('#bookReviewForm').find('[value="Отправить"]').click()
             cy.wait(500)
             cy.get('.sb_wrap #review_send').should('be.visible')
         }) */
 
 
     it('новые книги за сегодня', () => {
         cy.visit('https://fenzin.org') 
         cy.wait(500)
         let date = new Date()
         const dateNow = date.toLocaleDateString()
         cy.contains('Последние новинки библиотеки').click()
         cy.get('.book-row_list .book_param').eq(0).find('.update').should('contain', dateNow)
         cy.get('nav ul li').eq(0).click()
         cy.get('.book-row_list .book_param').eq(0).find('.update').should('contain', dateNow)
         cy.get('#menu_library strong').parents('li').find('a').eq(0).click()
         cy.get('.bd_desc .date_add').should('contain', dateNow)
     })
     
     it('Неизменность страницы чтения онлайн', () => {
         cy.visit('https://fenzin.org/online/16792') 
         cy.wait(500)
         cy.get('#chid').should('contain', 'На рассвете я вошел в темную спальню Теххи и оцепенел от ужаса: из лиловых утренних сумерек на меня уставились пустые светлые глаза какого-то незнакомого существа.')
     })
     
     it('title страницы книги', () => {
             cy.visit('https://fenzin.org/book/16792') 
             cy.wait(500)
             cy.get('title').should('contain', 'Наваждения (Макс  Фрай) – скачать в fb2, epub, pdf на Fenzin')
             cy.visit('https://fenzin.org/book/35835') 
             cy.get('title').should('contain', 'Зулейха открывает глаза (Гузель Шамилевна Яхина) – скачать в fb2, epub, pdf на Fenzin')
           })
 
     it('title страницы автора', () => {
         cy.visit('https://fenzin.org/library/author/779') 
         cy.wait(500)
         cy.get('title').should('contain', 'Анджей  Сапковский - список всех книг автора скачать или читать онлайн бесплатно')
     })
 
     it.only('Доступность главной', () => {
         cy.request('https://fenzin.org')
         .its('status')
         .should('eq', 200)
     })
    
    
   })