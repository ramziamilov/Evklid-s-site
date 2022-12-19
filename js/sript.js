let burger = document.querySelector(".burger");
let menu = document.querySelector(".header__nav");
let menuLink = document.querySelectorAll(".nav__link");
let searchBtn = document.querySelector(".header__btn__serch");
let closeBtn = document.querySelector(".close-search");
let findBtn = document.querySelector(".find-search");
let tabsLink = document.querySelectorAll(".work-link");
let tabsItem = document.querySelectorAll(".work-content-tabs");
let tabsImg = document.querySelectorAll(".work-before");

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
  closeBtn.classList.toggle('close-search--active');
  findBtn.classList.toggle('find-search--active');
});

closeBtn.addEventListener('click', ()=> {
  document.querySelector('.search').classList.remove('search--active');
  findBtn.classList.remove('find-search--active');
  closeBtn.classList.remove('close-search--active');
});

const swiper = new Swiper('.hero-swiper', {
  direction: 'horizontal',
  loop: true,
  pagination: {
    el: '.hero-pagination',
    clickable: true
  },
 });

 new Accordion('.questions-list', {
  elementClass: 'questions-item',
  triggerClass: 'item-top',
  panelClass: 'item-bottom',
  activeClass: 'questions-item--active'
});


tabsLink.forEach(function(el) {
  el.addEventListener('click', function(e) {
    const path = e.currentTarget.dataset.path;

    tabsLink.forEach(function(btn){btn.classList.remove('work-link--active')});
    e.currentTarget.classList.add('work-link--active');

    tabsItem.forEach(function(el){el.classList.remove('work-content-tabs--active')});
    document.querySelector(`[data-target="${path}"]`).classList.add('work-content-tabs--active');

    tabsImg.forEach(function(el){el.classList.remove('work-before--active')});
    document.querySelector(`[data-imgtarget="${path}"]`).classList.add('work-before--active');

  });
});
