export default function lang() {
  let langBtn = document.querySelector(".lang-btn");
  langBtn.addEventListener("click", (e) => {
    if (document.documentElement.getAttribute("lang") == "en") {
      document.documentElement.setAttribute("lang", "ar");
      console.log("هذه لغة عربية");
    } else {
      console.log("this is english language");
      document.documentElement.setAttribute("lang", "en");
    }
    function langFile(api) {
      fetch(api)
        .then((res) => {
          let data = res.json();
          console.log(data);
          return data;
        })
        .then((data) => {
          console.log(data);
          let span = document.querySelector("main span");
          let h1 = document.querySelector("main h1");
          let p = document.querySelector("main p");
          // document.documentElement.style.direction = "rtl";
          if (document.documentElement.getAttribute("lang") == "ar") {
            p.innerHTML = data.title;
          }
        });
      // console.log(data);
    }
    langFile("/js/extensions/lang.json");
  });

  // console.log(document.documentElement.getAttribute("lang"));
  // if (document.documentElement.getAttribute("lang") == "ar") {
  //   console.log("هذه لغة عربية");
  // } else {
  //   console.log("this is english language");
  // }
}
