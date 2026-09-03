function applyDiscount(products, discount){

    // for ( let items of products){
    //     if (items){
    //         items.price = items.price - (items.price * discount / 100);
            
    //     }
        
    // }
    // return products;

    let newProducts = {};

    return products.map(items => {
        return {
            name: items.name,
            price: items.price - (items.price * discount / 100)
        }
    });
    

}
applyDiscount([
    { name: "Laptop", price: 1000 },
    { name: "Mouse", price: 20 },
    { name: "Keyboard", price: 80 }
], 10)