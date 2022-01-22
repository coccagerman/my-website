import { render, screen } from '@testing-library/react'
import { toBeInTheDocument } from '@testing-library/jest-dom'

import ContextProvider from '../../context/ContextProvider'
import { BrowserRouter } from 'react-router-dom'
import CurriculumPage from './CurriculumPage'

describe('CurriculumPage', () => {

  test('Render curriculum page', () => {
    render(
      <ContextProvider>
        <BrowserRouter>
          <CurriculumPage/>
        </BrowserRouter>
      </ContextProvider>
    )

    expect(screen.getByText("Front end developer - Avature")).toBeInTheDocument()
  })

})