let navIcon = document.getElementById("nav-icon");
let nav = document.getElementById("nav");
let iconSpanOne = document.querySelector("#span-one");
let iconSpanTwo = document.querySelector("#span-two");
let overly = document.getElementById("overly");
console.log(iconSpanTwo);

navIcon.addEventListener("click", function () {
  nav.classList.toggle("nav-active");
  navIcon.classList.toggle("displayInitial");
  overly.classList.toggle("overly-active");
});
