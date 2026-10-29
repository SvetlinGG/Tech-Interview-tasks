function getFilteredAlbums(albums, artistName) {
    let arr = [];
    for (let album of albums) {
        if (album.liked === true && album.artist.toLowerCase() === artistName.toLowerCase()) {
            arr.push(album);
        }
    }

    arr.sort((a, b) => b.year - a.year);
    
    
    for (let album of arr) {
        if (album.title === artistName){
            console.log(`${album.title} (${album.year})`);
        }
    }
}
getFilteredAlbums([
    { id: 1, title: "The Wall", artist: "Pink Floyd", year: 1979, liked: true },
    { id: 2, title: "Master of Puppets", artist: "Metallica", year: 1986, liked: false },
    { id: 3, title: "Back in Black", artist: "AC/DC", year: 1980, liked: true },
    { id: 4, title: "Ride the Lightning", artist: "Metallica", year: 1984, liked: true },
    { id: 5, title: "The Dark Side of the Moon", artist: "Pink Floyd", year: 1973, liked: false }
], "Metallica")