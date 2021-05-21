import SwiperCore, {Navigation, Pagination} from 'swiper/core';

SwiperCore.use([Navigation, Pagination]);

const slider = (el, nextBtn) => {
    let swiper = new SwiperCore(el, {
        allowTouchMove: false,
        navigation: {
            nextEl: nextBtn,
        },

    });

    swiper.height

    let swiperNested = new SwiperCore('.exercise-slider-nested', {
        slidesPerView: 1,
        spaceBetween: 20,
        grabCursor: true,
        pagination: {
            el: '.exercise-slider-nested__pagination',
            type: 'bullets',
            clickable: true
        }

    });

    const next = document.querySelector(nextBtn);

    next.classList.add('swiper-button-disabled');

    const activateBtn = () => {
        let checked = document.querySelectorAll('.swiper-slide-active .checked-checkbox');

        let checkboxNumber = document.querySelectorAll('.swiper-slide-active .checked-checkbox').length;

        document.querySelectorAll('.swiper-slide-active .radio-button').forEach(radio => {
            radio.addEventListener('click', () => {
                next.classList.remove('swiper-button-disabled');
                next.disabled = false
            })
        })
    }

    activateBtn();

    next.addEventListener('click', activateBtn);


}

export default slider;
