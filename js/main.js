/* .........skills......... */
import skills from "./extensions/skills.js";
skills();

/* .........logo......... */
import logo from "./extensions/logo.js";
logo();

/* .........github......... */
import github from "./extensions/github.js";
github();

/* .........contact......... */
// import contact from "./extensions/contact.js";
// contact();

/* .........footer......... */
import footer from "./extensions/footer.js";
footer();

/* .........services......... */
import services from "./extensions/services.js";
services();

// /* .........services......... */
// import themee from "./extensions/theme.js";
// themee();

/* .........services......... */
import preloader from "./extensions/preloader.js";
preloader();

/* .........services......... */
import cursroFunction from "./extensions/cursor2.js";
cursroFunction();

/* .........services......... */
import detectDevice from "./extensions/detectDevice.js";
detectDevice();

/* .........services......... */
import navigation from "./extensions/nav.js";
navigation();

/* .........services......... */
import emailFunction from "./extensions/email.js";
emailFunction();

/* .........services......... */
// import lang from "./extensions/lang.js";
// lang();

/* .........AOS......... */
AOS.init();

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

let allA = document.querySelectorAll("a");
let allBtn = document.querySelectorAll("button");
let cursor = document.querySelector(".cursor");
allA.forEach((a) => {
  a.addEventListener("click", () => {
    cursor.classList.add("active");
    console.log("lllllllll");
  });
});
