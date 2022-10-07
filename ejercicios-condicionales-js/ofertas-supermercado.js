
// Ejercicio 4 condicionales:

// Dadas dos variables essocio(booleano) y ticket(number) calcula
// el precio final del ticket en un supermercado que tiene las siguientes 
// ofertas ( si es socio) :

// - 1 euro gratis a partir de 25 euros
// - 5% de descuento a partir de 50 euros
// - 16 euros gratis a partir de 100 euros

// Y si no son socios:
// . 5 euros gratis a partir de 100 euros gastados.

let esSocio = true;
let ticket = 151;

if(esSocio) { // si es socio

if(ticket >= 100) { 
    ticket = ticket - 15
}
else if(ticket >= 50) {
        ticket = ticket * 0.95 
}
else if(ticket >= 25) {
    ticket = ticket - 1 
}

} else { // no es socio

    if( ticket >= 100 ) {
        ticket = ticket - 5
    }
}

console.log('El precio final del ticket es ' + ticket + ' euros' );