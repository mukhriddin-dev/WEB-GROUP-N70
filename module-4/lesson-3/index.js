"use strict";







// EVENT DELEGATION FUNCTIONS


$('.wrapper').addEventListener('click', (e) => {

   // if (e.target.textContent === "box-6") {
   //    console.log(e.target.textContent)
   // }

   if (e.target.classList.contains("cards")) {
      console.log(e.target.textContent)
   }
})

const box = createElement('div', "box cards p-5 bg-success m-1 text-white", 'box-6');
$('.wrapper').appendChild(box);



console.log(window);


// SET , GET , REMOVE , CLEAR 


localStorage.setItem('login', "login-12345");
localStorage.setItem('password', "adminadimadim1111");


$('.btn-primary').addEventListener('click', () => {

   let userLogin = localStorage.getItem("login");
   let userPassword = localStorage.getItem("password");

   console.log(userLogin);
   $('.text-center').textContent = userLogin;
   $('.text-info').textContent = userPassword;
})

$('.btn-warning').addEventListener("click", () => {
   localStorage.removeItem('login')
   window.close()
})

$('.btn-secondary').addEventListener("click", () => {
   localStorage.removeItem('password')
   window.location.reload()
})


$('.btn-danger').addEventListener("click", () => {
   localStorage.clear()
});