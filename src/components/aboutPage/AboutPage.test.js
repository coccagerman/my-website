import { render, screen } from '@testing-library/react'
import { toBeInTheDocument } from '@testing-library/jest-dom'

import ContextProvider from '../../context/ContextProvider'
import { BrowserRouter } from 'react-router-dom'
import AboutPage from './AboutPage'

describe('AboutPage', () => {

  test('Render About page', () => {
    render(
      <ContextProvider>
        <BrowserRouter>
          <AboutPage/>
        </BrowserRouter>
      </ContextProvider>
    )

    expect(screen.getByText("My name is Germán and I'm a fullstack developer from Buenos Aires, Argentina.")).toBeInTheDocument()
  })

})