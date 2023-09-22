import './Footer.css';
import instagram from "../img/instagram.png";
import facebook from "../img/facebook.png";
import whatsapp from "../img/whatsapp-removebg-preview.png";

 

 function Footer(){

    return(
        <footer>
            <nav>
            <h1>𝕷𝖚𝖈𝖆𝖘 𝕬𝖓𝖉𝖗𝖆𝖉𝖊 𝖉𝖆 𝕻𝖆𝖟</h1>
            

            <p className='Serie'>Estundante da escola IFMS.</p>
            
            </nav>

            <nav className='contato'>

                <p>Você pode entrar em contato também em:</p>
                <a href=""><img src={instagram} alt="#" /></a> 
                <a href=""><img src={facebook} alt="#" /></a> 
                <a href=""><img className='whatsapp' src={whatsapp} alt="#" /></a> 

            </nav>

            <nav className='projetos'>
                    <p>Projetos:</p>
                    <p>Desenhos</p>
                    <p>Estagio</p>
                    <p>Esportes</p>
                    <p>Cosplay</p>
                </nav>

                <nav className='Novos-projetos'>
                    <p>Projetos:</p>
                    <p>the walking dead</p>
                    <p>evento de games</p>
                    <p>evento de comida</p>
                    <p>evento de tecnologia</p>
                </nav>

        </footer>



    )

} 
export default Footer
