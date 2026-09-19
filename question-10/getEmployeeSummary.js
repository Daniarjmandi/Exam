let employee = {
    name: "ali",
    age: 25,
    isActive: true,
    salary : 25000000,
    level: null
}

export function getEmployeeSummary (){
if(employee.isActive === true){
   const x = 1.1 * employee.salary    
    employee.salary = x + employee.salary
}  
if(employee.age < 22){
    employee.level = "Junior"
}
else if(employee.age > 22 && employee.age <= 28){
    employee.level = "Mid"
}
else if(employee.age > 28){
    employee.level = "Senior"
} 
    
}
getEmployeeSummary()
console.log(employee)