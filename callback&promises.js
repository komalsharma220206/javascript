console.log("hello")
console.log("hey")
setTimeout(() => {
    console.log("i am inside")
}, 2000);
setTimeout(() => {
    console.log("i am inside set timeout")
}, 1000);
console.log("the end")
const callback = (arg) =>{
    console.log(arg);
}
const loadScript =(src,callback) => {
  let sc=document.createElement("script");
  sc.src=src;
  sc.onload=callback("harry");
  document.head.append(sc);
}
loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js",callback)
