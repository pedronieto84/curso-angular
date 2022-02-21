export function compute(number: number){
    if(number < 0){
        return 0
    }else{
        return number + 1
    }
}

export function bienvenido(nombre: string){
    return 'Bienvenido '+nombre
}

export function monedas(){
    return ['USD', 'AUD', 'EUR']
}