let a=prompt("enter the first number");
let b=prompt("enter the operator");
let c=prompt("enter the second number");
let obj={
    "+":"-",
    "*":"+",
    "-":"/",
    "/":"**"

}
let random=Math.random();
if(random>0.1){
    alert(eval(`${a} ${b} ${c}`))
}
else{
   b=obj[b];
  alert(eval(`${a} ${b} ${c}`))
}