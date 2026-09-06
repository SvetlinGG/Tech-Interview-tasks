function updateEmployeeSalary(company, id, salary){

     let newCompanyObj = {
        employees: []
     };

        for ( let department of company.departments){
            
            for ( let employee of department.employees){
            
                    if ( employee.id === id && employee.salary !== salary){
                        employee.salary = salary
                        newCompanyObj.employees.push(employee);
                        
                    }
                
                
            }
           
        }
     
     return newCompanyObj;
     
     


}

updateEmployeeSalary({
    name: "TechCorp",
    departments: [
        {
            name: "IT",
            employees: [
                { id: 1, name: "Anna", salary: 2000 },
                { id: 2, name: "John", salary: 2500 }
            ]
        },
        {
            name: "HR",
            employees: [
                { id: 3, name: "Maria", salary: 1800 }
            ]
        }
    ]
}, 2, 3000)