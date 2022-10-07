// Ejercicio 2 condicionales:

// Vamos a crear dos variables, una va a ser un string(nombre)
// y la otra será un número(cantidad).

// El nombre de producto puede ser, juntamente con su precio:
// -Refresco 1,00 Euro
// -Cerveza 2,20 Euros
// -Patatas 5,00 Euros

// Según la cantidad y el nombre del producto especificados, vamos a
// tener que calcular el precio total del pedido.

let nombre = 'patatas';

let cantidad = 3;

let precioProducto = 0;

if ( nombre == 'cerveza' ) {
    precioProducto = 1
}
else if ( nombre == 'cerveza'  ) {
    precioProducto = 2.2
} else if ( nombre == 'patatas' ) {
    precioProducto = 5
}

let precioTotal = cantidad * precioProducto

console.log('Tiene que pagar ' + precioTotal + ' euros');

