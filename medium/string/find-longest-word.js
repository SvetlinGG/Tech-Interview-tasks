function findLongestWord(str){

    let arr = str.split(' ');
    let result = arr.map(word => {
        if (word.length  === Math.max(...arr.map(word => word.length))) {
            console.log(word);
            
        }
    })

}
findLongestWord("JavaScript is really powerful")
// "JavaScript"