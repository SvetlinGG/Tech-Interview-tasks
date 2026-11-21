function updateAlbum(collection, albumId, action){

    let result = [];
    let updatedAlbums = {}
    

    for ( let item of collection){
        if ( item.id === albumId ){
            if (item.liked === true){
                updatedAlbums = {
                    ...item,
                    action: !item.liked,
                    plays: item.plays + 1
                }
            }
            }else if (item.liked === false){
                updatedAlbums = {
                    ...item,
                    action: !item.liked,
                }
                result.push(updatedAlbums)
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
