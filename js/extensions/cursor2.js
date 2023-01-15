export default function cursor2() {
  /* =====[CURSOR ELEMENTS]===== */
  // cursor box
  let cursorBox = document.createElement("div");
  cursorBox.className = "cursor-box";

  // cursor elements
  let cursorOne = document.createElement("div");
  cursorOne.className = "cursor-one";
  let cursorTwo = document.createElement("div");
  cursorTwo.className = "cursor-two";

  //append childs
  cursorBox.appendChild(cursorOne);
  cursorBox.appendChild(cursorTwo);
  // append
  document.body.append(cursorBox);
  /* =============================== */

  /* =====[CURSOR EVENTS]===== */
  function cursorBOM(first, second) {
    document.addEventListener("mousemove", (event) => {
      let x = event.clientX;
      let y = event.clientY;

      first.style.left = second.style.left = `${x}px`;
      first.style.top = second.style.top = `${y}px`;
    });
  }
  cursorBOM(cursorOne, cursorTwo);
  /* =============================== */

  /* =====[CURSOR AUTO FUNCTION]===== */
  let allbtns = document.querySelectorAll("button");
  let allLinks = document.querySelectorAll("a");
  let allSvgs = document.querySelectorAll("svg");

  addAndRemove(allbtns, cursorOne, cursorTwo);
  addAndRemove(allLinks, cursorOne, cursorTwo);
  addAndRemove(allSvgs, cursorOne, cursorTwo);

  function addAndRemove(element, one, two) {
    element.forEach((ele) => {
      ele.addEventListener("mouseenter", (e) => {
        one.classList.add("active");
        two.classList.add("disable");
      });
    });
    element.forEach((ele) => {
      // you can also use 'mouseout'
      ele.addEventListener("mouseleave", (e) => {
        one.classList.remove("active");
        two.classList.remove("disable");
      });
    });
    element.forEach((ele) => {
      // you can also use 'mouseout'
      ele.addEventListener("click", (e) => {
        one.classList.add("clicked");
        setTimeout(() => {
          one.classList.remove("clicked");
        }, 50);
      });
    });
  }
  /* =============================== */
}
