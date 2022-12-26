export default function services() {
  /* Start Services Slide */

  // local reviews data
  const reviews = [
    {
      id: 1,
      name: "Pure Code",
      text: "A single tiny issue effects sorely on your client's experience. Web project must be flexible with google terms to break the best performance. We working on pure codeing and avoide using libraries only on nesseccery situations.",
    },
    {
      id: 2,
      name: "Fixing Css Bugs",
      text: "No one can avoiding bugs due to it's flexibility of changing, Usually appears while the project is working , it needs testing and updating the project periodically.",
    },
    {
      id: 3,
      name: "Commercial Landing Page",
      text: "Some products or services you offer must have their own landing page to make it well known for clients through having free space to present them on the whole single page, even though they show the client how much your service is trustable and worth to try.",
    },
    {
      id: 4,
      name: "Flexible Structure",
      text: "Programming languages updates constantly and stop supporting some codes and methods for improve the development environment. Thus you should test and update your web project yearly at least",
    },
    {
      id: 5,
      name: "Salla Platform",
      text: "I provied Salla css and javascript services. Those services able you to edit and style your Salla web interface and control the whole shape as you like",
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

  /* End Services Slide */
}
