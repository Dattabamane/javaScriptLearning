console.log("1] log the array element with its index using foreach() with arrow function");
const arrayNumbers = [1,-7,40,502,-77,91,0,108,89,-601]
arrayNumbers.forEach(function(currentValue, index){
  console.log(`value is : ${currentValue},  index is : ${index}`);
})

console.log("==============================================================================");

console.log("2] find the positive numbers and log on console==========");
 const arrayNumber = [1,-7,40,502,-77,91,0,108,89,-601];
 const arrayOfPositive = [];
 arrayNumber.forEach( (currentValue) => {
     if(currentValue>0) {
        arrayOfPositive.push(currentValue);
     }
 });
 console.log(arrayOfPositive);

 console.log("==============================================================================");

console.log("3] find the negative numbers, add into new array and log nwe array on console using arrow function==========");
 const arrayOfNegative = [];
 arrayNumber.forEach( (currentValue) => {
     if(currentValue<0) {
        arrayOfNegative.push(currentValue);
     }
 });
 console.log(arrayOfNegative);

 console.log("==============================================================================");

console.log("4] find the Even numbers and log on console using forEach() with arrow function");
 const arrayNum = [1,-7,40,502,-77,91,0,108,89,-601];
 const arrayOfEven = [];
 arrayNumber.forEach( (currentValue) => {
     if(currentValue%2==0) {
        arrayOfEven.push(currentValue);
     }
 });
 console.log(arrayOfEven);

 console.log("==============================================================================");

 console.log("5] find the sum of all elements from array_numbers and log on sum sum value on console");
  let sum = 0;
  arrayNumber.forEach( (currentValue) => {
      sum += currentValue;
      
  });
  console.log(`sum of all elements in array Numbers is : ${sum}`);

  console.log("==============================================================================");

 console.log("6] log the only even positioned array value on console.forEach() with arrow function prefered ");
 const arrayOfSum = [];
 arrayNumber.forEach( (currentValue,index) => {
      if (index%2==0) {
        arrayOfSum.push(currentValue);
      }
      
  });
  console.log(arrayOfSum);

