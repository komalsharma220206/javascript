let a=prompt("enter the first number");
let b=prompt("enter the second number");
let sum=parseInt(a)+parseInt(b);
if(isNaN(a) || isNaN(b)){
    throw SyntaxError("this is not allowed here")
}
let x=8;
function main(){
    try {
    console.log("the sum is :",sum*x);
    return true;
} catch (error) {
    console.log("error aagya bhai")
    return false;
}
finally{console.log("chalo error nipat gya")}



}
main()


