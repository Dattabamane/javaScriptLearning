// If SSC marks greater than equal to 35 then pass or fail
var sscMarks = 34;
var resultPassOrFail=sscMarks>=35 ?"pass" : "fail";
console.log(`Resule is ${resultPassOrFail}`);

// function expression with argument with retuen value with ternary operator

var sscResult = function(sscMarks){
    var resultPassOrFail = sscMarks>=35 ? "pass" : "fail";
    return resultPassOrFail;
}
var result = sscResult(39);
console.log(`Result is :", ${result}`);


console.log("==============================================================================");
console.log("Logical operator with teranary operator with nested ternary operator");
var sscResult = function(sscMarks){
    // var result = (sscMarks>35 && ! (sscMarks>100)) ? "Pass" : "Fail";
    // return result;
   //   var result = (sscMarks>35 && sscMarks<100) ? "Pass" : "Fail";
   //  return result;
       var result = (sscMarks<0 || sscMarks>100) ? "in valid data" : (sscMarks>35 ? "pass" : "fail");
       return result;
}

console.log(`Result is 23 : ${sscResult(23)}`);
console.log(`Result is 45 : ${sscResult(45)}`);
console.log(`Result is 1200 : ${sscResult(1200)}`);
console.log(`Result is "ten" : ${sscResult("ten")}`);
console.log(`Result is -1 : ${sscResult(-1)}`);