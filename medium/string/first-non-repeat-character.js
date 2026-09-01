function firstUniqueChar(str){

    let char = {}
    let word = str.split('');

    for ( let i = 0; i < word.length; i++){
         let key = word[i];

        if (!char[key]){
            char[key] = 1
        }else{
            char[key]++;
        }
    }
    
    let countChar = Object.entries(char)
    for ( let [key, value] of countChar){
        if (value === 1){
            return key;
            
        }
    }
    return null
}
console.log(firstUniqueChar("aabbcddee"))
// "c"

console.log(firstUniqueChar("aabbcc"))
// null