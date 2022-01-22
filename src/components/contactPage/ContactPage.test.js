import { render, screen } from '@testing-library/react'
import { toBeInTheDocument } from '@testing-library/jest-dom'

import ContextProvider from '../../context/ContextProvider'
import { BrowserRouter } from 'react-router-dom'
import ContactPage from './ContactPage'

describe('ContactPage', () => {

  test('Render contact page', () => {
    render(
      <ContextProvider>
        <BrowserRouter>
          <ContactPage/>
        </BrowserRouter>
      </ContextProvider>
    )

    expect(screen.getByText('To contact me, drop me a message at')).toBeInTheDocument()
  })

})