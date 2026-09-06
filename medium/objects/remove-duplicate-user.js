function removeDuplicateUsers(users){

    let userObj = {};
    let newArr = []
    for ( let user of users){
        if ( !userObj[user.id] ){
            userObj[user.id] = user;
            newArr.push(user)
        }
    }
    
    console.log(newArr);
    


}
removeDuplicateUsers([
    { id: 1, name: "Anna" },
    { id: 2, name: "John" },
    { id: 1, name: "Anna Copy" },
    { id: 3, name: "Peter" },
    { id: 2, name: "John Copy" }
]);

// [
