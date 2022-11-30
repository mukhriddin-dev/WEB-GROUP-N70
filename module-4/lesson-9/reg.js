"use strict";

let baseURL = "https://task.samid.uz/v1/user";

const registration = (e) => {
   e.preventDefault();

   const userName = $("#userNameRegistration").value.trim();
   const userEmail = $("#userEmailRegistration").value.trim();
   const userPassword = $("#userPasswordRegistration").value.trim();

   // user11
   // user11@gmail.com
   // 12345user

   const params = {
      username: userName,
      email: userEmail,
      password: userPassword,
   };

   if (
      userName.length === 0 ||
      userEmail.length === 0 ||
      userPassword.length === 0
   ) {
      alert("Please enter your username and email address");
   } else {
      fetch(`${baseURL}/sign-up`, {
            method: "POST",
            headers: {
               "Content-Type": "application/json",
            },
            body: JSON.stringify(params),
         })
         .then((e) => e.json())
         .then((e) => {
            if (e.code === 1) {
               alert(e.message);
               console.log(e);
               setTimeout(() => {
                  window.location.replace("./login.html");
               }, 2000);
            } else {
               console.log(e);
               alert(e.errors.username);
            }
         });
   }
};

$("#reg").addEventListener("submit", (e) => {
   registration(e);
});






//--------------login form -----------------------------------------------

