function countUserActions(activities){

    let userObj = {};
    let userAction = {};

    for (let user of activities){
        if (!userObj[user.user]){
                userAction[user.action] += 1
                userObj[user.user] = userAction[user.action]
        }else{
            userObj[user.user] = user.action
        }
    }
    console.log(userObj);
    


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