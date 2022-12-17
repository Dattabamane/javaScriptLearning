console.log("==============================================");
console.log("========Voting Eligiblity=======");
var votingEligible= function(value){
     var result =((value>=1)  && (value<=120)) ? ` You Are Age is ${value} : You Are Eligible For VOT` : ` You Are Age is ${value} : Invalid Data` ;
     console.log(result);
}
votingEligible(45);
votingEligible(17);
votingEligible(8);
votingEligible(20);
votingEligible(-10);
votingEligible(200);
votingEligible(0);

console.log("==============================================");
console.log("======if block================");
function gradeCalculation(marks){
    if ( marks>=90){
        console.log(`Fantastic marks : ${marks}, your grade is A+.`);
    }
    if ((marks>=75) && (marks<=90)){
        console.log(`Exellent marks : ${marks}, your grade is A.`);
    }
    if ((marks>=50) && (marks<=75)){
        console.log(`Good marks : ${marks}, your grade is B.`);
    }
    if ((marks>=35) && (marks<=50)){
        console.log(`marks is : ${marks}, your grade is c.`);
    }
    if ((marks<=0) || (marks>=100)){
        console.log(`Please provide the valide marks.`);
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




