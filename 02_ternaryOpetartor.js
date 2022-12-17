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