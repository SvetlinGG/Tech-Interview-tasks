function findLongestWord(str){

    let arr = str.split(' ');
    console.log(Math.max(...arr.map(word => word.length)));

}
findLongestWord("JavaScript is really powerful")
// "JavaScript"