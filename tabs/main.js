"use strict";

let firstBtn = document.querySelector(".first");
let secondBtn = document.querySelector(".second");
let thirdBtn = document.querySelector(".third");
let fourthBtn = document.querySelector(".fourth");
let content = document.querySelectorAll(".content");
const hiddeTab = function () {
  content.forEach((element) => {
    element.classList.add("hidden");
  });
};

firstBtn.addEventListener("click", function () {
  hiddeTab();
  document.querySelector(".one").classList.remove("hidden");
});

secondBtn.addEventListener("click", function () {
  hiddeTab();
  document.querySelector(".two").classList.remove("hidden");
});

thirdBtn.addEventListener("click", function () {
  hiddeTab();
  document.querySelector(".three").classList.remove("hidden");
});

fourthBtn.addEventListener("click", function () {
  hiddeTab();
  document.querySelector(".four").classList.remove("hidden");
});
