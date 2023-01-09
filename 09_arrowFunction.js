console.log("1] With no args and no return value, log message inside arrow function");
let arrowFunction = ()=>{
    console.log("Good Morning Today Is Monday");
       
}
arrowFunction();

console.log("=========================================================================================================");
console.log("2] with 3 args no return value, for received 3 parameters perform the multiplicatio ");
console.log("a] values to be passed=>5,5,2");
console.log("b] values to be passed=>10,4,1");
let multiplication = (value1, value2, value3=1)=>{
       var mulThreeValues = value1 * value2 * value3;
       console.log(`Multiplication Of Three Values is : ${mulThreeValues}`);
}
multiplication(5,5,2);
multiplication(10,4);

console.log("=========================================================================================================");
console.log("3] with 5 args and return value such as, for received params it should do the addtotin");
console.log("a] Vlue to be passedd => 100,100,200,349,756");
let additinOfFive = (value1, value2, value3, value4, value5)=>{
     var result = value1 + value2 + value3 + value4 + value5;
     return result;
} 
console.log(`b] Additin Of five numbers is : ${additinOfFive(100,100,200,349,756)}`);

let string = (value1, value2, value3, value4, value5)=>{
    var result = value1 + value2 + value3 + value4 + value5;
    return result;
} 
console.log(`c] Additin "i am", "learning", "ES6", "features", "in depth" is : ${string("i am", "learning", "ES6", "features", "in depth")}`);


