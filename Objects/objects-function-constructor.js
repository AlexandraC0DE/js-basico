function car(brand, model, year){
    this.brand = brand;
    this.model = model;
    this.year = year;
}

var newCar = new car('Tesla', 'Model 3', 2020);
var newCar2 = new car('Tesla', 'Model X', 2021);
var newCar3 = new car('Toyota', 'Model Corolla', 2022);

console.log(newCar);
console.log(newCar2);
console.log(newCar3);