var stringTemplete=function(company){
    console.log(`${company}`);
    var hobby1="singing";
    var hobby2="dancing";
    var hobby3="playing cricket";
    console.log(`2. my first hoobie is: singing, my second hobbie is: dancing, and my third hoobie is:playing cricket`);
    var concatstring= hobby1 + hobby2 + hobby3;
    console.log(`3. concatinating the hobbies in a one string:${concatstring}`);
    var hobbie="singing,dancing,playingcricket";
    var concatSpliString=hobbie.split(",");
    console.log(`4. my hobbies by using concat:${concatSpliString}`);

}
stringTemplete(`1. my dream company name is ": TCS`);