function activateUser(users, id){

    let userArr
 = users.map(user => {
        if(user.id === id){
            return {...user, active:true}
        }else{
            return user;
        }
    }) 

    return userArr;
    


}
activateUser([
    { id: 1, name: "Anna", active: true },
    { id: 2, name: "John", active: false },
    { id: 3, name: "Peter", active: true }
], 2)