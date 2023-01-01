class Employee {
  constructor(name, id, age, city) {
    this.name = name;
    this.id = id;
    this.age = age;
    this.city = city;
  }
  details(){
    console.log(this.name, this.id, this.age, this.city);
  }
}
let empSmith = new Employee("Smith", 33, 26, "Delhi");
let empJay = new Employee("Jay", 3000, 21, "Pune");
let empBill = new Employee("Billgates", 5000, 58, "USA");
console.log("=====================================");
console.log(empSmith);
console.log(empJay);
console.log(empBill);
console.log("=====================================");
console.log(empSmith.name, empSmith.id, empSmith.age, empSmith.city);
console.log(empJay.name, empJay.id, empJay.age, empJay.city);
console.log(empBill.name, empBill.id, empBill.age, empBill.city);
console.log("=====================================");
empSmith.details();
empJay.details();
empBill.details();
