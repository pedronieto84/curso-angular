import { compute, bienvenido } from './test1'

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