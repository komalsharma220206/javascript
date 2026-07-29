//iife
// function getdata(getid,nextgetdata){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             console.log("data",getid); 
//             resolve("success");
//             if(nextgetdata){
//                 nextgetdata();
//             }
//         }, 2000);
//     })
// }
// (async function (){
//     await getdata(123);
//     await getdata(456);
//     await getdata(789);
// })();
// destructuring
//let [x,y,...rest]=[1,2,3,4,5];
//console.log(x,y,rest);
let obj={
    a:1,
    b:2,
    c:3
}
let{a,b}=obj;
console.log(a,b);
function sum(a,b,c){
    return a+b+c;
}
let arr=[1,4,6];
console.log(arr[0]+arr[1]+arr[2]);
console.log(sum(arr[0],arr[1],arr[2]));
console.log(sum(...arr))
const obj1={...arr}
console.log(obj1);
//hoisting
// console.log(a1);
// var a1=6;