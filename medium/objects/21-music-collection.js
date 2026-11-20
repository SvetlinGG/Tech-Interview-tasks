function updateAlbum(collection, albumId, action){

    let arr = [];
    let result = {
        albumId,
        title,
        action,
        plays
    }; 

    for ( let item of collection){
        if ( item.id === albumId && item.title === title && item.liked === action && item.plays === plays ){
            if ( item.liked === true){
                item.liked = false;
                item.plays = Number(item.plays) + 1;
                arr.push(result)
            }else if ( item.liked === false){
                item.liked = true;
                result.push(result);
            }
        }
        
    }
    
    console.log(result);
    


}
updateAlbum([
    { id: 1, title: "The Wall", liked: false, plays: 5 },
    { id: 2, title: "Master of Puppets", liked: true, plays: 10 },
    { id: 3, title: "Back in Black", liked: false, plays: 3 }
]);

// expected output:
// Функцията трябва да поддържа две действия:
// 1. Ако action === "like", да обърне стойността на liked за избрания албум (true става false и обратно).
// 2. Ако action === "play", да увеличи plays с 1.
// 3. Да не променя оригиналния масив или обектите в него.
// 4. Да върне нов масив.
// 5. Ако няма албум с посоченото id, да върне нов масив със същите данни.
