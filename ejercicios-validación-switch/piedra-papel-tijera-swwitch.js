// var piedra = "piedra";
// var papel = "papel";
// var tijera = "tijera";

// var player = "papel";
// var cpu = "tijera";

// switch (player != null && cpu != null) {
//     case (player === cpu):
//         console.log("Empate");
//         break;
//     case (player === piedra && cpu === tijera):        
//         console.log("Player Wins!");
//         break;
//     case (player === papel && cpu === piedra):        
//         console.log("Player Wins!");
//         break;
//     case (player === tijera && cpu === papel):        
//         console.log("Player Wins!");
//         break;       
//     default:
//         console.log("Cpu Wins! </3");         
// }

let jugador = "piedra"
let enemigo = "tijera"

function resultado() {
    if (jugador === enemigo) {
        console.log("Empate");
    }else{
        switch (true) {
        case jugador == "tijera" && enemigo == "papel":
        case jugador == "piedra" && enemigo =="tijera":
        case jugador == "papel" &&  enemigo =="piedra":
            console.log("Ganaste");
            break;
        default:
            console.log("Perdiste");
            break;
        }
    }
}

resultado();