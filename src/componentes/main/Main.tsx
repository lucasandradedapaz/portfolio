import { useState } from 'react'
import Projeto from './../projeto/Projeto'
import './Main.css'
type ProjetoType = {
    id:number,
    titulo:string,
    sinopse:string,
    imagem:string
}

export default function Main() {
    //let textodigitado = 'Barbie'
    //Hooks são funções do React que ajudam a gente a fazer tarefas
    //específicas
    const [texto,setTexto]=useState("")

    const projetos:ProjetoType[] = [
        {
            id:1,
            titulo:'Desenhos',
            sinopse:"Evento de ciência e técnologia",
            imagem:'/img/desenhoshidrica.jpg'
        },
        {
            id:2,
            titulo:'Estágio',
            sinopse:'Projeto do IFMS obrigatório',
            imagem:'/img/estagio.png'
        },
        {
            id:3,
            titulo:'Esporte',
            sinopse:'Evento de interclase',
            imagem:'/img/esporte.jpg'
        },
        {
            id:5,
            titulo:'Cosplay evento',
            sinopse:"Evento de cosplay no supermercado municipal",
            imagem:'/img/cosplay.jpg'
        },
    ]

    //O parâmetro "e" da minha função será o meu evento que ocorreu
    function TrataTexto(e:React.ChangeEvent<HTMLInputElement>){
        //console.log(e.target.value)
        //Como eu faço para mudar o texto para "TERE"
        setTexto(e.target.value)
    }
    return (
        <>
            <div className="campo_pesquisa">
                <p>Busque um Projeto</p>
                <input type="text" 
                       className='botao_pesquisa'
                       placeholder='Pesquise um Projeto'
                       onChange={TrataTexto} />
                {texto && <p>Resultados Para: {texto} </p>}
            </div>
            <main className="content-main">
                {/* 
                    Use algo do vetor para tentar criar os filmes 
                */}
                {
                    projetos.filter((projeto)=>projeto.titulo.toLowerCase().includes(texto)).map(
                        (projeto)=>
                            <Projeto 
                                key={projeto.id}
                                sinopse={projeto.sinopse}
                                titulo={projeto.titulo}
                                imagem={projeto.imagem}
                            />
                    )
                }

</main>
        </>
    )
}