import { render, screen } from '@testing-library/react'
import { toBeInTheDocument } from '@testing-library/jest-dom'

import ContextProvider from '../../context/ContextProvider'
import { BrowserRouter } from 'react-router-dom'
import ProjectsPage from './ProjectsPage'
import HelprProject from './helprProject/HelprProject'
import MyWebsiteProject from './myWebsiteProject/MyWebsiteProject'

describe('ProjectsPage', () => {

  test('Render projects page', () => {
    const component = render(
      <ContextProvider>
        <BrowserRouter>
          <ProjectsPage/>
        </BrowserRouter>
      </ContextProvider>
    )

    expect(screen.getByText("Even though now that I have a full time job as a developer, I'm always working on some side project.")).toBeInTheDocument()
  })

  test('Render Helpr card', () => {
    const component = render(
      <ContextProvider>
        <BrowserRouter>
          <ProjectsPage/>
        </BrowserRouter>
      </ContextProvider>
    )

    expect(screen.getByText("Helpr is a portal that connects NGOs with volunteers interested in colaborating with their causes.")).toBeInTheDocument()
  })

  test('Render MyWebsite card', () => {
    const component = render(
      <ContextProvider>
        <BrowserRouter>
          <ProjectsPage/>
        </BrowserRouter>
      </ContextProvider>
    )

    expect(screen.getByText("This website contains information about myself, my blog articles and the projects I build.")).toBeInTheDocument()
  })

  test('Render Helpr page', () => {
    const component = render(
      <ContextProvider>
        <BrowserRouter>
          <HelprProject/>
        </BrowserRouter>
      </ContextProvider>
    )

    expect(screen.getByText("I built this as an educational project and the site isn't live now, but I'd like to ship it to production some time in the future.")).toBeInTheDocument()
  })

  test('Render MyWebsite page', () => {
    const component = render(
      <ContextProvider>
        <BrowserRouter>
          <MyWebsiteProject/>
        </BrowserRouter>
      </ContextProvider>
    )

    expect(screen.getByText("Tested with Jest and React testing library.")).toBeInTheDocument()
  })

})