import { render, screen } from '@testing-library/react'
import { toBeInTheDocument } from '@testing-library/jest-dom'

import ContextProvider from '../../context/ContextProvider'
import { BrowserRouter } from 'react-router-dom'
import BlogPage from './BlogPage'

describe('BlogPage', () => {

  test('Render blog page', () => {
    render(
      <ContextProvider>
        <BrowserRouter>
          <BlogPage/>
        </BrowserRouter>
      </ContextProvider>
    )

    expect(screen.getByText('In this page you can see some of the last articles I wrote.')).toBeInTheDocument()
  })

})