import { render } from "@testing-library/react"
import { RecoilRoot } from "recoil"
import Configuracao from "./Configuracao"

const mockNavigate = jest.fn()

jest.mock('react-router-dom', () => {
    return {
        useNavigate: () => mockNavigate
    }
})

describe('A página de configuração', () => {
    test('Deve ser renderizada corretamente', () => {
        const { container } = render(
            <RecoilRoot>
                <Configuracao />
            </RecoilRoot>
        )

        expect(container).toMatchSnapshot()
    })
})