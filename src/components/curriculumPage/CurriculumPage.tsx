import { useContext } from 'react'
import Context from '../../context/Context'
import myCVPicture from '../../assets/myCVPicture.jpg'
import avatureLogo from '../../assets/avature-logo.jpeg'
import UAILogo from '../../assets/UAI-logo.jpeg'
import coderhouseLogo from '../../assets/coderhouse-logo.jpg'
import englishCV from '../../assets/GermanCoccaResume.pdf'
import spanishCV from '../../assets/GermanCoccaCV.pdf'

const CurriculumPage: React.FC = () => {

    const { darkModeOn, englishLanguage } = useContext(Context)

    return (
        <section className={darkModeOn ? 'curriculumPage curriculumPage-dark' : 'curriculumPage curriculumPage-light'}>
            <div className='intro'>
                <img src={myCVPicture} alt='My picture' />
                {englishLanguage ?
                    <>
                        <p>I'm a full stack developer (typescript | react | react native | node | express) with one year of professional experience. I'm fluent in english and I'm currently studying computer science at <span className='bold'><a href='https://uai.edu.ar/' target='_blank'>UAI</a></span>.</p>
                    </>
                :
                    <>
                        <p>Soy un desarrollador full stack (typescript | react | react native | node | express) con un año de experiencia profesional. Hablo inglés fluido y actualmente estoy estudiando ingeniería informática en <span className='bold'><a href='https://uai.edu.ar/' target='_blank'>UAI</a>.</span></p>
                    </>
                }
            </div>

            <div className='experience'>
                {englishLanguage ?
                    <>
                        <h2>Experience</h2>

                        <article className='experienceItem'>
                            <div className='experienceLogoAndTitle'>
                                <a href='https://www.avature.net/' target='_blank'><img src={avatureLogo} alt='Avature logo' /></a>
                                <div className='experienceTitle'>
                                    <h3>Front end developer - Avature</h3>
                                    <p>Aug 2021 - Present</p>
                                </div>
                            </div>

                            <p><span className='bold'><a href='https://www.avature.net/' target='_blank'>Avature</a></span> is a company specialized in HR management software with clients all over the world. Here I'm part of a team that develops projects mainly for US and european companies (DHL, KPMG, McLaren, Philip Morris, among others).</p>
                            <p>The stack I use is Vanilla Javascript, JQuery, Twig, HTML and CSS.</p>
                        </article>
                    </>
                :
                    <>
                        <h2>Experiencia</h2>

                        <article className='experienceItem'>
                            <div className='experienceLogoAndTitle'>
                                <a href='https://www.avature.net/' target='_blank'><img src={avatureLogo} alt='Avature logo' /></a>
                                <div className='experienceTitle'>
                                    <h3>Front end developer - Avature</h3>
                                    <p>Aug 2021 - Present</p>
                                </div>
                            </div>

                            <h3>Front end developer - Avature</h3>
                            <p>Ago 2021 - Presente</p>
                            <p><span className='bold'><a href='https://www.avature.net/' target='_blank'>Avature</a></span> es una empresa especializada en software de gestión de recursos humanos con clientes alrededor de todo el mundo. Acá formo parte de un equipo de desarrolla proyectos principalmente para empresas de EEUU y Europa (DHL, KPMG, McLaren, Philip Morris, entre otros).</p>
                            <p>El stack que utilizo es Vanilla Javascript, JQuery, Twig, HTML and CSS.</p>
                        </article>
                    </>
                }
            </div>

            <div className='education'>
                {englishLanguage ?
                    <>
                        <h2>Education</h2>

                        <article className='educationItem'>
                            <div className='educationLogoAndTitle'>
                                <div className='educationTitle'>
                                    <h3>Full stack development - Coderhouse</h3>
                                    <p>Sep 2020 - Dec 2021</p>
                                </div>
                                <a href='https://www.coderhouse.com/' target='_blank'><img className='logoRight' src={coderhouseLogo} alt='Coderhouse logo' /></a>
                            </div>

                            <p>At <span className='bold'><a href='https://www.coderhouse.com/' target='_blank'>Coderhouse</a></span> I took a series of courses of 400 hs. in total. I learned about front end development with react, mobile development with react native and back end development with node and express. Besides, I also had the chance to work on some projects as a freelancer for NGOs and small companies. Here I was able to put my learnings into practice and have a first professional experience as a developer.</p>
                        </article>

                        <article className='educationItem'>
                            <div className='educationLogoAndTitle'>
                            <a href='https://uai.edu.ar/' target='_blank'><img src={UAILogo} alt='UAI logo' /></a>
                                <div className='educationTitle'>
                                    <h3>Computer science - UAI</h3>
                                    <p>Jan 2022 - Present</p>
                                </div>
                            </div>

                            <p>My goal as a developer is to keep learning and getting better all the time. With this in mind I decided to study computer science at <span className='bold'><a href='https://uai.edu.ar/' target='_blank'>UAI</a></span>, which will allow me to broaden my knowledge about the technology world.</p>
                        </article>
                    </>
                :
                    <>
                        <h2>Educación</h2>

                        <article className='educationItem'>
                            <div className='educationLogoAndTitle'>
                                <div className='educationTitle'>
                                    <h3>Desarrollo full stack - Coderhouse</h3>
                                    <p>Sep 2020 - Dic 2021</p>
                                </div>
                                <a href='https://www.coderhouse.com/' target='_blank'><img src={coderhouseLogo} className='logoRight' alt='Coderhouse logo' /></a>
                            </div>

                            <p>En <span className='bold'><a href='https://www.coderhouse.com/' target='_blank'>Coderhouse</a></span> realicé una serie de cursos por un total de 400 hs. Aprendí sobre desarrollo front end con react, desarrollo mobile con react native y desarrollo back end con node y express. Además tuve la oportunidad de trabajar en algunos proyectos como freelancer para PYMEs y ONGs, donde pude plasmar mi aprendizaje y tener una primer experiencia profesional como desarrollador.</p>
                        </article>

                        <article className='educationItem'>
                            <div className='educationLogoAndTitle'>
                            <a href='https://uai.edu.ar/' target='_blank'><img src={UAILogo} alt='UAI logo' /></a>
                                <div className='educationTitle'>
                                    <h3>Ingeniería informática - UAI</h3>
                                    <p>Ene 2022 - Presente</p>
                                </div>
                            </div>

                            <p>Mi objetivo como desarrollador es seguir aprendiendo y mejorando todo el tiempo. Con esto en mente, decidí estudiar ingeniería informática en <span className='bold'><a href='https://uai.edu.ar/' target='_blank'>UAI</a></span>, lo que me permitirá ampliar mi conocimiento sobre el mundo de la tecnología.</p>
                        </article>
                    </>
                }
            </div>

            <div className='previousExperience'>
                {englishLanguage ?
                    <>
                        <h2>Previous experience</h2>
                        
                        <p>Before getting into programming I worked for almost 8 years in the human resources field. I worked in very different companies (from some of the biggest industrial companies in Argentina like <span className='bold'><a href='https://www.ypf.com/' target='_blank'>YPF</a></span> or <span className='bold'><a href='https://www.ypf.com/' target='_blank'>Techint</a></span>, to the <span className='bold'><a href='https://www.buenosaires.gob.ar/' target='_blank'>City Government of Buenos Aires</a></span>, to a world reknowned design and technology company like <span className='bold'><a href='https://www.rga.com/' target='_blank'>R/GA</a></span>, to a rapidly growing startup like <span className='bold'><a href='https://talently.tech/' target='_blank'>Talently</a></span>). I also performed a wide variety of tasks (from recruiting, to payroll, to vendor management, to compensations management, to learning and development).</p>

                        
                        <p>Some of the more relevant things I did were:</p>
                        <ul>
                            <li>End to end recruiting of creative and technology positions for Argentina and US.</li>
                            <li>Mentoring sessions with technology professionals to enhance their professional development.</li>
                            <li>Vendor management for food, cleaning and transportation services for the biggest industrial plant in the patagonian region. Managing an anual budget of 1M usd and undirectly supervising a team of 30 people.</li>
                        </ul>

                        <p>I also hold a bachelor degree in labor relations from <span className='bold'><a href='https://www.unlam.edu.ar/' target='_blank'>UNLaM</a></span>.</p>

                        <p>Even though I don't work in HR anymore, I think this experience and the fact that I worked in so many different places, really sharpened my communication, organization and team working skills while also making me flexible and a quick learner. All skills that are still crucial to my daily work as a developer.</p>
                    </>
                :
                    <>
                        <h2>Experiencia previa</h2>

                        <p>Antes de adentrarme en el mundo de la programación, trabajé durante casi 8 años en el campo de recursos humanos. Trabajé en empresas muy diferentes (desde algunas de las empresas industriales más grandes de Argentina como <span className='bold'><a href='https://www.ypf.com/' target='_blank'>YPF</a></span> y <span className='bold'><a href='https://www.ypf.com/' target='_blank'>Techint</a></span>, al <span className='bold'><a href='https://www.buenosaires.gob.ar/' target='_blank'>Gobierno de la Ciudad de Buenos Aires</a></span>, a una mundialmente reconocida empresa de diseño y tecnología como <span className='bold'><a href='https://www.rga.com/' target='_blank'>R/GA</a></span>, a una startup en rápido crecimiento como <span className='bold'><a href='https://talently.tech/' target='_blank'>Talently</a></span>). También realicé tareas muy variadas (desde reclutamiento, a payroll, a gestión de proveedores, a compensaciones, a capacitación).</p>

                        <p>Algunas de las tareas más relevantes que tuve fueron:</p>
                        <ul>
                            <li>Reclutamiento end to end de posiciones creativas y de tecnología para Argentina y Estados Unidos.</li>
                            <li>Sesiones de mentoría con profesionales de tecnología para potenciar su desarrollo profesional.</li>
                            <li>Responsable de servicios de comedor, limpieza y transporte en la planta industrial más grande de la patagonia. Gestión de un presupuesto anual de 1M usd y supervisión indirecta de 30 personas.</li>
                        </ul>

                        <p>También tengo el título de licenciado en relaciones laborales de <span className='bold'><a href='https://www.unlam.edu.ar/' target='_blank'>UNLaM</a></span>.</p>

                        <p>Aunque ya no trabajo en recursos humanos, creo que esta experiencia, sumado al haber trabajado en varios lugares tan distintos, me ayudó mucho a desarrollar mis habilidades de comunicación, organización, trabajo en equipo, flexibilidad y aprendizaje rápido. Todas habilidades cruciales en mi trabajo diario como desarrollador.</p>
                    </>
                }
            </div>

            <div className='btn-container'>
                    <a href='https://www.linkedin.com/in/germancocca/' target='_blank'>
                        <button className='btn'>                
                            {englishLanguage ?
                            'Visit linkedin profile'
                            :
                            'Ver perfil de linkedin'}
                        </button>
                    </a>
                
                    <a href={englishLanguage ? englishCV : spanishCV} download='GermanCoccaCV'>
                        <button className='btn'>
                            {englishLanguage ?
                                'Download resume as PDF'
                            :
                                'Descargar CV en PDF'}
                        </button>
                    </a>
            </div>
        </section>
    )
}

export default CurriculumPage