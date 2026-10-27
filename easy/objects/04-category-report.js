function getCategoryReport(products){

    let result = {};

    for ( let product of products){
        if ( !result[product.category]){
            result[product.category] = {
                category: 0,
                total: 0,
                averagePrice: 0
                }
            }
            result[product.category].count++
            result[product.category].total += product.price
            result[product.category].averagePrice = result[product.category].total / result[product.category].count
        }

        let key = Object.values(result);
        console.log(key[0]);
        console.log(key[1]);
        console.log(key[2]);
        
        
    }



getCategoryReport([
    { category: "food", price: 10 },
    { category: "tech", price: 200 },
    { category: "food", price: 15 },
    { category: "books", price: 30 },
    { category: "tech", price: 100 }
])

// expected output :
// {
//     food: { count: 2, total: 25, averagePrice: 12.5 },
//     tech: { count: 2, total: 300, averagePrice: 150 },
//     books: { count: 1, total: 30, averagePrice: 30 }
// }
