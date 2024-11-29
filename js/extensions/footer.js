export default function footer() {
  const footer = document.createElement("footer");
  const footerContainer = document.createElement("div");
  footerContainer.className = "container";

  const footerContent = document.createElement("p");
  const date = new Date();
  footerContent.className = "flex j-c-c align-items-c gap-05-rem";
  footerContent.innerHTML = `&copy;${date.getFullYear()} Deployed By`;
  const footerLink = document.createElement("a");
  footerLink.href = "https://github.com/sfwnisme";
  footerLink.innerHTML = "_sfwn";
  footerContent.append(footerLink);

  const footerBox = document.createElement("div");
  footerBox.className = "box flex j-c-c align-items-c";
  footerBox.append(footerContent);

  footerContainer.appendChild(footerBox);
  footer.append(footerContainer);
  document.body.append(footer);
}
