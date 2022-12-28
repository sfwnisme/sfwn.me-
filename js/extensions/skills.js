/* ========== this window.onscroll override on other onscroll options => use addEventListener instead */

// export default function skills() {
//   let skills = document.querySelectorAll(".skills .skill").length;
//   let done = document.querySelectorAll(".skills .skill.done").length;
//   let calc = `${((100 / skills) * done).toFixed(2)}%`;
//   console.log(calc);

//   // add the skills progress with animation
//   let section = document.querySelector("section");
//   let prog = document.querySelector(".skills-progress");
//   let skillProgress = document.querySelector(".skills-progress");
//   window.onscroll = function () {
//     if (scrollY > section.offsetTop - 300) {
//       console.log(skillProgress);
//       skillProgress.innerHTML = calc;
//       prog.setAttribute("style", `width: ${calc}`);
//     } else {
//       skillProgress.innerHTML = 0;
//       prog.setAttribute("style", `width: ${0}`);
//     }
//   };
// }

export default function skills() {
  let skills = document.querySelectorAll(".skills .skill").length;
  let done = document.querySelectorAll(".skills .skill.done").length;
  let calc = `${((100 / skills) * done).toFixed(2)}%`;
  console.log(calc);

  // add the skills progress with animation
  let section = document.querySelector("section");
  let prog = document.querySelector(".skills-progress");
  let skillProgress = document.querySelector(".skills-progress");
  window.addEventListener("scroll", () => {
    if (scrollY > section.offsetTop - 300) {
      console.log(skillProgress);
      skillProgress.innerHTML = calc;
      prog.setAttribute("style", `width: ${calc}`);
    } else {
      skillProgress.innerHTML = 0;
      prog.setAttribute("style", `width: ${0}`);
    }
  });
}


