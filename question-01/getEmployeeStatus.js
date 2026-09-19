function getEmployeeStatus(){
if (getEmployeeStatus.isActive === true){
    console.log("Ali is Active")}
else if (getEmployeeStatus.isActive === false)
    {console.log("Ali is InActive")}
}
getEmployeeStatus(
    {
name: "Ali",
age: 24,
department: "Frontend",
salary: 25000000,
isActive: true
}
)