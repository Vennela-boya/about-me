//print a pattern
var r = parseInt(prompt("enter no of rows"));
p="";
for(var i=0;i<r;i++){
    var n = parseInt(prompt("enter a row number"));
    for(var j=0;j<n;j++){
        p=p+"*";
    }
    p=p+"\n";
}
console.log(p);

//factorial
var num=parseInt(prompt("enter a number"));
var f=1;
for(var x=1;x<=num;x++){
    f=f*x;
}
console.log(f);

//calculator
console.log("1:add\n 2:sub\n 3:mul\n 4:div");
var n = parseInt(prompt("enter a operation"));
var a=parseInt(prompt("enter 1st value"));
var b= parseInt(prompt("enter 2st value"));
var add = (a,b)=> a+b;
var sub = (a,b)=> a-b;
var mul = (a,b)=> a*b;
var div = (a,b)=> a/b;
switch(n){
    case 1:
        console.log(add(a,b));
        break;
    case 2:
        console.log(sub(a,b));
        break;
    case 3:
        console.log(mul(a,b));
        break;
    case 4:
        console.log(div(a,b));
        break;
    default:
        console.log("no operation is selected");

        
}
