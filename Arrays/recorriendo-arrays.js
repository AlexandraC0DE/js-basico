var articles = [
    { name: "Bici", price: 3000 },
    { name: "TV", price: 2500 },
    { name: "Libro", price: 320 },
    { name: "Celular", price: 10000 },
    { name: "Laptop", price: 20000 },
    { name: "Teclado", price: 500 },
    { name: "Audifonos", price: 1700 },
];

// var searchArticle = articles.find(function(article){
//     return article.name === 'Laptop'
// });

// console.log(searchArticle);


// Método 2 for each
// regresa el valor que quieras del array
// si quieres el nombre, precio, etc. de los articulos, te lo regresa

// articles.forEach(function(article){
//     console.log(article.name);
// });

// Método 3 some

var cheapArticles = articles.some(function(article){
    return article.price <= 700;
});

console.log(cheapArticles);



