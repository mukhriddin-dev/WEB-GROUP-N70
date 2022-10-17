"use strict";

// function decloration

// getName( 'javaScript', 'nodejs' )

// function getName(a, b, ) {
//    console.log(a, b)
// }

// expression function ES5

// const getNumber = function (a) {
//    console.log(a)
// }



// const getInfo = getNumber;
// const getAlldata = getNumber;


// getNumber(7777)
// getInfo(9999)
// getAlldata('9999999')


// arrow function ES6


// const arrowFunc = (a, b, c, d) => {
//       console.log(a);
//       console.log(b);
//       console.log(c + d)
// }


// arrowFunc(999, 22, 12, 13)


// function sayHello(text='Nodjs'){
//    console.log(text);
// }

// sayHello('javaScript')


// let a = +prompt('a=');
// let b = +prompt('b=');
let n=+prompt('n=');
let sum=0;

function addNumbers(n) {
  for(let i=0; i<=n; i++){
    sum=sum+i;
 
  }
  
}

addNumbers(n)
console.log(sum)