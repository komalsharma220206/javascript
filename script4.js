function change(name){
    console.log("hey "+name);
}
change("girl");
function sum(a,b){
    console.log(a+b);
}
sum(7,8);
var a=90;
var b=180;
var c=270;
if(a>b && a>c){
    console.log(a);
}
else if(b>a && b>c){
    console.log(b);
}
else{
    console.log(c);
}
var d=189;
var e=90;
console.log((d>e)? d : e);
for (let index = 1; index <=10; index++) {
    console.log(index);
    
}
let i=1;
while(i<=10){
    console.log(i);
    i++;
}
let obj={
    name:"komal",
    class:"CSE",
    "job role":"swe"
}
for (const kalla in obj) {
    
    const element = obj[kalla];
    console.log(kalla,element)
    
    
}
let str="harry";
for (const element of str){
     console.log(element)
} 
function param(name){
    console.log("hey "+name);
}
param("riya");
function sum(a,b){
    return a+b;
}


function sum(a,b,c){
    return a+b+c;
}
console.log(sum(5,10));
console.log((sum(2,3,4)));
    
