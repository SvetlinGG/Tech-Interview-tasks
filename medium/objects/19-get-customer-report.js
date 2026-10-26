function getCustomerReport(orders, minTotal) {
    // your solution

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