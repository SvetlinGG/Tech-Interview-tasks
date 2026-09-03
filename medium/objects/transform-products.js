function applyDiscount(products, discount){

    // for ( let items of products){
    //     if (items){
    //         items.price = items.price - (items.price * discount / 100);
            
    //     }
        
    // }
    // return products;

    let newProducts = {};

    return products.map(items => {
        return {
            name: items.name,
    