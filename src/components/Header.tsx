export default function Header() {
    return (
        <header className='header'>
            <ul>
                <li>About</li>
                <li>Projects</li>
                <li>Curriculum</li>
                <li>Blog</li>
                <li>Contact</li>
            </ul>

            <div>
                <button>ES</button>
                <button>EN</button>
            </div>

            <div>
                <button>Light</button>
                <button>Dark</button>
            </div>
        </header>
    )
}