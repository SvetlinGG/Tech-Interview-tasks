function flattenArray(arr){

    let newArr = [];
    for (let items of arr){
        items.forEach(item => Number(item));
        newArr.push(items);
    }
    console.log(newArr.join(','));
    


}
flattenArray([[1, 2], [3, 4], [5]])
// [1, 2, 3, 4, 5]