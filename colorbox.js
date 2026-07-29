let random=Math.random();
let color=['red','green','blue','pink','yellow'];
let c1=document.getElementById("b1");
let c2=document.getElementById("b2");
let c3=document.getElementById("b3");
let c4=document.getElementById("b4");
let c5=document.getElementById("b5");
if(random<0.2){
    c1.style.backgroundColor=color[0];
     c2.style.backgroundColor=color[1];
      c3.style.backgroundColor=color[2];
       c4.style.backgroundColor=color[3];
        c5.style.backgroundColor=color[4];

}
else if(random<0.4){
     c1.style.backgroundColor=color[1];
     c2.style.backgroundColor=color[2];
      c3.style.backgroundColor=color[3];
       c4.style.backgroundColor=color[4];
        c5.style.backgroundColor=color[0];

}
else if(random<0.6){
     c1.style.backgroundColor=color[2];
     c2.style.backgroundColor=color[3];
      c3.style.backgroundColor=color[4];
       c4.style.backgroundColor=color[0];
        c5.style.backgroundColor=color[1];


}
else if(random<0.8){
     c1.style.backgroundColor=color[3];
     c2.style.backgroundColor=color[4];
      c3.style.backgroundColor=color[0];
       c4.style.backgroundColor=color[1];
        c5.style.backgroundColor=color[2];

}
else{
     c1.style.backgroundColor=color[4];
     c2.style.backgroundColor=color[0];
      c3.style.backgroundColor=color[1];
       c4.style.backgroundColor=color[2];
        c5.style.backgroundColor=color[3];

}