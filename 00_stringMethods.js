console.log("0] ======================Total Length of string ======================");
var greet = "Good Morning";
var totalLength = greet.length;
console.log(` Total length of greet is :${totalLength}`);

console.log("1] ==============================charAt()=============================");

var cahrOf = greet.charAt(5);
console.log(`charactor og index 5 is : ${cahrOf}`);
var cahr = greet.charAt(11);
console.log(`charactor og index 11 is : ${cahr}`);

console.log("2] ==============================concat()=============================");

var greet1 = "Good";
var greet2 = "Morning";
console.log("A] ============concat using concat method======");
var concat = greet1.concat(greet2);
console.log(`two string concat using concat method : ${concat}`);
console.log("B] ============concat using + operator=========");
var result = greet1 + greet2;
console.log(`two string concat using + operaor : ${result}`);

console.log("3] ==============================indexof()=============================");

console.log("A] =============index of String=================");
var indexOf = greet.indexOf("n");
console.log(`Index of 'N' is : ${indexOf}`);
console.log("B] =============index of String=================");
var indexOf = greet.indexOf("M");
console.log(`Index of 'M' is : ${indexOf}`);
console.log("C] =============index of SubString==============");
var indexOf = greet.indexOf("orn");
console.log(`Index of 'ORN' is : ${indexOf}`);

console.log("4] ==============================lastIndexof()=============================");
 
console.log("A] =============index of String is==============");
var lastIndex = greet.lastIndexOf();
console.log(`Last index of string is : ${lastIndex}`);
console.log("B] =============index of G is===================");
var lastIndex = greet.lastIndexOf("g");
console.log(`Last index of 'G' is : ${lastIndex}`);

console.log("5] ==============================replace()=============================");

console.log("a] =============replace Morning to Afternoon=====");
var replace = greet.replace("Morning", "Afternoon");
console.log(`replace Morning to Afternoon : ${replace}`);
console.log("] ==============replace Mor to Eve===============");
var replace = greet.replace("Mor", "Eve");
console.log(`replace Mor to Eve : ${replace}`);

console.log("6] ==============================toupperCase()=============================");

var toupperCase = greet.toLocaleUpperCase();
console.log(`Good Morning Uppercase is : ${toupperCase}`);

console.log("7] ==============================tolowerCase()=============================");

var tolowerCase = greet.toLocaleLowerCase();
console.log(`Good Morning Uppercase is : ${tolowerCase}`);

console.log("8] ==============================valueof()=================================");

var value = greet.valueOf();
console.log(`Value of Greet is : ${value}`);

console.log("9] ================================trim()==================================");

var greet = "    Good Morning    ";
var fullLength = greet.length;
console.log(`Length : ${fullLength}`);
var trim = greet.trim();
console.log(`Using trim method cut start and end both spacecs of string : ${trim}`);
console.log("A] ==============Start spaces remove using trimStart()===============");
var trimStart = greet.trimStart();
console.log(`Using trimstart method cut start spacecs of string : ${trimStart}`);
console.log("A] ==============end spaces remove using trimend()===============");
var trimEnd = greet.trimEnd();
console.log(`Using trimend method cut end spacecs of string : ${trimEnd}`);

console.log("10] ================================includes()==================================");

var includes = greet.includes("orni");
console.log(`find String 'orni' is : ${includes}`);
var includes = greet.includes("Good");
console.log(`find String 'Good' is : ${includes}`);
var includes = greet.includes("Evining");
console.log(`find String 'Evining' is : ${includes}`);

console.log("11] ================================search()==================================");

var search = greet.search("Good");
console.log(`search index of 'Good' is : ${search}`);
var search = greet.search("ning");
console.log(`search index of 'ning' is : ${search}`);
var search = greet.search("i");
console.log(`search index of 'i' is : ${search}`);

console.log("12] ================================slice()==================================");

var pieces = greet.slice(9,17);
console.log(`The piece of string is : ${pieces}`);
var pieces = greet.slice(13,17);
console.log(`The piece of string is : ${pieces}`);
var pieces = greet.slice(3,7);
console.log(`The piece of string is : ${pieces}`);

console.log("13] ================================substring()==================================");

var substring = greet.substring(9,17);
console.log(`The substring of string is : ${substring}`);
var substring = greet.substring(13,17);
console.log(`The substring of string is : ${substring}`);
var substring = greet.substring(3,7);
console.log(`The substring of string is : ${substring}`);

console.log("14] ================================ahrcodeAt()==================================");

var charCodeAt = greet.charCodeAt(4);
console.log(`charcodeat 'G' is : ${charCodeAt}`);
var charCodeAt = greet.charCodeAt(7);
console.log(`charcodeat 'd' is : ${charCodeAt}`);
var charCodeAt = greet.charCodeAt(10);
console.log(`charcodeat 'o' is : ${charCodeAt}`);

console.log("14] ================================split()==================================");
var string = "1,2,3,4,5,6,7,"
var length = string.length;
console.log(`totallength of string is : ${length}`);
var split = string.split(",");
console.log(`total charactor in string is : ${split.length}`);
var split = string.split(",");
console.log(split);


