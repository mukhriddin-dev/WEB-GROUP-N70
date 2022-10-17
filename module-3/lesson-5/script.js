"use strict";

// let array=new Array('java',false,12,undefined,null);

// let array=['javaScript','go lang', 'html','css','php','c#'];

// array[6]="nodejs";
// array[7]="swift"
// array[8]="c++";

// console.log(array.length);

// console.log(array[0])
// console.log(array[1]);
// console.log(array[2]);
// console.log(array[3]);
// console.log(array[4]);
// console.log(array[5]);

// for(let i=0; i<array.length  ; i++){
//   console.log(array[i])
// }




// let data=['laptop'];

// data.push('html'); /// ohiridan element qo'shadi...
// data.push('css');
// data.push('javascript');
 
//data.pop()   /// ohiridan element o'chiradi...

// data.unshift('wi-fi'); // array boshidan element qo'shadi...
// data.unshift(0); 



//data.shift() //array boshidan element o'chiradi...

// console.log(data)

// // let sli=data.slice(0, data.length-1); nusxlaydi


// let sli=data.splice(2, 1); // qirqib oladi 

// console.log(sli)
// console.log(data)

// let data2=[1,2,3,4,5];

// let data3=data.concat(data2).concat(data).concat(data2);

// data.push(1)

// console.log(data3.join("-"));
// console.log(data);
// console.log(data.indexOf(1));
// console.log(data.includes('htmls'));




// let numbers=[1,2,3,4,5,6,7,8,9,10,11,12,13,1,41,15,22,11,11,22,33,444];


// // console.log(numbers.length);

// for(let i=0; i<numbers.length; i++){
//   console.log(numbers[i])
// }

// let n=+prompt('n=');
// let array=[];

// for(let i=0; i<=n; i++)
// {
//    array.push(i+" "+2**i)
//    console.log(array[i])
// }

// console.log(array)



// let str="loremipsum done done Dolor  ipsum";

// // console.log(str.length)

// // console.log(str.trim().length)

// // console.log(str.toLowerCase())
// // console.log(str.toUpperCase())
// // // console.log(str.concat('include of '))
// // console.log(str.split(' '))

// console.log(str)

// console.log(str.substring(1,6));
// console.log(str.charAt(11))
// console.log(str.search('done'));


// let text="javaScript  Dasturlash daSturlash dasturlash dasturlash tili";


// console.log(str.match(/done/gi))

// console.log(text.match(/dasturlash/gi).length);



console.log(typeof([]));


// let obj=new Object({ism:"Sardor"});


let person={
  isName:"Sardor",
  age:22,
  job:"programmer",
  family:[{
    isname:"Sarvar",
    age:23,
    job:"teacher"
  }]
}


console.log(person['family'][0]['isname']);
console.log(person.family[0].isname);

let ok=document.querySelector('.ok');

console.log(ok.style.color="red");

