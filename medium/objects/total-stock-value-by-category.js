function stockValueByCategory(products){

    let stockObj = {
        tech: 0,
        food: 0
    }

    for ( let items of products){
        if ( items.category === 'tech'){
            stockObj.tech += items.price * items.stock
        }
        if( items.category === 'food'){
            stockObj.food += items.price * items.stock
        }
    }
    console.log(stockObj);
    


}
stockValueByCategory([
    { name: "Laptop", category: "tech", price: 1200, stock: 2 },
    { name: "Mouse", category: "tech", price: 25, stock: 10 },
    { name: "Apple", category: "food", price: 2, stock: 50 },
    { name: "Bread", category: "food", price: 3, stock: 20 }
])