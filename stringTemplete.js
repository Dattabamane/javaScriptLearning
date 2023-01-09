var stringTemplete=function(company){
    console.log(`${company}`);
    var hobby1="singing";
    var hobby2="dancing";
    var hobby3="playing cricket";
    console.log(`2. my first hoobie is: singing, my second hobbie is: dancing, and my third hoobie is:playing cricket`);
    var concatstring= hobby1 + hobby2 + hobby3;
    console.log(`3. concatinating the hobbies in a one string:${concatstring}`);
    var hobbie="singing,dancing,playingcricket";
    var concatSpliString=hobbie.split(",");
    console.log(`4. my hobbies by using concat:${concatSpliString}`);

}
stringTemplete(`1. my dream company name is ": TCS`);
var greet = "Good morning";
var uper = greet.toUpperCase();
console.log(uper);
var lower = greet.toLowerCase();
console.log(lower);
var lower = greet.toLowerCase("");
console.log(lower);
console.log("==============trim()=================");
var greet = "    Good morning    ";
var fulllength = greet.length;
console.log("length:",fulllength);
var cutSpace = greet.trim();
console.log(cutSpace, "length :", cutSpace.length);

console.log("==============trimstart()=================");

 var cutSpace = greet.trimStart();
console.log(cutSpace);
 console.log(cutSpace, "length :", cutSpace.length);

 console.log("==============trimend()=================");

var cutSpace = greet.trimEnd();
console.log(cutSpace);
console.log(cutSpace, "length :", cutSpace.length);

console.log("===============================");

var greet = "Good morning";
var resultSlice = greet.slice(0,4);
console.log("slice method :",resultSlice);

var resultSlice = greet.slice(4);
console.log(resultSlice);
console.log("slice() with start index :",greet.slice(4));

console.log("slice() with negative start index :",greet.slice(-7));
console.log("slice() with negative start and end index :",greet.slice(-7,-2));

console.log("===============================");
var sentence = "yes you can do it guys, just keep learning and practising as well";
var totallength = sentence.length;
console.log(totallength);
var wordInSentence = sentence.split(" ");
console.log("total word in string is:",wordInSentence.length);

console.log("============square of string===================");

var sentence = "yes you can do it guys, just keep learning and practising as well";
var totallength = sentence.length;
var let = totallength * totallength ;
console.log(let);
