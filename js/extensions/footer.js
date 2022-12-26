export default function footer() {
  /* --footer------------------- */

  let footer = document.createElement("footer");
  let footerContainer = document.createElement("div");
  footerContainer.className = "container";

  let footerContent = document.createElement("p");
  let date = new Date();
  console.log(date.getFullYear());
  footerContent.className = "flex j-c-c align-items-c gap-05-rem";
  footerContent.innerHTML = `&copy;${date.getFullYear()} Deployed By`;
  let footerLink = document.createElement("a");
  footerLink.href = "https://github.com/sfwnisme";
  footerLink.innerHTML = "SFWN";
  footerContent.append(footerLink);

  let footerBox = document.createElement("div");
  footerBox.className = "box flex j-c-c align-items-c";
  footerBox.append(footerContent);

  footerContainer.appendChild(footerBox);
  footer.append(footerContainer);
  document.body.append(footer);
}
