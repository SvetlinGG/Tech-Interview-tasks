function findMostExpensiveOrder(orders){

    let expensiveOrder = {};

    for ( let order of orders){
        for ( let item of order.items){
            let totalPrice = item.price * item.quantity;
            if (!expensiveOrder.total || item.price > expensiveOrder.total ){
                expensiveOrder.total = totalPrice;
                expensiveOrder.id = order.id;
            }
        }
    }
    console.log(expensiveOrder);
    ;
    


}
findMostExpensiveOrder([
    {
        id: 1,
        items: [
            { name: "Mouse", price: 20, quantity: 2 },
            { name: "Keyboard", price: 80, quantity: 1 }
        ]
    },
    {
        id: 2,
        items: [
            { name: "Laptop", price: 1000, quantity: 1 }
        ]
    },
    {
        id: 3,
        items: [
            { name: "Monitor", price: 300, quantity: 2 }
        ]
    }
]);

// {
//     id: 2,
//     total: 1000
// }