export default function logo() {
  /* ----------logo Scroll */
  let logo = document.querySelector("[data-value=logo]");

  let up = document.getElementById("up");

  // window.onload = () => {
  //   logo.style.cssText = "top: 20px;";
  // };

  window.onscroll = () => {
    //logo
    if (scrollY > 200) {
      logo.style.cssText = `
      bottom: 2vh;
      inline-size: 5rem;
      block-size: 5rem;
      `;
    } else {
      logo.style.cssText = `bottom: 82vh`;
    }
    //up
    if (scrollY > 700) {
      up.style.cssText = `opacity: 1; z-index: 1;`;
    } else {
      up.style.cssText = `opacity: 0; z-index: -1;`;
    }
  };
}
