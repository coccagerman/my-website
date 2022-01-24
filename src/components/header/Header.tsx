import { useContext, useState } from 'react'
import Context from '../../context/Context'
import { Link, NavLink } from 'react-router-dom'

const Header: React.FC = () => {

    const { darkModeOn, setDarkModeOn, englishLanguage, setEnglishLanguage } = useContext(Context)

    const [showMobileMenu, setShowMobileMenu] = useState(false)

    const openMobileMenu = () => {
        document.body.classList.add('mobileMenu-open')
        setShowMobileMenu(true)
    }
    
    const hideMobileMenu = () => {
        document.body.classList.remove('mobileMenu-open')
        setShowMobileMenu(false)
    }

    return (
        <header className={darkModeOn ? 'header header-dark' : 'header header-light'}>
            <Link to='/'><h1 className='desktop-logo'>Germán Cocca</h1></Link>
            <Link to='/'><h1 className='mobile-logo'>G</h1></Link>

            <ul className='desktop-menu'>
                <li><NavLink className='about-desktop-btn' data-testid='about-desktop-btn' to='/'>{englishLanguage ? 'About' : 'Sobre mi'}</NavLink></li>
                <li><NavLink className='projects-desktop-btn' to='/projects'>{englishLanguage ? 'Projects' : 'Proyectos'}</NavLink></li>
                <li><NavLink className='blog-desktop-btn' to='/blog'>Blog</NavLink></li>
                <li><NavLink className='curriculum-desktop-btn' to='/curriculum'>Curriculum</NavLink></li>
                <li><NavLink className='contact-desktop-btn' to='/contact'>{englishLanguage ? 'Contact' : 'Contacto'}</NavLink></li>
            </ul>

            <div className='language-selector desktop-language-selector'>
                <button data-testid='es-language-btn' className={englishLanguage ? '' : 'selected'} onClick={() => setEnglishLanguage(false)}>ES</button>
                <button data-testid='en-language-btn' className={englishLanguage ? 'selected' : ''} onClick={() => setEnglishLanguage(true)}>EN</button>
            </div>

            <div className='dark-mode-toggle-container'>
                <input type='checkbox' data-testid='dark-mode-toggle' id='dark-mode-toggle' aria-checked='true' className='toggle-checkbox' checked={darkModeOn} onClick={() => setDarkModeOn(!darkModeOn)} />
                <label htmlFor='dark-mode-toggle' aria-label='Toggle para modo nocturno' className='toggle'></label>
            </div>

            <a href="#menu">
                <div className="hamburguer-icon" onClick={() => showMobileMenu ? hideMobileMenu() : openMobileMenu()}>
                    <div className={!showMobileMenu ? 'line' : 'line top'}></div>
                    <div className={!showMobileMenu ? 'line' : 'line center'}></div>
                    <div className={!showMobileMenu ? 'line' : 'line bottom'}></div>
                </div>
            </a>

            <nav id='mobile-menu' className={showMobileMenu ? 'mobile-menu-active' : 'mobile-menu'}>
                <ul>
                    <li><NavLink to='/' onClick={() => hideMobileMenu()}>{englishLanguage ? 'About' : 'Sobre mi'}</NavLink></li>
                    <li><NavLink to='/projects' onClick={() => hideMobileMenu()}>{englishLanguage ? 'Projects' : 'Proyectos'}</NavLink></li>
                    <li><NavLink to='/blog' onClick={() => hideMobileMenu()}>Blog</NavLink></li>
                    <li><NavLink to='/curriculum' onClick={() => hideMobileMenu()}>Curriculum</NavLink></li>
                    <li><NavLink to='/contact' onClick={() => hideMobileMenu()}>{englishLanguage ? 'Contact' : 'Contacto'}</NavLink></li>
                    <li>
                        <div className='language-selector'>
                            <button className={englishLanguage ? '' : 'selected'} onClick={() => {
                                setEnglishLanguage(false)
                                hideMobileMenu()
                            }}>ES</button>
                            <button className={englishLanguage ? 'selected' : ''} onClick={() => {
                                setEnglishLanguage(true)
                                hideMobileMenu()
                            }}>EN</button>
                        </div>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header