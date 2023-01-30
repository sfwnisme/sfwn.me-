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
          console.log(e);
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

  /* 
  ======| scroll to section function
  */
  let sectionName = document.querySelectorAll(".nav ul li a");
  smoothScroll(sectionName);
  function smoothScroll(element) {
    console.log(element);
    element.forEach((ele) => {
      ele.addEventListener("click", (e) => {
        e.preventDefault();
        let data = document.querySelector(e.target.dataset.nav);
        console.log(data);
        data.scrollIntoView({
          behaviour: "smooth",
        });
      });
    });
  }
}
