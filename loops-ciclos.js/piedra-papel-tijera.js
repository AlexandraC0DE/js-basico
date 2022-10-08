var opciones = ['Piedra', 'Papel', 'Tijera'];
var maquina = opciones[parseInt(Math.random() * 3)];
var usuario = ""
var jugar = 1;

function Validar(usuario) {

    switch (usuario) {
        case opciones[0]:
            return Juego(usuario, maquina)
            break;
        case opciones[1]:
            return Juego(usuario, maquina)
            break;
        case opciones[2]:
            return Juego(usuario, maquina)
            break;
        default:
            console.log('El valor escrito no es valido.')
            console.log('Intentalo otra vez.')
            break;
    }

}

function Juego(opcion1, opcion2) {

    if (opcion1 === opcion2) {
        return 'Es un empate'
    }
    else if (opcion1 === 'Piedra' && opcion2 === 'Tijera') {
        return `Ganasate: ${opcion1} le gana a ${opcion2}`
    }
    else if (opcion1 === 'Papel' && opcion2 === 'Piedra') {
        return `Ganasate: ${opcion1} le gana a ${opcion2}`
    }
    else if (opcion1 === 'Tijera' && opcion2 === 'Papel') {
        return `Ganasate: ${opcion1} le gana a ${opcion2}`
    } else {
        return `Perdiste: ${opcion2} le gana a ${opcion1}`
    }

}

while (jugar === 1) {
    
    usuario = prompt('Para jugar ingresa: Piedra, Papel o Tijera: ')
    console.log(`La maquina escogio ${maquina}`)
    console.log(`Tu escogiste ${usuario}`)
    console.log(Validar(usuario))
    jugar = parseInt(prompt('Para jugar otra vez escribe 1 de lo contrario preciona 0: '))
}