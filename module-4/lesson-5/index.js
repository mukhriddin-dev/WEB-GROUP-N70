"use strict";

// let array = ['c++', "javascript", "java", "php"];


// let [game, ...web] = ['c++', "javascript", "java", "php"]

// let text = "javascript";

// let arrays = text.split('');

// console.log(arrays);

// let [letterOne, ...letters] = arrays;

// console.log(letterOne);
// console.log(letters);


// const person = {
//    isname: "Ismoil",
//    age: 20,
//    job: "Programmer",
//    hobbies: ['coding', 'sleeping', 'watch cartoons'],
//    programming:{
//       frontend:{
//          html:{
//             isname:"HTML"
//          },
//          css:{
//             isname:"CSS"
//          },
//          js:{
//             isname:"JavaScript"
//          }
//       }
//    }
// }


// console.log(person.programming.frontend.html.isname);


// let {programming:{frontend:{html:{isname}}}} = person;





// let array = ['c++', "javascript", "java", "php"];

// let [c,...data]=array; // rest

// console.log(array);
// console.log(data);

// const newArray=[...array,"go",...array,".NET",...array]; // spread 

// console.log(newArray);

let array=["Uzbekistan","Turkey","Afganistan","USA","Poland"];



//let country=array; // shalow copy



// for(let i=0; i<array.length;i++){  // deep copy v1
//    country.push(array[i]);
// }

// array.forEach((e)=>{    // deep copy    v2
//    country.push(e);
// })

// let country=array.map((e)=>{   // deep copy v3
//    return e
// })


// const country=[...array]

// country.push('Canada')

// console.log("orginal:",array);
// console.log("copy:",country);



const room={
   isName:"Osmondagi bolalar",
   branch:"Xadra",
   type:"Large",
}

// const objToJson=JSON.stringify(room) // obj to JSON 
// const jsonToObj=JSON.parse(objToJson) // JSON to object


// console.log(objToJson); // 
// console.log(jsonToObj



//const newRoom=room; // shalow copy 

/// newRoom=Object.assign( {} , room ) // deep copy v1

// const newRoom={...room,isName:"Tesla", isOpen:false, } // v2


// const newRoom=JSON.parse(JSON.stringify(room)) // deep copy v3

// newRoom.status="is Active";

// newRoom.color="orange";


// console.log("orginal:   " ,room)
// console.log("copy:   " ,newRoom)













