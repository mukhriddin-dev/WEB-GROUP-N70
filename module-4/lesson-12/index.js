"use strict";

// "this keyword" in func declorastion / expression   if user strict ? "undefined" : global window

// function app() {

//   console.log(this);
// }

// app()


// "this keyword" in func arrow  if user strict ? "golbal window " : global window

// const message = ()=>{
// console.log(this);
// }

// message()

// this keyword in object if  this=object

const obj = {

  name: "this keyword",

  allInfo: function () {

    console.log(this);

  }

}
obj.add = "add"

obj.prototype = function () {
  console.log(this.name);
}

console.log(obj)