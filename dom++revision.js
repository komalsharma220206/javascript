let head=document.querySelector("h1")
head.addEventListener("click",(e)=>{
    if(head.innerText==="this is bad"){
        head.innerText="this is good"
    }else{
        head.innerText="this is bad"
    }
})
let para=document.querySelectorAll("p")
para.forEach(p => {
    p.addEventListener("click",(e)=>{
       if(p.style.color==="red"){
        p.style.color="black"
       }else{
        p.style.color="red"
       }
    })
});
let button=document.querySelector("#btn");
button.addEventListener("click",(e)=>{
    alert("i was clicked")
})
let btn1=document.querySelector("#btn1");
let body=document.body
btn1.addEventListener("click",(e)=>{
     if(body.style.backgroundColor==="cornflowerblue"){
        body.style.backgroundColor="white"
     }else{
        body.style.backgroundColor="cornflowerblue"
     }
})
let div=document.querySelector("div")
div.addEventListener("click",(e)=>{
    div.classList.toggle("hidden");
})
let image=document.querySelector("img")
image.addEventListener("click",(e)=>{
   if(image.src.includes("bb.png")){
      image.src="cd.png"
   }
   else{
    image.src="bb.png"
   }
})