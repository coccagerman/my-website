import { useContext } from 'react'
import Context from '../../context/Context'

import { Link } from 'react-router-dom'

import { Icon } from '@iconify/react'

import mypicture from '../../assets/mypicture.jpg'
import androidStudio from '../../assets/androidStudio-logo.png'
import apollo from '../../assets/apollo-logo.png'
import axios from '../../assets/axios-logo.png'
import bash from '../../assets/bash-logo.jpg'
import cypress from '../../assets/cypress-logo.png'
import css from '../../assets/css-logo.png'
import express from '../../assets/express-logo.png'
import expo from '../../assets/expo-logo.png'
import firebase from '../../assets/firebase-logo.png'
import figma from '../../assets/figma-logo.png'
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
import npm from '../../assets/npm-logo.png'
import postgre from '../../assets/postgre-logo.jpg'
import postman from '../../assets/postman-logo.png'
import react from '../../assets/react-logo.png'
import reactNative from '../../assets/reactNative-logo.png'
import testingLibrary from '../../assets/testingLibrary-logo.png'
import redis from '../../assets/redis-logo.png'
import redux from '../../assets/redux-logo.jpeg'
import sass from '../../assets/sass-logo.jpg'
import styledComponents from '../../assets/styledComponents-logo.png'
import typescript from '../../assets/typescript-logo.png'
import websocket from '../../assets/websocket-logo.png'

