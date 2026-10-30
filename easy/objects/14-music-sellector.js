function getArtistStats(albums) {
    let result = {};

    for ( let album of albums){
        if (!result[album.artist]){
            result[album.artist] = {
                totalAlbums: 0,
                latestYear: 0
            }
        }     
        if (album.liked)  {
            result[album.artist].likedAlbums = 0
        }
                result[album.artist].totalAlbums ++
                result[album.artist].likedAlbums ++
                result[album.artist].latestYear = album.year
            
    }

    for (let [key, value] of Object.entries(result)){
        console.log(key, value);
        
    }
    


}
getArtistStats([
    { id: 1, title: "The Wall", artist: "Pink Floyd", year: 1979, liked: true },
    { id: 2, title: "Master of Puppets", artist: "Metallica", year: 1986, liked: false },
    { id: 3, title: "Back in Black", artist: "AC/DC", year: 1980, liked: true },
    { id: 4, title: "Ride the Lightning", artist: "Metallica", year: 1984, liked: true },
    { id: 5, title: "The Dark Side of the Moon", artist: "Pink Floyd", year: 1973, liked: false },
    { id: 6, title: "Animals", artist: "Pink Floyd", year: 1977, liked: true },
    { id: 7, title: "72 Seasons", artist: "Metallica", year: 2023, liked: true }
]);

// expected output:
// {
//     "Pink Floyd": {
//         totalAlbums: 3,
//         likedAlbums: 2,
//         latestYear: 1979
//     },
//     "Metallica": {
//         totalAlbums: 3,
//         likedAlbums: 2,
//         latestYear: 2023
//     },
//     "AC/DC": {
//         totalAlbums: 1,
//         likedAlbums: 1,
//         latestYear: 1980
//     }
// }