function normalizeUsers(users){

    //let newUsers = {};

    users.map(user => {

         let newUsers = {

                id: user.id,
                name: user.name.trim().toLowerCase(),
                email: user.email.trim().toLowerCase()
        }
        return newUsers;

    })
    //console.log(newUsers);
    
    


}
normalizeUsers([
    { id: 1, name: "  ANNA  ", email: "ANNA@MAIL.COM" },
    { id: 2, name: " john ", email: "John@Mail.Com" }
]);

// [
//     { id: 1, name: "anna", email: "anna@mail.com" },
//     { id: 2, name: "john", email: "john@mail.com" }
// ]