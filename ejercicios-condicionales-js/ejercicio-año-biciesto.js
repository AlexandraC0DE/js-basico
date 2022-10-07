// Ejercicio 3 condicionales:

// Vamos a crear una calculadora para comprobar si un año
// es bisiesto o no.

// Las condiciones a cumplir de un año bisiesto son:

// -Es divisible por 4
// -No es divisible por 4
// -No es divisible por 100 o es divisible por 400

// finalmente, se debe printar por pantalla si es biciesto o no lo es.

let año = 1990;

if ( (año % 4) == 0 ) {

    let divisiblePor100 = ( año % 100 ) == 0;
    let divisiblePor400 = ( año % 400 ) == 0;
    if( !divisiblePor100 || divisiblePor400 ) {
        console.log('El año si es bisiesto');
    }
} else {
    console.log('El año no es biciesto');
}