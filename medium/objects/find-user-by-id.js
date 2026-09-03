function findUser(users, id){

    
for ( let user of users){

    if (user.id == 2){
        return user.name;
    }else {
        return null;
        
    }
}



}
findUser([
    { id: 1, name: "Anna" },
    { id: 2, name: "John" },
    { id: 3, name: "Peter" }
]);
// { id: 2, name: "John" };

//findUser(users, 10)
// null