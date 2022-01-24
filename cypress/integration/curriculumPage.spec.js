describe('CurriculumPage', () => {
    it('Renders correctly', () => {
        cy.visit('http://localhost:3000/curriculum')
        cy.contains("I'm currently studying computer science at UAI")
    })

    it('Language toggle works as expected', () => {
        cy.get('.desktop-language-selector button').contains('ES').click()
        cy.get('.intro').contains('Soy un desarrollador full stack (typescript | react | react native | node | express) con un año de experiencia profesional.')

        cy.get('.desktop-language-selector button').contains('EN').click()
        cy.get('.intro').contains("I'm a full stack developer (typescript | react | react native | node | express) with one year of professional experience.")
    })

    it('Darkmode toggle works as expected', () => {
        cy.get('.dark-mode-toggle-container').click()
        cy.get('header').should('have.class', 'header header-light').should('have.css', 'background-color', 'rgb(255, 255, 255)')

        cy.get('.dark-mode-toggle-container').click()
        cy.get('header').should('have.class', 'header header-dark').should('have.css', 'background-color', 'rgb(0, 0, 0)')
    })

    it('Mobile version renders correctly', () => {
        cy.viewport('iphone-6')
        cy.get('.intro img').should('have.css', 'display', 'none')
    })
})