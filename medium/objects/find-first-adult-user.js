function findFirstAdult(users){

    let findAdultUser = users.find(user => user.age >= 18);
    return findAdultUser;
    


}
findFirstAdult([
    { name: "Anna", age: 16 },
    { name: "John", age: 17 },
    { name: "Peter", age: 22 },
    { name: "Maria", age: 30 }
])