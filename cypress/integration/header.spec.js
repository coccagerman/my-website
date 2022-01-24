describe('Header', () => {
    it('Renders correctly', () => {
        cy.visit('http://localhost:3000/')
        cy.contains('Germán Cocca')

        cy.get('.hamburguer-icon').should('have.css', 'display', 'none')
    })

    it('Project btn redirects to /projects', () => {
        cy.get('.projects-desktop-btn').click()
        cy.url().should('include', '/projects')
    })

    it('Blog btn redirects to /blog', () => {
        cy.get('.blog-desktop-btn').click()
        cy.url().should('include', '/blog')
    })

    it('Curriculum btn redirects to /curriculum', () => {
        cy.get('.curriculum-desktop-btn').click()
        cy.url().should('include', '/curriculum')
    })

    it('Contact btn redirects to /contact', () => {
        cy.get('.contact-desktop-btn').click()
        cy.url().should('include', '/contact')
    })

    it('Contact btn redirects to /contact', () => {
        cy.get('.about-desktop-btn').click()
        cy.url().should('include', '/')
    })

    it('Language toggle works as expected', () => {
        cy.get('.desktop-language-selector button').contains('ES').click()
        cy.get('.contact-desktop-btn').should('have.text', 'Contacto')

        cy.get('.desktop-language-selector button').contains('EN').click()
        cy.get('.contact-desktop-btn').should('have.text', 'Contact')
    })

    it('Darkmode toggle works as expected', () => {
        cy.get('.dark-mode-toggle-container').click()
        cy.get('header').should('have.class', 'header header-light').should('have.css', 'background-color', 'rgb(255, 255, 255)')

        cy.get('.dark-mode-toggle-container').click()
        cy.get('header').should('have.class', 'header header-dark').should('have.css', 'background-color', 'rgb(0, 0, 0)')
    })

    it('Mobile version renders correctly', () => {
        cy.viewport('iphone-6')
        cy.get('.hamburguer-icon').should('have.css', 'display', 'block').click()
        cy.get('#mobile-menu').should('have.class', 'mobile-menu-active')

        cy.get('.hamburguer-icon').click()
        cy.get('#mobile-menu').should('have.class', 'mobile-menu')
    })
})