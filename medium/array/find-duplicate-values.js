function findDuplicates(arr){

    console.log(arr.filter((item, index) => arr.indexOf(item) !== index));

    


}
findDuplicates([1, 2, 3, 2, 4, 3, 5])