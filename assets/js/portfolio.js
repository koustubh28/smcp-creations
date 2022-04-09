"use strict";

//get div hero
let hero = document.querySelector(".hero");

//code for toggling hero background
let btnToggle = document.querySelector(".btn-toggle");

//adding events
btnToggle.addEventListener("click", handleBackground);

//add function
function handleBackground() {
  hero.classList.toggle("ChangeHeroBg");
}
