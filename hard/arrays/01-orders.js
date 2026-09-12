function getTopCustomers(orders, minTotal){
    let arr = [];

    for (let item of orders){
        if (item.status === 'completed' && item.total >= minTotal){
            arr.push(item);
        }
    }
    let sortedData = arr.sort((a, b) => b.total - a.total).map(item => item.customer);
    return sortedData

    
}

getTopCustomers([
    { id: 1, customer: "Anna", total: 120, status: "completed" },
    { id: 2, customer: "John", total: 80, status: "pending" },
    { id: 3, customer: "Peter", total: 250, status: "completed" },
    { id: 4, customer: "Maria", total: 60, status: "cancelled" },
    { id: 5, customer: "David", total: 180, status: "completed" },
    { id: 6, customer: "Sarah", total: 90, status: "pending" }
], 150);

//output
//["Peter", "David"]