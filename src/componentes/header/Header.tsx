import './Header.css'
import LinkNav from '../linknav/LinkNav'

function Header(){
    return(
        <header>
            <div>
            <img className='logo' src="public/img/logo-removebg-preview.png" alt="" />
                
            </div>
            <nav>
                <ul>
                    <li>
                        <LinkNav url="/" texto='Home'/>
                    </li>
                    <li>
                        <LinkNav url="/noticias" texto='Notícia'/>
                    </li>
                    <li>
                        <LinkNav url="/sobre" texto='Sobre'/>
                    </li>
                    <li>
                        <LinkNav url="/contato" texto='Contato'/>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header