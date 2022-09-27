# sfwn.me

[Live Demo](https://sfwnisme.github.io/mysite/)

## Web App Structure

- **Intro**
- **Skills**
- **What I Can Do**
- **Wrok Space**
- **Blog** \_ new html
  - Articles
  - Study Sources
- **Footer** \_ in Js

## New To Me

- Remove The Navigation Bar If Click On Out Range Or Links
  [Solution Link](https://www.youtube.com/watch?v=iP63fDXk-W8)

```javascript
document.onclick = function (e) {
  if (e.target.id !== "nav" && e.target.id !== "nav-icon") {
    nav.classList.remove("nav-active");
    navIcon.classList.remove("displayInitial");
    overly.classList.remove("overly-active");
  }
  e.stopPropagation();
};
```
