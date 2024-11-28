export default function skills() {
  let skills = document.querySelectorAll(".skills .skill").length;
  let done = document.querySelectorAll(".skills .skill.done").length;
  let calc = `${((100 / skills) * done).toFixed(2)}%`;

  // add the skills progress with animation
  let section = document.querySelector("section");
  let prog = document.querySelector(".skills-progress");
  let skillProgress = document.querySelector(".skills-progress");
  window.addEventListener("scroll", () => {
    if (scrollY > section.offsetTop - 500) {
      // skillProgress.innerHTML = calc;
      skillProgress.innerHTML = calc;
      prog.setAttribute("style", `width: ${calc}`);
    } else {
      skillProgress.innerHTML = 0;
      prog.setAttribute("style", `width: ${0}`);
    }
  });
}
