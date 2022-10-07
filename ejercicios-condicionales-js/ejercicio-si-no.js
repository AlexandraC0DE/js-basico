// Ejercicio 1 condicionales:

// Vamos a crear una string que sea la respuesta de alguna pregunta.

// Si la respuesta es 'sí' imprimiremos:
// -Has respondido que sí.

// Si la respuesta es 'No' imprimiremos:
// -Has respondido que no.

// Si la persona no ha respondido ni sí, ni no. Se imprimirá en consola
// el siguiente mensaje:
// -No hemos entendido tu respuesta.

let respuesta = 'No';

if(respuesta == 'Si') {
    console.log('Has respondido que si')
} else if( respuesta == 'No' ) {
    console.log('Has respondido que no')
} else {
    console.log('No hemos entendido tu respuesta');
}