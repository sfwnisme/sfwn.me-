import cursorFun from "./extensions/cursor2.js";
import detectDevice from "./extensions/detectDevice.js";
import emailFunction from "./extensions/email.js";
import footer from "./extensions/footer.js";
import github from "./extensions/github.js";
import logo from "./extensions/logo.js";
import navigation from "./extensions/nav.js";
import preloader from "./extensions/preloader.js";
import services from "./extensions/services.js";
import skills from "./extensions/skills.js";
// import contact from "./extensions/contact.js";
// import theme from "./extensions/theme.js";
// import lang from "./extensions/lang.js";

const allAnchors = document.querySelectorAll("a");
const cursor = document.querySelector(".cursor");
const scrollerEle = document.querySelector(".scroller");
const pageHeight =
  document.documentElement.scrollHeight - document.documentElement.clientHeight;

skills();
logo();
github();
footer();
services();
cursorFun();
detectDevice();
preloader();
navigation();
emailFunction();
AOS.init();

window.addEventListener("scroll", () => {
  const scrollTop = document.documentElement.scrollTop;
  scrollerEle.style.width = `${(scrollTop / pageHeight) * 100}%`;
});

allAnchors.forEach((a) => {
  a.addEventListener("click", () => {
    cursor.classList.add("active");
  });
});

/* -----------Add The Name Of The Project To The Container Title */
/* 
let work = document.querySelectorAll(".works .work");
let workImage = document.querySelectorAll(".works .work img");
let workImageName = document.querySelectorAll(".works .work a");

for (let i = 0; i < work.length; i++) {
  work[i].title = work[i].innerText;
  workImage[i].alt = workImageName[i].innerText;
  workImageName[i].title = workImageName[i].innerText;
} 
*/
