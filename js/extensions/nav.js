export default function navigation() {
  let nav = document.getElementById("nav");
  let overlay = document.getElementById("overlay");
  let navIcon = document.getElementById("nav-icon");
  let navIconOne = document.querySelector(".nav-icon svg .one");
  let navIconTwo = document.querySelector(".nav-icon svg .two");
  console.log(navIconOne.getAttribute("y1"));

  let navList = document.querySelectorAll("nav ul li");
  let navLinks = document.querySelectorAll("nav ul li a");
  console.log(navList);

  navIcon.addEventListener("click", () => {
    overlay.classList.toggle("overlay-active");
    navIconOne.setAttribute("y1", 8);
    navList.forEach((list) => {
      list.classList.toggle("list-active");
    });
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
      li.currentTarget.parentElement
        .querySelectorAll(".list-active")
        .forEach((l) => {
          l.classList.remove("list-active");
          overlay.classList.toggle("overlay-active");
        });
    });
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
