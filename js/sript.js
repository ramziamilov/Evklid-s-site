let burger = document.querySelector(".burger");
let menu = document.querySelector(".header__nav");
let menuLink = document.querySelectorAll(".nav__link");
let searchBtn = document.querySelector(".header__btn__serch")

burger.addEventListener('click', () => {
  burger.classList.toggle('burger--active');
  menu.classList.toggle('header__nav--active');
  document.body.classList.toggle('stop-scroll');
});

menuLink.forEach(function(el) {
  el.addEventListener('click', () => {
    burger.classList.remove('burger--active');
    menu.classList.remove('header__nav--active');
    document.body.classList.remove('stop-scroll');
  });
});

searchBtn.addEventListener('click', () => {
  document.querySelector('.search').classList.toggle('search--active');
  searchBtn.classList.toggle('header__btn__serch--active');
});
