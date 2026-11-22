function transformAlbums(albums) {
  
    let result = [];
    let longestTrackName = null;
    let totalDuration = 0;
    let longestSong;

    for (let item of albums){
        const maxDuration = Math.max(...item.tracks.map(t => t.duration));
            for ( let tracks of item.tracks){
                totalDuration = item.tracks.reduce((acc, curr) => acc += curr.duration, 0);
                // longestSong = item.tracks.map(t => t.duration)
                // longestTrackName = Math.max(...longestSong);
                //if (tracks.duration === longestTrackName ) longestTrackName = tracks.title
                if (tracks.duration === maxDuration) longestTrackName = tracks.title;
            }

                    result.push({
                    id: item.id,
                    title: item.title,
                    artist: item.artist,
                    trackCount: item.tracks.length,
                    totalDuration,
                    longestTrack: longestTrackName
                })
                   
    }
     console.log(result[0].longestTrack)
     console.log(result[1].longestTrack)
     console.log(result[2].longestTrack)
     
}
transformAlbums([
    {
        id: 1,
        title: "The Wall",
        artist: "Pink Floyd",
        tracks: [
            { title: "Another Brick in the Wall", duration: 240 },
            { title: "Mother", duration: 330 },
            { title: "Hey You", duration: 280 }
        ]
    },
    {
        id: 2,
        title: "Master of Puppets",
        artist: "Metallica",
        tracks: [
            { title: "Battery", duration: 312 },
            { title: "Master of Puppets", duration: 515 }
        ]
    },
    {
        id: 3,
        title: "Back in Black",
        artist: "AC/DC",
        tracks: [
            { title: "Hells Bells", duration: 312 },
            { title: "Shoot to Thrill", duration: 315 }
        ]
    }
]);
// totalDuration: item.tracks.reduce((acc, curr) => acc += curr.duration, 0),
// longestTrack: tracks.title

// expected output:
// [
//     {
//         id: 1,
//         title: "The Wall",
//         artist: "Pink Floyd",
//         trackCount: 3,
//         totalDuration: 850,
//         longestTrack: "Mother"
//     },
//     {
//         id: 2,
//         title: "Master of Puppets",
//         artist: "Metallica",
//         trackCount: 2,
//         totalDuration: 827,
//         longestTrack: "Master of Puppets"
//     },
//     {
//         id: 3,
//         title: "Back in Black",
//         artist: "AC/DC",
//         trackCount: 2,
//         totalDuration: 627,
//         longestTrack: "Shoot to Thrill"
//     }
// ]
// Rules
// - Do not modify the original array or its objects.
// - Return a new array.
// - Do not use external libraries.
// - Handle an album with an empty tracks array: trackCount and totalDuration should be 0, and longestTrack should be null.
// What I want to evaluate
// - Array iteration.
// - Nested data processing.
// - Accumulators.
// - Finding maximum values.
// - Returning transformed objects.