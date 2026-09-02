function flattenArray(arr){

    let newArr = [];
    for (let item of arr){
        item = item.join('');
        newArr.push(item)
    }
    return newArr.join('').split('').join(' ');
    


}
flattenArray([[1, 2], [3, 4], [5]])
// [1, 2, 3, 4, 5]