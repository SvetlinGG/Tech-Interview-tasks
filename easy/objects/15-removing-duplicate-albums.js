function removeDuplicateAlbums(albums) {

    const seen = new Set()
    let arr = [];

    

for (let album of albums){
    if (!seen.has(album.artist) || !seen.has(album.title) ){
        seen.add(album.artist);
        seen.add(album.title);
        arr.push(album)
    }
}

   return arr;


}
removeDuplicateAlbums([
    { id: 1, title: "The Wall", artist: "Pink Floyd" },
    { id: 2, title: "Master of Puppets", artist: "Metallica" },
    { id: 3, title: "The Wall", artist: "Pink Floyd" },
    { id: 4, title: "Back in Black", artist: "AC/DC" },
    { id: 5, title: "Master of Puppets", artist: "Metallica" },
    { id: 6, title: "The Wall", artist: "Another Artist" }
]);

// expected output: 
// Изисквания:
// 1. Два албума са дубликати, ако имат еднакви title и artist.
// 2. Запазваш първото срещане на всеки албум.
// 3. Връщаш нов масив от обекти.
// 4. Не променяш оригиналния масив.
// 5. Различни изпълнители могат да имат албуми с еднакво заглавие.
// Очакван резултат: албумите с id 1, 2, 4 и 6.