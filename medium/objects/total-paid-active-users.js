function getTopActiveUsers(users, n){

    let usersObj = {};

    for (let user of users){
        
        if (user.active == true){
            console.log(user.salary);
            
        }
        
    }



}
getTopActiveUsers([
    { name: "Anna", active: true, salary: 2200 },
    { name: "John", active: false, salary: 3000 },
    { name: "Peter", active: true, salary: 3500 },
    { name: "Maria", active: true, salary: 2800 }
], 2)
