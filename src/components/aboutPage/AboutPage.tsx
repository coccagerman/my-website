import { useContext } from 'react'
import Context from '../../context/Context'
import { Link } from 'react-router-dom'
import { Icon } from '@iconify/react'
import mypicture from '../../assets/mypicture.jpg'
import apollo from '../../assets/apollo-logo.png'
import axios from '../../assets/axios-logo.png'
import bootstrap from '../../assets/bootstrap-logo.png'
import css from '../../assets/css-logo.png'
import express from '../../assets/express-logo.png'
import firebase from '../../assets/firebase-logo.png'
import github from '../../assets/github-logo.png'
import gitlab from '../../assets/gitlab-logo.jpg'
import git from '../../assets/git-logo.png'
import graphql from '../../assets/graphql-logo.png'
import html from '../../assets/html-logo.png'
import javascript from '../../assets/javascript-logo.png'
import jest from '../../assets/jest-logo.jpg'
import knex from '../../assets/knex-logo.png'
import mongo from '../../assets/mongo-logo.png'
import mongoose from '../../assets/mongoose-logo.png'
import node from '../../assets/node-logo.png'
import postgre from '../../assets/postgre-logo.jpg'
import postman from '../../assets/postman-logo.png'
import react from '../../assets/react-logo.png'
import reactNative from '../../assets/reactNative-logo.png'
import reactTestingLibrary from '../../assets/reactTestingLibrary-logo.png'
import redis from '../../assets/redis-logo.png'
import redux from '../../assets/redux-logo.jpeg'
import sass from '../../assets/sass-logo.jpg'
import typescript from '../../assets/typescript-logo.png'
import websocket from '../../assets/websocket-logo.png'

