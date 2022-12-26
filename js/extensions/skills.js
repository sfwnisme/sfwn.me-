export default function skills() {
  let skills = document.querySelectorAll(".skills .skill").length;
  let done = document.querySelectorAll(".skills .skill.done").length;
  let calc = `${((100 / skills) * done).toFixed(2)}%`;
  console.log(calc);

  let skillProgress = document.querySelector(".skills-progress");
  console.log(skillProgress);
  skillProgress.innerHTML = calc;
}
