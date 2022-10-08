if (true) { 
    console.log('Hola soy verdadera')
}

// se cumple la condición verdadera y devuelve
// 'Hola soy verdadera'



if (falso) { 
    console.log('Hola soy verdadera')
}

// si el if no es verdadero, hay que ocupar otra condición llamada else
// que es una condición por default




if (false) { 
    console.log('Hola soy verdadera');
} else {
    console.log('Hola, no soy verdadera');
}


// if (false) { 
//     console.log('Hola soy verdadera');
// } else if () {
//     console.log('soy falso');
// } else {
//     console.log(first)
// }



var edad = 18;

if( edad === 18 ) {
    console.log('Puedes votar, será tu primera votación');
} else if ( edad > 18 ) {
    console.log('Puedes votar de nuevo');
} else {
    console.log('Aún no puedes votar');
}


condition ? true : false;


var number = 1;

var result = number === 1 ? 'Sí, soy un uno' : 'No, no soy uno';
console.log(result);








// ### Reto:

// Hacer un juego de piedra, papel o tijera. Generando 3 variables piedra, papel o tijera. 
//Generar una función dónde pases el parámetro con lo que vas a jugar ya sea piedra, papel o tijera.
// Dentro d ela función tiene que haber una validación.


// var play1 = piedra;
// var play2 = papel;
// var play3 = tijera;

// function(play) {
// 	console.log('Hola');
// }




// if( play1 === tijera ) {
//     console.log('prueba');
// } else if ( tijera > papel ) {
//     console.log('Ganaste');
// } else if ( papel > piedra ) {
//     console.log('Ganaste');
// } else if ( piedra > tijera ) {
//     console.log('Ganaste');
// } else {
//     console.log('error');
// }





var jugador = 'papel';
var computador = 'piedra';



if (jugador == "tijeras"  && computador == "papel") 
{
    console.log("Ganaste");
}
else if (jugador == "Piedra"  && computador == "tijeras") 
{
    console.log("Ganaste");
}
else if (jugador == "papel"  && computador == "piedra") 
{
    console.log("Ganaste");
}
else if (jugador == computador ) 
{
    console.log("empate");
}
else {
    console.log("Perdiste")
}


	
