import { render, screen } from '@testing-library/react'
import { toBeInTheDocument } from '@testing-library/jest-dom'

import ContextProvider from '../../context/ContextProvider'
import { gql } from '@apollo/client'
import { MockedProvider } from '@apollo/client/testing'

import { BrowserRouter } from 'react-router-dom'
import BlogPage from './BlogPage'

const GET_USER_ARTICLES = gql `
    query GetUserArticles($page: Int!) {
        user(username: "gercocca") {
            publication {
                posts(page: $page) {
                    title
                    dateAdded
                    coverImage
                    contentMarkdown
                }
            }
        }
    }
  `

const mockResponse = [
  {
    request: {
      query: GET_USER_ARTICLES,
      variables: { page: 0 }
    },
    result: {
      data: {
        user: {
          __typename: "User",
          publication: {
            __typename: "Publication",
            posts: [
              {
                contentMarkdown: "This is a test post.",
                coverImage: "test.png",
                dateAdded: "2022-01-21T01:36:04.241Z",
                title: "Test post title",
                __typename: "Post"
              }
            ]
          }
        }
      }
    }
  }
]

const mockErrorResponse = [
  {
    request: {
      query: GET_USER_ARTICLES,
      variables: { page: 0 }
    },
    error: new Error('An error occurred')
  }
]

describe('BlogPage', () => {

  beforeEach(() => render(
    <MockedProvider mocks={mockResponse}>
      <ContextProvider>
        <BrowserRouter>
          <BlogPage/>
        </BrowserRouter>
      </ContextProvider>
    </MockedProvider>
  ))

  test('Render blog page', () => {
    expect(screen.getByText('In this page you can see some of the last articles I wrote. To see all my articles you can visit')).toBeInTheDocument()
  })

  test('Loading message is displayed', () => expect(screen.getByText('Loading ...')).toBeInTheDocument())

  test('Blog articles are fetched', async () => {

    await new Promise(resolve => setTimeout(resolve, 0))
    expect(screen.getByText('Test post title')).toBeInTheDocument()
  })

})

describe('BlogPage - On error', () => {
  test('Error message is displayed on fetch error', async () => {
    render(
      <MockedProvider mocks={mockErrorResponse}>
        <ContextProvider>
          <BrowserRouter>
            <BlogPage/>
          </BrowserRouter>
        </ContextProvider>
      </MockedProvider>
    )

    await new Promise(resolve => setTimeout(resolve, 0))

    expect(screen.getByText('Ups... Seems we had a problem when trying to load the articles. Prease refresh the page.')).toBeInTheDocument()
  })
})