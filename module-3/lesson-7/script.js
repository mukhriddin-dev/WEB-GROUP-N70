"use strict";

const btn = document.querySelector(".btn-danger"),
  card = document.querySelector(".card"),
  btnYellow = document.querySelector(".btn-warning"),
  inputForm = document.querySelector(".form-control"),
  text = document.querySelector(".text"),
  select = document.querySelector("#select");

// let obj={
// color:""
// }

// obj.color="red";

// obj.color="green";

// console.log(obj);

// console.log(card.style.color="red");
// console.log(card.style);
// card.style.borderRadius="10px"
// card.style.border="4px solid green";

// card.style.cssText="border-radius:10px ; border: 4px solid green";

// console.log(card.id);
// console.log(card.title="lesson1");

function nightMode() {
  card.style.cssText = "background-color:yellow";
  document.body.style.backgroundColor = "#000";
  document.body.style.color = "#fff";
}

function lightMode() {
  card.style.cssText = "background-color:coral;";
  document.body.style.backgroundColor = "#fff";
}

// btn.onmousedown=nightMode
// btn.onmouseup=lightMode

btn.addEventListener("mousedown", () => {
  nightMode();
});

btn.addEventListener("mouseup", () => {
  lightMode();
});

inputForm.addEventListener("focus", () => {
  console.log(inputForm.value);
  text.textContent = inputForm.value;
  console.log("input focused");
});

inputForm.addEventListener("change", () => {
  console.log(inputForm.value);
  text.textContent = inputForm.value;
  console.log("input blured");
});

select.addEventListener("change", () => {
  if (select.value == 1) {
    nightMode();
  }
  if (select.value == 2) {
    lightMode();
  }
});

window.addEventListener("scroll", () => {
  let scrolltop = window.scrollY;

  console.log(scrolltop);

  if (Math.round(window.scrollY) > 300) {
    nightMode();
  } else {
    lightMode();
  }
});
