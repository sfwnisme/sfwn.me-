let navIcon = document.getElementById("nav-icon");
let nav = document.getElementById("nav");
let iconSpanOne = document.querySelector("#span-one");
let iconSpanTwo = document.querySelector("#span-two");
let overly = document.getElementById("overly");

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

/* START setTimeout For Attrct Client Of Navigation Bar */
/* 
setTimeout(
  (nav.onloadeddata = function () {
    nav.classList.add("nav-active");
    navIcon.classList.add("displayInitial");
    overly.classList.add("overly-active");

    document.onclick = function (e) {
      if (e.target.id !== "nav" && e.target.id !== "nav-icon") {
        nav.classList.remove("nav-active");
        navIcon.classList.remove("displayInitial");
        overly.classList.remove("overly-active");
      }
      e.stopPropagation();
    };
  }),
  1000
);
 */
/* END setTimeout For Attrct Client Of Navigation Bar */

/* ----------up Scroll */

let up = document.getElementById("up");

up.onclick = () => {
  scroll({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
};

window.onscroll = (e) => {
  if (scrollY > 700) {
    up.style.cssText = "opacity: 1; z-index: 1;";
  } else {
    up.style.cssText = "opacity: 0; z-index: -1;";
  }
};

//
//
//
/* -----------Add The Name Of The Project To The Container Title */
let work = document.querySelectorAll(".works .work");
let workImage = document.querySelectorAll(".works .work img");
let workImageName = document.querySelectorAll(".works .work a");
console.log(work);

for (let i = 0; i < work.length; i++) {
  work[i].title = work[i].innerText;
  workImage[i].alt = workImageName[i].innerText;
  workImageName[i].title = workImageName[i].innerText;
}

/* --footer------------------- */

let footer = document.createElement("footer");
footer.className = "bg-ltest";
let footerContainer = document.createElement("div");
footerContainer.className = "container";

let footerContent = document.createElement("h6");
footerContent.className = "flex j-c-c align-items-c gap-05-rem";
footerContent.innerText = "Elaborated By";

let footerLink = document.createElement("a");
footerLink.href = "https://github.com/sfwnisme";
footerLink.innerText = "Sfwn";
footerContent.append(footerLink);

let footerBox = document.createElement("div");
footerBox.className = "box flex j-c-c align-items-c";
footerBox.append(footerContent);

footerContainer.appendChild(footerBox);
footer.append(footerContainer);
document.body.append(footer);
