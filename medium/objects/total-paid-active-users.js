function getTopActiveUsers(users, n){

    let usersObj = {};

    for (let user of users){
        
        if (user.active == true){
            usersObj[user.name] = user.salary;
        }
        
    }
    let userArr = Object.entries(usersObj)
    .sort((a,b) => b[1] - a[1])
    .slice(0,n)
    .map(item => item[0]);
    return userArr;
}
getTopActiveUsers([
    { name: "Anna", active: true, salary: 2200 },
    { name: "John", active: false, salary: 3000 },
    { name: "Peter", active: