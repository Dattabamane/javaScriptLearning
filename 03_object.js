console.log(`========for in loop==============`);
const billgate = {
    height: 6,
    weight: 70,
    age: 23,
    name: "Billgates",
    company:"microsoft",
    valuvation:130,
}
for (const key in billgate) {
    if (Object.hasOwnProperty.call(billgate, key)) {
        const element = billgate[key];
        console.log(element);
    }
}

console.log("=======Key And Values=======");

for (const key in billgate) {
    if (Object.hasOwnProperty.call(billgate, key)) {
        const element = billgate[key];
        console.log(key, element);
    }
}


console.log(`========== in operator ================`);
let isAvailable = "height" in billgate;
if (isAvailable) {delete billgate.height;
    console.log(`"height" property is deleted successfully`);
} else{
    console.log(`"height" property not deleted as it is available inside object`);
}