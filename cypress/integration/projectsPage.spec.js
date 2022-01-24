describe('ProjectsPage', () => {
    it('Renders correctly', () => {
        cy.visit('http://localhost:3000/projects')
        cy.contains("Even though now that I have a full time job as a developer, I'm always working on some side project.")
    })

    it('Helpr card redirects to corresponding page and it renders correctly', () => {
        cy.get('.cards-container a').contains('Helpr').click()
        cy.url().should('include', '/helpr')

        cy.contains('Helpr is my first full stack project. After spending weeks learning about node, express and mongoDb')
    })

    it('MyWebsite card redirects to corresponding page and it renders correctly', () => {
        cy.visit('http://localhost:3000/projects')

        cy.get('.cards-container a').contains('My website').click()
        cy.url().should('include', '/myWebsite')

        cy.contains('I always wanted to build my own website to showcase my projects and experience, so I defenitely enjoyed building this.')
    })

    it('Language toggle works as expected', () => {
        cy.visit('http://localhost:3000/projects')

        cy.get('.desktop-language-selector button').contains('ES').click()
        cy.get('.intro').contains('Lo hago porque me divierte y porque me encanta codear, y también porque es una excelente manera de aprender nuevas tecnologías constantemente')

        cy.get('.desktop-language-selector button').contains('EN').click()
        cy.get('.intro').contains('Not only I find it fun, but this also helps me to constantly learn new things and better understand different topics.')
    })

    it('Darkmode toggle works as expected', () => {
        cy.get('.dark-mode-toggle-container').click()
        cy.get('section').should('have.class', 'projectsPage projectsPage-light').should('have.css', 'background-color', 'rgb(255, 255, 255)')

        cy.get('.dark-mode-toggle-container').click()
        cy.get('section').should('have.class', 'projectsPage projectsPage-dark').should('have.css', 'background-color', 'rgb(31, 32, 40)')
    })
})