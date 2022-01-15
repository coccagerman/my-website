import { useState } from 'react'
import { useContext } from 'react'
import Context from '../../context/Context'
import { useQuery, gql } from '@apollo/client'
import Article from './article/Article'
import Accordion from 'react-bootstrap/Accordion'
import ErrorMsg from './errorMsg/ErrorMsg'

const BlogPage: React.FC = () => {

    const { darkModeOn, englishLanguage } = useContext(Context)

    const [blogPosts, setBlogPosts] = useState([])

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

    const { loading, error, data } = useQuery(GET_USER_ARTICLES, { variables: { page: 0 } })

    if (loading) console.log('loading ' + loading)
    if (error) {
        console.log('error')
        console.log(error)
    }

    interface BlogArticle {
        __typename: string,
        title: string,
        dateAdded: string,
        coverImage: string,
        contentMarkdown: string
    }    

    return (
        <section className={darkModeOn ? 'blogPage blogPage-dark' : 'blogPage blogPage-light'}>
            <div className='page-container'>
                {!error ? 
                    <div className='intro'>
                        {englishLanguage ?
                            <>
                                <p>I think one of the best ways to deepen your knowledge of any subject is to explain it to someone else. This is the purpose of my blog. Here I explore and write the the different topics that I go through in my learning path as a developer.</p>

                                <p>In this page you can see some of the last articles I wrote. To see all my articles you can visit <a href='https://gercocca.hashnode.dev/' target='_blank'>gercocca.hashnode.dev</a></p>
                            </>
                        :
                            <>
                                <p>Creo que una de las mejores maneras de aprender algo nuevo es tratar de explicárselo a otra persona. Esta es la finalidad de mi blog. Acá voy registrando y explorando en profundidad los distintos temas que voy recorriendo en mi camino de aprendizaje como desarrollador.</p>

                                <p>En esta página podés ver algunos de los últimos artículos que escribí. Para ver todos mis artículos podés visitar <a href='https://gercocca.hashnode.dev/' target='_blank'>gercocca.hashnode.dev</a></p>

                                <p>pd: Escribo en inglés para llegar a un público más amplio y matener fluidez con el idioma. ;)</p>
                            </>
                        }
                    </div>
                :
                    null
                }
                
                <div className='posts'>
                {data ?
                    <Accordion>
                        {data.user.publication.posts.map((post: BlogArticle, i: number) => <Article blogArticle={post} key={i} index={i} />)}   
                    </Accordion>
                :
                    loading ?
                        <div className='loader'>
                            <div className='big-circle'>
                                <div className='small-circle'></div>
                            </div>
                            <p>{englishLanguage ? 'Loading ...' : 'Cargando ...'}</p>
                        </div>
                    :
                        <ErrorMsg />
                }
                </div>
            </div>
        </section>
    )
}

export default BlogPage