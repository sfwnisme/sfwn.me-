export default function cursorFunction() {
  const cursor = document.querySelector(".cursor");
  document.addEventListener("mousemove", (event) => {
    let x = event.clientX;
    let y = event.clientY;

    cursor.style.left = `${x}px`;
    cursor.style.top = `${y}px`;
  });
  let allLinks = document.documentElement.querySelectorAll("a");
  let allBtns = document.documentElement.querySelectorAll("button");
  console.log(allLinks)
  let big;
  allLinks.forEach((link) => {

    link.addEventListener("mouseover", (e) => {
      cursor.classList.add("cursor-pointer")
      // console.log(e)
    })

    link.addEventListener("mouseout", (e) => {
      cursor.classList.remove("cursor-pointer")
      // console.log(e)
    })
    
  })

  allBtns.forEach((btn) => {

    btn.addEventListener("mouseover", (e) => {
      cursor.classList.add("cursor-pointer")
      // console.log(e)
    })

    btn.addEventListener("mouseout", (e) => {
      cursor.classList.remove("cursor-pointer")
      // console.log(e)
    })
    
  })
}
