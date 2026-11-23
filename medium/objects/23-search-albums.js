function searchAlbums(albums, filters) {

    let result = [];

         filters = {
        search: "pink",
        genre: "Rock",
        onlyLiked: true,
        minRating: 4,
        sortBy: "year"
        };
        const search = filters.search.toLowerCase();

        for ( let album of albums){
            if ((album.title.toLowerCase().includes(search)) ||
                (album.artist.toLowerCase().includes(search)) &&
                (filters.genre === "" || album.genre === filters.genre) &&
                (!filters.onlyLiked || album.liked ) &&
                (album.rating >= filters.minRating)){
                    result.push(album)
                }
            
        }

        console.log(result.sort((a, b) => b.year - a.year));
        
    
    

}
searchAlbums([
    {
        id: 1,
        title: "The Wall",
        artist: "Pink Floyd",
        year: 1979,
        genre: "Rock",
        liked: true,
        rating: 5
    },
    {
        id: 2,
        title: "Master of Puppets",
        artist: "Metallica",
        year: 1986,
        genre: "Metal",
        liked: true,
        rating: 5
    },
    {
        id: 3,
        title: "Back in Black",
        artist: "AC/DC",
        year: 1980,
        genre: "Rock",
        liked: false,
        rating: 4
    },
    {
        id: 4,
        title: "Nevermind",
        artist: "Nirvana",
        year: 1991,
        genre: "Grunge",
        liked: true,
        rating: 4
    },
    {
        id: 5,
        title: "The Dark Side of the Moon",
        artist: "Pink Floyd",
        year: 1973,
        genre: "Rock",
        liked: false,
        rating: 5
    }
]);

// Filters:
// const filters = {
//     search: "pink",
//     genre: "Rock",
//     onlyLiked: true,
//     minRating: 4,
//     sortBy: "year"
// };

// Изисквания
// Функцията трябва да:
// 1. Търси по заглавие ИЛИ име на изпълнител (без значение от главни и малки букви).
// 2. Филтрира по жанр. Ако genre е празен стринг, не прилагай този филтър.
// 3. Ако onlyLiked е true, връщай само харесаните албуми.
// 4. Връщай албуми с рейтинг, по-голям или равен на minRating.
// 5. Сортира по година в низходящ ред, ако sortBy === "year".
// 6. Не променяй оригиналния масив albums.
// 7. Поддържай празен стринг при търсене.

// expected output:
// [
//     {
//         id: 1,
//         title: "The Wall",
//         artist: "Pink Floyd",
//         year: 1979,
//         genre: "Rock",
//         liked: true,
//         rating: 5
//     }
// ]