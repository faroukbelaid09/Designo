const humbergerBtn = document.querySelector(".top--header__humberger--menu");
const humbergerMenuItems = document.querySelectorAll(
  ".top--header__humberger--menu__item"
);
const navBar = document.querySelector(".top--navbar");
const backdrop = document.querySelector(".backdrop");

humbergerBtn.addEventListener("click", () => {
  humbergerMenuItems[1].classList.toggle("close");

  humbergerMenuItems[0].classList.toggle("rotate--down");
  humbergerMenuItems[2].classList.toggle("rotate--up");

  navBar.classList.toggle("open");
});
