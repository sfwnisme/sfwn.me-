console.log("#".repeat(34));
let docWidth = Math.max(document.body.offsetWidth);
console.log(docWidth);
let ser = document.querySelectorAll("[data-up=up]");
console.log(ser);

window.onscroll = function () {
  ser.forEach((e) => {
    if (window.scrollY >= e.offsetTop - e.offsetHeight * 0.7) {
      e.classList.add("show");
    } else {
      e.classList.add("hide");
    }
  });
};
