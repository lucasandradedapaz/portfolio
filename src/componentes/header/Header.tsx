 import './Header.css'
 import Link from './../link/Links'


 function Header(){

    return(
        <header>
            <div>
            <h2>𝕷𝖚𝖈𝖆𝖘 𝕬𝖓𝖉𝖗𝖆𝖉𝖊 𝖉𝖆 𝕻𝖆𝖟</h2>
            </div>

            <nav>
                <ul>
                    
                    <li>
                       <Link texto='Home'/>
                    </li>

                    <li>
                       <Link texto='Noticias'/>
                    </li>

                    <li>
                        <Link texto='sobre'/>
                    </li>

                    <li>
                        <Link texto='contato'/>
                    </li>
                </ul>
            </nav>

           
           
        </header>



    )

} 
export default Header
