export default function lang() {
  if (localStorage.arabic) {
    document.documentElement.setAttribute("lang", localStorage.arabic);
  }

  let ar = {
    name: "صفوان محمد",
    title: "مطور واجهات",
    description:
      "نفذ مشروعك ببناء خاص، بافضل الطرق الممكنة لأداء عالي ومرن لموقعك الخاص. اجذب عملاءك من اول مرة",
  };
  let en = {
    name: "SAFWAN MOHAMED",
    title: "FRONT-END DEVELOPER",
    description:
      "Excutes Pure Code Structure, Best Practice Ways Results Ultimate Possible Performance With Flexibility For Your Web Application Interface, And Attract Your Client By The First Blush",
  };
  // variables

  let name = document.querySelector("[data-lang= name]");
  let title = document.querySelector("[data-lang= title]");
  let description = document.querySelector("[data-lang= description]");
  //--------------

  let langBtn = document.querySelector(".lang-btn");
  langBtn.addEventListener("click", switchLang);

  function switchLang() {
    if (document.documentElement.getAttribute("lang") == "en") {
      document.documentElement.setAttribute("lang", "ar");

      name.textContent = ar.name;
      title.textContent = ar.title;
      description.textContent = ar.description;
      document.documentElement.style.direction = "rtl";
      localStorage.setItem("arabic", "ar");
    } else {
      document.documentElement.setAttribute("lang", "en");

      name.textContent = en.name;
      title.textContent = en.title;
      description.textContent = en.description;
      document.documentElement.style.direction = "ltr";
      localStorage.setItem("english", "en");
    }
  }
  // change -------------------------
}
