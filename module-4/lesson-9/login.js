"use strict";
let baseURL = "https://task.samid.uz/v1/user";
const login = (e) => {
   e.preventDefault();

   const userName = $("#userName").value.trim();
   const userPassword = $("#userPassword").value.trim();


   const params = {
      username: userName,
      password: userPassword,
   };


   if (
      userName.length === 0 ||
      userPassword.length === 0
   ) {
      alert("Please enter your username and email address");
   } else {
      fetch(`${baseURL}/sign-in`, {
            method: "POST",
            headers: {
               "Content-Type": "application/json",
            },
            body: JSON.stringify(params),
         })
         .then((e) => e.json())
         .then((e) => {
            if (e.code === 1) {
               localStorage.setItem('token', e.data.token);
               localStorage.setItem('user', e.data.username);
               alert(` ${e.data.username} welcome to admin dashboard`)
               setInterval(() => {
                  location.replace('./index.html');
               }, 2000)
            } else {
               alert(e.message)
            }
         });
   }

};


$("#login").addEventListener("submit", (e) => {
   login(e)
});