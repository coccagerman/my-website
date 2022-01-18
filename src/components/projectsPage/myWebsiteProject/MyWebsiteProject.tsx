import { useContext } from 'react'
import Context from '../../../context/Context'
import myWebsitefrontPage from '../../../assets/myWebsite/frontPage.png'
import blogArticlesGif from '../../../assets/myWebsite/blogArticles.gif'

const MyWebsiteProject: React.FC = () => {

    const { darkModeOn, englishLanguage } = useContext(Context)

    return (
        <section className={darkModeOn ? 'myWebsiteProject projectsPage projectsPage-dark' : 'myWebsiteProject projectsPage projectsPage-light'}>

            <div className='intro'>
                {englishLanguage ?
                    <p>I always wanted to build my own website to showcase my projects and experience, so I defenitely enjoyed building this. Moreover, I used this project to learn how to use react with <span className='bold'>typescript</span>, test react projects with <span className='bold'>jest</span> and <span className='bold'>react testing library</span> and consume <span className='bold'>GraphQL</span> APIs with <span className='bold'>Apollo client</span>.</p>
                :
                    <p>Siempre quise crear mi propio sitio para mostrar mis proyectos y experiencia, así que disfruté bastante con este proyecto. Utilicé este proyecto sobre todo para aprender cómo usar react con <span className='bold'>typescript</span>, testear proyectos de react con <span className='bold'>jest</span> y <span className='bold'>react testing library</span> y consumir APIs <span className='bold'>GraphQL</span> con <span className='bold'>Apollo client</span>.</p>
                }
            </div>

            <img src={myWebsitefrontPage} className='frontPage' alt='Website front page' />

            <div className='features'>
                {englishLanguage ?
                    <>
                        <p>Main features:</p>
                        <ul>
                            <li>Front end built with react and typescript.</li>
                            <li>State management with redux.</li>
                            <li>Navigation with react router.</li>
                            <li>Fully responsive design and styling with SASS.</li>
                            <li>Blog articles served through <span className='bold'>Hashnode</span> GraphQL API, consumed with Apollo client.</li>
                            <li>Tested with jest and react testing library.</li>
                        </ul>
                    </>
                :
                    <>
                        <p>Principales características:</p>
                        <ul>
                            <li>Front end hecho con react y typescript.</li>
                            <li>Gestión de estado con redux.</li>
                            <li>Navegación con react router.</li>
                            <li>Diseño responsive y estilos con SASS.</li>
                            <li>Artículos de blog consumidos desde la API GraphQL <span className='bold'>Hashnode</span> con Apollo client.</li>
                            <li>Testeado con jest y react testing library.</li>
                        </ul>
                    </>
                }
            </div>
            
            <div className='gif-container'>
                <img src={blogArticlesGif} className='gif' alt='Website gif' />
            </div>

        </section>
    )
}

export default MyWebsiteProject