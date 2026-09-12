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
    { name: "Maria", department: "Sales", salary: 2100 },
    { name: "David", department: "HR", salary: 2000 },
    { name: "Sarah", department: "IT", salary: 2400 }
], 'IT')

// 7200
// if no have employees - return 0