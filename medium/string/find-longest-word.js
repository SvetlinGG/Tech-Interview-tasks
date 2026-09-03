function findLongestWord(str){

    let arr = str.split(' ');
    let result = arr.map(word => {
        if (word.length  === arr.find(word)) {
            console.log(word);
            
        }
    })

}
findLongestWord("JavaScript is really powerful")
// "JavaScript"