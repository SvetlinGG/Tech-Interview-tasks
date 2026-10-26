function getCategoryReport(products){


}
getCategoryReport([
    { category: "food", price: 10 },
    { category: "tech", price: 200 },
    { category: "food", price: 15 },
    { category: "books", price: 30 },
    { category: "tech", price: 100 }
])

// expected output :
// {
//     food: { count: 2, total: 25, averagePrice: 12.5 },
//     tech: { count: 2, total: 300, averagePrice: 150 },
//     books: { count: 1, total: 30, averagePrice: 30 }
// }
