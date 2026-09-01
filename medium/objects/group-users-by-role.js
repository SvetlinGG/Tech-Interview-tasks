function groupByRole(users){

    let newObj = Object.entries(users);
    for ( let [key, value] of newObj ){
        console.log(value);
        
    }
    

    


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
