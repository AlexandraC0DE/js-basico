var articles = [
    { name: 'Bici', price: 3000 },
    { name: 'Tv', price: 2500 },
    { name: 'Book', price: 320 },
    { name: 'Phone', price: 10000 },
    { name: 'Laptop', price: 20000 },
    { name: 'keyboard', price: 500 },
    { name: 'headphones', price: 1700 },
]; 

// Método 1

var 
filteredArticles = articles.filter(function(article){
    return article.price <= 500
});

console.log(filteredArticles);


// Método 2

var articleNames = articles.map(function(article){
    return article.name
});

console.log(articleNames);



