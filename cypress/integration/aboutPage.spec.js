describe('AboutPage', () => {
    it('Renders correctly', () => {
        cy.visit('http://localhost:3000/')
        cy.contains("My name is Germán and I'm a fullstack developer from Buenos Aires, Argentina.")
    })

    it('MyStack btn redirects to corresponding section', () => {
        cy.get('.nextSection-cta').click()
        cy.url().should('include', '#stack')
    })

    it('Projects btn redirects to /projects', () => {
        cy.get('.btn-container button').contains('Projects').click()
        cy.url().should('include', '/projects')
    })

    it('Blog btn redirects to /blog', () => {
        cy.visit('http://localhost:3000/')
        cy.get('.btn-container button').contains('Blog').click()
        cy.url().should('include', '/blog')
    })

    it('Language toggle works as expected', () => {
        cy.visit('http://localhost:3000/')

        cy.get('.desktop-language-selector button').contains('ES').click()
        cy.get('.firstParagraph').contains('Mi nombre es Germán y soy un desarrollador full stack de Buenos Aires, Argentina.')

        cy.get('.desktop-language-selector button').contains('EN').click()
        cy.get('.firstParagraph').contains("My name is Germán and I'm a fullstack developer from Buenos Aires, Argentina.")
    })

    it('Darkmode toggle works as expected', () => {
        cy.get('.dark-mode-toggle-container').click()
        cy.get('section').should('have.class', 'aboutPage aboutPage-light').should('have.css', 'background-color', 'rgb(255, 255, 255)')

        cy.get('.dark-mode-toggle-container').click()
        cy.get('section').should('have.class', 'aboutPage aboutPage-dark').should('have.css', 'background-color', 'rgb(31, 32, 40)')
    })

    it('Mobile version renders correctly', () => {
        cy.viewport('iphone-6')
        cy.get('.textAndPicture img').should('have.css', 'display', 'none')
        cy.get('.nextSection-cta').should('have.css', 'display', 'none')
    })
})