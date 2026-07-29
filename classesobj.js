// let obj={
//     a:1,
//     b:"harry"
// }
// console.log(obj);
// let animal={
//     eats:true
// };
// let rabbit={
//     jumps:true
// };
// rabbit.__proto__=animal;
 class animal{
    constructor(name){
        this.name=name;
        console.log("object has been created......")
        console.log(name);
    }
    eats(){
        console.log("mai khaa rha hoon");
    }
    jumps(){
        console.log("mai kood rha hoon");
    }
}
class lion extends animal{
    constructor(name){
        super(name)
        this.name=name;
        console.log("my name is "+name);
    }
     roar(){
        console.log("roar");
     }
     flesh(){
        console.log("i eat flesh")
     }
     eats(){
        console.log("mai khaake shikar karne gya")
     }
}
let a =new animal("bunny");
console.log(a);
let l=new lion("shera");
console.log(l);
// class user{
//     constructor(name){
//         this.name=name;
//     }
//     set name(newname){
//         if(newname.length<4){
//             alert("name is too short");
//             return;
//         }
//          this._name=newname;

//     }
//     get name(){
//         return this._name;
//     }
// }
// let u=new user("hari");
// console.log(u)