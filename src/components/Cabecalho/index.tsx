// src/componentes/Cabecalho/index.tsx
import styled from "styled-components"
import imagemParticipante from '../../assets/images/participante.png';
import logo from '../../assets/images/logo.png'
import logoPequeno from '../../assets/images/logo-pequeno.png'

const CabecalhoEstilizado = styled.header`
    display: flex;
    justify-content: space-around;
    padding-top: 120px;
    div{
        background-image: url(${logo});
        width: 351px;
        height: 117px;
    }
    img{
        z-index: 1;
    }
    @media screen and (max-width: 800px) {
        padding-top: 60px;
        flex-direction: column;
        align-items: center;
        div{
            background-image: url(${logoPequeno});
        width: 235px;
        height: 199px;
        }
    }
`

const Cabecalho = () => {
    return (
        <CabecalhoEstilizado>
            <div role="img" aria-label='Logo do Sorteador'></div>
            <img src={imagemParticipante} alt="Participante com um presente na mão" />
        </CabecalhoEstilizado>
    )
}

export default Cabecalho
