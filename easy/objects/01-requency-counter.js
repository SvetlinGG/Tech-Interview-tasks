function countFruits(fruits) {

    let result = {};
    for ( let fruit of fruits){
        
        if (!result[fruit]){
            result[fruit] = 0
        }

        result[fruit] ++
    }

    return result;
    
    

}
countFruits(["apple", "banana", "apple", "orange", "banana", "apple", "kiwi"])
