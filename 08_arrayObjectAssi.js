console.log("A]=========BANK DETAILS DATA MEMBERS===============");
console.log("============================================================================");
class Bank{
    constructor(bankName,location,accountNo, ifsc,interestRate){
        this.bankName = bankName;
        this.location = location;
        this.accountNo = accountNo;
        this.ifsc = ifsc;
        this.interestRate = interestRate;
    }
}

console.log("B]=======create objects Bank Names==================");

let axisBank = new Bank("AXIS BANK", "PUNE", 967345261738453, 'UTIB0000037', '8.70%')
let sbiBank = new Bank("STATE BANK OF INDIA", "PANDHARPUR", 37162593581, 'SBIN0000446', '9%')
let hdfcBank = new Bank("HDFC BANK", "SOLAPUR", 59135624378452, 'HDFC0002819', '8.40%')
let bankOfBaroda = new Bank("BANK OF BARODA", "PANDHARPUR", 59135624378452, 'BARB0PANDHA', '10.49%')
let iciciBank = new Bank("ICICI BANK", "KOLHAPUR", 565865628957, 'ICIC0006975', '7.5%')
console.log(axisBank);
console.log(sbiBank);
console.log(hdfcBank);
console.log(bankOfBaroda);
console.log(iciciBank);

console.log("C]=============Add all object elements in a array and traverse this array using for of loop================");
const bankNames = [axisBank,sbiBank,hdfcBank,bankOfBaroda,iciciBank]
for (const element of bankNames) {
    console.log(element.bankName,"=",element.location);
}

console.log("D]===========From the array (step c) find the object which has name ---> Bank Of Baroda using for of loop=======");
for (const element of bankNames) {
    if (element.bankName=="BANK OF BARODA") {
        console.log(element);
    }
}

console.log("E] ===========log the details on console using for loop=============");
for (let index = 0; index < bankNames.length; index++) {
    const element = bankNames[index];
    console.log(element);
    
}