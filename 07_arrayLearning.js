console.log("=====================");
let arrayOfNames = []; // Empty Array
console.log(arrayOfNames);


let arrayOfNumbers = [5,10,4,6,10,2,3,10]; // Empty Array
console.log(arrayOfNumbers);

console.log("======Total Number Of Elements======");
let totaleElements = arrayOfNumbers.length;
console.log(`Totale Number Of Elements is : ${totaleElements}`);
console.log(typeof arrayOfNumbers);

console.log("======Accessing Array Elements======");
let elementAtZeroIndex = arrayOfNumbers[0];
console.log(`Element At Zero Index Is : ${elementAtZeroIndex}`);
console.log(`Element fourth Index Is : ${arrayOfNumbers[4]}`);
console.log(`Last Element Is : ${totaleElements-1}`);
console.log(`When Provide Value Is Greater Than Length : ${arrayOfNumbers[10]}`);

console.log("================Update Or Modified Values Of Index==============");
arrayOfNumbers[2] = 100;
console.log(arrayOfNumbers);

console.log("=========Find Ot Index Using IndexOf() Methode========");
let indexOf6 = arrayOfNumbers.indexOf(6);
console.log(`Index Of Element 6 Is : ${indexOf6}`);

console.log("==============Traversing Array Using For Loop==============");
for (let index = 0; index < arrayOfNumbers.length; index++) {
    const element = arrayOfNumbers[index];
    console.log(element);
}

console.log("======Accessing only even index values======");
for (let index = 0; index < arrayOfNumbers.length; index++) {
    if (index%2==0) {
        const element = arrayOfNumbers[index];
    console.log(element);
    }
}

console.log("==============Traversing Array Using For Loop in reverse Order==============");
let lastIndex = arrayOfNumbers.length-1;
for (let index = lastIndex ; index > 0 ; index--) {
    const element = arrayOfNumbers[index];
    console.log(element);
}

