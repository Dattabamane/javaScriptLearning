console.log("************ Assignment 01 *************");
function squareOfWordLength(val1) {

    console.log("--------------", val1, "------------");

    console.log("Length of value is :", val1, "=", val1.length);
    console.log("Square of length", val1.length * val1.length);

}
squareOfWordLength("JavaScript");
squareOfWordLength("Google Chrome");
squareOfWordLength("Developer Smart");


console.log("-------------------------------------");

var profile = function () {
    var domain = "I am Angular Developer";
    var length = domain.length;
    console.log("Length of String is :", length);
    var split = domain.split(" ").length;
    console.log("total No of Words :",split.length);
    
    console.log(`1.Using Division Operator ${length/split}`);
    console.log(`2.Using Multiplication Operator ${length*split}`);

}
profile(); 