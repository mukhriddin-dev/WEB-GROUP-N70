//-------------------CUSTOM DOM SELECTOR --------------------
const $ = function (selector) {
  return document.querySelector(selector)
}

const $$ = function (selector) {
  return document.querySelectorAll(selector)
}


// ----------------- DYNAMIC CREATE_ELEMENT ---------------------
const createElement = function (tagName, className, content) {

  const div = document.createElement(tagName);

  if (className) {
    div.setAttribute('class', className);
  } else {
    console.warn('empty class attribute')
  }

  if (content) {
    div.innerHTML = `${content}`;
  } else {
    console.warn('empty HTML content')
  }

  return div;

}