function getActiveUsers(users){

    let arr = [];
    for ( let item of users){
        
        if ( item.active === true){
            arr.push(item.name)
      