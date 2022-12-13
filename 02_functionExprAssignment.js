console.log("======================Function Expression==============================");
console.log("1.");
console.log("========Square Values========");

var square = function(num){
    console.log("square of", "=", num*num);
}
square(5);
square(6);
square(25);
square(100);

console.log("===================================================");
console.log("2.");
console.log("type of function is",":",typeof square);


console.log("===================================================");
console.log("3.");
console.log("========Rectangal Land Area========");

var area = function(length, width){
    console.log("Area Of Reactangal Land", "=", length*width);
}
console.log("type of function is",":", typeof area);
 area(499, 917)

 console.log("==================================================");
 console.log("4.");
console.log("========Swap Values========");

var swapValues = function(value1, value2){
    console.log("Before Swap",":", value1, value2);
    var temp = value1;
    value1 = value2;
    value2 = temp;
    console.log("After Swap", ":", value1, value2);
}
swapValues("Virat", "Anushka");
swapValues(1000, 2000);

console.log("===============================================");
console.log("======string======");
console.log("5.");

var string =function(){
    var name1="Js the most popular language";
    console.log(name1);
    console.log("Total Charactres in the string is",":", name1.length);
    console.log("Charactre at index 5 is", ":", name1.charAt(5));
    console.log("Charactre at index 10 is", ":", name1.charAt(10));
    var totalLength=name1.length;
    console.log("Charactre at last index is", ":", name1.charAt(totalLength-1));
    console.log("First Charactre in the string is", ":", name1.charAt(0));
    console.log("Square length of given string is", ":", totalLength*totalLength);
}
string();

