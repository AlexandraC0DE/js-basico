var fruits = ['Manzana', 'Plátano', 'Cereza', 'Fresa'];

// console.log(fruits);

// console.log(fruits.length); // longitud del array


// console.log(fruits[3]); // acceder a elementos de un array


// Cuando estamos hablando de Arrays tenemos 2 tipos de elementos que son métodos
// Estos métodos nos van a ayudar a hacer cosas que nos van a ayudar a mutar
// el comportamiento dec los arrays

/**
 * 1er método
 * 2do método
 */

var moreFruits = fruits.push('Uvas', 'Peras'); // Este método va a añadir elementos a mi array

// console.log(fruits); // Si quiero acceder a Uvas

var ultimate = fruits.pop('Uvas'); // Este método sirve para eliminar mi último array
//  console.log(fruits);


// método unshift nos va a ayudar a agregar un nuevo elemento a nuestro array
// pero en lugar de que se agregue al final lo va a agregar al inicio de nuestro array

var newFruits = fruits.unshift('Durazno'); // para colocar elemento al inicio del array

// console.log(fruits);

// método shift para eliminar el elemento que esté al inicio del array
var deleteFruits = fruits.shift('Durazno');

// console.log(fruits);



// Este último método nos ayuda a mutar un array, pero más que mutar nos ayuda a saber la posición del elemento que le pasemos de ese array se llama indexOf.

//  Por ejemplo si tenemos 1.500 arrays y tenemos el nombre d euno de los elementos que forman parte del array y queremos saber cuál es su posición. El método indexOf nos va a ayudar.

var position = fruits.indexOf('Cereza');

console.log(position);
console.log(fruits[2]);