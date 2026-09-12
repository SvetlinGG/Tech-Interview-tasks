function getDepartmentTotal(employees, department){

    let depSalary = 0

    for ( let item of employees){
        if (item.department === department){
            depSalary += item.salary
        }
    }
    return depSalary;
    

}
getDepartmentTotal([
    { name: "Anna", department: "IT", salary: 2200 },
    { name: "John", department: "HR", salary: 1800 },
    { name: "Peter", department: "IT", salary: 2600 },
    { name: "Maria", department: "Sal