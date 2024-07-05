import { useSetRecoilState } from "recoil"
import { erroState, listaDeParticipantesState } from "../atom"
import { useListaDeParticipantes } from "./useListaDeParticipantes";

export const useAdicionarParticipante = () => {
    
    const setLista = useSetRecoilState(listaDeParticipantesState);
    const lista = useListaDeParticipantes()
    const setErro = useSetRecoilState(erroState)

    return (nomeDoParticipante: string) => {
        if(lista.includes(nomeDoParticipante)){
            setErro('Nomes duplicados não são permitidos!')
            setTimeout(() => {
                setErro("");
            }, 5000)
            return
        }
        return setLista(listaAtual => [...listaAtual, nomeDoParticipante])
    }
}