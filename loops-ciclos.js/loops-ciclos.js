// var students = ['María', 'Sergio', 'Rosa', 'Daniel'];

// function greetStudents(students) {
//     console.log(`Hola, ${students}`)
// }

// for( var i = 2; i < students.length; i++ ){ // casi siempre en su sintaxis el for ocupa una variable i
//     // console.log(students[i]); // en este caso i vale cero 
//     greetStudents(students[i]);
// }

// ( var i = 0; i < students.length; i++ ) 
// como este es un loop lo que está haciendo es var es igual a 0
// 0 es menor a 4 sí es verdad
// entonces va a entrar 
// greetStudents(students[i]); en el index 0

// para la siguiente vez el i++ valdrá 1 ya no valdrá 0


//Otra forma de hacer un loop forOf

var students = ['María', 'Sergio', 'Rosa', 'Daniel'];

function greetStudents(student) {
    console.log(`Hola, ${student}`)
}

for(var student of students){ // la variable student es el singular de un array(students)
    greetStudents(student); // manda a llamar la función que sería el parametro que le estamos pasando
}



