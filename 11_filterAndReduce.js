class Employee {
    constructor(empId, empName, empDept, empSalary, empCompany) {
        this.empId = empId;
        this.empName = empName;
        this.empDept = empDept;
        this.empSalary = empSalary;
        this.empCompany = empCompany;
    }
}
const empAnil = new Employee(22, "Anil", "IT", 50000, "TCS");
const empRadha = new Employee(33, "Radha", "HR", 74000, "Wipro");
const empRishi = new Employee(55, "Rishi", "Finance", 47000, "TCS");
const empSonali = new Employee(66, "Sonali", "Finance", 45000, "Infy");
const empMonika = new Employee(77, "Monika", "IT", 40000, "Wipro");
const empViny = new Employee(88, "Vinayak", "IT", 75000, "TCS");
const empMahi = new Employee(99, "Mahesh", "HR", 85000, "Infy");

console.log("1]====== find all the employees from 'Wipr' company======");

const arrayOfEmployeeWipro = [empAnil, empRadha, empRishi, empSonali, empMonika, empViny, empMahi];
const arrayFilterEmployeeWipro= arrayOfEmployeeWipro.filter((currentValue) => {
  return currentValue.empCompany=="Wipro";
});
arrayFilterEmployeeWipro.forEach((currentValue) => {
//   console.log(currentValue.empName, currentValue.empCompany);
console.log(currentValue);
});

console.log("2]============ find all the employees from 'IT' or 'HR' company===========");

const arrayOfEmployeeItOrHr = [empAnil, empRadha, empRishi, empSonali, empMonika, empViny, empMahi];
const arrayFilterEmployeeItOrHr= arrayOfEmployeeItOrHr.filter((currentValue) => {
  return (currentValue.empDept=="IT" || currentValue.empDept=="HR")
});
arrayFilterEmployeeItOrHr.forEach((currentValue) => {
//   console.log(currentValue.empName, currentValue.empDept);
  console.log(currentValue);
});

console.log("3]============== All Employees Having empId is greater than 50====================");

const arrayOfEmployeeId = [empAnil, empRadha, empRishi, empSonali, empMonika, empViny, empMahi];
const arrayFilterEmployeeId= arrayOfEmployeeId.filter((currentValue) => {
  return currentValue.empId>50;
});
arrayFilterEmployeeId.forEach((currentValue) => {
//   console.log(currentValue.empName, currentValue.empId);
console.log(currentValue);

});

console.log("4]=========== All the Employees whose name start with 'A' or 'V' or 'M' =====================");

const arrayOfEmployeeNames = [empAnil, empRadha, empRishi, empSonali, empMonika, empViny, empMahi];
const employeeAvm= arrayOfEmployeeNames.filter((currentValue) => {
   return currentValue.empName.startsWith("A") || currentValue.empName.startsWith("V") ||currentValue.empName.startsWith("M")
});
employeeAvm.forEach((currentValue) => {
  console.log(currentValue);
});

console.log("=================================================================================================");

const  salary = arrayOfEmployeeNames.reduce((runingTotal,value) => {
   return runingTotal + value.empSalary;
},10);
console.log(`5] Avrage salary of employees for all the department is : ${salary/arrayOfEmployeeNames.length}`);

console.log("=================================================================================================");

const  arrayIT = arrayOfEmployeeNames.filter((currentValue) => {
   return currentValue.empDept == "IT";
});

const  avgIT = arrayIT.reduce((runingTotal,value) => {
    return runingTotal + value.empSalary;
 },0);
 
 console.log(`6]  the avrage salary of 'IT' department is : ${avgIT/arrayIT.length}`);
