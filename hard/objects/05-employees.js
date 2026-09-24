function getDepartmentStats(employees){

    let departmentObj = {};

    for (let employee of employees){
        
        if (employee.department && employee.active === true){

            if (!departmentObj[employee.department]){
                departmentObj[employee.department] = {employees: 0, totalSalary: 0};
            }
            departmentObj[employee.department].employees++;
            departmentObj[employee.department].totalSalary += employee.salary;
        }
    }
    console.log(departmentObj);
}

getDepartmentStats([
    { id: 1, name: "Anna", department: "IT", salary: 3200, active: true },
    { id: 2, name: "John", department: "Sales", salary: 2800, active: true },
    { id: 3, name: "Maria", department: "IT", salary: 3500, active: false },
    { id: 4, name: "Peter", department: "Sales", salary: 3100, active: true },
    { id: 5, name: "David", department: "IT", salary: 2900, active: true },
    { id: 6, name: "Sarah", department: "HR", salary: 2600, active: false },
    { id: 7, name: "Emma", department: "HR", salary: 3000, active: true }
]);

// {
//     IT: {
//         employees: 2,
//         totalSalary: 6100
//     },

//     Sales: {
//         employees: 2,
//         totalSalary: 5900
//     },

//     HR: {
//         employees: 1,
//         totalSalary: 3000
//     }
// }
