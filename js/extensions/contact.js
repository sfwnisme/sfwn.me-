export default function contact() {
  /* --Contact------------------- */

  let contact = document.createElement("div");
  contact.className = "contact pd-b-2 flex j-c-c align-items-c";
  contact.id = "contact";

  let contactContainer = document.createElement("div");
  contactContainer.className =
    "container flex j-c-c align-items-c flex-d-r gap-1-rem";
  // contact.innerText = "hlkjlkjsalkdfjlknmlkmoaksdnfonlknmlkjmasdfi";

  //icons
  let fbSvg = `<a href="https://www.facebook.com/sfwnisme"  aria-label="visit facebook">
<svg
  xmlns="http://www.w3.org/2000/svg"
  class="icon icon-tabler icon-tabler-brand-facebook"
  width="40"
  height="40"
  viewBox="0 0 24 24"
  stroke-width="1"
  stroke="currentColor"
  fill="none"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
  <path
    d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3"
  ></path>
</svg>
</a>`;
  let emailSvg = `<a href="mailto:safwan@sfwn.me"  aria-label="contact email">
<svg
  xmlns="http://www.w3.org/2000/svg"
  class="icon icon-tabler icon-tabler-at"
  width="40"
  height="40"
  viewBox="0 0 24 24"
  stroke-width="1"
  stroke="currentColor"
  fill="none"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
  <circle cx="12" cy="12" r="4"></circle>
  <path
    d="M16 12v1.5a2.5 2.5 0 0 0 5 0v-1.5a9 9 0 1 0 -5.5 8.28"
  ></path>
</svg>
</a>`;
  let gitHubSvg = `<a href="https://www.github.com/sfwnisme"  aria-label="visit github">
<svg
  xmlns="http://www.w3.org/2000/svg"
  class="icon icon-tabler icon-tabler-brand-github"
  width="40"
  height="40"
  viewBox="0 0 24 24"
  stroke-width="1"
  stroke="currentColor"
  fill="none"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
  <path
    d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"
  ></path>
</svg>
</a>`;
  let instaSvg = `<a href="https://www.instagram.com/sfwnisme" aria-label="visit instagram">
<svg
  xmlns="http://www.w3.org/2000/svg"
  class="icon icon-tabler icon-tabler-brand-instagram"
  width="40"
  height="40"
  viewBox="0 0 24 24"
  stroke-width="1"
  stroke="currentColor"
  fill="none"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
  <rect x="4" y="4" width="16" height="16" rx="4"></rect>
  <circle cx="12" cy="12" r="3"></circle>
  <line x1="16.5" y1="7.5" x2="16.5" y2="7.501"></line>
</svg>
</a>`;
  let codepenSvg = `<a href="https://codepen.io/sfwnisme" aria-label="visit codepen">
<svg
  xmlns="http://www.w3.org/2000/svg"
  class="icon icon-tabler icon-tabler-brand-codepen"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  stroke-width="1"
  stroke="currentColor"
  fill="none"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
  <path d="M3 15l9 6l9 -6l-9 -6l-9 6"></path>
  <path d="M3 9l9 6l9 -6l-9 -6l-9 6"></path>
  <line x1="3" y1="9" x2="3" y2="15"></line>
  <line x1="21" y1="9" x2="21" y2="15"></line>
  <line x1="12" y1="3" x2="12" y2="9"></line>
  <line x1="12" y1="15" x2="12" y2="21"></line>
</svg>
</a>`;
  let contactArr = [fbSvg, instaSvg, gitHubSvg, codepenSvg, emailSvg];

  for (let i = 0; i < contactArr.length; i++) {
    let contactLink = document.createElement("div");
    contactLink.innerHTML = contactArr[i];
    contactContainer.append(contactLink);
  }

  //
  contact.append(contactContainer);
  document.body.appendChild(contact);
}
