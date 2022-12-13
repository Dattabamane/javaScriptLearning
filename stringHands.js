var sentence = function(st){
    console.log(st);
    var result=st;
    console.log(`1.Length of given string:${result.length}`);
    var trimResult = st.trim();
    console.log(`2.sentence after trim:${trimResult}`);
   // console.log(`After removing all black spaces length of dtring is :${trimResult.lrngth}`);
    console.log(`3.Length of string after trim:${trimResult.length}`);
    console.log("4.Character at first index:", trimResult.charAt(0) , "Character at last index:",trimResult.charAt(33));
   // console.log("Character at first index:",trimResult.charAt(0), "Character at last index:",trimResult.charAt(length-1));
    var indexOfGood = st.indexOf("good");
   // print the index of good string console.log(`5.index of substring good:${indexOfGood}`);
   // print the substring 
    var slicestring=st.slice(22);
    console.log(`6.using slice function print the substring start index from 22:${slicestring}`);
    var subString = st.substr(22);
    console.log(`7.using substring function print the substring start index from 22:${subString}`);
    // check string end with key word up 
     console.log(`8.does given string end with up word using include():${trimResult.includes("up")}`);

     console.log(`9.check the string star with word hey after trimming using include():${trimResult.includes("Hey")}`);

}
sentence(` Hey you are doing good, keep it up`);