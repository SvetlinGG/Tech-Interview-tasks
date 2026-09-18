function getCustomerSummary(customers){


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