console.log("Full Array is : [Banana, Orange, Apple, Mango, Water Melon]");
console.log("1] FIrst And Last Element of Array");
let fruiteSeasonal = ["Banana", "Orange", "Apple", "Mango", "Water Melon"];
let totaleElement = fruiteSeasonal.length;
let firstElement = fruiteSeasonal[0];
let lastElement = fruiteSeasonal[4];
console.log(`First Element  Is : ${firstElement}`);
console.log(`Last Element Is : ${lastElement}`);

console.log("==============================================================");
console.log("2] Add Element Papaya Before The Element Banana ");
fruiteSeasonal.unshift("papaya");
console.log(`Before Banana is : ${fruiteSeasonal}`);

console.log("==============================================================");
console.log("3] Remove Mango From The Array");
let spliceRes = fruiteSeasonal.splice(4,1);
console.log(`Total deleted elements: ,${fruiteSeasonal}`);

console.log("==============================================================");
console.log("4] Add The Element Pinepale At The Last Position");
fruiteSeasonal.push("Pineapple");
console.log(`Add Element at the last Positon : ${fruiteSeasonal}`);

console.log("==============================================================");
console.log("5] Insert Element Dragon Fruit Before Water Melon");
fruiteSeasonal.splice(4, 0, "Dragon Fruit");
console.log(`Insert Element Dragon Fruit Before Water Melon ;${fruiteSeasonal}`);

console.log("==============================================================");
console.log("6] Replace An Element Orange With, Kiwi");
fruiteSeasonal.splice(2, 1, "Kiwi");
console.log(`Replace An Element Orange With :${fruiteSeasonal}`);

console.log("==============================================================");
console.log("7] Log The Element Starting From Index 1 To 4");
let spliceResult = fruiteSeasonal.splice(1, 4);
console.log(`Log The Element Starting From Index 1 To 4 ;${spliceResult}`);

console.log("==============================================================");
console.log("8] Only Select Last 3 Element Use Length Property");
let totaleElements =fruiteSeasonal.slice(fruiteSeasonal.length-3)
console.log(`Last 3 Element Is : ${totaleElements}`);










