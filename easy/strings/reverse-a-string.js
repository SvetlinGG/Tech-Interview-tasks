function reverseString(str){

    // let reversed = str.split('').reverse().join('');
    // console.log(reversed);
    let newArr = [];
    for (let i = str.length; i > 0; i--){
        newArr.push(str[i-1])

    }
    
    console.log(newArr.join(''));
    


}
reverseString('hello');
reverseString('JavaScript')