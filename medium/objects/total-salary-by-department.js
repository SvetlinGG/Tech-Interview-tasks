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
    { nam