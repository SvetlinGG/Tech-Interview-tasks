function activateUser(users, id){

    let userArr
 = users.map(user => {
        if(user.id === id){
            return {...user, active:true}
        }else{
            return user;
        }
    }) 

    retu