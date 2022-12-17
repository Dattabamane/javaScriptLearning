console.log("=========================================");
console.log("1.");
var greaterNumber = function(num1, num2){
    var returnResult=(num1>num2 ?` ${num1} is greater than ${num2}`:`${num2} is greaterthan ${num1}`);
    return returnResult;
}
console.log(`Greater Value of 10 and -10 is : ${greaterNumber(10,-10)}`);
console.log(`Greater Value of 800 and 899 is : ${greaterNumber(800,899)}`);


console.log("========================================");
console.log(2.);
console.log("======EVEN OR ODD NUMBER CHECKING========");

var result = function(marks){
    var resultOddOrEven = (marks%2==0 ? "EVEN" : "ODD")
    return resultOddOrEven;
}

console.log(`The Number 29  is ${result(29)} Number`);
    console.log(`The Number 44 is ${result(44)} Number`);
    console.log(`The Number 0 is ${result(0)} Number`);
    console.log(`The Number 101 is ${result(101)} Number`);

console.log("===========================================");
console.log(3.);
console.log("=====EVEN ODD======");

var isEvenOrOddLength = function (value) {
    var len = value.length
    var result = len%2==0 ? "EVEN" : "ODD";
    return result;
}
console.log(`Length of JavaScript is ${isEvenOrOddLength("javaScript")}`);
    console.log(`Length of developer is ${isEvenOrOddLength("developer")}`);
    console.log(`Length of googel is ${isEvenOrOddLength("googel")}`);





