function findMax(numbers){

    let sorted = numbers.sort((a, b) => a - b);
    console.log(sorted.pop());
    


}
findMax([4, 7, 2, 9, 5]) // 9
findMax([-10, -3, -20]) // -3