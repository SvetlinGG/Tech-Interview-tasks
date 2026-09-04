function averageSalary(employees){

    let totalSalary = employees.reduce((acc, curr) => acc + curr.salary, 0);
    return totalSalary / employees.length;
    


}
averageSalary([
    { name: "Anna", salary: 2000 },
    { name: "John", salary: 1500 },
    { name: "Peter", salary: 2500 }
]);