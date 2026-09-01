function calculateCart(cart){

    let completeObj = {
        totalItems: 0,
        totalPrice: 0,
        mostExpensive: ""
    };

    let itemsInfo = Object.entries(cart);
    
    for ( let items of itemsInfo){
        //console.log(items[1]);
        
        for ( let content of Object.entries(items[1])){
            //console.log(content);
            let [keyItems, valueItems] = content;
            for ( let i = 0; i < valueItems; i+=2){
                let totalItems = valueItems[i]
                if(!completeObj[totalItems]){
                completeObj[totalItems] += Number(valueItems[i])  
            }

            }
            
            
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