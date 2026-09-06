function removeDuplicateUsers(users){


}
removeDuplicateUsers([
    { id: 1, name: "Anna" },
    { id: 2, name: "John" },
    { id: 1, name: "Anna Copy" },
    { id: 3, name: "Peter" },
    { id: 2, name: "John Copy" }
]);

// [
//     { id: 1, name: "Anna" },
//     { id: 2, name: "John" },
//     { id: 3, name: "Peter" }
// ]