"use strict";

let userName = document.querySelector('#username'),
  password = document.querySelector('#password'),
  show = document.querySelector('.show'),
  loginBtn = document.querySelector('.btn-primary'),
  toggleBtn = document.querySelector('.btn-warning'),
  card = document.querySelector('.card');




userName.addEventListener('blur', (event) => {
  if (event.target.value.trim().length === 0) {
    event.target.style.border = "1px solid red";
    event.target.setAttribute('placeholder', "Please fill input . . .")
  } else {
    event.target.style.border = "1px solid green";
    event.target.setAttribute('placeholder', "Enter Username")
  }
})

password.addEventListener('blur', (event) => {
  if (event.target.value.trim().length === 0) {
    event.target.style.border = "1px solid red";
    event.target.setAttribute('placeholder', "Please fill input . . .")
  } else {
    event.target.style.border = "1px solid green";
    event.target.setAttribute('placeholder', "Enter Username")

  }
})


password.addEventListener('keyup', (event) => {
  if (event.target.value.trim().length === 0) {
    show.setAttribute('class', 'show d-none')

  } else {
    show.setAttribute('class', 'show d-block')
  }
})


show.addEventListener('click', (e) => {

  if (password.getAttribute('type') === "password") {
    password.setAttribute('type', 'text');
    show.innerHTML = `<i class="bi bi-eye-slash-fill"></i>`;
  } else {
    password.setAttribute('type', 'password');
    show.innerHTML = `<i class="bi bi-eye-fill"></i>`;
  }

})



toggleBtn.addEventListener('click', () => {
  if (card.getAttribute('id') === "swipe") {
    card.setAttribute('id', "");
  } else {
    card.setAttribute('id', "swipe");
  }
})

userName.addEventListener('keypress', (e) => {
  if (e.target.value.toLowerCase() === "close") {
    card.setAttribute('id', "swipe");
  }
})