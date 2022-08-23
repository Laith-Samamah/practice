// let salary;
// let job = "desk";

// switch (job) {
//     case "it":
//     case "des":
//         salary=7000
//         break;
//     default:
//         salary=4000
// }

// console.log(salary)

// *********************************************************

// function sayHi(...num){
//     let result = 0

//     for (let i = 0; i < num.length; i++) {
//         console.log(num[i]);
//         result += num[i]
//     }
//     return `final result is ${result}`

// }

// console.log(sayHi(71 ,4, 5 ))

// *********************************************************

// function showInfo(use = "unk",age = "unk", rt = 0 , show = "yes",...sk){
// document.write(`<div>`)
// document.write(`<h2>welcome ${use}</h2>`)
// document.write(`<p>age is ${age}</p>`)
// document.write(`<p>rate is ${rt}$</p>`)
// if(show === "yes"){
//     if (sk.length>0) {
//         document.write(`<p> ${sk.join(" | ")} </p>`)
//     } else {
//         document.write(`<p> no skills </p>`)
//     }

// } else {
//     if (sk.length<=0) {
//         document.write(`<p> there is no skills in the first place </p>`)
//     } else {
//         document.write(`skills is hidden`)
//     }

// document.write(`</div>`)
// }
// }
// showInfo("laith" , 24, 10, "yes" )

// *********************************************************

// function data(a,b,c) {
//     const info=[a,b,c]
//     let Name , age, statuss;

//     for (let i = 0; i < 4; i++) {

//         if (typeof info[i] === 'string') {
//             Name = info[i]
//         } else if (typeof info[i] === 'number') {
//             age= info[i]
//         } else if (typeof info[i] === 'boolean') {
//             if (info[i]=== true) {
//                 statuss="available"
//             } else {
//                 statuss="not available"
//             }
//         }
//     }
//     return (`hello ${Name} your age is ${age} and you are ${statuss} `)
// }

// console.log(data(  true,"laith", 24));

// *********************************************************

// function sayMes(fName,lName) {
//     let message="say hello"

//     function concatMs(){
//         message=`${message} ${fName} ${lName}`
//     }

//     concatMs();
//     return message;
// }

// console.log( sayMes (`laith`,`Ali`) );

// *********************************************************

// function sayMes(fName,lName) {
//     let message=" hello"

//     function concatMs(){
//         return `${message} ${fName} ${lName}`
//     }
//     return concatMs();
// }

// console.log( sayMes ("laith","ali") );

// *********************************************************

// let print = (num,name) =>{
//     return `${num} ${name}`

// }

// console.log(print(5,"laith"));

// *********************************************************

// const myNum = [1,2,3,4,5,6]

// const newArr =[];

// for (let i = 0; i < myNum.length; i++) {
//     newArr.push (myNum[i]+myNum[i]);
// }
// console.log(newArr);

// let self=myNum.map((element ) => element+element);

// console.log(self);

// *********************************************************

// let sss= "LaiTH"

// let swap = sss.split("").map(function(ele){
//     return ele === ele.toUpperCase()? ele.toLowerCase():ele.toUpperCase()
// });
// console.log(swap);

// let invertedNumbers=[1,5,-4,-25,-12,7]

// let inv= invertedNumbers.map(function(ele){
//     return -ele;
// })

// console.log(inv);

// *********************************************************

// let numstr = "Lai5555th";

// let name = numstr
//   .split("")
//   .map(function (ele) {
//     return isNaN(parseInt(ele)) ? ele : "";
//   })
//   .join("");
// console.log(name);
// *********************************************************

// for (let i = 1; i < 25; i++) {
//   let mainDiv = document.createElement("div");
//   mainDiv.className = `product ${[i]}`;
//   document.body.appendChild(mainDiv);

//   let head3 = document.createElement("h3");
//   mainDiv.appendChild(head3);
//   head3.textContent = `product title ${[i]}`;

//   let par = document.createElement("p");
//   mainDiv.appendChild(par);
//   par.textContent = `discription ${[i]}`;
// }

// *********************************************************

// function fun(x) {
//   if (x > 1) {
//     return;
//   } else {
//     x = x - 1;
// console.log("fun(x)");
//     return;
//   }
// }

// fun(5);

// *********************************************************
// *********************************************************
// *********************************************************
// *********************************************************
// *********************************************************
// *********************************************************
// *********************************************************
// *********************************************************
// *********************************************************
// *********************************************************
// *********************************************************
// *********************************************************
// *********************************************************
// *********************************************************
// *********************************************************

// const inputs = document.querySelectorAll("input");

// const patterns = {
//     email: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
//     telephone: /^[079 | 078 | 077 ]\d{7}$/
// }
// if(inputText.value.test(patterns))

// let str = " my name is laith in spain arti ni in ai94 ";
// let regex1 = /[0-7]/gi;
// let resukt = regex1.test(str);
// console.log(resukt);

// let str = " my name is laith ";
// let regex1 = /l/gi;
// let resukt = regex1.test(str);
// console.log(resukt);

// let regx2 = /ai/g;
// console.log(str.match(regx2).length);

// let regx2 = /\b(ai)/gi;
// console.log(str.match(regx2));

// //******************************************************************************* */
// // program to implement stack data structure
// class Stack {
//   constructor() {
//     this.items = [];
//   }

//   // add element to the stack
//   add(element) {
//     return this.items.push(element);
//   }

//   // remove element from the stack
//   remove() {
//     if (this.items.length > 0) {
//       return this.items.pop();
//     }
//   }

//   // view the last element
//   peek() {
//     return this.items[this.items.length - 1];
//   }

//   // check if the stack is empty
//   isEmpty() {
//     return this.items.length == 0;
//   }

//   // the size of the stack
//   size() {
//     return this.items.length;
//   }

//   // empty the stack
//   clear() {
//     this.items = [];
//   }
// }

// let stack = new Stack();
// stack.add(1);
// stack.add(2);
// stack.add(4);
// stack.add(8);
// console.log(stack.items);

// stack.remove();
// console.log(stack.items);

// console.log(stack.peek());

// console.log(stack.isEmpty());

// console.log(stack.size());

// stack.clear();
// console.log(stack.items);

// function bS(str) {
//   let stsck1 = new stack();
//   for (let i = 0; i < str.length; i++) {
//     switch (str[i]) {
//       case "(":
//       case "[":
//       case "{":
//         stsck1.push(str[i]);
//         break;
//       case ")":
//         let out = stsck1.pop;
//         if (out !== "(") return false;
//         break;
//     }
//   }
// }
// bS("sd(edd{ds})");
// console.log(stsck1);

//************************************************************************************** */
