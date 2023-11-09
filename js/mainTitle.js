import { gsap } from "gsap";

//title

const firstItem = document.querySelector('.title-exp');
const seccondItem = document.querySelector('.title-dre');
const thirdItem = document.querySelector('.title-tra');

gsap.from(firstItem, { x: 3000, duration: 1, delay: 0.4, rotate: 360 });
gsap.from(seccondItem, { x: -3000, duration: 1, delay: 0.8, rotate: 360 });
gsap.from(thirdItem, { x: 3000, duration: 1, delay: 1, rotate: 360 });

//title

const header = document.querySelector('.header__list');

gsap.from(header, { y: -200, duration: 1, delay: 0.4 });