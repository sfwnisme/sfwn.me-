export default function navigation() {
  let nav = document.getElementById("nav");
  let overlay = document.getElementById("overlay");
  let navIcon = document.getElementById("nav-icon");
  let navIconSvg = document.querySelector(".nav-icon svg");
  let navIconOne = document.querySelector(".nav-icon svg .one");
  let navIconTwo = document.querySelector(".nav-icon svg .two");
  console.log(navIconOne.getAttribute("y1"));

  let navUl = document.querySelector("nav ul");
  let navList = document.querySelectorAll("nav ul li");
  let navLinks = document.querySelectorAll("nav ul li a");
  let logo = document.querySelector("[data-value=logo]");
  console.log(logo);

  navIcon.addEventListener("click", (e) => {
    nav.classList.toggle("nav-active");
    navUl.classList.toggle("ul-active");
    overlay.classList.toggle("overlay-active");
    navIconSvg.classList.toggle("nav-icon-active");
    logo.classList.toggle("logo-invert");
    navList.forEach((list) => {
      list.classList.toggle("list-active");
    });
    e.stopPropagation();
  });
  navList.forEach((list) => {
    list.addEventListener("click", (li) => {
      li.target.parentElement.parentElement
        .querySelectorAll(".active")
        .forEach((e) => {
          e.classList.remove("active");
          console.log(e);
        });
      li.target.classList.add("active");
    });
  });

  document.addEventListener("click", (e) => {
    if (e.target.className !== "nav-icon") {
      logo.classList.remove("logo-invert");
      nav.classList.remove("nav-active");
      navIconSvg.classList.remove("nav-icon-active");
      navUl.classList.remove("ul-active");
      overlay.classList.remove("overlay-active");
      navList.forEach((list) => {
        list.classList.remove("list-active");
      });
    }
  });

  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  // navIcon.addEventListener("click", function (e) {
  //   nav.classList.toggle("nav-active");
  //   this.classList.toggle("displayInitial");
  //   overlay.classList.toggle("overlay-active");
  //   e.stopPropagation();

  //   // Remove The Navigation Bar If Click On overlay Or Links
  //   // This Solution Source Is => "https://www.youtube.com/watch?v=iP63fDXk-W8"
  //   document.onclick = function (e) {
  //     if (e.target.id !== "nav" && e.target.id !== "nav-icon") {
  //       nav.classList.remove("nav-active");
  //       navIcon.classList.remove("displayInitial");
  //       overlay.classList.remove("overlay-active");
  //     }
  //     e.stopPropagation();
  //   };
  // });

  // // Active highlight nav links on cliking
  // navLinks.forEach((a) => {
  //   a.addEventListener("click", (e) => {
  //     navLinks.forEach((e) => {
  //       e.classList.remove("active-li-a");
  //     });
  //     a.classList.add("active-li-a");
  //   });
  // });
}
