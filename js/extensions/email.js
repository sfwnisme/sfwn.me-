export default function emailFunction() {
  let submit = document.querySelector("[type=submit]");
  submit.addEventListener("click", (e) => e.preventDefault());
}
