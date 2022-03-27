import { useContext } from 'react'
import Context from '../../../context/Context'

import shortrFrontPage from '../../../assets/shortr/shortrFrontPage.png'
import shortrResult from '../../../assets/shortr/shortrResult.png'

const ShortrProject: React.FC = () => {

    const { darkModeOn, englishLanguage } = useContext(Context)

    return (
        <section className={darkModeOn ? 'shortrProject projectsPage projectsPage-dark' : 'shortrProject projectsPage projectsPage-light'}>

            <h1>Shortr</h1>

            <div className='intro'>
                {englishLanguage ?
                    <>
                        <p>Shortr is a URL shortener I built. It's a fullstack project done with <span className='bold'>React, Axios and Styled components</span> on the front and <span className='bold'>Node/Express and PostgreSQL</span> on the back.</p>
                            
                        <p>I built this project in order to get to know Axios and Styled components, and practice my knowledge of SQL databases.</p>
                    </>  
                :
                    <>
                        <p>Shortr es un acortador URLs. Es un proyecto fullstack que desarrollé con <span className='bold'>React, Axios y Styled components</span> en el front, y <span className='bold'>Node/Express y PostgreSQL</span> en el back.</p>

                        <p>Desarrollé este proyecto para conocer Axios y Styled components, y practicar mi conocimiento de bases de datos SQL.</p>
                    </>
                }
            </div>

            <img src={shortrFrontPage} className='frontPage' alt='Website front page' />

            <div className='characteristics'>
                {englishLanguage ?
                    <>
                        <h2>Characteristics:</h2>
                        <ul>
                            <li>Front end developed with React.</li>
                            <li>State management with hooks.</li>
                            <li>Styling with Styled components.</li>
                            <li>API calls with Axios.</li>
                            <li>Back end developed with Node and Express.</li>
                            <li>Persistance using PostgreSQL.</li>
                        </ul>
                    </>
                :
                    <>
                        <h2>Características:</h2>
                        <ul>
                            <li>Front end desarrollado con React.</li>
                            <li>Gestión de estado con hooks.</li>
                            <li>Estilos con Styled components.</li>
                            <li>Llamadas a API con Axios.</li>
                            <li>Persistencia con PostgreSQL.</li>
                        </ul>
                    </>
                }
            </div>

            <div className='features'>
                {englishLanguage ?
                    <>
                        <h2>Main features:</h2>
                        <ul>
                            <li>The user can enter any URL and get a shortened version of it.</li>

                            <li>When entering the shortened URL, the user will be redirected to the original one.</li>
                            
                            <div className='gif-container'>
                                <img src={shortrResult} className='gif' alt='Login gif' />
                            </div>
                        </ul>
                    </>
                :
                    <>
                        <h2>Principales funcionalidades:</h2>
                        <ul>
                            <li>El usuario puede ingresar cualquier URL y obtener una versión acortada de la misma.</li>
                
            
                            <li>Al ingresar en la URL acortada, el usuario será redirigido a la URL original.</li>
                            
                            <div className='gif-container'>
                                <img src={shortrResult} className='gif' alt='Login gif' />
                            </div>
                        </ul>
                    </>
                }
            </div>

            <div className='fullCode'>
                {englishLanguage ?
                    <p>Full code can be found at <a href='https://github.com/coccagerman/shortr-front' rel='noreferrer' target='_blank'>github.com/coccagerman/shortr-front</a> and <a href='https://github.com/coccagerman/shortr-back' rel='noreferrer' target='_blank'>github.com/coccagerman/shortr-back</a></p>
                :
                    <p>El código completo se encuentra en <a href='https://github.com/coccagerman/shortr-front' rel='noreferrer' target='_blank'>github.com/coccagerman/shortr-front</a> y <a href='https://github.com/coccagerman/shortr-back' rel='noreferrer' target='_blank'>github.com/coccagerman/shortr-back</a></p>
                }
            </div>
            
        </section>
    )
}

export default ShortrProject