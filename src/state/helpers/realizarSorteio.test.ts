import { realizarSorteio } from "./realizarSorteio"

describe('Dado um sorteio de amigo secreto', () => {
    test('Que cada participante não sorteie o próprio nome', () => {

        const participantes = ['Ana', 'Maria', 'João', 'Vinícios', 'Nathália']

        const sorteio = realizarSorteio(participantes)
        participantes.forEach(participante => {
            const amigoSecreto = sorteio.get(participante)

            expect(amigoSecreto).not.toEqual(participante)
        })

    })
})