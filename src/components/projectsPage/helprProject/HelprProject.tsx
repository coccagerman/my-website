import { useContext } from 'react'
import Context from '../../../context/Context'

const HelprProject: React.FC = () => {

    const { darkModeOn, englishLanguage } = useContext(Context)

    return (
        <section className={darkModeOn ? 'projectsPage projectsPage-dark' : 'projectsPage projectsPage-light'}>

            <div className='intro'>
                {englishLanguage ?
                    <>
                        <p>Main features:</p>
                        <ul>
                            <li>Front end developed with react.</li>
                            <li>State management with hooks and context API.</li>
                            <li>Navigation with react router.</li>
                            <li>Back end developed with node and express.</li>
                            <li>Persistance using mongo DB (mongo atlas) and mongoose.</li>
                            <li>User authentication with passport.js.</li>
                            <li>User registration with email and password and social networks (Google, Facebook, Twitter).</li>
                            <li>User authorization with JWT.</li>
                            <li>Chat implementation using websockets (socket.io).</li>
                            <li>Text search implemented with meilisearch.</li>
                        </ul>
                    </>
                :
                    <>
                        <div>
                            <p>Si bien ahora tengo un trabajo full time como desarrollador, en mi tiempo libre siempre aprovecho para trabajar en algún proyecto personal. Lo hago porque me divierte y porque me encanta codear, y también porque es una excelente manera de aprender nuevas tecnologías constantemente y entender en profundidad distintos temas.</p>

                            <p>Acá podés ver algunos de los últimos proyectos que construí. Para ver todos mis proyectos podés entrar a <a href='https://github.com/coccagerman' target='_blank'>github.com/coccagerman</a>.</p>
                        </div>
                    </>
                }
            </div>
            
        </section>
    )
}

export default HelprProject