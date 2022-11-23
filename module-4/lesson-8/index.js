"use strict";



let object = {
   title: "lorem Ipsum",
   number: 12,
   data: {
      name: "lorem Ipsum",
      age: 13
   },
   db: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
}



$('#list')

object.db?.forEach((el) => {
   const li = createElement('li', 'item', el);
   $("#list").append(li);
})

