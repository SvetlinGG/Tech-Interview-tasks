function findLongestWord(str) {
    const arr = str.split(' ');
    const maxLen = Math.max(...arr.map(word => word.length));
    const result = arr.find(word => word.length === maxLen);
    console.log(result);
}

findLongestWord("JavaScript is really powerful");
// "JavaScript"
