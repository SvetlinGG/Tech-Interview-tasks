function getExpensiveProducts(products, minPrice){

    let filteredProducts = products.filter(product => product.price > minPrice);
    return filteredProducts;
    


}
getExpensiveProducts([
    { name: "Laptop", price: 1200 },
    { name: "Mouse", price: 25 },
    { name: "Monitor", price: 300 },
    { name: "Keyboard", price: 80 }
], 100)