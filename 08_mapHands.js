console.log("A]=======creating a class 'BANK' with all possible data members=============");
console.log("=======================================================================================");
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

console.log("==============================================================");
console.log("C] create a map in such way that key should be accountno and value is object that is created in step B");
const accuNumbers = new Map(); // Creating an Map
accuNumbers.set(967345261738453,axisBank); // Adding element in key value pair
accuNumbers.set(37162593581,sbiBank);
accuNumbers.set(59135624378452,hdfcBank);
accuNumbers.set(59135624378452,bankOfBaroda);
accuNumbers.set(565865628957,iciciBank);
const keysOfBanks = accuNumbers.keys();
console.log(keysOfBanks);

console.log("==============================================================");
console.log("D] traverse the map log bankname,accountno and interestrate for each object");
const keyaccuNumbers = accuNumbers.keys();
for (const key of keyaccuNumbers) {
    const bank = accuNumbers.get(key);
    console.log(`bank name : ${bank.bankName},    Account no : ${bank.accountNo},    interest rate :${bank.interestRate}`);
}
