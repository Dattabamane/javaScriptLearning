const professor = {

}
professor.name = "Dipak";
professor.height = 5,
professor.weigth = 56,
professor.age = 34,
professor.city = "pandharpur",
professor.degrees = {
          engineering : "CSC",
          phd : "ADv computing",
          medical : "m.pharm",
totalDegrees : function(){
            var sum = this.engineering+this.phd+this.medical;
            return sum;
        }
}

professor.certificate = {
          A : "Hacker Rank",                        
          B : "Certificate in IFE course",
          C : "Certificate in ADv programing",
}

console.log("1] Professor Information");
console.log(professor);

console.log("================================================================================");
console.log("2] Adding Nested Object is Degree");
const adding = professor.degrees;
console.log(adding);

console.log("================================================================================");
console.log("3] Adding Nested Object is Certificate");
const add = professor.certificate;
console.log(add);

console.log("================================================================================");
console.log("4] Total concat degrees");
var sumOf = professor.degrees.totalDegrees();
console.log(sumOf);

console.log("================================================================================");
console.log("5] Add new property in professor object");
professor.college = "KEC";
console.log("Add New Property--> college=KEC");
console.log(professor);

console.log("================================================================================");
console.log("6] Modify And Existing Property");
professor.age = 38;
console.log("modify--> age=38");
console.log(professor);

console.log("================================================================================");
console.log("7] Delete one certificate from nested objecct");
delete professor.certificate.B;
console.log("certificate-->B");
console.log(professor);

console.log("================================================================================");
console.log("8] Add new certificate in nested object");
professor.certificate.D = "Angular"
console.log("D-->Angular");
console.log(professor);

console.log("================================================================================");
console.log("9] Log nested object Certificate on console");
console.log(professor.certificate);
