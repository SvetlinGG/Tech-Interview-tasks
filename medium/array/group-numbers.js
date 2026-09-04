function groupNumbers(arr){

    let numObj = {
        odd: arr.filter(num => num % 2 !== 0),
        even: arr.filter(num => num % 2 === 0)
    }
    return numObj;
    


}
groupNumbers([1, 2, 3, 4, 5, 6])