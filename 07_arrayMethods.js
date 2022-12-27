// Array of salaries
console.log(`Accessing salary of each employee`);
let arrayOfSalaries = [10000, 20000, 30000, 20000, 40000];
let sumOfSal = 0;// 30000
for (let index = 0; index < arrayOfSalaries.length; index++) {
    const element = arrayOfSalaries[index]; // 10000 20000 30000
    sumOfSal = sumOfSal+element;
}
console.log(`Total Salary of all employee is : ${sumOfSal}`);

console.log(`======== push() methods=========`);

let arrayOfNum = [5,10,100,6,10,2,3,10];
console.log(arrayOfNum);
arrayOfNum.push(3);
console.log(arrayOfNum);

console.log(`======== unshift() methods=========`);

var arrayOfNums = [5,10,100,6,10,2,3,10];
console.log(arrayOfNums);
arrayOfNums.unshift(77);
arrayOfNums.unshift(99, 111, 333);
console.log(arrayOfNums);

console.log(`======== pop() methods=========`);

var arrayOfNumb = [5,10,100,6,10,2,3,10];
let popResult = arrayOfNumb.pop();
console.log(popResult);
console.log(arrayOfNumb);

console.log(`======== shift() methods=========`);

var arrayOfNumbs = [5,10,100,6,10,2,3,10];
let shiftResult = arrayOfNumbs.shift();
console.log(shiftResult);
console.log(arrayOfNumbs);

console.log(`======== slice() methods=========`);
var arrayOfNumb = [5,10,100,6,10,2,3,10];
let sliceResult = arrayOfNumb.slice(3);
let sliceRes = arrayOfNumb.slice(2, 5);
console.log(arrayOfNumb);
console.log(sliceResult);
console.log(sliceRes);

console.log(`======== splice() methods=========`);
var arrayOfNums = [5,10,100,6,10,2,3,10];
console.log(arrayOfNums);
let spliceResult = arrayOfNums.splice(3);
console.log(`After using splice(3) method `);
console.log("Array after deleting elements ", arrayOfNums);
console.log("Total deleted elements: ", spliceResult);
var arrayOfNums = [5,10,100,6,10,2,3,10];
console.log(arrayOfNums);
let spliceRes = arrayOfNums.splice(2, 3);
console.log(`After using splice(2, 3) method `);
console.log("Array after deleting elements ", arrayOfNums);
console.log("Total deleted elements: ", spliceRes);

console.log("====== Inserting element in the array =======");
var arrayOfNums = [5,10,100,6,10,2,3,10];
console.log(arrayOfNums);
arrayOfNums.splice(2, 0, 88);
console.log(arrayOfNums);
arrayOfNums.splice(1, 0, 55, 99, 22);
console.log(arrayOfNums);

console.log("====== Replacing element in the array =======");
var arrayOfNums = [5,10,100,6,10,2,3,10];
console.log(arrayOfNums);
arrayOfNums.splice(3, 1, 22);
console.log(arrayOfNums);

console.log("====== Replacing element in the array when splice(2, 3, 99, 77 ) =======");
var arrayOfNums = [5,10,100,6,10,2,3,10];
arrayOfNums.splice(2, 3, 99, 77 );
console.log(arrayOfNums);

console.log(`======== join() ==========`);
var arrayOfNum = [4, 5, 6, 8, 9, 33, 66];
let joinResult = arrayOfNum.join(" ");
console.log(joinResult);
console.log(typeof joinResult);

console.log(`======== concat() ==========`);
var arrayOfNum = [4, 5, 6, 8, 9, 33, 66];
let arrayOfNames = ["Moni", "Jenny", "Shenny", "Tomy"];
let arrayOfCities = ["Pune", "Mumbai", "Banglore"];
const concatArray = arrayOfNum.concat(arrayOfNames, arrayOfCities);
console.log(concatArray);

console.log(`======== Resize an array ==========`);
var arrayOfNum = [4, 5, 6, 8, 9, 33, 66];
console.log(arrayOfNum.length);
arrayOfNum.length = 5;
console.log(arrayOfNum);
console.log(arrayOfNum.length);
