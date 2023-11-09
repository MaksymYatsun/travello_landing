import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

const swiper = new Swiper('.destinations__swiper', {
  direction: 'horizontal',
  slidesPerView: 1,
  loop: true,
  modules: [Navigation],
  navigation: {
    nextEl: '.destinations__button-next',
    prevEl: '.destinations__button-prev',
  },
  breakpoints: {
    550: {
      slidesPerView: 2
    }
  }
});