import { useContext } from 'react'
import Context from '../../context/Context'
import { Link } from 'react-router-dom'
import { Icon } from '@iconify/react'

const Header: React.FC = () => {

    const { darkModeOn, setDarkModeOn, englishLanguage, setEnglishLanguage } = useContext(Context)

    return (
        <header className={darkModeOn ? 'header header-dark' : 'header header-light'}>
            <h1>Germán Cocca</h1>

            <ul>
                <li><Link to='/'>{englishLanguage ? 'About' : 'Sobre mi'}</Link></li>
                <li><Link to='/projects'>{englishLanguage ? 'Projects' : 'Proyectos'}</Link></li>
                <li><Link to='/blog'>Blog</Link></li>
                <li><Link to='/curriculum'>Curriculum</Link></li>
                <li><Link to='/contact'>{englishLanguage ? 'Contact' : 'Contacto'}</Link></li>
            </ul>

            <div className='language-selector'>
                <button className={englishLanguage ? '' : 'selected'} onClick={() => setEnglishLanguage(false)}>ES</button>
                <button className={englishLanguage ? 'selected' : ''} onClick={() => setEnglishLanguage(true)}>EN</button>
            </div>

            <div className='dark-mode-toggle-container'>
                <input type='checkbox' id='dark-mode-toggle' aria-checked='true' className='toggle-checkbox' checked={darkModeOn} onClick={() => setDarkModeOn(!darkModeOn)} />
                <label htmlFor='dark-mode-toggle' aria-label='Toggle para modo nocturno' className='toggle'></label>
            </div>
        </header>
    )
}

export default Header