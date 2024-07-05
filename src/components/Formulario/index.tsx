import { useState, useRef } from "react"
import { useAdicionarParticipante } from "../../state/hooks/useAdicionarParticipante"
import { useMensagemDeErro } from "../../state/hooks/useMensagemDeErro"
import styled from "styled-components"
import GrupoInput from "./GrupoInput"
    
const AlertaEstilizado = styled.p`
    color: #842029;
    background-color: #f8d7da;
    padding: 16px;
    border: 1px solid #f5c2c7;
    border-radius: 8px;
    @media screen and (max-width: 800px) {
        margin: 48px 0;
    }
`

const Formulario = () => {

    const [nome, setNome] = useState("")
    const adicionarNaLista = useAdicionarParticipante()
    const inputRef = useRef<HTMLInputElement>(null)
    const mensagemDeErro = useMensagemDeErro();

    const adicionarParticipante = (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault()
        adicionarNaLista(nome)
        setNome("");
        inputRef.current?.focus()
    }

    return (
        <form onSubmit={adicionarParticipante}>
            <GrupoInput>
                <input
                    ref={inputRef}
                    value={nome}
                    onChange={evento => setNome(evento.target.value)}
                    type="text"
                    placeholder="Insira os nomes dos participantes"
                />
                <button disabled={!nome}>Adicionar</button>
            </GrupoInput>
            {mensagemDeErro && <AlertaEstilizado role="alert">{mensagemDeErro}</AlertaEstilizado>}
        </form>
    )
}

export default Formulario