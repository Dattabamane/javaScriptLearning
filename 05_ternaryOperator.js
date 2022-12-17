console.log("===================================");
console.log("=====TCS Company Interview Elagibility=======");
var companyEligiblity=function(gradScore, hscScore, sscScore, candidateName){
    var eligibility= ((gradScore>=70) || (hscScore>=80) || (sscScore>=90)) ? `Congrates ${candidateName} you are eligible for TCS intreview` : `unfortunately ${candidateName}  you are not eligible for interview`
    console.log(eligibility);
}
companyEligiblity(80,86,90,"Ajay");
companyEligiblity(70,65,55,"Vijay");
companyEligiblity(60,79,88,"Sanjay");

