export default function cursorFunction() {
  const cursor = document.querySelector(".cursor");
  document.addEventListener("mousemove", (event) => {
    let x = event.clientX;
    let y = event.clientY;

    cursor.style.left = `${x}px`;
    cursor.style.top = `${y}px`;

    
  });
}
