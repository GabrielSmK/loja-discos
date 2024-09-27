import Input from '../Input'
import styled from 'styled-components';
import { useState } from 'react';
import { discos } from './dadosPesquisa'

const PesquisaContainer = styled.section`
    color: #FFF;
    text-align: center;
    padding: 85px 0;
    height: 270px;
    width: 100%;
`

const Titulo = styled.h2`
    color: #FFF;
    font-size: 36px;
    text-align: center;
    width: 100%;
`

const SubTitulo = styled.h3`
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 40px;
`

const Resultado = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    cursor: pointer;
    p {
        width: 200px;
    }
    img {
        width: 200px;
    }
    &:hover {
        border: 1px solid white;
    }
`

function Pesquisa(){
    const [discosPesquisados, setDiscosPesquisados] = useState([])

    return(
        <PesquisaContainer>
            <Titulo>Já sabe por onde começar?</Titulo>
            <SubTitulo>Encontre seu disco favorito</SubTitulo>
            <Input
            placeholder="Digite sua próxima compra"
            onBlur={evento => {
                const textoDigitado = evento.target.value
                const resultadoPesquisa = discos.filter( disco => disco.nome.includes(textoDigitado))
                setDiscosPesquisados(resultadoPesquisa)

            }}
            />

            { discosPesquisados.map( disco => (
                <Resultado>
                    <img src={ disco.src } alt='capa do album'></img>
                    <p>Nome: { disco.nome }</p>
                    <p>Artista: { disco.artista }</p>
                    <p>Ano: { disco.ano }</p>
                    <p>Gênero: { disco.genero }</p>
                </Resultado>
            )) }

            
        </PesquisaContainer>
    )

}

export default Pesquisa;