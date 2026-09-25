function getSalesByCategory(sales){


}

getSalesByCategory([
    { product: "Laptop", category: "Electronics", amount: 1200, completed: true },
    { product: "Phone", category: "Electronics", amount: 800, completed: true },
    { product: "Tablet", category: "Electronics", amount: 600, completed: false },

    { product: "Chair", category: "Furniture", amount: 250, completed: true },
    { product: "Desk", category: "Furniture", amount: 500, completed: true },
    { product: "Lamp", category: "Furniture", amount: 100, completed: false },

    { product: "T-Shirt", category: "Clothing", amount: 40, completed: true },
    { product: "Jacket", category: "Clothing", amount: 150, completed: false }
]);

// output:

// {
//     Electronics: {
//         salesCount: 2,
//         revenue: 2000
//     },

//     Furniture: {
//         salesCount: 2,
//         revenue: 750
//     },

//     Clothing: {
//         salesCount: 1,
//         revenue: 40
//     }
// }