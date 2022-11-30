const $ = (selector) => {
   return document.querySelector(selector)
}

const $$ = (selector) => {
   return document.querySelectorAll(selector)
}


const createElement = (tagName, className, content) => {
   const newElement = document.createElement(tagName);

   if (className) {
      newElement.setAttribute("class", className);
   }
   if (content) {
      newElement.innerHTML = `${content}`;
   }

   return newElement;
};



const toastify = (icon, message, color, time) => {

   $(".toastify").style.backgroundColor = color;
   $('.toastify').innerHTML = ` 
   <span id="notif-icon">
   ${icon}
   </span>
  <strong id="notif-message" class="text-white  mx-2 fs-5">${message}</strong>`;
   $('.toastify').classList.remove('hide-toast');

}