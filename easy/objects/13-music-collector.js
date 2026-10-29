function getFilteredAlbums(albums, artistName) {

    let arr = [];
    let newArr = []

    for ( let album of albums){
        if ( album.liked === true && Math.max(album.year)){
            
            console.log(album);
            
        }
        
        
    }

    //console.log(newArr.shift());
    
    
}
getFilteredAlbums([
    { id: 1, title: "The Wall", artist: "Pink Floyd", year: 1979, liked: true },
    { id: 2, title: "Master of Puppets", artist: "Metallica", year: 1986, liked: false },
    { id: 3, title: "Back in Black", artist: "AC/DC", year: 1980, liked: true },
    { id: 4, title: "Ride the Lightning", artist: "Metallica", year: 1984, liked: true },
    { id: 5, title: "The Dark Side of the Moon", artist: "Pink Floyd", year: 1973, liked: false }
], "metallica")