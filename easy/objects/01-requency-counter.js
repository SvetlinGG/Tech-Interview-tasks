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

// expected output :
// {apple: 3, banana: 2, orange: 1, kiwi: 1}
