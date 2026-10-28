function groupUsersByDepartment(users){

    let result = {};

    for ( let user of users){
        if (!result[user.department] ){
            result[user.department] = [];
        }

        result[user.department].push(user.name);
    }

    return result;

    
    



}
groupUsersByDepartment([
    { id: 1, name: "Anna", department: "IT" },
    { id: 2, name: "Peter", department: "HR" },
    { id: 3, name: "Maria", department: "IT" },
    { id: 4, name: "John", department: "Sales" },
    { id: 5, name: "Elena", department: "HR" }
]);
// expected output:
// {
//     IT: ["Anna", "Maria"],
//     HR: ["Peter", "Elena"],
//     Sales: ["John"]
// }