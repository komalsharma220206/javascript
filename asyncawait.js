// async function hello(){
//     console.log("hello");
//     setTimeout(() => {
//         console.log("i am async example");
//     }, 2000);
// }
// hello();
 function getdata(getid,getnextdata){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log("data",getid);
            resolve('success');
            if(getnextdata){
                getnextdata();
            }
        }, 2000);
    })
}
// async function newdata(){
//     console.log("getting first data");
//     await getdata(123);
//     console.log("getting second data");
//     await getdata(456);
//     console.log("getting third data");
//     await getdata(789);
// }
(async function (){
    console.log("getting first data");
    await getdata(123);
    console.log("getting second data");
    await getdata(456);
    console.log("getting third data");
    await getdata(789);
})()