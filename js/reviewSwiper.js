import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';

const swiper = new Swiper('.review__swiper', {
  direction: 'horizontal',
  spaceBetween: 5300,
  loop: true,
  slidesPerView: 1,
  modules: [Pagination],
  pagination: {
    el: '.review__swiper-pagination',
    clickable: true,
  },
});