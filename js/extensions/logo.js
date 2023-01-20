export default function logo() {
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
    navList.forEach((e) => {
      e.classList.remove("active-li");
    });
    navLinks.forEach((e) => {
      e.classList.remove("active-li-a");
    });
  };

  window.addEventListener("scroll", () => {
    //logo
    if (scrollY > 200) {
      logo.style.cssText = "opacity: 0; top: -20rem;";
    } else {
      logo.style.cssText = "opacity: 1; top: 20px;";
    }
    //up
    if (scrollY > 700) {
      up.style.cssText = "opacity: 1; z-index: 1;";
    } else {
      up.style.cssText = "opacity: 0; z-index: -1;";
    }
  });
}
