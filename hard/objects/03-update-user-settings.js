function updateUserStatus(users, userName, newStatus){

    let userArr = Object.entries(users);
    for ( let [name, status] of userArr ) {
        if ( name === userName ) {
            status.active = newStatus
            return (name, status)
        }
    }
    


}
updateUserStatus({
    Anna: {
        age: 28,
        active: true
    },
    John: {
        age: 34,
        active: false
    },
    Peter: {
        age: 25,
        active: true
    }
}, 'John', true)