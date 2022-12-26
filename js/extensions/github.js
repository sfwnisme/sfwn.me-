export default function github() {
  /* ====================[Github API]==================== */

  const github = document.querySelector(".github");
  const avatar = document.querySelector(".avatar img");
  const username = document.querySelector(".username");
  const repos = document.querySelector(".repos");

  fetch(`https://api.github.com/users/sfwnisme`)
    .then((res) => res.json())
    .then((data) => {
      avatar.src = data.avatar_url;
      username.innerText = data.login;
      username.href = data.html_url;
      username.setAttribute("target", "_blank");
      repos.innerText = `${data.public_repos} Repos`;
    });
}
