// var object = {};

var myCard = {
    brand: "Toyota",
    model: "Corolla",
    year: 2020,
    carDetails: function(){
        console.log(`Card ${this.modelo} ${this.year}`)
    }
};

// console.log(myCard);

// La forma de acceder a los valores de objetos es:

// myCard.brand

myCard.carDetails();