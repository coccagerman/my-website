import { useContext } from 'react'
import Context from '../../../context/Context'

import myWebsitefrontPage from '../../../assets/myWebsite/frontPage.png'
import blogArticlesGif from '../../../assets/myWebsite/blogArticles.gif'

const MyWebsiteProject: React.FC = () => {

    const { darkModeOn, englishLanguage } = useContext(Context)

    return (
        <section className={darkModeOn ? 'myWebsiteProject projectsPage projectsPage-dark' : 'myWebsiteProject projectsPage projectsPage-light'}>

            <h1>{englishLanguage ? 'My website' : 'Mi sitio web'}</h1>

            <div className='intro'>
                {englishLanguage ?
                    <p>I always wanted to build my own website to showcase my projects and experience, so I defenitely enjoyed building this. Moreover, I used this project to learn how to use react with <span className='bold'>typescript</span>, test react projects with <span className='bold'>jest</span>, <span className='bold'>react testing library</span> and <span className='bold'>Cypress</span>, and consume <span className='bold'>GraphQL</span> APIs with <span className='bold'>Apollo client</span>.</p>
                :
                    <p>Siempre quise crear mi propio sitio para mostrar mis proyectos y experiencia, así que me gustó bastante crear esto. Utilicé este proyecto sobre todo para aprender cómo usar react con <span className='bold'>typescript</span>, testear proyectos de react con <span className='bold'>jest</span>, <span className='bold'>react testing library</span> y <span className='bold'>Cypress</span>,y consumir APIs <span className='bold'>GraphQL</span> con <span className='bold'>Apollo client</span>.</p>
                }
            </div>

            <img src={myWebsitefrontPage} className='frontPage' alt='Website front page' />

            <div className='characteristics'>
                {englishLanguage ?
                    <>
                        <h2>Characteristics:</h2>
                        <ul>
                            <li>Front end built with React and Typescript.</li>
                            <li>State management with Redux.</li>
                            <li>Navigation with React router.</li>
                            <li>Fully responsive design and styling with SASS.</li>
                            <li>Blog articles served through <span className='bold'>Hashnode</span> GraphQL API, consumed with Apollo client.</li>
                            <li>Unit testing with Jest and React testing library.</li>
                            <li>End to end tests with Cypress.</li>
                        </ul>
                    </>
                :
                    <>
                        <h2>Características:</h2>
                        <ul>
                            <li>Front end hecho con React y Typescript.</li>
                            <li>Gestión de estado con Redux.</li>
                            <li>Navegación con React router.</li>
                            <li>Diseño responsive y estilos con SASS.</li>
                            <li>Artículos de blog consumidos desde la API GraphQL <span className='bold'>Hashnode</span> con Apollo client.</li>
                            <li>Tests unitarios con Jest y React testing library.</li>
                            <li>Tests end to end con Cypress.</li>
                        </ul>
                    </>
                }
            </div>
            
            <div className='gif-container'>
                <img src={blogArticlesGif} className='gif' alt='Website gif' />
            </div>

            <div className='fullCode'>
                {englishLanguage ?
                    <p>Full code can be found at <a href='https://github.com/coccagerman/my-website' target='_blank'>github.com/coccagerman/my-website</a></p>
                :
                    <p>El código completo se encuentra en <a href='https://github.com/coccagerman/my-website' target='_blank'>github.com/coccagerman/my-website</a></p>
                }
            </div>

        </section>
    )
}

export default MyWebsiteProject