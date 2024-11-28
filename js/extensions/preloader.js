export default function preloader() {
  let time = 1000;
  let preloaderElement = document.querySelector(".preloader");
  document.documentElement.style.setProperty("--preloader-time", `${time}ms`);
  setTimeout(loader(), time);

  function loader() {
    preloaderElement.classList.add("inactive");
  }
}
