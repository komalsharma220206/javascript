const URL="https://dogapi.dog/api/v2/breeds";
let dogpara=document.querySelector("#dog");
let buttons=document.querySelector("#btn")
let dogpara1=document.querySelector("#dog1")
let buttons1=document.querySelector("#btn1");
async function getdogs(){
    console.log("getting data......")
    let response= await fetch(URL);
    console.log(response);
    let data=await response.json();
    dogpara.innerText=data.data[1].attributes.description;
    
    
}
buttons.addEventListener("click",getdogs)
async function getdogs1(){
    console.log("getting data......")
    let response= await fetch(URL);
    console.log(response);
    let data=await response.json();
    dogpara1.innerText=data.data[2].attributes.description;
    
    
}
buttons1.addEventListener("click",getdogs1);