function countWords(str){

    let wordObj = {};

    str = str.split(' ');
    //let count = 0
    for ( let key of str){
     
        if (!wordObj[key]){
            //count ++;
            wordObj[key] = 1
        } else{
            wordObj[key]++

        }
    }
    return wordObj;
    


}
console.log(countWords("hello world hello"))
// { hello: 2, world: 1 }