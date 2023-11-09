import './destinationSwiper.js'
import './reviewSwiper.js'
import './burger.js';

const btnHotel = document.getElementById('btnHotel');
const btnFlight = document.getElementById('btnFlight');
const cardHotel = document.getElementById('cardHotel');
const cardFlight = document.getElementById('cardFlight');

btnHotel.addEventListener('click', () => {
  btnHotel.classList.add('card__btn--active');
  btnFlight.classList.remove('card__btn--active');
  cardHotel.classList.add('card__wrapper--active');
  cardFlight.classList.remove('card__wrapper--active');
  console.log('Hotel');
})

btnFlight.addEventListener('click', () => {
  btnFlight.classList.add('card__btn--active');
  btnHotel.classList.remove('card__btn--active')
  cardFlight.classList.add('card__wrapper--active');
  cardHotel.classList.remove('card__wrapper--active');
  console.log('Flight');
})