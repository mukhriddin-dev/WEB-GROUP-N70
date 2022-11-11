"use strict";

movies.splice(60);

// ------ NORMALIZE ALL MOVIES--------//

const AllMovies = movies.map((movies) => {
   return {
      title: movies.title,
      year: movies.year,
      lang: movies.language,
      category: movies.categories,
      id: movies.imdbId,
      time: ` ${Math.floor(movies.runtime/60)}h ${movies.runtime%60}m`,
      summary: movies.summary,
      link: `https://www.youtube.com/embed/${movies.youtubeId}`,
      maxImg: movies.bigThumbnail,
      minIMG: movies.smallThumbnail,
      rating: movies.imdbRating,
   }
})

// console.log(AllMovies);

// ------ NORMALIZE ALL MOVIES--------//

// ------------ RENDER ALL MOVIES function ------------/



function renderAllMovies() {
   AllMovies.forEach((el) => {
      const card = createElement('div', 'card shadow-lg', `
    
    <img src="${el.minIMG}" alt="img" class="card-img">
    <div class="card-body">
       <h4 class="card-title">
          ${el.title}   
       </h4>
       <ul class="list-unstyled">
       <li> <strong>Year:  ${el.year}   </strong>
       </li>
       <li> <strong>Language:  ${el.lang} </strong></li>
       <li> <strong>Rating:   ${el.rating} </strong></li>
       <li> <strong>Category:  ${el.category}  </strong></li>
       <li> <strong>Runtime:  ${el.time} </strong></li>
    </ul>

       <div class="social d-flex">
       <a href="${el.link}" target="_blank" class="btn btn-danger m-2">
       Trailers
    </a>
          <button class="btn btn-primary m-2">
             Read more . . .
          </button>

          <button class="btn btn-warning m-2">
             Add bookmark
          </button>
       </div>

    </div>`);

      $('.wrapper').appendChild(card)

   })
}

renderAllMovies()



// ---- DYNAMIC CATEGORIES --------------------------------

const dynamicCategory = () => {

   let category = [];

   AllMovies.forEach((e) => {
      e.category.forEach((el) => {

         if (!category.includes(el)) {

            category.push(el)

         }
      })
   })

   category.sort()
   category.unshift('All')
   category.forEach((el) => {
      const option = createElement('option', 'item-option', el);
      $('#category').appendChild(option)
   })

}

dynamicCategory()







// ------------ FIND FILMS FUNCTIONS ------------



const findFilm = (regexp, rating = 0, category) => {


   if (category === 'All') {
      return AllMovies.filter((film) => {
         return film.title.match(regexp) && film.rating >= rating
      })

   }

   return AllMovies.filter((film) => {
      return film.title.match(regexp) && film.rating >= rating && film.category.includes(category)
   })

}

//  ------------ FIND FILMS LISTENER ------------

$('#submitForm').addEventListener('submit', () => {

   $('.wrapper').innerHTML = `<span class="loader"></span>`;

   const searchValue = $('#filmName').value;
   const filmRating = $('#filmRating').value;
   const filmCategory = $('#category').value;

   const regexp = new RegExp(searchValue, "gi");

   const searchResult = findFilm(regexp, filmRating, filmCategory);

   console.log(searchResult);

   setTimeout(() => {
      if (searchResult.length > 0) {
         searchResultsRender(searchResult);
         $('.card-res').classList.remove('d-none');
         console.log(searchResult.length);
         $('#res').innerHTML = `<strong >${searchResult.length}</strong> ta ma'lumot topildi`;

      } else {
         $('.card-res').classList.add('d-none');
         $('.wrapper').innerHTML = `<h1 class="text-center text-danger">MA'LUMOT TOPILMADI</h1>`;
      }
   }, 2000)

})



function searchResultsRender(data = []) {
   $('.wrapper').innerHTML = ""
   data.forEach((el) => {
      const card = createElement('div', 'card shadow-lg', `
       
       <img src="${el.minIMG}" alt="img" class="card-img">
       <div class="card-body">
          <h4 class="card-title">
             ${el.title}   
          </h4>
          <ul class="list-unstyled">
             <li> <strong>Year:  ${el.year}   </strong>
             </li>
             <li> <strong>Language:  ${el.lang} </strong></li>
             <li> <strong>Rating:   ${el.rating} </strong></li>
             <li> <strong>Category:  ${el.category}  </strong></li>
             <li> <strong>Runtime:  ${el.time} </strong></li>
          </ul>
   
          <div class="social d-flex">
             <a href="${el.link}" target="_blank" class="btn btn-danger m-2">
                Trailers
             </a>
             <button class="btn btn-primary m-2">
                Read more . . .
             </button>
   
             <button class="btn btn-warning m-2">
                Add bookmark
             </button>
          </div>
   
       </div>`);

      $('.wrapper').appendChild(card)

   })


}