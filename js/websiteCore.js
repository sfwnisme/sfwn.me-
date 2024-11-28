import cursorFun from "./extensions/cursor2.js";
import detectDevice from "./extensions/detectDevice.js";
import emailFunction from "./extensions/email.js";
import footer from "./extensions/footer.js";
import github from "./extensions/github.js";
import logo from "./extensions/logo.js";
import navigation from "./extensions/nav.js";
import preloader from "./extensions/preloader.js";
import services from "./extensions/services.js";
import skills from "./extensions/skills.js";
// import contact from "./extensions/contact.js";
// import theme from "./extensions/theme.js";
// import lang from "./extensions/lang.js";

export default (() => {
  skills();
  logo();
  github();
  footer();
  services();
  cursorFun();
  detectDevice();
  preloader();
  navigation();
  emailFunction();
  AOS.init();
})();
