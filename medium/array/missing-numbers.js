function findMissingNumbers(arr, n){

    let findingNum = [];
    for ( let i = 1; i <= n; i++){
        findingNum.push(i);

    }

    let newArr = findingNum.filter(items => !arr.includes(items));
    return newArr;
    


}
findMissingNumbers([1, 2, 4, 6, 7], 7);

//[3, 5]
// input array not always sorted