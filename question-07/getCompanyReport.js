const employees = [
  {
    id: 1,
    name: "Ali",
    salary: 25000000,
    isActive: true,
  },
  {
    id: 2,
    name: "Sara",
    salary: 32000000,
    isActive: true,
  },
  {
    id: 3,
    name: "Reza",
    salary: 18000000,
    isActive: false,
  },
];
 export function getCompanyReport(){
  // console.log(employees.length)
let isemployeeactive = 0
let isemployeenotactive = 0
for (let i = 0; employees.length > i ; i++){
  if(employees[i].isActive === true){
    isemployeeactive = isemployeeactive + 1
  }
   if(employees[i].isActive === false){
isemployeenotactive = isemployeenotactive + 1
  } 
}
let salarys = 0
for(let a = 0 ; employees.length > a ; a++){
  salarys = employees[a].salary + salarys


}
console.log(isemployeeactive)
console.log(isemployeenotactive)  
console.log(salarys)
}


