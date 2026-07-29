let a=10;
for(let i=1;i<10;i++){
     console.log(a+i);
}
let obj={
    name:"komal",
    role:"programmer",
    company:"code with harry"
}
for (const key in obj) {
    
    const element = obj[key];
    console.log(key,element);
    
    
}
for (const c of "komal") {
    console.log(c);
}
while(a>=1){
    console.log(a);
    a--;
}
let i=1;
do{
    console.log(i);
    i++;
}
while(i>11)