const AboutPage: React.FC = () => {

    const { darkModeOn, englishLanguage } = useContext(Context)

    return (
        <section className={darkModeOn ? 'aboutPage aboutPage-dark' : 'aboutPage aboutPage-light'}>
            <div className='textAndPicture content-section'>
                <div className='text'>
                    {englishLanguage ?
                        <p><span className='firstWord'>Hi!</span>My name is Germán and I'm a fullstack developer from Buenos Aires, Argentina.</p>
                    :
                        <p><span className='firstWord'>Hola!</span>Mi nombre es Germán y soy un desarrollador full stack de Buenos Aires, Argentina.</p>
                    }

                    {englishLanguage ?
                        <p>I love coding and solving puzzles. I'm curious by nature, I like to learn and understand how thinks work, and from that knowledge build tools that are useful for other people.</p>
                    :
                        <p>Me encanta escribir código y resolver problemas. Soy curioso por naturaleza, me gusta aprender y entender cómo funcionan las cosas, y a partir de esos conocimientos construir herramientas que sean útiles para otras personas.</p>
                    }

                    {englishLanguage ?
                        <p>I started learning about programming just out of curiosity at the middle of 2020, as a way to get the best out of the additional free time I had because of the lockout. At the beginning through <a href='https://www.freecodecamp.org/' target='_blank'>Freecodecamp</a> and then taking different courses at <a href='https://www.coderhouse.com/' target='_blank'>Coderhouse</a>, I learned more and more about it, and I just fell in love with it.</p>
                    :
                        <p>Comencé a aprender sobre programación por pura curiosidad a mediados de 2020, como una manera de aprovechar el tiempo libre adicional que tenía debido a la cuarentena. Al principio con <a href='https://www.freecodecamp.org/' target='_blank'>Freecodecamp</a> y luego realizando cursos en <a href='https://www.coderhouse.com/' target='_blank'>Coderhouse</a>, fui aprendiendo más y más, y descubrí que este mundo me apasiona.
                        </p>
                    }

                    {englishLanguage ? 
                        <p>At the middle of 2021, after a year of studying and building projects on my own, I decided to make a change in my career, and join <a href='https://www.avature.net/' target='_blank'>Avature</a> to start developing software professionally.</p>
                    : 
                        <p>A mediados de 2021, luego de un año dedicado a aprender y construir proyectos por mi cuenta, decidí hacer un cambio en mi carrera y unirme a <a href='https://www.avature.net/' target='_blank'>Avature</a>, para comenzar a desarrollar software profesionalmente.</p>
                    }

                    {englishLanguage ?
                        <p>At the moment I'm studying computer science at <a href='https://uai.edu.ar/' target='_blank'>UAI</a>. My goal for the future is to keep learning as much as I can and become the best developer I can be.</p>
                    :
                        <p>Actualmente estoy estudiando ingeniería informática en <a href='https://uai.edu.ar/' target='_blank'>UAI</a>. Mi objetivo para el futuro es sencillamente seguir aprendiendo indefinidamente y transformarme en el mejor desarrollador que pueda ser.</p>
                    }

                    {englishLanguage ?
                        <p>On this site you can find some the projects I've built, read some of my blog articles and download my CV. If you'd like to contact me, drop me a message at <a href='mailto:coccagerman@gmail.com'>coccagerman@gmail.com</a></p>
                    :
                        <p>En este sitio podés encontrar algunos de los proyectos que realicé, leer los artículos de mi blog y descargar mi currículum. Si te interesa contactarme, escribime a <a href='mailto:coccagerman@gmail.com'>coccagerman@gmail.com</a></p>
                    }
                </div>
                <img src={mypicture} alt='my picture' />
            </div>

            <div className='content-section'>
                <a href='#stack' className='nextSection-cta'>
                    <span><Icon icon='bi:arrow-down' className='icon' /></span>
                    <p>{englishLanguage ? 'My stack' : 'Mi stack'}</p>
                </a>
            </div>

            <div className='stack content-section' id='stack'>
                <h2>{englishLanguage ? 'My stack' : 'Mi stack'}</h2>
                <div className='icon-section'>
                    <h3>{englishLanguage ? 'Lenguages:' : 'Lenguajes:'}</h3>

                    <div className='icons-container'>
                        <div className='icon'>
                            <a href='https://www.javascript.com/' target='_blank'><img src={javascript} alt='javascript icon' /></a>
                            <p>Javascript</p>
                        </div>
                        <div className='icon'>
                            <a href='https://www.typescriptlang.org/' target='_blank'><img src={typescript} alt='typescript icon' /></a>
                            <p>Typescript</p>
                        </div>
                    </div>
                </div>

                <div className='icon-section'>

                
                    <h3>Front end & mobile:</h3>

                    <div className='icons-container'>
                        <div className='icon'>
                            <a href='https://reactjs.org/' target='_blank'><img src={react} alt='react icon' /></a>
                            <p>React</p>
                        </div>
                        <div className='icon'>
                            <a href='https://reactnative.dev/' target='_blank'><img src={reactNative} alt='reactNative icon' /></a>
                            <p>React native</p>
                        </div>
                        <div className='icon'>
                            <a href='https://redux.js.org/' target='_blank'><img src={redux} alt='redux icon' /></a>
                            <p>Redux</p>
                        </div>
                        <div className='icon'>
                            <a href='https://graphql.org/' target='_blank'><img src={graphql} alt='graphql icon' /></a>
                            <p>GraphQL</p>
                        </div>
                        <div className='icon'>
                            <a href='https://www.apollographql.com/' target='_blank'><img src={apollo} alt='apollo icon' /></a>
                            <p>Apollo client</p>
                        </div>
                        <div className='icon'>
                            <a href='https://axios-http.com/docs/intro' target='_blank'><img src={axios} alt='axios icon' /></a>
                            <p>Axios</p>
                        </div>
                        <div className='icon'>
                            <a href='https://developer.mozilla.org/en-US/docs/Web/HTML' target='_blank'><img src={html} alt='html icon' /></a>
                            <p>HTML</p>
                        </div>
                        <div className='icon'>
                            <a href='https://developer.mozilla.org/en-US/docs/Web/CSS' target='_blank'><img src={css} alt='css icon' /></a>
                            <p>CSS</p>
                        </div>
                        <div className='icon'>
                            <a href='https://sass-lang.com/' target='_blank'><img src={sass} alt='sass icon' /></a>
                            <p>Sass</p>
                        </div>
                        <div className='icon'>
                            <a href='https://getbootstrap.com/' target='_blank'><img src={bootstrap} alt='bootstrap icon' /></a>
                            <p>Bootstrap</p>
                        </div>
                    </div>
                </div>

                <div className='icon-section'>
                    <h3>Back end:</h3>

                    <div className='icons-container'>
                        <div className='icon'>
                            <a href='https://nodejs.org/' target='_blank'><img src={node} alt='node icon' /></a>
                            <p>Node</p>
                        </div>
                        <div className='icon'>
                            <a href='https://expressjs.com/' target='_blank'><img src={express} alt='express icon' /></a>
                            <p>Express</p>
                        </div>
                        <div className='icon'>
                            <a href='https://www.mongodb.com/' target='_blank'><img src={mongo} alt='mongo icon' /></a>
                            <p>Mongo db</p>
                        </div>
                        <div className='icon'>
                            <a href='https://mongoosejs.com/' target='_blank'><img src={mongoose} alt='mongoose icon' /></a>
                            <p>Mongoose</p>
                        </div>
                        <div className='icon'>
                            <a href='https://www.postgresql.org/' target='_blank'><img src={postgre} alt='postgre icon' /></a>
                            <p>PostgreSQL</p>
                        </div>
                        <div className='icon'>
                            <a href='https://knexjs.org/' target='_blank'><img src={knex} alt='knex icon' /></a>
                            <p>Knex</p>
                        </div>
                        <div className='icon'>
                            <a href='https://redis.io/' target='_blank'><img src={redis} alt='redis icon' /></a>
                            <p>Redis</p>
                        </div>
                        <div className='icon'>
                            <a href='http://socket.io/' target='_blank'><img src={websocket} alt='websocket icon' /></a>
                            <p>WebSockets</p>
                        </div>
                        <div className='icon'>
                            <a href='https://firebase.google.com/' target='_blank'><img src={firebase} alt='firebase icon' /></a>
                            <p>Firebase</p>
                        </div>
                    </div>
                </div>

                <div className='icon-section'>
                    <h3>Testing:</h3>

                    <div className='icons-container'>
                        <div className='icon'>
                            <a href='https://jestjs.io/' target='_blank'><img src={jest} alt='jest icon' /></a>
                            <p>Jest</p>
                        </div>
                        <div className='icon reactTestingLibrary'>
                            <a href='https://testing-library.com/docs/react-testing-library/intro/' target='_blank'><img src={reactTestingLibrary} alt='reactTestingLibrary icon' /></a>
                            <p>React testing library</p>
                        </div>
                    </div>
                </div>

                <div className='icon-section'>
                    <h3>{englishLanguage ? 'Tools and others:' : 'Herramientas y otros:'}</h3>

                    <div className='icons-container'>
                        <div className='icon'>
                            <a href='https://git-scm.com/' target='_blank'><img src={git} alt='git icon' /></a>
                            <p>Git</p>
                        </div>
                        <div className='icon'>
                            <a href='https://github.com/' target='_blank'><img src={github} alt='github icon' /></a>
                            <p>Github</p>
                        </div>
                        <div className='icon'>
                            <a href='https://about.gitlab.com/' target='_blank'><img src={gitlab} alt='gitlab icon' /></a>
                            <p>Gitlab</p>
                        </div>
                        <div className='icon'>
                            <a href='https://www.postman.com/' target='_blank'><img src={postman} alt='postman icon' /></a>
                            <p>Postman</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='btn-container'>
                <Link to='/projects'><button className='btn'>{englishLanguage ? 'Proyectos' : 'Projects'}</button></Link>
                <Link to='/blog'><button className='btn'>Blog</button></Link>
            </div>
        </section>
    )
}

export default AboutPage