"use strict";
const baseURL = "https://restcountries.com/v2";
// All
//name/${countryName}

// -------------- ALL COUNTRIES ---------------------------
const getAllCountries = async () => {
   const countries = await fetch(`${baseURL}/all`);
   const result = await countries.json();
   dataRender(result)
   dynamicCategory(result)
}

getAllCountries()

// -------------- ALL COUNTRIES end--------------------------- 



// ------------ RENDER ALL DATA -----------------------


function dataRender(data = []) {

   data.forEach((el) => {

      const card = createElement('div', 'card shadow-lg', `
      <img src="${el.flags.svg ? el.flags.svg : "https://picsum.photos/id/122/267/160" }" alt="flag" class="card-top-img">
      <div class="card-body p-4">
         <h3 class="card-title">${el.name}</h3>
         <ul class="card-list p-0">
            <li class="card-list-item list-unstyled"><strong>Population: </strong> ${el.population} </li>
            <li class="card-list-item list-unstyled"><strong>Region: </strong> ${el.region} </li>
            <li class="card-list-item list-unstyled"><strong>Capital: </strong> ${el.capital} </li>
         </ul>
      </div>`);

      $(".wrapper").appendChild(card);

   })
}

// ------------ RENDER ALL DATA -----------------------


// -------------- dynamicCategory -----------------

function dynamicCategory(data) {

   const category = [];

   data.forEach((el) => {
      if (!category.includes(el.region)) {
         category.push(el.region)
      }
   })

   category.sort()
   category.unshift('All');
   category.forEach((el) => {
      const option = createElement('option', 'item', el);
      $('#region').appendChild(option)
   })

}

// -------------- dynamicCategory -----------------


$("#search").addEventListener('keypress', (e) => {



   console.log(e);

   if (e.target.value.trim().length !== 0 && e.keyCode === 13) {
      findCountry(e.target.value);
   }

})

// ----- FIND COUNTRIES ----------
async function findCountry(country) {

   $('.wrapper').innerHTML = "";
   const response = await fetch(`${baseURL}/name/${country}`);

   const data = await response.json();
   if (response.status === 404) {
      $('.info').innerHTML = "<h1 class='text-center w-100'> BUNDAY DAVLAT YO'Q</h1>"
   } else {

      $('.info').innerHTML = `<h1 class='text-center w-100'> Qidiruv natijasi:${data.length}</h1>`;
      dataRender(data)
   }
}

// ----- FIND COUNTRIES END ----------


$('#region').addEventListener('change', (e) => {


   sortCountry(e.target.value.toLowerCase())


})


async function sortCountry(region) {

   $('.wrapper').innerHTML = "";
   if (region === "all") {
      const response = await fetch(`${baseURL}/all`);

      const data = await response.json();

      if (response.status === 404) {
         $('.info').innerHTML = "<h1 class='text-center w-100'>NOT FOUND 404</h1>"
      } else {

         $('.info').innerHTML = `<h1 class='text-center w-100'> Qidiruv natijasi:${data.length}</h1>`;
         dataRender(data)
      }
   } else {
      const response = await fetch(`${baseURL}/region/${region}`);

      const data = await response.json();

      if (response.status === 404) {
         $('.info').innerHTML = "<h1 class='text-center w-100'>NOT FOUND 404</h1>"
      } else {

         $('.info').innerHTML = `<h1 class='text-center w-100'> Qidiruv natijasi:${data.length}</h1>`;
         dataRender(data)
      }
   }


}