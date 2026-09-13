function countUserActions(activities){


}
countUserActions([
    { user: "Anna", action: "login" },
    { user: "John", action: "login" },
    { user: "Anna", action: "view" },
    { user: "Peter", action: "login" },
    { user: "Anna", action: "logout" },
    { user: "John", action: "view" },
    { user: "Anna", action: "login" },
    { user: "Peter", action: "view" },
    { user: "John", action: "logout" }
]);

//result
// {
//     Anna: {
//         login: 2,
//         view: 1,
//         logout: 1
//     },
//     John: {
//         login: 1,
//         view: 1,
//         logout: 1
//     },
//     Peter: {
//         login: 1,
//         view: 1
//     }
// }