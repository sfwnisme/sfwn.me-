// skills
import skills from "./extensions/skills.js";
skills();

// github
import github from "./extensions/github.js";
github();

// contact
import contact from "./extensions/contact.js";
contact();

// footer
import footer from "./extensions/footer.js";
footer();

// services
import services from "./extensions/services.js";
services();

AOS.init();

let navIcon = document.getElementById("nav-icon");
let nav = document.getElementById("nav");
let iconSpanOne = document.querySelector("#span-one");
let iconSpanTwo = document.querySelector("#span-two");
let overly = document.getElementById("overly");
let navLis = document.querySelectorAll("nav ul li");
let navLinks = document.querySelectorAll("nav ul li a");
console.log(navLis);

navIcon.addEventListener("click", function (e) {
  nav.classList.toggle("nav-active");
  this.classList.toggle("displayInitial");
  overly.classList.toggle("overly-active");
  e.stopPropagation();

  // Remove The Navigation Bar If Click On Overly Or Links
  // This Solution Source Is => "https://www.youtube.com/watch?v=iP63fDXk-W8"
  document.onclick = function (e) {
    if (e.target.id !== "nav" && e.target.id !== "nav-icon") {
      nav.classList.remove("nav-active");
      navIcon.classList.remove("displayInitial");
      overly.classList.remove("overly-active");
    }
    e.stopPropagation();
  };
});

// Active highlight nav links on cliking
navLinks.forEach((a) => {
  a.addEventListener("click", (e) => {
    navLinks.forEach((e) => {
      e.classList.remove("active-li-a");
    });
    a.classList.add("active-li-a");
  });
});

/* ----------up Scroll */

let up = document.getElementById("up");

let logo = document.querySelector("[data-value=logo]");

window.onload = () => {
  logo.style.cssText = "top: 20px;";
};

up.onclick = () => {
  scroll({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
  // Inactive the hightlight colors from nav links onclicking on up icon
  navLis.forEach((e) => {
    e.classList.remove("active-li");
  });
  navLinks.forEach((e) => {
    e.classList.remove("active-li-a");
  });
};

window.onscroll = (e) => {
  //logo
  if (scrollY > 200) {
    logo.style.cssText = "opacity: 0; top: -20rem ;";
  } else {
    logo.style.cssText = "opacity: 1; top: 20px";
  }
  //up
  if (scrollY > 700) {
    up.style.cssText = "opacity: 1; z-index: 1;";
  } else {
    up.style.cssText = "opacity: 0; z-index: -1;";
  }
};

/* ----------logo Scroll */

//
//
//
/* -----------Add The Name Of The Project To The Container Title */
/* 
let work = document.querySelectorAll(".works .work");
let workImage = document.querySelectorAll(".works .work img");
let workImageName = document.querySelectorAll(".works .work a");
console.log(work);

for (let i = 0; i < work.length; i++) {
  work[i].title = work[i].innerText;
  workImage[i].alt = workImageName[i].innerText;
  workImageName[i].title = workImageName[i].innerText;
} 
*/

let theme = document.querySelector("[data-theme = theme]");
console.log(theme);
let svgs = document.querySelectorAll("svg");
let body = document.querySelector("body");
let mainColor = document.querySelectorAll(".main-color");
console.log(mainColor);

/* ------------------------------------------------------------- */

/* --Start Page Scroll Progress */
let el = document.querySelector(".scroller");
let height =
  document.documentElement.scrollHeight - document.documentElement.clientHeight;

console.log(document.documentElement.scrollHeight);
console.log(document.documentElement.clientHeight);
console.log(height);

window.addEventListener("scroll", () => {
  const scrollTop = document.documentElement.scrollTop;
  el.style.width = `${(scrollTop / height) * 100}%`;
});
/* --End Page Scroll Progress */
