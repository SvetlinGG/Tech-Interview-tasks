function generatePlaylist(albums, options) {

    options = {
        onlyLiked: true,
        minDuration: 250,
        maxDuration: 400,
        sortBy: "duration",
        order: "asc"
    };

    for ( let album of albums ){
        for ( let track of album.tracks ){
            if (options.minDuration === track.duration){
                console.log(track.title);
                
            }
        }
    }
    

}
generatePlaylist([
    {
        id: 1,
        title: "The Wall",
        artist: "Pink Floyd",
        year: 1979,
        liked: true,
        tracks: [
            { title: "Another Brick in the Wall", duration: 250 },
            { title: "Mother", duration: 330 },
            { title: "Hey You", duration: 280 }
        ]
    },
    {
        id: 2,
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
        id: 3,
        title: "Back in Black",
        artist: "AC/DC",
        year: 1980,
        liked: false,
        tracks: [
            { title: "Hells Bells", duration: 312 },
            { title: "Shoot to Thrill", duration: 315 }
        ]
    }
])

// Изисквания
// Функцията трябва:
// 1. Да събира песните от всички албуми.
// 2. Ако onlyLiked === true, да включва песни само от харесани албуми.
// 3. Да включва само песни с продължителност между minDuration и maxDuration (включително).
// 4. Всяка песен в резултата трябва да съдържа:
//    - title
//    - artist
//    - album
//    - duration
// 5. Да сортира по продължителност, ако sortBy === "duration".
// 6. Ако order === "desc", сортирането трябва да е низходящо.
// 7. Да не променя оригиналните данни.
// 8. Да връща празен масив, ако няма подходящи песни.

// expected output:
// [
//     {
//         title: "Another Brick in the Wall",
//         artist: "Pink Floyd",
//         album: "The Wall",
//         duration: 240
//     },
//     {
//         title: "Hey You",
//         artist: "Pink Floyd",
//         album: "The Wall",
//         duration: 280
//     }
// ]