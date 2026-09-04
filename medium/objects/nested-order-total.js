function calculateOrdersTotal(orders){

    let sum = 0;

    for ( let order of orders){
        for ( let item of order.items){
            sum += item.price * item.quantity;

        }
    }
    return sum;
    


}
calculateOrdersTotal([
    {
        id: 1,
        items: [
            { name: "Laptop", price: 1000, quantity: 1 },
            { name: "Mouse", price: 20, quantity: 2 }
        ]
    },
    {
        id: 2,
        items: [
            { name: "Keyboard", price: 8