function getCustomerReport(orders, minTotal) {
    // your solution

    let customerReport = {}
    

    for ( let order of orders){
        
        if (order.customer && order.status === 'completed') {
            customerReport[order.customer] = {
            ordersCount: 0,
            totalSpent: 0
    };
        if (!customerReport[order.customer]) {
    // initialize
            customerReport[order.customer].ordersCount += 1;
            customerReport[order.customer].totalSpent += order.total;
        }
            
}
        
    }
    console.log(customerReport);
    
    


}

getCustomerReport([
    { id: 1, customer: "Anna", total: 120, status: "completed" },
    { id: 2, customer: "John", total: 250, status: "completed" },
    { id: 3, customer: "Anna", total: 80, status: "cancelled" },
    { id: 4, customer: "Maria", total: 300, status: "completed" },
    { id: 5, customer: "John", total: 150, status: "completed" },
    { id: 6, customer: "Anna", total: 200, status: "completed" },
    { id: 7, customer: "Peter", total: 90, status: "cancelled" },
    { id: 8, customer: "Maria", total: 100, status: "completed" }
], 300)

// expected output 
// [
//     { customer: "John", ordersCount: 2, totalSpent: 400 },
//     { customer: "Maria", ordersCount: 2, totalSpent: 400 },
//     { customer: "Anna", ordersCount: 2, totalSpent: 320 }
// ]

// Изисквания
// 1. Използвай само поръчките със status === "completed".
// 2. Групирай поръчките по customer.
// 3. Изчисли ordersCount и totalSpent за всеки клиент.
// 4. Включи само клиентите с totalSpent >= minTotal.
// 5. Сортирай по totalSpent descending. При равни суми сортирай по customer alphabetically.
// 6. Не променяй оригиналния масив.