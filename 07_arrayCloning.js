console.log("Array shallow Cloning");
let arrayOfEvenNum = [0, 2, 4, 6, 8 ];
let arrayOfNum = arrayOfEvenNum; // Shallow Cloning
arrayOfEvenNum[1] = 10;
console.log(arrayOfEvenNum);
console.log(arrayOfNum);

// Deep Cloning
console.log("Array Deep Cloning");
let arrayEven = [0, 2, 4, 6, 8 ];
let arrayClone =  [... arrayEven]; // Deep Clone
arrayEven[2] = 100;
arrayClone[2] = 200;
console.log(arrayEven);
console.log(arrayClone);
