function groupByRole(users){

    
    let resultObj = {};

    for ( let obj of users ){
        let name = obj.name;
        let role = obj.role;

        if ( resultObj[role]){
            resultObj[role] = []
        }

        resultObj[role].push(name)
    }
    
    console.log(resultObj);
    

    


}
groupByRole([
    {name: "Anna", role: "admin"},
    {name: "John", role: "user"},
    {name: "Peter", role: "admin"},
    {name: "Maria", role: "user"},
    {name: "David", role: "moderator"}
])
// {
//     admin: ["Anna", "Peter"],
//     user: ["John", "Maria"],
//     moderator: ["David"]
// }
