const closeBtn = document.querySelector('.header__close');
const openBtn = document.querySelector('.header__open');
const menu = document.querySelector('.header__nav');

openBtn.addEventListener('click', (e) => {
  console.log('opem')
  menu.classList.add('header__nav--active');
  openBtn.classList.remove('header__open--active');
  closeBtn.classList.add('header__close--active');
  document.body.classList.add('body--menu-opened')
});

closeBtn.addEventListener('click', () => {
  console.log('close')
  menu.classList.remove('header__nav--active');
  openBtn.classList.add('header__open--active');
  closeBtn.classList.remove('header__close--active');
  document.body.classList.remove('body--menu-opened');
});