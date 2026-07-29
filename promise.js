console.log("this is promise");
let prom1=new Promise((resolve,reject)=>{
    let random=Math.random();
    if(random<0.5){
        reject("no random number is supporting you")
    }
    else{
    setTimeout(() => {
        console.log('yes i am done');
        resolve("harry");
        
    }, 3000);
}
})
prom1.then((a)=>{
    console.log(a);
}).catch((err)=>{
    console.log(err)
})