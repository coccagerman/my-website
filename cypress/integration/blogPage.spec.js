describe('BlogPage', () => {
    it('Renders correctly', () => {
        cy.visit('http://localhost:3000/blog')
        cy.contains('I think one of the best ways to deepen your knowledge of any subject is to explain it to someone else. This is the purpose of my blog.')
    })

    it('Loader is rendered until blog articles are fetched', () => {
        cy.contains('Loading ...')

    })

    it('Blog articles are rendered once fetched', () => {
        cy.get('.article')
    })

    it('Articles accordion toggles correctly', () => {

        cy.get('.accordion div h2 button').click({ multiple: true })
            .should('have.class', 'accordion-button collapsed')
            .click({ multiple: true })
            .should('have.class', 'accordion-button')

    })

    it('Language toggle works as expected', () => {
        cy.get('.desktop-language-selector button').contains('ES').click()
        cy.get('.intro').contains('En esta página podés ver algunos de los últimos artículos que escribí.')

        cy.get('.desktop-language-selector button').contains('EN').click()
        cy.get('.intro').contains('In this page you can see some of the last articles I wrote.')
    })

    it('Darkmode toggle works as expected', () => {
        cy.get('.dark-mode-toggle-container').click()
        cy.get('section').should('have.class', 'blogPage blogPage-light').should('have.css', 'background-color', 'rgb(255, 255, 255)')

        cy.get('.dark-mode-toggle-container').click()
        cy.get('section').should('have.class', 'blogPage blogPage-dark').should('have.css', 'background-color', 'rgb(31, 32, 40)')
    })
})