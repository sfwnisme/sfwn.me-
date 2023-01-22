export default function emailFunction() {
  let submit = document.querySelector("[type=submit]");
  console.log(submit);
  submit.addEventListener("click", (e) => e.preventDefault());
}
