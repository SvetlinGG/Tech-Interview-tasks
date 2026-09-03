function findUser(users, id){

//     users = [
//     { id: 1, name: "Anna" },
//     { id: 2, name: "John" },
//     { id: 3, name: "Peter" }
// ];

for ( let user of users){

    if (user.id === id){
        console.log(`{ id:${user.id}, name:${user.name} }`);
    }
    return null;
}

}
findUser([
    { id: 1, name: "Anna" },
    { id: 2, name: "John" },
    { id: 3, name: "Peter" }
], 3);
// { id: 2, name: "John" };

//findUser(users, 10)
// null