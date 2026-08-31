function findMissing(arr, n){

    let newArr = [];
    let missingNumber;
    for (let i = 1; i <= n; i++){
        newArr.push(i);

        if ( !arr.includes(i)){
            missingNumber = i;
            //newArr.splice(i, 0, missingNumber)
        }
    }
    console.log(missingNumber);
    


}
findMissing([1, 2, 3, 5, 6], 6);
// 4
findMissing([2, 3, 1, 5], 5)
// 4
