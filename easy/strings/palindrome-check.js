function isPalindrome(str){

    let reverse = str.split('').reverse().join('');
    if ( str === reverse){
        console.log(true)
    } else {
        console.log(false);
    }
    


}
isPalindrome("racecar") // true
isPalindrome("hello")   // false
isPalindrome("RaceCar") // true