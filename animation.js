let boxes = document.querySelectorAll(`[data-up=up]`);
console.log(boxes);

window.addEventListener("scroll", check);
check();
function check() {
  let trigger = window.innerHeight;
  console.log(trigger);
  boxes.forEach((box) => {
    let boxTop = box.getBoundingClientRect().top;
    console.log(boxTop);
    if ( boxTop < trigger) {
      box.classList.add("show");
    } else {
      let wid = window.innerWidth;
      box.classList.remove("show");
    }
  });
}
