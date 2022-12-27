console.log("==========While Loop Vowels Count==============");
function countChaar(){
    var sentence = "I AM Learning JAvaScript,The Language of internet";
    console.log("1. I AM Learning JAvaScript,The Language of internet");
    var counter = 0;
    var index=0;
while (index < sentence.length) {
    var char = sentence.charAt(index);
    if (char=='a' || char=='A') { 
    console.log(char); 
    counter = counter +1; 
    }
  }
  console.log(`Total Number of a and A in he given string is:${counter}`);
}
countChaar();
