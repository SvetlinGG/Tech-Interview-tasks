function countByCategory(products){

    let prodObj = {};

    for (let item of products){
        if(!prodObj[item.category]){
            prodObj[item.category] = 1;
        } else {
            prodObj[item.category]++;
        }
        
    }
    return prodObj;
    




}
countByCategory([
    { name: "Laptop", category: "tech" },
    { name: "Mouse", category: "tech" },
    { name: "Apple", category: "food" },
    { name: "Bread", category: "food" },
    { name: "Phone", category: "tech" }
]);

// {
//     tech: 3,
//     food: 2
// }