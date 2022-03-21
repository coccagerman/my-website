import { useContext } from 'react'
import Context from '../../../context/Context'

import helprfrontPage from '../../../assets/helpr/frontPage.png'
import loginGif from '../../../assets/helpr/login.gif'
import profileGif from '../../../assets/helpr/profile.gif'
import searchParametersGif from '../../../assets/helpr/searchParameters.gif'
import searchTextGif from '../../../assets/helpr/searchText.gif'
import chatGif from '../../../assets/helpr/chat.gif'

const HelprProject: React.FC = () => {

    const { darkModeOn, englishLanguage } = useContext(Context)

    return (
        <section className={darkModeOn ? 'helprProject projectsPage projectsPage-dark' : 'helprProject projectsPage projectsPage-light'}>

            <h1>Helpr</h1>

            <div className='intro'>
                {englishLanguage ?
                    <>
                        <p>Helpr is my first full stack project. After spending weeks learning about <span className='bold'>node</span>, <span className='bold'>express</span> and <span className='bold'>mongoDb</span>, I wanted to build something that grouped pretty much everything I've learned so far about web development, and I came up with this idea.</p>
                            
                        <p>Helpr is a website that aims to connect NGOs with volunteers interested in colaborating with their causes. Think of it as a job portal but for volunteers. The idea ocurred to me because as a learning developer I would have loved to work as a volunteer for any company, just to get in touch with professionals and learn from them. But to my surprise, there are not many places where you can find this kind of opportunities. And It's the same for NGOs that look for volunteers. So why not build a portal where both parts can meet each other?</p>

                        <p>I built this as an educational project and the site isn't live now, but I'd like to ship it to production some time in the future.</p>
                    </>  
                :
                    <>
                        <p>Helpr es mi primer proyecto full stack. Después de pasar semanas aprendiendo sobre <span className='bold'>node</span>, <span className='bold'>express</span> y <span className='bold'>mongoDb</span>, quería construir algo que agrupase casi todo lo que aprendí de desarrollo web hasta ahora, y se me ocurrió esta idea.</p>
                            
                        <p>Helpr es un sitio que busca conectar ONGs con voluntarios interesados en colaborar en sus causas. Se lo puede pensar como un portal de empleos, pero para voluntarios. La idea se me ocurrió porque cuando comencé a aprender sobre programación, me hubiese encantado poder hacer de voluntario en cualquier empresa u organización, como una manera de adquirir experiencia, contactarme con profesionales y aprender de proyectos nuevos. Pero para mi sorpresa, no hay muchos lugares donde encontrar estas oportunidades, y lo mismo sucede para ONGs que buscan voluntarios. Así que, ¿por qué no crear un espacio donde ambas partes puedan encontrarse?</p>

                        <p>Desarrollé este sitio más que nada como un proyecto de aprendizaje, pero me encantaría llevarlo a producción en algún momento futuro.</p>
                    </>
                }
            </div>

            <img src={helprfrontPage} className='frontPage' alt='Website front page' />

            <div className='characteristics'>
                {englishLanguage ?
                    <>
                        <h2>Characteristics:</h2>
                        <ul>
                            <li>Front end developed with React.</li>
                            <li>State management with hooks and context API.</li>
                            <li>Navigation with React router.</li>
                            <li>Back end developed with Node and Express.</li>
                            <li>Persistance using Mongo DB (Mongo atlas) and Mongoose.</li>
                            <li>User authentication with <span className='bold'>Passport.js</span>.</li>
                            <li>User authorization with <span className='bold'>JWT</span>.</li>
                            <li>Chat implementation using websockets (<span className='bold'>Socket.io</span>).</li>
                            <li>Text search implemented with <span className='bold'>Meilisearch</span>.</li>
                        </ul>
                    </>
                :
                    <>
                        <h2>Características:</h2>
                        <ul>
                            <li>Front end desarrollado con React.</li>
                            <li>Gestión de estado con hooks y context API.</li>
                            <li>Navegación con React Router.</li>
                            <li>Back end desarrollado con Node y Express.</li>
                            <li>Persistencia con Mongo DB (Mongo atlas) y Mongoose.</li>
                            <li>Autenticación de usuarios con <span className='bold'>Passport.js</span>.</li>
                            <li>Autorización de usuarios con <span className='bold'>JWT</span>.</li>
                            <li>Chat entre usuarios implementado con websockets (<span className='bold'>Socket.io</span>).</li>
                            <li>Búsqueda de texto implementada con <span className='bold'>Meilisearch</span>.</li>
                        </ul>
                    </>
                }
            </div>

            <div className='features'>
                {englishLanguage ?
                    <>
                        <h2>Main features:</h2>
                        <ul>
                            <li>The user can register and login using email and password, or social networks accounts (Google, Facebook or Twitter).</li>

                            <div className='gif-container'>
                                <img src={loginGif} className='gif' alt='Login gif' />
                            </div>

                            <li>At registration the user has to select its account type: Volunteer or Organization.</li>
                            <li>The user has a profile section where they can load their personal data and a profile picture.</li>

                            <div className='gif-container'>
                                <img src={profileGif} className='gif' alt='Profile gif' />
                            </div>

                            <li>Volunteers can search for job opportunities based on different parameters such as type of project, publication date, hour dedication, project duration and the interests declared by the publisher.</li>

                            <div className='gif-container'>
                                <img src={searchParametersGif} className='gif' alt='Search parameters gif' />
                            </div>

                            <li>NGOs can search for volunteers based on different parameters such as the user's education classification and state, and the interests declared by them.</li>
                            <li>Free text search is also enabled in both cases.</li>

                            <div className='gif-container'>
                                <img src={searchTextGif} className='gif' alt='Search text gif' />
                            </div>

                            <li>Results are paginated according to the parameters selected by the user.</li>
                            <li>Volunteers can apply to job publications.</li>
                            <li>NGOs have a dashboard for each job publication they make, where they can see the candidates that have applied and reject the application or contact the candidate if they'd like.</li>
                            <li>When NGOs decide to contact a candidate, a chatroom is enabled between both users.</li>

                            <div className='gif-container'>
                                <img src={chatGif} className='gif' alt='Chat gif' />
                            </div>

                        </ul>
                    </>
                :
                    <>
                        <h2>Principales funcionalidades:</h2>
                        <ul>
                            <li>El usuario puede registrarse y loggearse usando email y password, o cuentas de redes sociales (Google, Facebook o Twitter).</li>
                
                            <div className='gif-container'>
                                <img src={loginGif} className='gif' alt='Login gif' />
                            </div>
                
                            <li>Al registrarse el usuario debe seleccionar su tipo de cuenta: Voluntario u Organización.</li>
                            <li>Cada usuario tiene una sección de perfil donde puede cargar su información y una foto de perfil.</li>

                            <div className='gif-container'>
                                <img src={profileGif} className='gif' alt='Profile gif' />
                            </div>
                            
                            <li>Los voluntarios pueden buscar oportunidades de voluntariado según distintos parámetros como tipo de proyecto, fecha de publicación, dedicación horaria, duración del proyecto y los intereses declarados por el publicante.</li>

                            <div className='gif-container'>
                                <img src={searchParametersGif} className='gif' alt='Search parameters gif' />
                            </div>

                            <li>Las ONG pueden buscar voluntarios basándose en diferentes parámetros como el tipo y estado de la educación del usuario, y los intereses declarados.</li>
                            <li>La búsqueda por texto libre está habilitada también en ambos tipos de búsqueda.</li>

                            <div className='gif-container'>
                                <img src={searchTextGif} className='gif' alt='Search text gif' />
                            </div>

                            <li>Los resultados de la búsqueda son paginados según el parámetros seleccionado por el usuario.</li>
                            <li>Los voluntarios pueden postular a las publicaciones de oportunidades.</li>
                            <li>Las ONG tienen un panel de control por cada publicación de voluntariado que realicen. Desde acá pueden ver a los candidatos que aplicaron a su publicación, y rechazarlos o contactarlos según deseen.</li>
                            <li>Cuando las ONG deciden contactar a un candidato, se habilita una sala de chat entre ambos usuarios.</li>

                            <div className='gif-container'>
                                <img src={chatGif} className='gif' alt='Chat gif' />
                            </div>
                        </ul>
                    </>
                }
            </div>

            <div className='fullCode'>
                {englishLanguage ?
                    <p>Full code can be found at <a href='https://github.com/coccagerman/helpr-front' target='_blank'>github.com/coccagerman/helpr-front</a> and <a href='https://github.com/coccagerman/helpr-back' target='_blank'>github.com/coccagerman/helpr-back</a></p>
                :
                    <p>El código completo se encuentra en <a href='https://github.com/coccagerman/helpr-front' target='_blank'>github.com/coccagerman/helpr-front</a> y <a href='https://github.com/coccagerman/helpr-back' target='_blank'>github.com/coccagerman/helpr-back</a></p>
                }
            </div>
            
        </section>
    )
}

export default HelprProject