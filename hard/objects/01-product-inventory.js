function getStockByCategory(products){

    let techObj = {};
     
    for ( let product of products){
        if(techObj[product.category]){
            techObj[product.category] += product.stock
        }else{
            techObj[product.category] = product.stock

        }
    }
    return techObj;
    



}
getStockByCategory([
    { name: "Laptop", category: "tech", stock: 5 },
    { name: "Mouse", category: "tech", stock: 12 },
    { name: "Bread", category: "food", stock: 20 },
    { name: "Phone", category: "tech", stock: 8 },
    { name: "Milk", category: "food", stock: 15 },
    { name: "Shirt", category: "clothes", stock: 10 }
]);

// {
//     tech: 25,
//     food: 35,
//     clothes: 10
// }