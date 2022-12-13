function display() {
  console.log("my name: Datta");
  console.log("my sir name: Bamane");
}

display(); // function call or function invocation

function show() {
  console.log(" college name: Karmayogi Engineering College");
}

show();

function swapValues(value1, value2) {
  console.log("Before Swap", value1, value2);
  var temp = value1;
  value1 = value2;
  value2 = temp;
  console.log("After Swap", value1, value2);
}
swapValues(100, 200);
swapValues(2, 4);
swapValues("you", "me");

function rajuBhaiya(paisa) {
  console.log("Going in Markeat");
  console.log("Purchased Fresh Vegetables");
  console.log("Come Back");
  return "Bag Of Vegetables";
}
var bagOfVegetables = rajuBhaiya(100);
console.log(bagOfVegetables);
