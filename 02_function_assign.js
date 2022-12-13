console.log("=====function no arguments and no return type=====");

function course(){
    console.log("My Success Partner is: Codmind ");
    console.log(" Course is : Angular");
}
course();

console.log("===================================================");

console.log("=======function with arguments=======");

function personalDetails(firstName, lastName, collegeName){
     console.log(firstName);
     console.log(lastName);
     console.log(collegeName);
}

 personalDetails("Dattatray", "Bamane", "Karmayogi Engineering College, Shelave, Pandharpur")

console.log("=====================================================");

 console.log("========Before Swap========");

 function swapValues(value1, value2){
     console.log( value1, value2);
     var temp = value1;
     value1 = value2;
     value2 = temp;
     console.log("=======After Swap=======");
     console.log( value1, value2);
 }
 swapValues("Virat", "Anushka");

console.log("===================================");
console.log("=======Before Swap=======");
 function swapValues(value1, value2){
    console.log(value1, value2);
    var temp = value1;
    value1 = value2;
    value2 = temp;
    console.log("======After Swap======");
    console.log(value1, value2);
 }
 swapValues(1000, 2000);
 

 console.log("========Function With Argumrnts With Return==========");

 function addThreeValues(value1, value2, value3){
 console.log(value1 + value2 + value3);
 }
 addThreeValues( 10.23, 600, 40);

 function addThreeValues(value1, value2, value3){
    console.log(value1 + value2 + value3);
 }
   addThreeValues("Hello", "Good", "Morning");


 