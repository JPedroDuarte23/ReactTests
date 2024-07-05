import { fireEvent, render, screen } from "@testing-library/react"
import { RecoilRoot } from "recoil"
import Rodape from "./Rodape"
import { useListaDeParticipantes } from "../state/hooks/useListaDeParticipantes"

jest.mock('../state/hooks/useListaDeParticipantes', () => {
    return{
        useListaDeParticipantes: jest.fn()
    }
})

const mockNavigate = jest.fn()
const mockSorteio = jest.fn()

jest.mock('../state/hooks/useSorteador', () => {
    return {
        useSorteador: () => mockSorteio
    }
})

jest.mock('react-router-dom', () => {
    return {
        useNavigate: () => mockNavigate
    }
})


describe('Quando não existem participantes suficientes', () => {

    beforeEach(() => {
        (useListaDeParticipantes as jest.Mock).mockReturnValue([])
    })

    test('A brincadeira não pode ser iniciada', () => {
        render(
            <RecoilRoot>
                <Rodape />
            </RecoilRoot>
        )

        const botao = screen.getByRole('button')

        expect(botao).toBeDisabled()
    })
})

describe('Quando existem participantes suficientes', () => {

    beforeEach(() => {
        (useListaDeParticipantes as jest.Mock).mockReturnValue(['Maria', 'Ana', 'Gabriel'])
    })

    test('A brincadeira pode ser iniciada', () => {
        render(
            <RecoilRoot>
                <Rodape />
            </RecoilRoot>
        )

        const botao = screen.getByRole('button')

        expect(botao).not.toBeDisabled()
    
    })

    test('A brincadeira foi iniciada', () => {
        render(
            <RecoilRoot>
                <Rodape />
            </RecoilRoot>
        )

        const botao = screen.getByRole('button')
        fireEvent.click(botao)

        expect(mockNavigate).toHaveBeenCalledTimes(1);
        expect(mockNavigate).toHaveBeenCalledWith('/sorteio');
        expect(mockSorteio).toHaveBeenCalledTimes(1);
    })
})