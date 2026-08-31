function countVowels(str){

    let vowels = {
        a:1, e:1, i:1, o:1, u:1
    }
    let count = 0
    for ( let i = 0; i < str.length; i++){
        for ( let [key, value] of Object.entries(vowels)){
            if (str[i] === key){
                count += value;
            }
        }
    }
    console.log(count);
    

}
countVowels("JavaScript") // 3
countVowels("Hello World") // 3