console.log("=====================================================");
var maleMarriageEligibility = function(gender, age, boyName){
    var result = ((gender=="Male") && (age>=21)) ? `Hey ${boyName} you are eligible for Marrige` : `Hey ${boyName} you are Not Eligible For Marrige`
    console.log(result);
}
maleMarriageEligibility("Male", 25, "Billgates");
maleMarriageEligibility("Male", 17, "Stew Jobs");

console.log("=====================================================");

var femaleMarriageEligibility = function(gender, age, girlName){
    var result = ((gender=="Male") && (age>=21)) ? `Hey ${girlName} you are eligible for Marrige` : `Hey ${girlName} you are Not Eligible For Marrige`
    console.log(result);
}
femaleMarriageEligibility("Female", 16, "Jenifer");
femaleMarriageEligibility("Female", 27, "Malinda Gates");


