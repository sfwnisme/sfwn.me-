"use strict";

import "./websiteCore.js";

const allAnchors = document.querySelectorAll("a");
const cursor = document.querySelector(".cursor");
const scrollerEle = document.querySelector(".scroller");
const pageHeight =
  document.documentElement.scrollHeight - document.documentElement.clientHeight;

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
