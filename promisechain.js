// function getdata(dataid){
//     setTimeout(() => {
//         console.log("data:",dataid);
//     }, 2000);
// }
// getdata(123);
// function getdata(getid,getnextdata){
//     setTimeout(() => {
//         console.log("data",getid);
//         if(getnextdata){
//             getnextdata();
//         }
//     }, 2000);

// }
// //nested callback
// getdata(123,()=>{
//     console.log("getting data 2")
//     getdata(456,()=>{
//         console.log("getting data 3");
//         getdata(789,()=>{
//             console.log("getting data 4");
//             getdata(905);
//         });
//     });
// })
// const getpromise= () =>{
//     return new Promise((resolve,reject)=>{
//        console.log("i am a promise");
//        reject("rejected")
//     })

// }
// let promise=getpromise();
// promise.catch((err) =>{
//     console.log("error",err);
// })
// function asyncfunc(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             console.log("some data")
//             resolve("success");
//         }, 2000);
//     })
// }
// function asyncfunc1(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             console.log("some data1")
//             resolve("success");
//         }, 2000);
//     })
// }
// console.log("we are fetching data")
// let p1=asyncfunc();
// p1.then((res)=>{
//     console.log("it is a success",res);
//     console.log("we are fetching data 1");
//     let p2=asyncfunc1();
//     p2.then((res)=>{
//         console.log("it is also a success",res);
//     })
// })
// p1.then((res)=>{
//     console.log("it is a success",res);
//     console.log("we are fetching data 1");
//     let p2=asyncfunc();
//     p2.then((res)=>{
//         console.log("it is also a success",res);
//     })
// })

// let p2=asyncfunc1();
// console.log("now we are fetching data1");
// p2.then((res)=>{
//     console.log("it is also success",res);
// })
// function getdata(getid,getnextdata){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             console.log("data",getid);
//             resolve('success');
//             if(getnextdata){
//                 getnextdata();
//             }
//         }, 2000);
//     })
// }
// 
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
let g1=getdata(123);
g1.then((res)=>{
    return getdata(2)
}).then((res)=>{
     return getdata(3);
}).then((res)=>{
    console.log("success");
})