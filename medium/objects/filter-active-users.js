function getActiveUsers(users){

    let arr = [];

    users.map(item => {
        if (item.active === true) arr.push(item.name)

    })
    // for ( let item of users){
        
    //     if ( item.active === true){
    //         arr.push(item.name)
    //     }
    // }
    console.log(arr);
    


}
getActiveUsers([
    { name: "Anna", active: true },
    { name: "John", active: false },
    { name: "Peter", active: true }
])
// ["Anna", "Peter"]