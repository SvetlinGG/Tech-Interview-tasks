function getTopEmployees(employees, minProjects, minRating){

    let result = [];
    let employeeObj = {};

    for ( let employee of employees){

        if ( employee.active === true && employee.projects >= minProjects && employee.rating >= minRating){
            employeeObj = {name: employee.name, projects: employee.projects, rating: employee.rating};
            
            result.push(employeeObj);
        }
    }
    console.log(result.sort((a, b) => {
        if (a.rating === b.rating){
            return b.projects - a.projects
        }else {
            return b.rating - a.rating
        }
    }))
    


}
getTopEmployees([
    { id: 1, name: "Anna", department: "IT", projects: 5, rating: 4.8, active: true },
    { id: 2, name: "John", department: "Sales", projects: 7, rating: 4.2, active: true },
    { id: 3, name: "Maria", department: "IT", projects: 8, rating: 4.9, active: false },
    { id: 4, name: "Peter", department: "Sales", projects: 6, rating: 4.7, active: true },
    { id: 5, name: "David", department: "IT", projects: 3, rating: 4.6, active: true },
    { id: 6, name: "Sarah", department: "HR", projects: 9, rating: 4.5, active: true },
    { id: 7, name: "Emma", department: "HR", projects: 4, rating: 4.9, active: true }
], 4, 4.5);

// expected output:

// [
//     { name: "Emma", projects: 4, rating: 4.9 },
//     { name: "Anna", projects: 5, rating: 4.8 },
//     { name: "Peter", projects: 6, rating: 4.7 },
//     { name: "Sarah", projects: 9, rating: 4.5 }
// ]