console.log("1] Create an object personal details----------");
const personalDetails = {
        name : "Datatatray",
        age: 26,
        height: 5.5,
        weight:54,
  }
  console.log(personalDetails);

  console.log("2] Create an object college details----------");
const collegeDtails = {
    clgName : "KEC",
    department : 4,
    venue : "Shelave",
    univercity : "Solapur",
}
console.log(collegeDtails);
console.log("3] merge these tow objects----------");
Object.assign(personalDetails, collegeDtails);
console.log(personalDetails);

console.log("4] Creating Array of friend names and freeze it----------");

const friendNames = ["SAGAR", "UMESH", "PRASHANT","MOIN"]
Object.freeze(friendNames);
console.log(friendNames);

console.log("5] iterate array using for loop----------");

function traversObject(friendNames) {
    for (const key in friendNames) {
      if (Object.hasOwnProperty.call(friendNames, key)) {
          const element = friendNames[key];
          console.log(element);
          
      }
    }
}
traversObject(friendNames);

//console.log("6] Givan a string company = Codemind Technology----------");

// //var company = function () {
//     var domain = " Codemind Technology ";
//     var result =company.rev
//  console.log("Length of String is :",result);
// }
// company(); 
