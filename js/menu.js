const menuBtn = document.querySelector(`.n3v`);
const mobileMenu = document.querySelector(`.mobile-menu`);
const mobileItems = document.querySelectorAll(`.mobile-items`);
const cocktails = document.querySelector(`.cocktails`);

let showMenu = false;

menuBtn.addEventListener(`click`, toggleMenu);
cocktails.addEventListener(`click`, toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add(`close`);
    mobileMenu.classList.add(`show`);
    mobileItems.forEach((item) => item.classList.add(`show`));

    showMenu = true;
  } else {
    menuBtn.classList.remove(`close`);
    mobileMenu.classList.remove(`show`);
    mobileItems.forEach((item) => item.classList.remove(`show`));

    showMenu = false;
  }
}
