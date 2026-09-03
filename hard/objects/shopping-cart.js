function calculateCart(cart){

    let completeObj = {
        totalItems: 0,
        totalPrice: 0,
        mostExpensive: ""
    };
    let maxPrice = [];
    let totalPriceItems = [];
    for ( let item of cart){
        let totalItems = item.quantity;
        completeObj.totalItems += totalItems;
        totalPriceItems.push(item.price)
        completeObj.totalPrice += item.price * item.quantity;
        for ( let price of [item.price]){
            
            maxPrice.push(price);
            let max = 