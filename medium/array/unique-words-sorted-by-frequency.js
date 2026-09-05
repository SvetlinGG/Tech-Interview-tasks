function wordFrequency(text){

    let newText = text.split(' ').map(word => word.toLowerCase());

    let textObj = {};
    for ( let word of newText){
        if (!textObj[word]){
            textObj[word] = 1;
            
        }else{
            textObj[word] ++;
        }
    }
    let textArray = Object.entries(textObj).sort((a, b) => b[1] - a[1]);
    return textArray;
    
    
    
    


}
wordFrequency("JS is great and JS is fast and JS is useful")