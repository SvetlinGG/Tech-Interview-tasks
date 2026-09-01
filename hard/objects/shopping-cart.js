function calculateCart(cart){

    let completeObj = {
        // totalItems: 0,
        // totalPrice: 0,
        // mostExpensive: ""
    };

    for ( let item of cart){
        //console.log(item.name);
        //console.log(item.price);
        let itemQuantity = item.quantity;
        if (!completeObj){
            completeObj[totalItems] += itemQuantity;
        }
        
    }
    console.log(completeObj);
    
    
}
calculateCart([
    { name: "Laptop", price: 1200, quantity: 1 },
    { name: "Mouse", price: 25, quantity: 2 },
    { name: "Keyboard", price: 80, quantity: 1 },
    { name: "Monitor", price: 300, quantity: 2 }
])

// Output 
// {
//     totalItems: 6,
//     totalPrice: 1930,
//     mostExpensive: "Laptop"
// }