describe('ContactPage', () => {
    it('Renders correctly', () => {
        cy.visit('http://localhost:3000/contact')
        cy.contains('To contact me, drop me a message at coccagerman@gmail.com')
    })

    it('Blog btn redirects to /blog', () => {
        cy.get('.btn-container button').contains('Blog').click()
        cy.url().should('include', '/blog')
    })

    it('Curriculum btn redirects to /curriculum', () => {
        cy.visit('http://localhost:3000/contact')
        cy.get('.btn-container button').contains('Curriculum').click()
        cy.url().should('include', '/curriculum')
    })
    
    it('Language toggle works as expected', () => {
        cy.visit('http://localhost:3000/contact')

        cy.get('.desktop-language-selector button').contains('ES').click()
        cy.get('.email-container').contains('Para contactarme, escribime a coccagerman@gmail.com')

        cy.get('.desktop-language-selector button').contains('EN').click()
        cy.get('.email-container').contains('To contact me, drop me a message at coccagerman@gmail.com')
    })

    it('Darkmode toggle works as expected', () => {
        cy.get('.dark-mode-toggle-container').click()
        cy.get('section').should('have.class', 'contactPage contactPage-light').should('have.css', 'background-color', 'rgb(255, 255, 255)')

        cy.get('.dark-mode-toggle-container').click()
        cy.get('section').should('have.class', 'contactPage contactPage-dark').should('have.css', 'background-color', 'rgb(31, 32, 40)')
    })
})