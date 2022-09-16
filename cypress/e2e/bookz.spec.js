/// <reference types="cypress" /> 

describe('newbookz first suite', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
      })
      
      it.skip('новые книги за сегодня', function () {
        cy.visit('https://new.bookz.ru/')
        cy.get('.tmenu').contains('новинки книг').click()
        let date = new Date()
        let newDate = date.toLocaleString('fr-CA', {year: 'numeric', month: 'numeric', day: 'numeric'}) 
        cy.get('[class="item item_one"]').eq(0).find('.date_added').should('contain', newDate)
      })

      it('title страницы книги', () => {
        cy.visit('https://bookz.ru/authors/bredberi-rei/vino-iz-_147.html') 
        cy.get('title').should('contain', 'Вино из одуванчиков (Рэй Брэдбери) - скачать книгу в FB2, EPUB, PDF на Bookz')
      })

      it('title страницы автора', () => {
        cy.visit('https://bookz.ru/authors/bredberi-rei.html') 
        cy.get('title').should('contain', 'Рэй Брэдбери скачать книги бесплатно, книги автора Рэй Брэдбери')
      })
 
      it('Неизменность страницы чтения онлайн', () => {
        cy.visit('https://bookz.ru/authors/4aldini-robert/chaldinir01/1-chaldinir01.html') 
        cy.get('#selectable-content').should('contain', 'Свой непроходящий интерес к хитросплетениям социального влияния он объясняет тем, что вырос в итальянской семье, но преимущественно польском окружении, в исторически немецком городе Милуоки, расположенном в «сельском» штате.')
      })
      
      it('Доступность главной', () => {
        cy.request('https://bookz.ru')
        .its('status')
        .should('eq', 200)
      })
      it.only('Доступность страницы книги', () => {
        cy.request('https://bookz.ru/authors/bredberi-rei/vino-iz-_147.html')
        .its('status')
        .should('eq', 200)
      })

     it('robots.txt', () => {
      cy.request('https://bookz.ru/robots.txt')
      .its('body').should('contain', 'User-agent: *\nDisallow: *?*\nDisallow: /dl2.php\nDisallow: /index.php\nDisallow: /out.php\nDisallow: /search.php\nDisallow: /search_by_google.php\nDisallow: /links.php\nDisallow: /404.php\nDisallow: /outsource/\nDisallow: /func/\nDisallow: /demo/\nDisallow: /rss/\nDisallow: /book.php\nDisallow: /gettrial/\nDisallow: /genres/*-test.html\nAllow: /*?page=\nAllow: /*.css\nAllow: /*.js\n\nUser-agent: Mediapartners-Google\nDisallow:\n\nUser-agent: AhrefsBot\nDisallow: /')
      })

    })
  