function calculateCart(cart){

    let completeObj = {
        totalItems: 0,
        totalPrice: 0,
        mostExpensive: ""
    };
    let totalPriceItems = [];
    for ( let item of cart){
        let totalItems = item.quantity;
        completeObj.totalItems += totalItems;
        
        
        
        completeObj.totalPrice += item.price * item.quantity;
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