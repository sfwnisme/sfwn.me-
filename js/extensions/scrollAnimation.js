export default function scrollAnimation() {
  let ele = document.querySelectorAll("[data-anim = up]");
  animation();

  // window.addEventListener("scroll", () => {
  //   ele.forEach((e) => {
  //     if (
  //       window.pageYOffset >=
  //       e.offsetHeight + e.offsetTop - window.innerHeight * 1.2
  //     ) {
  //       e.style.cssText = `transform: translateY(0); opacity: 1;`;
  //     } else {
  //       e.style.cssText = `transform: translateY(100px); opacity: 0;`;
  //     }
  //   });
  // });
}

function animation() {
  window.addEventListener("scroll", () => {
    ele.forEach((e) => {
      if (
        window.pageYOffset >=
          e.offsetHeight + e.offsetTop - window.innerHeight * 1.2 &&
        window.pageYOffset <
          e.offsetHeight + e.offsetTop + window.innerHeight * 0.1
      ) {
        e.style.cssText = `transform: translateY(0); opacity: 1;`;
        // e.classList.add("unabel-anim-up");
      } else {
        e.style.cssText = `transform: translateY(100px); opacity: 0;`;
        // e.classList.add("disabel-anim-up");
      }
    });
  });
}
function animation02() {
  window.addEventListener("scroll", () => {
    ele.forEach((e) => {
      if (
        window.pageYOffset >=
        e.offsetHeight + e.offsetTop - window.innerHeight * 1.2
      ) {
        // e.style.cssText = `transform: translateY(0); opacity: 1;`;
        e.classList.add("unable-anim-up");
        e.classList.remove("disable-anim-up");
      } else {
        // e.style.cssText = `transform: translateY(100px); opacity: 0;`;
        e.classList.add("disable-anim-up");
        e.classList.remove("unable-anim-up");
      }
    });
  });
}