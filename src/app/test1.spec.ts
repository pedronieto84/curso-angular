import { compute, bienvenido,monedas } from './test1'

describe('compute', ()=>{
    
it('debe devolver 0 si el input es negativo', ()=>{
    const result = compute(-1)
    expect(result).toBe(0)

}) // un test o spec

it('debe incrementar el input si le incremento input', ()=>{
    const result = compute(1)
    expect(result).toBe(2)
})

}) // suite de tests

describe('felicitar',()=>{
    it('deberia incluir el nombre en el mensaje',()=>{
        const mensaje = bienvenido('Juan')
        expect(mensaje).toContain('Juan')
    })
})

// Ejemplo con arrays
describe('monedas', () => {
    it('debe devolver las monedas soportadas',()=>{
        const result = monedas()
        expect(result).toContain('USD')
        expect(result).toContain('EUR')
        expect(result).toContain('AUD')
    })
})