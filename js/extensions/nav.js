export default function navigation() {
  let nav = document.getElementById("nav");
  let overlay = document.getElementById("overlay");
  let navIcon = document.getElementById("nav-icon");
  let navIconSvg = document.querySelector(".nav-icon svg");

  let navUl = document.querySelector("nav ul");
  let navList = document.querySelectorAll("nav ul li");

  navIcon.addEventListener("click", (e) => {
    // document.documentElement.style.overflowY = "hidden";
    document.documentElement.classList.toggle("prevent-scroll");
    nav.classList.toggle("nav-active");
    navUl.classList.toggle("ul-active");
    overlay.classList.toggle("overlay-active");
    navIconSvg.classList.toggle("nav-icon-active");
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
        });
      li.target.classList.add("active");
    });
  });

  document.addEventListener("click", (e) => {
    if (e.target) {
      // document.documentElement.style.overflowY = "auto";
      document.documentElement.classList.remove("prevent-scroll");
      nav.classList.remove("nav-active");
      navIconSvg.classList.remove("nav-icon-active");
      navUl.classList.remove("ul-active");
      overlay.classList.remove("overlay-active");
      navList.forEach((list) => {
        list.classList.remove("list-active");
      });
    }
  });
}
