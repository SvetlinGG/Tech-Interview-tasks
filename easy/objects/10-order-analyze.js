function getTotalSpentByUser(orders){

    let resut = {};

    for (let order of orders){
        if(!result){
            if ( order.status === 'completed'){
                result[order.userId] = order.amount;
            }
        }
        result[order.userId] += order.amount;
    }

    



};
getTotalSpentByUser([
    { id: 1, userId: 101, amount: 120, status: "completed" },
    { id: 2, userId: 102, amount: 80, status: "pending" },
    { id: 3, userId: 101, amount: 50, status: "completed" },
    { id: 4, userId: 103, amount: 200, status: "completed" },
    { id: 5, userId: 102, amount: 90, status: "completed" }
]);

// expected otput :
// {
//     101: 170,
//     102: 90,
//     103: 200
// }