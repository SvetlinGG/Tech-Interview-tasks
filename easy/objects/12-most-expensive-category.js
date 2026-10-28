function getMostExpensiveByCategory(products){



}
getMostExpensiveByCategory([
    { id: 1, name: "Laptop", category: "Electronics", price: 1200 },
    { id: 2, name: "Phone", category: "Electronics", price: 800 },
    { id: 3, name: "Desk", category: "Furniture", price: 300 },
    { id: 4, name: "Chair", category: "Furniture", price: 150 },
    { id: 5, name: "Monitor", category: "Electronics", price: 400 }
]);

// expected output: 

// {
//     Electronics: { id: 1, name: "Laptop", category: "Electronics", price: 1200 },
//     Furniture: { id: 3, name: "Desk", category: "Furniture", price: 300 }
// }