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

## Issues

**External Css Files**
I Used More Than 3 Css Files That Effected Badly On Lighthous Rates

```Html
  <!-- Font Awesome -->
  <link rel="stylesheet" href="css/all.min.css">
  <!-- Css Files -->
  <link rel="stylesheet" href="css/style.css" />
  <link rel="stylesheet" href="css/rest.css" />
  <link rel="stylesheet" href="css/components.css" />
  <link rel="stylesheet" href="css/framework.css" />
  <link rel="stylesheet" href="css/keyframes.css">
```

And I Gathered Them In Three Files `style.css` And `frameworks.css`

```Html
  <!-- Font Awesome -->
  <link rel="stylesheet" href="css/all.min.css" />
  <!-- Css Files -->
  <link rel="stylesheet" href="css/style.css" />
  <link rel="stylesheet" href="css/framework.css" />
  <!-- Browser Icon -->
```

Even Thu Fontawesome `all.min.css` File Still Eating 1350ms Of Loading Performance

**@font-face Property**

I Used Google Fonts Library By Downloaded The Font For Localy Using, But It Take More Than 900ms Of Loading Performance

```Css

@font-face {
 font-family: "Montserrat";
 font-style: normal;
 font-weight: 100;
 src: url(Montserrat/static/Montserrat-Thin.ttf);
}
@font-face {
 font-family: "Montserrat";
 font-style: normal;
 font-weight: 200;
 src: url(Montserrat/static/Montserrat-ExtraLight.ttf);
}
@font-face {
 font-family: "Montserrat";
 font-style: normal;
 font-weight: 300;
 src: url(Montserrat/static/Montserrat-Light.ttf);
}
@font-face {
 font-family: "Montserrat";
 font-style: normal;
 font-weight: 400;
 src: url(Montserrat/static/Montserrat-Regular.ttf);
}
@font-face {
 font-family: "Montserrat";
 font-style: normal;
 font-weight: 500;
 src: url(Montserrat/static/Montserrat-Medium.ttf);
}
@font-face {
 font-family: "Montserrat";
 font-style: normal;
 font-weight: 600;
 src: url(Montserrat/static/Montserrat-SemiBold.ttf);
}
@font-face {
 font-family: "Montserrat";
 font-style: normal;
 font-weight: 700;
 src: url(Montserrat/static/Montserrat-Bold.ttf);
}
@font-face {
 font-family: "Montserrat";
 font-style: normal;
 font-weight: 800;
 src: url(Montserrat/static/Montserrat-ExtraBold.ttf);
}
@font-face {
 font-family: "Montserrat";
 font-style: normal;
 font-weight: 900;
 src: url(Montserrat/static/Montserrat-Black.ttf);
}

```

That Got Me Using Link Instead Of Local Fonts

```Html

<!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
      rel="stylesheet"
    />

```

...Still **_Diggin_** For Bugs🤦‍♂️
