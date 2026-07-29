// question 1
// let name=prompt("enter the number:");
// console.log(name);
// question 2
// let age=prompt("enter your age:");
// alert(`your age is ${age}`);
// question 3
// let a=+prompt("enter first number:");
// let b=+prompt("enter second number :");
// let sum=a+b;
// console.log(sum);
// question 4
// let city=prompt("enter your city:");
// document.querySelector("p").innerText=(`welcome to you ${city}`)
// question 5
// let prog=prompt("enter your favourite programming language:");
// alert(`your favourite programming langauge is ${prog}`)
// question 6
// let name=prompt("enter your name:");
// let age=prompt("enter your age:");
// document.write(`Hello ${name}! you are ${age} years old.`)
// question 7
// let age=prompt("Enter your age:");
// if(age>=18){
//     alert("you are eligible to vote");
// }
// else{
//     alert("you are not eligible to vote");
// }
// question 8
// let number=Number(prompt("Enter the number:"));
// if(number%2==0){
//     alert("The number is even");
// }
// else{
//     alert("The number is odd");
// }
//question 9
// let number=Number(prompt("Enter the number :"));
// if(number>0){
//     alert("The number is positive.");
// }
// else if(number<0){
//     alert("The number is negative.");
// }
// else{
//     alert("The number is zero.")
// }
// question 10
// let password=prompt("enter the password:");
// if(password==="admin123"){
//     alert("Login Successful")
// }
// else{
//     alert("Incorrect Password")
// }
// question 11
// let marks=Number(prompt("enter your marks:"));
// if(marks>=40){
//     alert("Pass")
// }
// else{
//     alert("Fail");
// }
// question 12
// 
// let temp=Number(prompt("enter the temperature:"));
// if(temp>=35){
//     alert("It's Hot")
// }else{
//     alert("Weather is Pleasant")
// }
// question 13
// let username=prompt("Enter your username:");
// if(username.length==0){
//     alert("Enter Username")
// }else{
//     alert(`Welcome, ${username}`)
// }
// question 14
// let character=prompt("enter the character");
// if(character==='a' || character==='e' || character==='i' || character==='o' || character==='u'){
//     alert("vowel")
// }else{
//     alert("consonant")
// }
// question 15
// let num1=Number(prompt("enter the first number:"))
// let num2=Number(prompt("enter the second number:"))
// if(num1>0 && num2>0){
//     alert("Both numbers are positive.")
// }
// else{
//     alert("At least one number is not positive.")
// }
// question 16
// let age=Number(prompt("enter the age:"));
// if(age>=18 && age<=60){
//     alert("Eligible for Job")
// }
// else{
//     alert("Not Eligible for Job")
// }
// question 17
// let username=prompt("Enter your username:");
// let password=Number(prompt("Enter your password:"));
// if(username==="admin" && password==="1234"){
//     alert("Login Successful")
// }else{
//    alert("Invalid Credentials")
// }
// reverse a number
// let a=prompt("Enter the number:");
// let rev=0;
// while(a>0){
//     let num=a%10;
//     rev=rev*10+num;
//     a=Math.floor(a/10);
// }
// alert(rev);
// prime number check


// function checkprime(a){
//     let prime=true;
//     if(a===1){
//         alert(false);
//     }
//     for(let i=2;i<a;i++){
//         if(a%i===0){
//             prime=false;
//             break;
//         }
//     }
//     if(prime==true){
//         alert(true);
//     }
//     else{
//         alert(false);
//     }
// }
// let a=Number(prompt("enter the number"));
// checkprime(a);
// reverse string
// let a=prompt("enter the string:");
// let reversed="";
// for(let i=a.length-1;i>=0;i--){
//      reversed+=a[i];
// }
// console.log(reversed);
// reverse string
// let str=prompt("enter the string");
// let rev=str.split("").reverse().join("");
// alert(rev);
// array sum
// function sumofarr(arr,n){
//     let sum=0;
// for(let i=0;i<arr.length;i++){
//     sum=sum+arr[i];
// }
// return sum;
// }
// let arr=[1,2,3,4,5];
// let n=arr.length
// console.log(sumofarr(arr,n));
// palindrome checking
// function plaindrome(){
// let str="madam";
// let str1=str.split("").reverse().join("");
// if(str1==str){
//     return true;
// }
// else{
//     return false;
// }
// }
// console.log(plaindrome());
// add element in array
// let arr1=[1,2,3,4];
// arr1.push(5);
// console.log(arr1);
// arr1.reverse();
// console.log(arr1)
// arr1.sort();
// console.log(arr1);
// let e=0;
// let o=0;
// for(let i=0;i<arr1.length;i++){
//     if(arr1[i]%2==0){
//         e++;
//     }
//     else{
//         o++;
//     }
// }
// console.log(o,e);

