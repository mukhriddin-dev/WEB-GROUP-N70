//-------------------CUSTOM DOM SELECTOR --------

const $=(selector)=> document.querySelector(selector);
const $$=(selector)=> document.querySelectorAll(selector);

// ------ DYNAMIC CREATE_ELEMENT------------


const createElement =function(tagName, className, content){
   const newElement = document.createElement(tagName);
 if(className){
   newElement.setAttribute('class',className);
 }
if(content){
   newElement.innerHTML = content;
}
   return newElement
}
