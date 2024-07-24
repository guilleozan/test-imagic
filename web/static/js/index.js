import 'bootstrap/dist/css/bootstrap.min.css';
import 'swiper/swiper-bundle.min.css';
import Swiper from 'swiper';

document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM fully loaded and parsed');
  });

document.addEventListener('DOMContentLoaded', () => {
    new Swiper('.swiper-container', {
        slidesPerView: 1,
        spaceBetween: 10,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });
});
