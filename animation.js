console.log("#".repeat(34));
let docWidth = Math.max(document.body.offsetWidth);
console.log(docWidth);
let ser = document.querySelector("[data-up=up]");
console.log(ser);

window.onscroll = function () {
  if (window.scrollY >= ser.offsetTop - ser.offsetHeight * 0.5) {
    ser.classList.remove("hide");
    ser.classList.add("show");
  } else {
    ser.classList.remove("show");
    ser.classList.add("hide");
  }
};

function anim() {
  console.log("#".repeat(34));
  let docWidth = Math.max(document.body.offsetWidth);
  console.log(docWidth);
  let animation = document.querySelector(".work");
  console.log(ser);

  window.onscroll = function () {
    if (window.scrollY >= animation.offsetTop - animation.offsetHeight * 0.5) {
      animation.forEach((an) => {
        an.classList.remove("hide");
        an.classList.add("show");
      });
    } else {
      animation.forEach((an) => {
        an.classList.remove("show");
        an.classList.add("hide");
      });
    }
  };
}
anim();
