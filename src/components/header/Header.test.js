import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { toHaveTextContent } from '@testing-library/jest-dom'

import ContextProvider from '../../context/ContextProvider'
import { BrowserRouter } from 'react-router-dom'
import Header from './Header'

describe('Header', () => {

  test('Render header', () => {
    render(
      <BrowserRouter>
        <Header/>
      </BrowserRouter>
    )
    
    expect(screen.getByText('Germán Cocca')).toBeInTheDocument()
  })

  test('Changes language on click', () => {
    render(
      <ContextProvider>
        <BrowserRouter>
          <Header/>
        </BrowserRouter>
      </ContextProvider>
    )
    
    userEvent.click(screen.getByTestId('es-language-btn'))
    expect(screen.getByTestId('about-desktop-btn')).toHaveTextContent('Sobre mi')

    userEvent.click(screen.getByTestId('en-language-btn'))
    expect(screen.getByTestId('about-desktop-btn')).toHaveTextContent('About')
  })

  test('Changes darkMode on click', () => {
    render(
      <ContextProvider>
        <BrowserRouter>
          <Header/>
        </BrowserRouter>
      </ContextProvider>
    )
    
    userEvent.click(screen.getByTestId('dark-mode-toggle'))
    expect(screen.getByRole('banner').className === 'header header-light').toBe(true)
  })

})