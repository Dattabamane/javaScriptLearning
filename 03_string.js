console.log("=======Concat()========");
var firstName = "mohit";
var lastName = "sharma";
var result = firstName + lastName;
console.log("concatenation using + operator", result);

var result = firstName.concat("Rajesh",lastName);
console.log("Concatenation using concat()", result);

console.log("=======indexOf()=======");
var greet = "Good Morning";
var indexOf = greet.indexOf("M");
console.log("index of character M:",indexOf);

var indexOfNin = greet.indexOf("nin");
console.log("index of substring nin:",indexOfNin);

console.log("=======Replace()=======");
var greet = "Good Morning";
var greetAfterReplace = greet.replace("Morning", "Afternoon");
console.log("Replace substring Morning with Afternoon :", greetAfterReplace);

console.log(greet.replace("Mor", "Eve"));

console.log("========touppercase() and tolowercase()=========");
var greet = "Good Morning";
var greet = greet.toLowerCase("Morning", "Afternoon");
console.log("To Lower Case '", greet.toLowerCase);

console.log("To Upper Case :", greet.toUpperCase);

console.log("====");




