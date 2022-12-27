console.log("======== FOR LOOPS Vowels Count==================");
function countChaar(){
    var sentence = "I AM Learning JAvaScript,The Language of internet";
    console.log("1. I AM Learning JAvaScript,The Language of internet");
var counter = 0;
for (let index = 0; index < sentence.length; index++) {
    var char = sentence.charAt(index);
    if (char=='a' || char=='A') {
            console.log(char);
            counter = counter +1;
        }
    }
    console.log(`Total Number of a and A in he given string is:${counter}`);
}
countChaar();

console.log("=======================================");
function personalDetails(){
    var sentence = "My favourite movie is LAggAn";
    console.log("2. My favourite movie is LAggAn");
var counter = 0;
for (let index = 0; index < sentence.length; index++) {
    var char = sentence.charAt(index);
    if (char=='a' || char=='A') {
            console.log(char);
            counter = counter +1;
        }
    }
    console.log(`Total Number of a and A in he given string is:${counter}`);
}
personalDetails();

