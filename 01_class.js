class Vehicle{
    constructor(name, mileage, type, cylinder,fule){
        this.name = name;
        this.mileage = mileage;
        this.type = type;
        this.cylinder = cylinder;
        this.fule = fule;
    }
}
let vehicleBrezza = new Vehicle ("Brezza", "17.03Kmpl", "4 wheeler", 4, "petrol");
let vehicleLandCruiser = new Vehicle ("Land Cruiser", "11.13Kmpl", "4 wheeler", 8, "Diesel");
let vehicleBharatBenzBus = new Vehicle ("BharatBenz Bus", "5-6Kmpl", "6 wheeler", 6, "Diesel");
let vehicleBajajRe = new Vehicle ("Bajaj Re", "40Kmpl", "3 wheeler", 4, "petrol");
console.log(vehicleBrezza);
console.log(vehicleLandCruiser);
console.log(vehicleBharatBenzBus);
console.log(vehicleBajajRe);

console.log("================================================================");
class College{
    constructor(name, department, locatin, established){
        this.name = name;
        this.department = department;
        this.locatin = locatin;
        this.established = established;
    }
    details(){
        console.log(this.name, this.department, this.locatin, this.established);
    }
}
let collegeKec = new College ("KEC", "4", "Shelve", 2009);
let collegeCoe = new College ("COE", "12", "pune", 1854);
let collegeSveri = new College ("SVERI", "6", "pandharpur", 1998);
let collegeSkn = new College ("SKN", "7", "solapur", 2010);
console.log(collegeKec);
console.log(collegeCoe);
console.log(collegeSveri);
console.log(collegeSkn);
console.log("================================================================");
collegeKec.details();
collegeCoe.details();
collegeSveri.details();
collegeSkn.details();
console.log("================================================================");
console.log("=======Function Traverse Object=========");
function traversObject(college) {
      for (const key in college) {
        if (Object.hasOwnProperty.call(college, key)) {
            const element = college[key];
            console.log(`${key}= ${element}`);
            
        }
      }
}
traversObject(collegeKec);
console.log("==========================");
traversObject(collegeCoe);
console.log("==========================");
traversObject(collegeSveri);
console.log("==========================");
traversObject(collegeSkn);