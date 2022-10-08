var students = ['María', 'Sergio', 'Rosa', 'Daniel'];

function greetStudents(student) {
    console.log(`Hola, ${student}`)
}

while(students.length > 0){ // mientras que el parámetro sea verdad se va a ejecutar el while, mientras la longitud de mi array sea igual a cero va a pasar
    var student = students.shift();
    greetStudents(student);
}

// Este loop se va a ejecutar hasta que la longitud de nuestro array sea mayor o
// igual a 0 que es cuando
// se tiene que romper el ciclo


var students = ['María', 'Sergio', 'Rosa', 'Daniel'];

function greetStudents(student) {
    console.log(`Hola, ${student}`)
}

while(students.length > 0){
    console.log(students);
    var student = students.shift();
    greetStudents(student);
}

