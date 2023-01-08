export default function preloader() {
  let time= 1500;
  let preloaderElement = document.querySelector(".preloader");
  document.documentElement.style.setProperty("--preloader-time", `${time}ms`);
  console.log(performance.now());
  if (performance.now() < 1000) {
    time = 5000;
    console.log(time);
  } else {
    time = performance.now();
    console.log(time);
  }
  setInterval(loader(), time);

  function loader() {
    console.log("Preloader is working");
    preloaderElement.classList.add("inactive");
  }
}
