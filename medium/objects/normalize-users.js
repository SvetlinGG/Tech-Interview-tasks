function normalizeUsers(users){


}
normalizeUsers([
    { id: 1, name: "  ANNA  ", email: "ANNA@MAIL.COM" },
    { id: 2, name: " john ", email: "John@Mail.Com" }
]);

// [
//     { id: 1, name: "anna", email: "anna@mail.com" },
//     { id: 2, name: "john", email: "john@mail.com" }
// ]