function applyDiscount(products, discount){

    for ( let items of products){
        if (items){
            items.price = items.price - (items.price * discount / 100);
            
        }
        
    }
    return products;

}
applyDiscount([
    { name: "Laptop", price: 1000 },
    { name: "Mouse", price: 20 },
    { name: "Keyboard", price: 80 }
], 10)