export default function preloader() {
  let time = 1000;
  let preloaderElement = document.querySelector(".preloader");
  document.documentElement.style.setProperty("--preloader-time", `${time}ms`);
  console.log(performance.now());
  setTimeout(loader(), time);

  function loader() {
    console.log("Preloader is working");
    preloaderElement.classList.add("inactive");
  }
}
