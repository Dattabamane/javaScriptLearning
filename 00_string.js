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
var greet = greet.toLowerCase();
console.log(`To Lower Case : ${greet}`);
var greet = greet.toUpperCase();
console.log(`To Upper Case : ${greet}`);


console.log("=============================================================================");
var string = "Hello";
var result = string.split('').reverse();
console.log(result);

console.log("=============================================================================");
console.log("1] Reverse the string using 'FOR LOOP' ====");
var string = "Dattatray uttam Bamane";
var totalLength = string.length;
var reverseStr = " ";
for (let index = totalLength-1; index>=0 ; index--) {
    reverseStr += string[index];
    
}
console.log(`${string} reverse is : ${reverseStr}`)

console.log("2] using Array methods ( reverse,split and join) ====");


function reverseString (str){
    const array = str.split(' ');
    array.reverse();
    return array.join(' ');
}
let newString = ("Dattatray Bamane");
console.log(newString);

console.log("3] Reverse the string using 'FOR OF' (ES6) ====");
function reverseString(str) { 
let reverse = "";
for (let strNew of str) {
     strNew += reverse;
   }
   return reverse;
}
let str = ("Dattatray");
console.log(`Reverse string is : ${str}`);
