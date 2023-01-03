console.log("1] Perform shallow clone on Arraynum");
const arrayNums = [20,3,4,56,90,400,49];
let arraynumber = arrayNums;
console.log(arraynumber);

console.log(`A]======== Update array using push() methods=========`);
console.log(arrayNums);
arrayNums.push(55,56);
console.log(arrayNums);

console.log("===============================================================================================");
console.log("2] Perform deep clone using spread operator");

let arrayspr = [...arrayNums];
console.log(arrayspr);

console.log(`A]======== Update array using push() methods=========`);
console.log(arrayspr);
arrayspr.push(10,25);
console.log(arrayspr);

console.log("===============================================================================================");
console.log(`3] Given Array using merge or concat method and spread operator`);

let arrayEven = [2,30,14,8];
let arrayNum = [20,3,4,56,90,400,49];
let concatAeeay = arrayEven.concat(arrayNum);
console.log(`A]======== Array merge using concat() method=========`);
console.log(arrayEven);
console.log(arrayNum);
console.log(concatAeeay);
console.log(`B]======== Array merge or concat using spread operator=========`);
let mergeArray = [...arrayEven, ...arrayNum]
console.log(mergeArray);

console.log("===============================================================================================");
console.log(`4] Creating employeeInfo object`);
const employeeInfo = {
    empId : 27,
    empName : "John Doe",
    salary : {
        julyMonth : "40,0000INR",
        augMonth : "50,0000INR",
        junMonth : "65,0000INR",
    },
    address : {
        locality : {
            colony : "OM Vrindavan Society",
            street : "Kanch Pokli, 431202",
        },
        city : "Mumbai",
        state : "Maharashtra",
        country : "India" 
    },
    mobile : ["+91 8600 3456 88", "1800- 4567 32", "+91- 9096 5678 77"]
}
console.log(employeeInfo);

console.log("===============================================================================================");
console.log("5] log the employee details on console log");
console.log("a] Address:locality, city, state and country");
let johnAdd = employeeInfo.address.locality;
let johnCity = employeeInfo.address.city;
let johnState = employeeInfo.address.state;
let johnCountry = employeeInfo.address.country;
console.log(johnAdd);
console.log(johnCity);
console.log(johnState);
console.log(johnCountry);
console.log("b] John Doe mobile numbers");
let johnMob = employeeInfo.mobile;
console.log(` John Mobile numbers are : 1] ${johnMob[0]}, 2] ${johnMob[1]}, 2] ${johnMob[1]}`);

console.log("===============================================================================================");
console.log("6] Perform deep copy using JSON,stringfy()");
console.log("a] Update property july month salary to 80k on cloned object");

let empStuer = JSON.parse(JSON.stringify(employeeInfo));
empStuer.salary.julyMonth = "80,0000INR";
empStuer.empName = "Stuer";
console.log(employeeInfo);
console.log(empStuer);
console.log(employeeInfo.salary.julyMonth);
console.log(empStuer.salary.julyMonth);







