import { useNavigate } from "react-router-dom";
import { useListaDeParticipantes } from "../../state/hooks/useListaDeParticipantes"
import styled from "styled-components";
import imagemSacolas from '../../assets/images/sacolas.png'
import { useSorteador } from "../../state/hooks/useSorteador";

const RodapeEstilizado = styled.footer`
    display: flex;
    align-items: center;
    justify-content: space-between;
    button {
        width: 350px;
        height: 80px;
        font-size: 20px;
        box-shadow: 2px 2px 0px 1px #000000;
        border-radius: 45px;
        background-color: #FE652B;
        color: #FFF;
        cursor: pointer;
        &disabled{
            opacity: 0.6;
            cursor: not-allowed;
        }
        &hover{
            background-color: #4B69FD;
        }
    }
    @media screen and (max-width: 800px) {
        flex-direction: column;
        
        button {
            width: 220px;
            margin: 32px 0;
        }
        img {
        margin-top: 32px;
        }
    }
`


const Rodape = () => {

    const lista = useListaDeParticipantes();

    const navegarPara = useNavigate()

    const sortear = useSorteador()

    const iniciar = () => {
        sortear()
        navegarPara('/sorteio')
    }

    return (
        <RodapeEstilizado>
            <button disabled={lista.length < 3} onClick={iniciar}>Iniciar brincadeira</button>
            <img src={imagemSacolas} alt="Sacolas de compras" />
        </RodapeEstilizado>
    )
}

export default Rodape