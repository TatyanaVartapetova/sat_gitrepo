/// <reference types="cypress" /> 

describe('fantasy-worlds first suite', () => {
    it('новые книиги за сегодня', () => {
        cy.visit('https://fantasy-worlds.ru/') 
        cy.wait(500)
        let date = new Date()
        const dateNow = date.toLocaleDateString()
        cy.log(dateNow)
        cy.get('nav').contains('Новинки').click()
        cy.get('.b_biblio_book_line').eq(0).find('.posted').should('contain', dateNow)
        
    })

    it('title страницы книги', () => {
        cy.visit('https://fantasy-worlds.ru/lib/id7936') 
        cy.wait(500)
        cy.get('title').should('contain', 'Книга Вторая попытка , Вячеслав  Ганич — скачать онлайн в pdf, epub, fb2, txt бесплатно в электронной библиотеке Fantasy Worlds. ')
    })

    it('title страницы автора', () => {
        cy.visit('https://fantasy-worlds.ru/author/id8376') 
        cy.wait(500)
        cy.get('title').should('contain', 'Дмитрий Николаевич Коровников - все книги скачать или читать онлайн бесплатно')
    })

    it('Неизменность страницы чтения онлайн', () => {
        cy.visit('https://fantasy-worlds.ru/lib/id8197/read') 
         cy.wait(500)
        cy.get('#page_text').should('contain', 'Под ногами – Большой Хребет, разделивший материк, а может быть, и не только материк. На той стороне другая половина мира: в небе драконы, в лесах огры, тролли, гоблины и великаны, но кто смотрит на эту мелочь, когда впереди схватки с самым страшным зверем на свете, а то и во вселенной – человеком.')
    })

    it.only('Доступность главной', () => {
        cy.request('https://fantasy-worlds.ru')
        .its('status')
        .should('eq', 200)
    })
})
