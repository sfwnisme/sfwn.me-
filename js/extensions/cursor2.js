export default function cursor2() {
  const allClickableElements = document.querySelectorAll(
    ":where(button, a, svg, input)"
  );
  const [cursorOne, cursorTwo, cursorBox] = getCursorElements();

  document.addEventListener("mousemove", (event) =>
    handleCursorMove(event, cursorBox)
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

function handleCursorMove(event, cursorBox) {
  const xPosition = `${event.clientX}px`;
  const yPosition = `${event.clientY}px`;
  cursorBox.style.transform = `translate(${xPosition}, ${yPosition})`;
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
