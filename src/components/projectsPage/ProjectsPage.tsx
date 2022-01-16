import { useContext } from 'react'
import Context from '../../context/Context'
import Card from 'react-bootstrap/Card'
import codingIconBlack from '../../assets/codingIconBlack.png'
import codingIconWhite from '../../assets/codingIconWhite.png'
import myWebsiteFrontPage from '../../assets/myWebsite/frontPage.png'

const ProjectsPage: React.FC = () => {

    const { darkModeOn, englishLanguage } = useContext(Context)

    return (
        <section className={darkModeOn ? 'projectsPage projectsPage-dark' : 'projectsPage projectsPage-light'}>

            <div className='intro'>
                {englishLanguage ?
                    <>
                        <div>
                            <p>Even though now that I have a full time job as a developer, I'm always working on some side project. Not only I find it fun, but this also helps me to constantly learn new things and better understand different topics.</p>

                            <p>Here you can see some of the latest projects I've built. You can check all my projects on <a href='https://github.com/coccagerman' target='_blank'>github.com/coccagerman</a>.</p>
                        </div>
                    </>
                :
                    <>
                        <div>
                            <p>Si bien ahora tengo un trabajo full time como desarrollador, en mi tiempo libre siempre aprovecho para trabajar en algún proyecto personal. Lo hago porque me divierte y porque me encanta codear, y también porque es una excelente manera de aprender nuevas tecnologías constantemente y entender en profundidad distintos temas.</p>

                            <p>Acá podés ver algunos de los últimos proyectos que construí. Para ver todos mis proyectos podés entrar a <a href='https://github.com/coccagerman' target='_blank'>github.com/coccagerman</a>.</p>
                        </div>
                    </>
                }

                <img src={darkModeOn ? codingIconWhite : codingIconBlack} alt='Coding icon' />
            </div>

            <div className='cards-container'>
            
                <Card style={{ width: '20rem' }} className='card'>
                    <Card.Img variant="top" src={myWebsiteFrontPage} />
                    <Card.Body>
                        <Card.Title className='cardTitle'>Helpr</Card.Title>
                        <Card.Text className='cardText'>
                            {englishLanguage ?
                                <>
                                    <p>Helpr is a portal that connects NGOs with volunteers interested in colaborating with their causes.</p>
                                    <p>Full stack project built with react, node and express.</p>
                                </>
                            :
                                <>
                                    <p>Helpr es un portal que conecta ONGs con voluntarios interesados en colaborar con sus causas.</p>
                                    <p>Proyecto full stack desarrollado con react, node y express.</p>
                                </>
                            }
                        </Card.Text>
                        <div className='btn-container'>
                            <button className='btn'>{englishLanguage ? 'See project' : 'Ver proyecto'}</button>
                        </div>
                    </Card.Body>
                </Card>

                <Card style={{ width: '20rem' }} className='card'>
                    <Card.Img variant="top" src={myWebsiteFrontPage} />
                    <Card.Body>
                        <Card.Title className='cardTitle'>{englishLanguage ? 'My website' : 'Mi sitio web'}</Card.Title>
                        <Card.Text className='cardText'>
                            {englishLanguage ?
                                <>
                                    <p>This website contains information about myself, my blog articles and the projects I build.</p>
                                    <p>Front end project built with react and typescript, and tested with jest and react testing library.</p>
                                </>
                            :
                                <>
                                    <p>Este sitio contiene información sobre mi, mi blog y los proyectos que desarrollo.</p>
                                    <p>Proyecto front end desarrollador con react y typesctipt, y testeado con jest y react testing library.</p>
                                </>
                            }
                        </Card.Text>
                        <div className='btn-container'>
                            <button className='btn'>{englishLanguage ? 'See project' : 'Ver proyecto'}</button>
                        </div>
                    </Card.Body>
                </Card>

            </div>

            
        </section>
    )
}

export default ProjectsPage