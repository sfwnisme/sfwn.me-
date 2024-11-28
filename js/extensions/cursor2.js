export default function cursor2() {
  const allClickableElements = document.querySelectorAll(
    ":where(button, a, svg, input)"
  );
  const [cursorOne, cursorTwo] = getCursorElements();

  document.addEventListener("mousemove", (event) =>
    handleCursorMove(event, cursorOne, cursorTwo)
  );

  handleCursorState(allClickableElements, cursorOne, cursorTwo);
}

function getCursorElements() {
  const cursorBox = document.createElement("div");
  const cursorOne = document.createElement("div");
  const cursorTwo = document.createElement("div");

  cursorBox.className = "cursor-box";
  cursorOne.className = "cursor-one";
  cursorTwo.className = "cursor-two";

  cursorBox.appendChild(cursorOne);
  cursorBox.appendChild(cursorTwo);
  document.body.append(cursorBox);

  return [cursorOne, cursorTwo, cursorBox];
}

function handleCursorMove(event, cursorOne, cursorTwo) {
  const x = event.clientX;
  const y = event.clientY;

  cursorOne.style.left = cursorTwo.style.left = `${x}px`;
  cursorOne.style.top = cursorTwo.style.top = `${y}px`;
}

function handleCursorState(elements, cursorOne, cursorTwo) {
  elements.forEach((ele) => {
    ele.addEventListener("mouseenter", () => {
      cursorOne.classList.add("active");
      cursorTwo.classList.add("disable");
    });
  });

  elements.forEach((ele) => {
    // you can also use 'mouseout'
    ele.addEventListener("mouseleave", () => {
      cursorOne.classList.remove("active");
      cursorTwo.classList.remove("disable");
    });
  });

  elements.forEach((ele) => {
    // you can also use 'mouseout'
    ele.addEventListener("click", () => {
      cursorOne.classList.add("clicked");
      setTimeout(() => cursorOne.classList.remove("clicked"), 50);
    });
  });
}
