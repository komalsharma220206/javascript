let arr=[1,2,3,4];
let newarr=arr.map((e)=>{
    return e**2;
});
console.log(newarr);
const greater=(e)=>{
    if(e>7){
        return true;
    }
    return false;
}
console.log(newarr.filter(greater))
let arr2=[1,2,3,4,5,6];
const product =(a,b,c)=>{
    return a*b*c;
}
console.log(arr2.reduce(product))
Array.from("harry");
console.log(Array.from("harry"));