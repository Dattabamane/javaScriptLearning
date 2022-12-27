let arrayNumbers = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11]; 
console.log(arrayNumbers);

console.log("==========Total Number Of Elements=============");
let totaleElements = arrayNumbers.length;
console.log(`1] Totale Number Of Elements is : ${totaleElements}`);

console.log("==================================================================");
let firstElement = arrayNumbers[0];
let lastElement = arrayNumbers[10];
console.log(`2] First Element  Is : ${firstElement} AND Last Element Is : ${lastElement}`);

console.log("==================================================================");
let indexOf8 = arrayNumbers[arrayNumbers.length-3]
console.log(`3] The Third Last number in the array is : ${indexOf8}`);

console.log("==================================================================");
let evenNumber = [];
for (let index = 0; index < arrayNumbers.length; index++) {
    if (arrayNumbers[index]%2 == 0) {
        evenNumber = evenNumber + " " + arrayNumbers[index];
    } 
}
console.log(`4] All even numbers in the Array is :${evenNumber} `);

console.log("==================================================================");
let oddNumber = [];
for (let index = 0; index < arrayNumbers.length; index++) {
    if (arrayNumbers[index]%2 == 1) {
        oddNumber = oddNumber + " " + arrayNumbers[index];
    } 
}
console.log(`5] All Odd numbers in the Array is :${oddNumber} `);

console.log("==================================================================");
let allEvenNumber = [];
for (let index = 0; index < arrayNumbers.length; index++) {
    if (index%2 == 0) {
        allEvenNumber = allEvenNumber + " " + arrayNumbers[index];
    } 
}
console.log(`6] All even index positioned numbers is :${allEvenNumber} `);

console.log("==================================================================");
let allOddNumber = [];
for (let index = 0; index < arrayNumbers.length; index++) {
    if (index%2 == 1) {
        allOddNumber = allOddNumber + " " + arrayNumbers[index];
    } 
}
console.log(`7] All odd index positioned numbers is :${allOddNumber} `);

console.log("==================================================================");
let sum = 0;
i=0;
while (i<arrayNumbers.length) {
    sum=sum+arrayNumbers[i];
    i++
}
console.log(`8] sum of all the element in the array is :${sum}`);

console.log("==================================================================");

let multipleOfFive = [];
for (let index = 0; index < arrayNumbers.length; index++) {
    if (arrayNumbers[index]%5==0) {
        multipleOfFive = multipleOfFive + " " + arrayNumbers[index];
    }   
}
console.log(`9] numbers which is multiple of 5  :${multipleOfFive}`);

console.log("==================================================================");

let include115 = arrayNumbers.includes(115);
console.log(`10] 115 is available in the arrayNumbers :${include115}`);

console.log("==================================================================");

let include23 = arrayNumbers.includes(23);
console.log(`11] 23 is available in the arrayNumbers :${include23}`);

console.log("==================================================================");

console.log(`12] Before Adding 55,66 before index 3 :${arrayNumbers}`);
arrayNumbers.splice(3,0,55,66);
console.log(`After Adding 55,66 before index 3 :${arrayNumbers}`);

console.log("==================================================================");

console.log(`13] Before deleting 3 numbers from index 4 :${arrayNumbers}`);
arrayNumbers.splice(4,3);
console.log(`After deleting 3 numbers from index 4 :${arrayNumbers}`);
