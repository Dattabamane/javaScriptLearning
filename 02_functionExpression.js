// function expression without arguments

var showResult = function () {
  console.log("show.........");
};

showResult();

// function expression with arguments
// we can store a function as value in js

var substraction = function (num1, num2) {
  var result = num1 - num2;
  console.log("substraction....", result);
  return result;
};
var result = substraction(50, 20);
console.log(result);
