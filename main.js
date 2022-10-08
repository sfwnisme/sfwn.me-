let navIcon = document.getElementById("nav-icon");
let nav = document.getElementById("nav");
let iconSpanOne = document.querySelector("#span-one");
let iconSpanTwo = document.querySelector("#span-two");
let overly = document.getElementById("overly");

navIcon.addEventListener("click", function (e) {
  nav.classList.toggle("nav-active");
  this.classList.toggle("displayInitial");
  overly.classList.toggle("overly-active");
  e.stopPropagation();

  // Remove The Navigation Bar If Click On Overly Or Links
  // This Solution Source Is => "https://www.youtube.com/watch?v=iP63fDXk-W8"
  document.onclick = function (e) {
    if (e.target.id !== "nav" && e.target.id !== "nav-icon") {
      nav.classList.remove("nav-active");
      navIcon.classList.remove("displayInitial");
      overly.classList.remove("overly-active");
    }
    e.stopPropagation();
  };
});

/* ----------up Scroll */

let up = document.getElementById("up");

let logo = document.querySelector("[data-value=logo]");

up.onclick = () => {
  scroll({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
};

window.onscroll = (e) => {
  //logo
  if (scrollY > 200) {
    logo.style.cssText = "opacity: 0; top: -20rem ;";
  } else {
    logo.style.cssText = "opacity: 1;";
  }
  //up
  if (scrollY > 700) {
    up.style.cssText = "opacity: 1; z-index: 1;";
  } else {
    up.style.cssText = "opacity: 0; z-index: -1;";
  }
};

/* ----------logo Scroll */

//
//
//
/* -----------Add The Name Of The Project To The Container Title */
/* 
let work = document.querySelectorAll(".works .work");
let workImage = document.querySelectorAll(".works .work img");
let workImageName = document.querySelectorAll(".works .work a");
console.log(work);

for (let i = 0; i < work.length; i++) {
  work[i].title = work[i].innerText;
  workImage[i].alt = workImageName[i].innerText;
  workImageName[i].title = workImageName[i].innerText;
} 
*/

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
let emailSvg = `<a href="https://www.facebook.com/sfwnisme"  aria-label="contact email">
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
let gitHubSvg = `<a href="https://www.facebook.com/sfwnisme"  aria-label="visit github">
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
let instaSvg = `<a href="https://www.facebook.com/sfwnisme" aria-label="visit instagram">
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
let codepenSvg = `<a href="https://www.facebook.com/sfwnisme" aria-label="visit codepen">
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

/* --footer------------------- */

let footer = document.createElement("footer");
footer.className = "bg-ltest";
let footerContainer = document.createElement("div");
footerContainer.className = "container";

let footerContent = document.createElement("p");
footerContent.className = "flex j-c-c align-items-c gap-05-rem";
footerContent.innerHTML = "&copy;2022 Elaborated By";

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

/* Start Services Slide */

// local reviews data
const reviews = [
  {
    id: 1,
    name: "Pure Code",
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "Fixing Css Bugs",
    text: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "Commercial Landing Page",
    text: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "Flexible Designs",
    text: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];
// select items

const ability = document.querySelector("[data = ability]");
const info = document.querySelector("[data = info]");

const prevBtn = document.querySelector("[data=prev-btn]");
const nextBtn = document.querySelector("[data=next-btn]");
console.log(nextBtn);

// set starting item
let currentItem = 0;

// load initial item
window.addEventListener("DOMContentLoaded", function () {
  const item = reviews[currentItem];
  ability.textContent = item.name;
  info.textContent = item.text;
});

// show person based on item
function showPerson(person) {
  const item = reviews[person];
  ability.textContent = item.name;
  info.textContent = item.text;
}
// show next person
nextBtn.addEventListener("click", function () {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson(currentItem);
});
// show prev person
prevBtn.addEventListener("click", function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson(currentItem);
});

/* Start Services Slide */
