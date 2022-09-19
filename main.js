let navIcon = document.getElementById("nav-icon");
let nav = document.getElementById("nav");
// let navLink = document.querySelectorAll("nav ul li a");
let iconSpanOne = document.querySelector("#span-one");
let iconSpanTwo = document.querySelector("#span-two");
let overly = document.getElementById("overly");
// console.log(navLink);

navIcon.addEventListener("click", function (e) {
  nav.classList.toggle("nav-active");
  this.classList.toggle("displayInitial");
  overly.classList.toggle("overly-active");
  e.stopPropagation();
});

// This Solution Source Is => "https://www.youtube.com/watch?v=iP63fDXk-W8"
document.onclick = function (e) {
  if (
    e.target.id !== "nav" &&
    e.target.id !== "nav-icon"
  ) {
    nav.classList.remove("nav-active");
    navIcon.classList.remove("displayInitial");
    overly.classList.remove("overly-active");
  }
  e.stopPropagation();
};
