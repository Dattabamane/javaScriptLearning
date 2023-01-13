console.log("1] ===============Given Array Is=====================");
const arrayRollNumbers = [113, 45, 56, 11, 32, 45, 109, 799, 56, 45];
console.log(arrayRollNumbers);

console.log("===================================================================");
console.log("2] Reverse the array");
const array = [];
for (let index = arrayRollNumbers.length-1 ; index >=0; index--) {
    const element = arrayRollNumbers[index];
    array.push(element)
    // console.log(element); 
}
console.log(array);

console.log("===================================================================");
console.log("3] Use the sort() Method as it is without any custom sorting logic ( without passing any arguments) & notice the issue");
const result = arrayRollNumbers.sort();
console.log(result);

console.log("===================================================================");
console.log("4] sort the array in ascending order, by writing your custom logic");
arrayRollNumbers.sort(function(a, b) {
    if (a > b) {
        return 1;  
    }
    if (a < b) {
        return -1;
    }
    if (a == b) {
        return 0;
    }
})
console.log(arrayRollNumbers);

console.log("===================================================================");
console.log("5] sort the array in descending order, by writing your custom logic");
arrayRollNumbers.sort(function(a, b) {
    if (b > a) {
        return 1;  
    }
    if (b < a) {
        return -1;
    }
    if (b == a) {
        return 0;
    }
})
console.log(arrayRollNumbers);

console.log("================================================================================");
console.log("6] Find the greatest number from the array");
console.log(arrayRollNumbers);
let smallestElement = arrayRollNumbers [0];
console.log(`The greatest element of given array is ${smallestElement}`);

console.log("================================================================================");
console.log("7] Find the smallest number from the array");
console.log(arrayRollNumbers);
let greatestElement = arrayRollNumbers[arrayRollNumbers.length-1]
console.log(` the smallest element of given array is ${greatestElement}`);

console.log("============================================================================");
console.log("8] remove duplicates from array");
const unique = [...new Set(array)];
console.log(unique);

