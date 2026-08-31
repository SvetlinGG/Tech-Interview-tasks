function removeDuplicates(arr){
    const newArr = [];
    const found = arr.find((element, index) => {
        if (!newArr || element !== index){
            newArr.push(element)

        }
    })
    console.log(newArr);
    

}
removeDuplicates([1, 2, 2, 3, 4, 4, 5])
// [1, 2, 3, 4, 5]