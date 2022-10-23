
// Get the theme toggle input
const themeToggle = document.querySelector(
  '.theme-switch input[type="checkbox"]'
);
// Function that will switch the theme based on the if the theme toggle is checked or not

function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
  }
} // Add an event listener to the theme toggle, which will switch the theme
themeToggle.addEventListener("change", switchTheme, false);

function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");

    // Set the user's theme preference to dark
    localStorage.setItem("theme", "dark");
  } else {
    document.documentElement.setAttribute("data-theme", "light");

    // Set the user's theme preference to light
    localStorage.setItem("theme", "light");
  }
}

// Get the current theme from local storage
const currentTheme = localStorage.getItem("theme"); // If the current local storage item can be found
if (currentTheme) {
  // Set the body data-theme attribute to match the local storage item
  document.documentElement.setAttribute("data-theme", currentTheme); // If the current theme is dark, check the theme toggle
  if (currentTheme === "dark") {
    themeToggle.checked = true;
  }
}
