function calculateSalary(){
const x = 1.1 * calculateSalary.salary
calculateSalary = x + calculateSalary.salary    
}
calculateSalary({
name: "Ali",
salary: 25000000,
isActive: true
})
console.log(calculateSalary)