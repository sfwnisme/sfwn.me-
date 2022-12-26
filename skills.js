export default function skills() {
  let skills = document.querySelectorAll(".skills .skill").length;
  let done = document.querySelectorAll(".skills .skill.done").length;
  let stillWorkingOn = document.querySelectorAll(
    ".skills .skill.still-working-on"
  ).length;
  let donTillNow = done + stillWorkingOn;
  console.log(donTillNow);
  let calc = `${Math.floor((100 / skills) * donTillNow)}%`;
  console.log(calc);

  let skillProgress = document.querySelector(".skills-progress");
  console.log(skillProgress);
  skillProgress.innerHTML = calc;
}
