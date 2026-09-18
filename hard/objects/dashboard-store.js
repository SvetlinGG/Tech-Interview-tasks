function getCustomerSummary(customers){

    // let customerSummary = customers.map(customer => {
    //     let completedOrders = customer.orders.filter(order => order.status === "completed").length;
    //     let totalSpent = customer.orders
    //         .filter(order => order.status === "completed")
    //         .reduce((sum, order) => sum + order.total, 0);
    //     return {
    //         name: customer.name,
    //         completedOrders: completedOrders,
    //         totalSpent: totalSpent
    //     };
    // });
    let generalObj = {};
    let customerObj = {};

    for ( let customer of customers){
        for ( let order of customer.orders){
            if (order.status === 'completed'){
                if (customerObj.completedOrders){ 
                    customerObj.completedOrders  += order.status;
                }
            }
        }
    }
    console.log(customerObj[completedOrders]);
    


}
getCustomerSummary([
    {
        id: 1,
        name: "Anna",
        orders: [
            { id: 101, total: 120, status: "completed" },
            { id: 102, total: 80, status: "cancelled" }
        ]
    },
    {
        id: 2,
        name: "John",
        orders: [
            { id: 103, total: 250, status: "completed" },
            { id: 104, total: 70, status: "completed" }
        ]
    },
    {
        id: 3,
        name: "Maria",
        orders: [
            { id: 105, total: 90, status: "cancelled" }
        ]
    },
    {
        id: 4,
        name: "Peter",
        orders: []
    }
]);
// Output
// [
//     {
//         name: "John",
//         completedOrders: 2,
//         totalSpent: 320
//     },
//     {
//         name: "Anna",
//         completedOrders: 1,
//         totalSpent: 120
//     }
// ]