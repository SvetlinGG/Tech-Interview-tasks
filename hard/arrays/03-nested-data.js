function getMostExpensiveOrder(orders){

    let customerObj = {};

    for ( let item of orders){
        let total = 0;

        for (let product of item.products){

            total += product.price * product.quantity;

        }

        customerObj[item.customer] = total;

        
}
let sorted = Object.entries(customerObj).sort((a, b) => b[1] - a[1]);
    return {customer: sorted[0][0], total: sorted[0][1]};

}
getMostExpensiveOrder([
    {
        id: 1,
        customer: "Anna",
        products: [
            { name: "Laptop", price: 1200, quantity: 1 },
            { name: "Mouse", price: 40, quantity: 2 }
        ]
    },
    {
        id: 2,
        customer: "John",
        products: [
            { name: "Monitor", price: 300, quantity: 2 },
            { name: "Keyboard", price: 80, quantity: 1 }
        ]
    },
    {
        id: 3,
        customer: "Maria",
        products: [
            { name: "Phone", price: 700, quantity: 1 },
            { name: "Case", price: 30, quantity: 3 }
        ]
    }
]);

// {
//     customer: "Anna",
//     total: 1280
// }