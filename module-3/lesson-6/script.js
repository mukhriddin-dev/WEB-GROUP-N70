"use strict"

// let array=[1,2,3,4];

// console.log(array.length);

// let str='javascript';

// console.log(str.split(' '));

// const user={
//    isname: "Ismoil",
//    age:23,
//    allInfo: function(str){
//       console.log(str);
//     },

// }

// user.allInfo('JAVASCRIPT')

// let n1=+prompt('n1=');
// let n2=+prompt('n2=');

// let calc = {
//    plus: function (a, b) {
//       console.log(a + b);
//    },
//    minus: function (a, b) {
//       console.log(a - b);
//    },
//    multiple: function (a, b) {
//       console.log(a * b);
//    },
//    devide: function (a, b) {
//       console.log(a / b);
//    },

//    isname:"Ismoil"

// }

// console.log(calc.isname);

// console.log(calc);

// calc.plus(n1,n2);
// calc.minus(n1,n2);
// calc.multiple(n1,n2);
// calc.devide(n1,n2);

// CONTEXT THIS


const room={
   isname:'Tesla',
   color:"black & yellow",
   size:24,
   type:'medium',
   loaction:"NT Xadra branch",
   peoples:{
     name:"ok",
     age:12,
     color:"red"
   },
   data:['1']
}

console.log(room['isname']);

// let array=[1,2,3,4,5];


// for(let i=0; i<array.length; i++){
//    console.log(array[i])
// }

// console.log(room)

// // console.log(Object.keys())

// console.log(Object.keys(room));
// console.log(Object.values(room))
// let keyVal=Object.entries(room);
// console.log(keyVal)
// console.log(Object.fromEntries(keyVal))

// for(let key in room){
//    console.log(typeof(room[key]));
//    if(typeof(room[key])=="object"){
//       for(let i in room[key]){
//          console.log(i)
//       }
//    }

// }




let btn=document.getElementById('btn');
let h1=document.getElementsByTagName('h1');
let classes=document.getElementsByClassName('text');
const btns=document.querySelectorAll('.btn');
const title=document.querySelector('.card .box .app .title');

console.log(title);

const text1=document.querySelector('.card1- .title');

console.log(text1);




// btns.forEach((e,i,a)=>{
//  if(i%2==0){
//     e.style.display="none  "
//  }
// })

console.log(btns);
console.log(classes)
console.log(h1);
console.log(btn);

