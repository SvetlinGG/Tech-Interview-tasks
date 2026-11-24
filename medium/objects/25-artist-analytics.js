function getArtistAnalytics(albums) {

    
    let countTracks = 0;
    let result = [];
    let artistAnalytic = {};

    

    for ( let album of albums ){
        let counterLikedAlbums = 0;
        let counterAlbums = 0;
        if ( artistAnalytic){
            if ( album.artist && album.liked ){
                artistAnalytic[album.artist] = album.artist;
                artistAnalytic[album.liked] = counterLikedAlbums;
                artistAnalytic[album.artist] = counterAlbums;
            }else{
                artistAnalytic[album.liked] += 1;
                artistAnalytic[album.artist] += 1;
            }
        }
        result.push(artistAnalytic)
        
    }
    console.log(result[0]);
    console.log(result[1]);
    console.log(result[2]);

    
    
    

}
getArtistAnalytics([
    {
        id: 1,
        title: "The Wall",
        artist: "Pink Floyd",
        year: 1979,
        liked: true,
        tracks: [
            { title: "Mother", duration: 330 },
            { title: "Hey You", duration: 280 }
        ]
    },
    {
        id: 2,
        title: "Dark Side of the Moon",
        artist: "Pink Floyd",
        year: 1973,
        liked: false,
        tracks: [
            { title: "Time", duration: 420 },
            { title: "Money", duration: 380 }
        ]
    },
    {
        id: 3,
        title: "Master of Puppets",
        artist: "Metallica",
        year: 1986,
        liked: true,
        tracks: [
            { title: "Battery", duration: 312 },
            { title: "Master of Puppets", duration: 515 }
        ]
    },
    {
        id: 4,
        title: "Ride the Lightning",
        artist: "Metallica",
        year: 1984,
        liked: false,
        tracks: [
            { title: "Fade to Black", duration: 417 }
        ]
    },
    {
        id: 5,
        title: "Nevermind",
        artist: "Nirvana",
        year: 1991,
        liked: true,
        tracks: [
            { title: "Smells Like Teen Spirit", duration: 301 }
        ]
    }
]);

// Изисквания
// За всеки изпълнител трябва да изчислиш:
// 1. artist – име на изпълнителя.
// 2. totalAlbums – общ брой албуми.
// 3. likedAlbums – брой харесани албуми.
// 4. totalTracks – общ брой песни.
// 5. totalDuration – обща продължителност на всички песни.
// 6. latestAlbumYear – годината на най-новия албум.
// Резултатът трябва да бъде масив от обекти.

// Expected output:
// [
//     {
//         artist: "Pink Floyd",
//         totalAlbums: 2,
//         likedAlbums: 1,
//         totalTracks: 4,
//         totalDuration: 1410,
//         latestAlbumYear: 1979
//     },
//     {
//         artist: "Metallica",
//         totalAlbums: 2,
//         likedAlbums: 1,
//         totalTracks: 3,
//         totalDuration: 1244,
//         latestAlbumYear: 1986
//     },
//     {
//         artist: "Nirvana",
//         totalAlbums: 1,
//         likedAlbums: 1,
//         totalTracks: 1,
//         totalDuration: 301,
//         latestAlbumYear: 1991
//     }
// ]