const AboutPage: React.FC = () => {

    const { darkModeOn, englishLanguage } = useContext(Context)

    return (
        <section className={darkModeOn ? 'aboutPage aboutPage-dark' : 'aboutPage aboutPage-light'}>
            <div className='textAndPicture content-section'>
                <div className='text'>
                    {englishLanguage ?
                        <p className='firstParagraph'><span className='firstWord'>Hi!</span>My name is Germán and I'm a fullstack developer from Buenos Aires, Argentina.</p>
                    :
                        <p className='firstParagraph'><span className='firstWord'>Hola!</span>Mi nombre es Germán y soy un desarrollador full stack de Buenos Aires, Argentina.</p>
                    }

                    {englishLanguage ?
                        <p>I love coding and solving puzzles. I like to learn and understand how things work, and from that knowledge build tools that are useful for other people.</p>
                    :
                        <p>Me encanta escribir código y resolver problemas. Me gusta aprender y entender cómo funcionan las cosas, y a partir de esos conocimientos construir herramientas que sean útiles para otras personas.</p>
                    }

                    {englishLanguage ?
                        <>
                            <p>I started learning about programming just out of curiosity at the middle of 2020, as a way to get the best out of the additional free time I had because of the lockout.</p>
                            <p>At the beginning through <a href='https://www.freecodecamp.org/' target='_blank' rel='noreferrer'>Freecodecamp</a> and then taking different courses at <a href='https://www.coderhouse.com/' target='_blank' rel='noreferrer'>Coderhouse</a>, I learned more and more about it, and I just fell in love with code.</p>
                        </>
                    :
                        <>
                            <p>Comencé a aprender sobre programación por pura curiosidad a mediados de 2020, como una manera de aprovechar el tiempo libre adicional que tenía debido a la cuarentena.</p>
                            <p>Al principio con <a href='https://www.freecodecamp.org/' target='_blank' rel='noreferrer'>Freecodecamp</a> y luego realizando cursos en <a href='https://www.coderhouse.com/' target='_blank' rel='noreferrer'>Coderhouse</a>, fui aprendiendo más y más, y descubrí que este mundo me apasiona.
                            </p>
                        </>
                    }

                    {englishLanguage ? 
                        <p>At the middle of 2021, after a year of studying and building projects on my own, I decided to make a change in my career, and join <a href='https://www.avature.net/' target='_blank' rel='noreferrer'>Avature</a> to start developing software professionally.</p>
                    : 
                        <p>A mediados de 2021, luego de un año dedicado a aprender y construir proyectos por mi cuenta, decidí hacer un cambio en mi carrera y unirme a <a href='https://www.avature.net/' target='_blank' rel='noreferrer'>Avature</a>, para comenzar a desarrollar software profesionalmente.</p>
                    }

                    {englishLanguage ?
                        <p>At the moment I'm also studying computer science at <a href='https://uai.edu.ar/' target='_blank' rel='noreferrer'>UAI</a> and frequently writting articles about Javascript, React and general programming on <a href='https://gercocca.hashnode.dev/' target='_blank' rel='noreferrer'>my blog</a> and <a href='https://www.freecodecamp.org/news/author/gercocca/' target='_blank' rel='noreferrer'>FreeCodeCamp's platform</a>.</p>
                    :
                        <p>Actualmente estoy estudiando ingeniería informática en <a href='https://uai.edu.ar/' target='_blank' rel='noreferrer'>UAI</a>. Además también escribo artículos sobre Javascript, React y programación en general en <a href='https://gercocca.hashnode.dev/' target='_blank' rel='noreferrer'>mi blog</a> y en <a href='https://www.freecodecamp.org/news/author/gercocca/' target='_blank' rel='noreferrer'>la plataforma de FreeCodeCamp</a>.</p>
                    }

                    {englishLanguage ?
                        <p>On this site you can find some of the projects I've built, read some of my blog articles and download my CV. If you'd like to contact me, drop me a message at <a href='mailto:coccagerman@gmail.com'>coccagerman@gmail.com</a></p>
                    :
                        <p>En este sitio podés encontrar algunos de los proyectos que realicé, leer los artículos de mi blog y descargar mi currículum. Si te interesa contactarme, escribime a <a href='mailto:coccagerman@gmail.com'>coccagerman@gmail.com</a></p>
                    }
                </div>
                <img src={mypicture} alt='myself' />
            </div>

            <div className='content-section'>
                <a href='#stack' className='nextSection-cta'>
                    <span><Icon icon='bi:arrow-down' className='icon' /></span>
                    <p>{englishLanguage ? 'My stack' : 'Mi stack'}</p>
                </a>
            </div>

            <div className='stack content-section' id='stack'>
                <h2>{englishLanguage ? 'My stack' : 'Mi stack'}</h2>
                <div className='icon-section firstIcon-section'>
                    <h3>{englishLanguage ? 'Lenguages:' : 'Lenguajes:'}</h3>

                    <div className='icons-container'>
                        <div className='icon'>
                            <a href='https://www.javascript.com/' target='_blank' rel='noreferrer'><img src={javascript} alt='javascript icon' /></a>
                            <p>Javascript</p>
                        </div>
                        <div className='icon'>
                            <a href='https://www.typescriptlang.org/' target='_blank' rel='noreferrer'><img src={typescript} alt='typescript icon' /></a>
                            <p>Typescript</p>
                        </div>
                        <div className='icon'>
                            <a href='https://en.wikipedia.org/wiki/Bash_(Unix_shell)' target='_blank' rel='noreferrer'><img src={bash} alt='bash icon' /></a>
                            <p>Bash</p>
                        </div>
                    </div>
                </div>

                <div className='icon-section'>

                
                    <h3>Front end & mobile:</h3>

                    <div className='icons-container'>
                        <div className='icon'>
                            <a href='https://reactjs.org/' target='_blank' rel='noreferrer'><img src={react} alt='react icon' /></a>
                            <p>React</p>
                        </div>
                        <div className='icon'>
                            <a href='https://reactnative.dev/' target='_blank' rel='noreferrer'><img src={reactNative} alt='reactNative icon' /></a>
                            <p>React native</p>
                        </div>
                        <div className='icon'>
                            <a href='https://docs.expo.dev/' target='_blank' rel='noreferrer'><img src={expo} alt='expo icon' /></a>
                            <p>Expo</p>
                        </div>
                        <div className='icon'>
                            <a href='https://redux.js.org/' target='_blank' rel='noreferrer'><img src={redux} alt='redux icon' /></a>
                            <p>Redux</p>
                        </div>
                        <div className='icon'>
                            <a href='https://graphql.org/' target='_blank' rel='noreferrer'><img src={graphql} alt='graphql icon' /></a>
                            <p>GraphQL</p>
                        </div>
                        <div className='icon'>
                            <a href='https://www.apollographql.com/' target='_blank' rel='noreferrer'><img src={apollo} alt='apollo icon' /></a>
                            <p>Apollo client</p>
                        </div>
                        <div className='icon'>
                            <a href='https://axios-http.com/docs/intro' target='_blank' rel='noreferrer'><img src={axios} alt='axios icon' /></a>
                            <p>Axios</p>
                        </div>
                        <div className='icon'>
                            <a href='https://developer.mozilla.org/en-US/docs/Web/HTML' target='_blank' rel='noreferrer'><img src={html} alt='html icon' /></a>
                            <p>HTML</p>
                        </div>
                        <div className='icon'>
                            <a href='https://developer.mozilla.org/en-US/docs/Web/CSS' target='_blank' rel='noreferrer'><img src={css} alt='css icon' /></a>
                            <p>CSS</p>
                        </div>
                        <div className='icon'>
                            <a href='https://sass-lang.com/' target='_blank' rel='noreferrer'><img src={sass} alt='sass icon' /></a>
                            <p>Sass</p>
                        </div>
                        <div className='icon styledComponents'>
                            <a href='https://styled-components.com/' target='_blank' rel='noreferrer'><img src={styledComponents} alt='styled components icon' /></a>
                            <p>Styled components</p>
                        </div>

                    </div>
                </div>

                <div className='icon-section'>
                    <h3>Back end:</h3>

                    <div className='icons-container'>
                        <div className='icon'>
                            <a href='https://nodejs.org/' target='_blank' rel='noreferrer'><img src={node} alt='node icon' /></a>
                            <p>Node</p>
                        </div>
                        <div className='icon'>
                            <a href='https://expressjs.com/' target='_blank' rel='noreferrer'><img src={express} alt='express icon' /></a>
                            <p>Express</p>
                        </div>
                        <div className='icon'>
                            <a href='https://www.mongodb.com/' target='_blank' rel='noreferrer'><img src={mongo} alt='mongo icon' /></a>
                            <p>Mongo db</p>
                        </div>
                        <div className='icon'>
                            <a href='https://mongoosejs.com/' target='_blank' rel='noreferrer'><img src={mongoose} alt='mongoose icon' /></a>
                            <p>Mongoose</p>
                        </div>
                        <div className='icon'>
                            <a href='https://www.postgresql.org/' target='_blank' rel='noreferrer'><img src={postgre} alt='postgre icon' /></a>
                            <p>PostgreSQL</p>
                        </div>
                        <div className='icon'>
                            <a href='https://knexjs.org/' target='_blank' rel='noreferrer'><img src={knex} alt='knex icon' /></a>
                            <p>Knex</p>
                        </div>
                        <div className='icon'>
                            <a href='https://redis.io/' target='_blank' rel='noreferrer'><img src={redis} alt='redis icon' /></a>
                            <p>Redis</p>
                        </div>
                        <div className='icon'>
                            <a href='http://socket.io/' target='_blank' rel='noreferrer'><img src={websocket} alt='websocket icon' /></a>
                            <p>WebSockets</p>
                        </div>
                        <div className='icon'>
                            <a href='https://firebase.google.com/' target='_blank' rel='noreferrer'><img src={firebase} alt='firebase icon' /></a>
                            <p>Firebase</p>
                        </div>
                    </div>
                </div>

                <div className='icon-section'>
                    <h3>Testing:</h3>

                    <div className='icons-container'>
                        <div className='icon'>
                            <a href='https://jestjs.io/' target='_blank' rel='noreferrer'><img src={jest} alt='jest icon' /></a>
                            <p>Jest</p>
                        </div>
                        <div className='icon testingLibrary'>
                            <a href='https://testing-library.com/' target='_blank' rel='noreferrer'><img src={testingLibrary} alt='TestingLibrary icon' /></a>
                            <p>Testing library</p>
                        </div>
                        <div className='icon'>
                            <a href='https://www.cypress.io/' target='_blank' rel='noreferrer'><img src={cypress} alt='cypress icon' /></a>
                            <p>Cypress</p>
                        </div>
                    </div>
                </div>

                <div className='icon-section'>
                    <h3>{englishLanguage ? 'Tools and others:' : 'Herramientas y otros:'}</h3>

                    <div className='icons-container'>
                        <div className='icon'>
                            <a href='https://git-scm.com/' target='_blank' rel='noreferrer'><img src={git} alt='git icon' /></a>
                            <p>Git</p>
                        </div>
                        <div className='icon'>
                            <a href='https://github.com/' target='_blank' rel='noreferrer'><img src={github} alt='github icon' /></a>
                            <p>Github</p>
                        </div>
                        <div className='icon'>
                            <a href='https://about.gitlab.com/' target='_blank' rel='noreferrer'><img src={gitlab} alt='gitlab icon' /></a>
                            <p>Gitlab</p>
                        </div>
                        <div className='icon'>
                            <a href='https://www.npmjs.com/' target='_blank' rel='noreferrer'><img src={npm} alt='npm icon' /></a>
                            <p>NPM</p>
                        </div>
                        <div className='icon'>
                            <a href='https://www.postman.com/' target='_blank' rel='noreferrer'><img src={postman} alt='postman icon' /></a>
                            <p>Postman</p>
                        </div>
                        <div className='icon androidStudio'>
                            <a href='https://developer.android.com/' target='_blank' rel='noreferrer'><img src={androidStudio} alt='androidStudio icon' /></a>
                            <p>Android studio</p>
                        </div>
                        <div className='icon'>
                            <a href='https://www.figma.com/' target='_blank' rel='noreferrer'><img src={figma} alt='figma icon' /></a>
                            <p>Figma</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='btn-container'>
                <Link to='/projects'><button className='btn'>{englishLanguage ? 'Projects' : 'Proyectos'}</button></Link>
                <Link to='/blog'><button className='btn'>Blog</button></Link>
            </div>
        </section>
    )
}

export default AboutPage