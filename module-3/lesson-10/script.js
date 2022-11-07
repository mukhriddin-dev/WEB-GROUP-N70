"use strict";




$('.btn-success').addEventListener('click', () => {
  console.log($('.card').classList);
  $('.card').classList.add('rounded-5', 'border-5', 'p-5');
});


$('.btn-danger').addEventListener('click', () => {

  $('.card').classList.remove('p-5');
});



$('.toggle-menu').addEventListener('click', () => {

  $('.menu').classList.toggle('swipe');

  // if($('.menu').classList.contains('swipe')){
  //   $('.menu').classList.remove('swipe')
  // }else{
  //   $('.menu').classList.add('swipe')
  // }

  console.log($('.menu').classList.contains('swipe'));
})



const user=[
  
  {
    "id": 1,
    "email": "george.bluth@reqres.in",
    "first_name": "George",
    "last_name": "Bluth",
    "avatar": "https://reqres.in/img/faces/1-image.jpg"
  },
  
  {
    "id": 2,
    "email": "janet.weaver@reqres.in",
    "first_name": "Janet",
    "last_name": "Weaver",
    "avatar": "https://reqres.in/img/faces/2-image.jpg"
  },
  {
    "id": 3,
    "email": "emma.wong@reqres.in",
    "first_name": "Emma",
    "last_name": "Wong",
    "avatar": "https://reqres.in/img/faces/3-image.jpg"
  },
  {
    "id": 4,
    "email": "eve.holt@reqres.in",
    "first_name": "Eve",
    "last_name": "Holt",
    "avatar": "https://reqres.in/img/faces/4-image.jpg"
  },
  {
    "id": 5,
    "email": "charles.morris@reqres.in",
    "first_name": "Charles",
    "last_name": "Morris",
    "avatar": "https://reqres.in/img/faces/5-image.jpg"
  },
  {
    "id": 6,
    "email": "tracey.ramos@reqres.in",
    "first_name": "Tracey",
    "last_name": "Ramos",
    "avatar": "https://reqres.in/img/faces/6-image.jpg"
  }
  ,
  {
    "id": 7,
    "email": "michael.lawson@reqres.in",
    "first_name": "Michael",
    "last_name": "Lawson",
    "avatar": "https://reqres.in/img/faces/7-image.jpg"
},
{
    "id": 8,
    "email": "lindsay.ferguson@reqres.in",
    "first_name": "Lindsay",
    "last_name": "Ferguson",
    "avatar": "https://reqres.in/img/faces/8-image.jpg"
},
{
    "id": 9,
    "email": "tobias.funke@reqres.in",
    "first_name": "Tobias",
    "last_name": "Funke",
    "avatar": "https://reqres.in/img/faces/9-image.jpg"
},
{
    "id": 10,
    "email": "byron.fields@reqres.in",
    "first_name": "Byron",
    "last_name": "Fields",
    "avatar": "https://reqres.in/img/faces/10-image.jpg"
},
{
    "id": 11,
    "email": "george.edwards@reqres.in",
    "first_name": "George",
    "last_name": "Edwards",
    "avatar": "https://reqres.in/img/faces/11-image.jpg"
},
{
    "id": 12,
    "email": "rachel.howell@reqres.in",
    "first_name": "Rachel",
    "last_name": "Howell",
    "avatar": "https://reqres.in/img/faces/12-image.jpg"
}
]




for (let i = 0; i <user.length; i++) {

  const div = document.createElement('div');
  div.classList.add('card', 'p-4', 'shadow', 'my-2');
  div.innerHTML = `<img src="${user[i].avatar}" width="100" class="rounded-circle" alt="img"> <p> <strong>${user[i].id} </strong> ${user[i].first_name} ${user[i].last_name}</p> <h6>${user[i].email}</h6>`;

  $('.wrapper').appendChild(div)
}


// console.log(div);  
// console.log($('h3').textContent);