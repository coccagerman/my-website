import { useContext } from 'react'
import Context from '../../../context/Context'

import mixrFrontPage from '../../../assets/mixr/frontPage.png'
import loginPage from '../../../assets/mixr/login.png'
import mainScreen from '../../../assets/mixr/mainScreen.png'
import menu from '../../../assets/mixr/menu.png'
import profile from '../../../assets/mixr/profile.png'
import cocktailDetail from '../../../assets/mixr/cocktailDetail.png'

const MixrProject: React.FC = () => {

    const { darkModeOn, englishLanguage } = useContext(Context)

    return (
        <section className={darkModeOn ? 'mixrProject projectsPage projectsPage-dark' : 'mixrProject projectsPage projectsPage-light'}>

            <h1>Mixr</h1>

            <div className='intro'>
                {englishLanguage ?
                    <>
                        <p>Mixr was my first try at mobile development. It's an app about cocktails (another hobby of mine), where users can search for recipes and publish their own.</p>
                        <p>I used this project to learn about <span className='bold'>React-native</span>, and practice my skills with <span className='bold'>Typescript</span> and <span className='bold'>Firebase</span>.</p>
                    </>
                :
                    <>
                        <p>Mixr fue mi primer proyecto de desarrollo mobile. Es una app sobre coctelería (otro hobby que tengo), donde los usuarios pueden buscar y publicar recetas de tragos.</p>
                        <p>Usé este proyecto para aprender sobre <span className='bold'>React-native</span>, y practicar mis habilidades con <span className='bold'>Typescript</span> y <span className='bold'>Firebase</span>.</p>
                    </>
                }
            </div>

            <img src={mixrFrontPage} className='frontPage' alt='Website front page' />

            <div className='characteristics'>
                {englishLanguage ?
                    <>
                        <h2>Characteristics:</h2>
                        <ul>
                            <li>Developed with React-native and Typescript.</li>
                            <li>State management with Redux.</li>
                            <li>Navigation with React navigation.</li>
                            <li>Authentication with Firebase.</li>
                            <li>Data persistance with Firestore (Firebase NoSql database).</li>
                            <li>Usage of device features (camera).</li>
                        </ul>
                    </>
                :
                    <>
                        <h2>Características:</h2>
                        <ul>
                            <li>Desarrollado con React-native y Typescript.</li>
                            <li>Gestión de estado con Redux.</li>
                            <li>Navegación con React navigation.</li>
                            <li>Autenticación con Firebase.</li>
                            <li>Persistencia de datos con Firestore (base de datos NoSql de Firebase).</li>
                            <li>Uso de device features (cámara).</li>
                        </ul>
                    </>
                }
            </div>

            <div className='features'>
                {englishLanguage ?
                    <>
                        <h2>Main features:</h2>
                        <ul>
                            <li>User can register and login with Google, Facebook or Twiter accounts.</li>
                            <div className='gif-container'><img src={loginPage} className='gif' alt='Login' /></div>

                            <li>User can publish cocktail recipes, and search for other published recipes.</li>
                            <div className='gif-container'><img src={mainScreen} className='gif' alt='Profile' /></div>

                            <li>User can upvote a recipe and add it to favorites section.</li>
                            <div className='gif-container'><img src={cocktailDetail} className='gif' alt='Search parameters' /></div>

                            <li>User has own profile page and can navigate through other user's profiles.</li>
                            <div className='gif-container'>
                                <img src={profile} className='gif' alt='Search text' />
                                <img src={menu} className='gif' alt='Search text' />
                            </div>
                        </ul>
                    </>
                :
                    <>
                        <h2>Principales funcionalidades:</h2>
                        <ul>
                            <li>El usuario puede registrarse y loggearse con cuentas de Google, Facebook o Twitter.</li>
                            <div className='gif-container'><img src={loginPage} className='gif' alt='Login' /></div>

                            <li>El usuario puede publicar recetas y buscar recetas publicadas por otros usuarios.</li>
                            <div className='gif-container'><img src={mainScreen} className='gif' alt='Profile' /></div>

                            <li>El usuario puede dar 'Me gusta' a otras recetas y añadir recetas a favoritos.</li>
                            <div className='gif-container'><img src={cocktailDetail} className='gif' alt='Search parameters' /></div>

                            <li>El usuario tiene una sección de perfil y puede navegar los perfiles de otros usuarios.</li>
                            <div className='gif-container'>
                                <img src={profile} className='gif' alt='Search text' />
                                <img src={menu} className='gif' alt='Search text' />
                            </div>
                        </ul>
                    </>
                }
            </div>
            
            <div className='fullCode'>
                {englishLanguage ?
                    <p>Full code can be found at <a href='https://github.com/coccagerman/mixr' target='_blank' rel='noreferrer'>github.com/coccagerman/mixr</a></p>
                :
                    <p>El código completo se encuentra en <a href='https://github.com/coccagerman/mixr' target='_blank' rel='noreferrer'>github.com/coccagerman/mixr</a></p>
                }
            </div>

        </section>
    )
}

export default MixrProject