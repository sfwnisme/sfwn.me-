export default function detectDevice() {
  var a;
  if (
    navigator.userAgent.match(/Android/i) ||
    navigator.userAgent.match(/webOS/i) ||
    navigator.userAgent.match(/iPhone/i) ||
    navigator.userAgent.match(/iPad/i) ||
    navigator.userAgent.match(/iPod/i) ||
    navigator.userAgent.match(/BlackBerry/i) ||
    navigator.userAgent.match(/Windows Phone/i)
  ) {
    a = "mobile";
  } else {
    a = "desktop";
  }
  setTimeout(() => {
    detectDom();
  }, 10000);

  function detectDom() {
    let detectParent = document.createElement("div");
    detectParent.className = "detect-parent";

    let detectOverlay = document.createElement("div");
    detectOverlay.className = "detect-overlay";

    let detectMsg = document.createElement("p");
    detectMsg.className = "detect-msg";
    detectMsg.innerHTML = `[test] You'r using ${a}`;

    let alertIcon = document.createElement("div");
    alertIcon.className = "alert-icon";
    alertIcon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-alert-triangle" width="40" height="40" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
    <path d="M12 9v2m0 4v.01"></path>
    <path d="M5 19h14a2 2 0 0 0 1.84 -2.75l-7.1 -12.25a2 2 0 0 0 -3.5 0l-7.1 12.25a2 2 0 0 0 1.75 2.75"></path>
</svg>`;

    let x = document.createElement("div");
    let xIcon = `
<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-x" width="40" height="40" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
<line x1="18" y1="6" x2="6" y2="18"></line>
<line x1="6" y1="6" x2="18" y2="18"></line>
</svg>
`;
    x.className = "x";
    x.innerHTML = xIcon;
    x.addEventListener("click", (e) => {
      detectParent.style.display = "none";
      localStorage.setItem("popup", "none");
    });

    document.addEventListener("click", (e) => {
      if (
        !e.target.classList.contains("detect-overlay") &&
        !e.target.classList.contains("detect-msg")
      ) {
        detectParent.remove();
      localStorage.setItem("popup", "none");
      }
    });

    // appending

    detectOverlay.append(alertIcon);
    detectOverlay.append(detectMsg);
    detectOverlay.append(x);
    detectParent.append(detectOverlay);

    document.body.append(detectParent);

    //===| if the alert popup appeard and you closed it
    // your localStorage will save the property that remove
    // the popup
    if (localStorage.popup) {
      detectParent.style.display = localStorage.popup;
    }
  }
}
