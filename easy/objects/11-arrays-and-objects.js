function groupUsersByDepartment(users){



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