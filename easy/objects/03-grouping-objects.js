function getCategoryReport(products){

    let result = {};

    for ( let product of products){
        if (!result[product.category]){
            result[product.category] = { count: 1, total: product.price };
        }else {

        
            result[product.category].count++;
            result[product.category].total += product.price;
        }
    }
    return result;
    


}
getCategoryReport([
    { category: "food", price: 10 },
    { category: "tech", price: 200 },
    { category: "food", price: 15 },
    { category: "books", price: 30 },
    { category: "tech", price: 100 }
]);

// expected output :
// {
//     food: { count: 2, total: 25 },
//     tech: { count: 2, total: 300 },
//     books: { count: 1, total: 30 }
// }