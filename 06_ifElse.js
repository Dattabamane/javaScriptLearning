console.log("=============IF ELSE STATEMENT============");
console.log("1.");
var eligibleForVoting = function(age) {
    if (age<=0 || age>120) {
        console.log(`Invalid Data : ${age}`);
    } else {
        console.log(`Valid Data`);
        if (age>=18 && age<=100) {
            console.log(`He is eligibe for voting : ${age}`);
        }else{
            console.log(`He is not iligible for voting : ${age}` );
        }
    }
    
}
eligibleForVoting(17)
eligibleForVoting(8)
eligibleForVoting(20)
eligibleForVoting(-10)
eligibleForVoting(200)
eligibleForVoting(0)

console.log("====================================");
var gradeCalculation = function(marks){
     if (marks<=0 || marks>120) {
         console.log(`Provide Valid Marks : ${marks}`);
     } else {
        if (marks>=90 && marks<=100) {
            console.log(`Fantastic Marks,your grade is A+:${marks}`);
        } else {
            if (marks>=75 && marks<90) {
                console.log(`Excellent Marks, Your grade is A: ${marks}`);
            } else {
                if (marks>=50 && marks<=75) {
                   console.log(`Good Marks ${marks} You are grade is B`); 
                } else {
                    if (marks>=35 && marks<=50) {
                      console.log(`Marks is ${marks}, Your grade is C`);  
                    }
                }
            }
        }
     }
}
gradeCalculation(98);
gradeCalculation(80);
gradeCalculation(90);
gradeCalculation(0);
gradeCalculation(150);
gradeCalculation(-7);
gradeCalculation(35);
gradeCalculation(29);
gradeCalculation(64);
gradeCalculation(49);
gradeCalculation(91);




