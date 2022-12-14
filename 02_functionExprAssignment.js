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
console.log("2.");

var string =function(){
    var name1="i am angular developer";
    console.log(name1);
    console.log("Total Length of string is",":", name1.length);
    console.log("Totale words in string is :",name1.);
}
string();

