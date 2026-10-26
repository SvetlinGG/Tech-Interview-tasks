function sumByCategory(products) {

    let result = {};

    for ( let product of products){
        if (!result[product.category]){
            result[product.category] = 0;
        }

        result[product.category] += product.price;
    }
    return result;
    


}
sumByCategory([
    { category: "food", price: 10 },
    { category: "tech", price: 200 },
    { category: "food", price: 15 },
    { category: "books", price: 30 },
    { category: "tech", price: 100 }
]);

// expected output: 
// {
//     food: 25,
//     tech: 300,
//     books: 30
// }

