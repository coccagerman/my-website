import { useContext } from 'react'
import Context from '../../context/Context'

import { Link } from 'react-router-dom'

import mailIconWhite from '../../assets/mailIcon-white.png'
import mailIconBlack from '../../assets/mailIcon-black.png'

const ContactPage: React.FC = () => {

    const { darkModeOn, englishLanguage } = useContext(Context)

    return (
        <section className={darkModeOn ? 'contactPage contactPage-dark' : 'contactPage contactPage-light'}>
            <div className='email-container'>
                {englishLanguage ?
                    <p>To contact me, drop me a message at <a href='mailto:coccagerman@gmail.com'>coccagerman@gmail.com</a></p>
                :
                    <p>Para contactarme, escribime a <a href='mailto:coccagerman@gmail.com'>coccagerman@gmail.com</a></p>
                }

                <img src={darkModeOn ? mailIconWhite : mailIconBlack} alt='Paper plane icon' />
            </div>
            
            <div className='networks'>
                {englishLanguage ?
                    <p>You can also follow me on my networks:</p>
                :
                    <p>También podés seguirme en mis redes:</p>
                }
            </div>

            <div className='networks-container'>
                <p><span>Linkedin:</span> <a href='https://www.linkedin.com/in/germancocca/' target='_blank'>linkedin.com/in/germancocca</a></p>
                <p><span>Github:</span> <a href='https://github.com/coccagerman' target='_blank'>github.com/coccagerman</a></p>
                <p><span>Blog:</span> <a href='https://gercocca.hashnode.dev/' target='_blank'>gercocca.hashnode.dev</a></p>
            </div>
            
            <div className='btn-container'>
                <Link to='/curriculum'><button className='btn'>Curriculum</button></Link>
                <Link to='/blog'><button className='btn'>Blog</button></Link>
            </div>
        </section>
    )
}

export default ContactPage