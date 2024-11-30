export default function popupDevice() {
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
    popupDom();
  }, 1000);

  function popupDom() {
    let popupParent = document.createElement("div");
    popupParent.className = "popup-parent";
    popupParent.classList.add("clickable");

    let popupBox = document.createElement("div");
    popupBox.className = "popup-box";

    let popupMsg = document.createElement("p");
    popupMsg.className = "popup-msg";
    popupMsg.innerHTML = `Welcome to my beta version for ${a}`;

    let alertIcon = document.createElement("div");
    alertIcon.className = "alert-icon";
    alertIcon.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-versions" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <rect x="10" y="5" width="10" height="14" rx="2"></rect>
        <line x1="7" y1="7" x2="7" y2="17"></line>
        <line x1="4" y1="8" x2="4" y2="16"></line>
      </svg>`;
    // alertIcon.innerText = "attention";
    let x = document.createElement("button");
    x.setAttribute("title", "Close alert");

    let xIcon = `
      <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-x" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
      </svg>
`;
    x.className = "x btn-color";
    // x.classList.add("btn-color");
    x.innerHTML = xIcon;
    x.addEventListener("click", () => {
      popupParent.style.display = "none";
      localStorage.setItem("popup", "none");
    });
    // ===|ATTENTION  this event for prevent any nested clickable element
    popupBox.addEventListener("click", (e) => {
      e.stopPropagation();
    });
    popupParent.addEventListener("click", (e) => {
      e.target.remove();
      localStorage.setItem("popup", "none");
    });

    // appending
    popupBox.append(alertIcon);
    popupBox.append(popupMsg);
    popupBox.append(x);
    popupParent.append(popupBox);

    document.body.append(popupParent);

    //===| if the alert popup appeard and you closed it
    // your localStorage will save the property that remove
    // the popup
    if (localStorage.popup) {
      popupParent.style.display = localStorage.popup;
    }
  }
}
