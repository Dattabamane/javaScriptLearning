console.log("=================================================");
var result=function(){
    var doubleEqual = 0=='';
    console.log(`Result of (0=='') is : ${doubleEqual}`);
}
result();

var result=function(){
    var doubleEqual = 0=='0';
    console.log(`Result of (0=='0') is : ${doubleEqual}`);
}
result();

var result=function(){
    var doubleEqual = 0==false;
    console.log(`Result of (0==false) is : ${doubleEqual}`);
}
result();

var result=function(){
    var doubleEqual = null==undefined;
    console.log(`Result of (null==undefined) is : ${doubleEqual}`);
}
result();

var result=function(){
    var doubleEqual = 1==[1];
    console.log(`Result of (1==[1]) is : ${doubleEqual}`);
}
result();

var result=function(){
    var doubleEqual = 1==true;
    console.log(`Result of (1==true) is : ${doubleEqual}`);
}
result();

var result=function(){
    var doubleEqual = 1=='1';
    console.log(`Result of (1=='1) is : ${doubleEqual}`);
}
result();

