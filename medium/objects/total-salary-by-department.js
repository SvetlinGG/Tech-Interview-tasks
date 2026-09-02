function salaryByDepartment(employees){

    let salaryDepartment = {};

    for ( let items of employees){

        if (!salaryDepartment[items.department]){
            
            salaryDepartment[items.department] = items.salary;

         } else {
             salaryDepartment[items.department] += items.salary;

         }
    }
    return salaryDepartment;
    


}
salaryByDepartment([
    { name: "Anna", department: "IT", salary: 2000 },
    { name: "John", department: "HR", salary: 1500 },
    { name: "Peter", department: "IT", salary: 2500 },
    { name: "Maria", department: "HR", salary: 1700 }
]);

// {
//     IT: 4500,
//     HR: 3200
// }