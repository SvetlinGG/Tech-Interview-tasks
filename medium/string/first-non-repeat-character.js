function firstUniqueChar(str){

    let word = str.split('');

    let arr = [];
    word.map((el, index) => {
        if(el !== index){
            arr.push(el)
        }
    })
    console.log(arr);
    

}
firstUniqueChar("aabbcddee")
// "c"

firstUniqueChar("aabbcc")
// null