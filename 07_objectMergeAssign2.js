console.log("Given a object car and carEnine merge or concat these ttwo objects ");
const car = {
    carName : "Creta SX",
    company : "Hundai",
    launchYear : 2017
}
const carEngine = {
    enginePower : "1499cc",
    maxPower : "113 BHP"
}
console.log("a] given object merge or concat using Object.assign()");
Object.assign(car, carEngine);
console.log("this is the 'HUNDAI' 'CRETA SX' CAR Details :",car);

console.log("2] given object merge or concat using Spread operator");
let arrayspr = {...car, ...carEngine};
console.log(arrayspr);