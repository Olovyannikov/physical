import SwiperCore, {Navigation, Pagination} from 'swiper/core';

SwiperCore.use([Navigation, Pagination]);

const slider = (el, nextBtn) => {
    let swiper = new SwiperCore(el, {
        autoHeight: true,
        allowTouchMove: false,
        navigation: {
            nextEl: nextBtn,
        },
    });

    let swiperNested = new SwiperCore('.exercise-slider-nested', {
        pagination: {
            el: '.exercise-slider-nested__pagination',
            type: 'bullets'
        }

    });

    const next = document.querySelector(nextBtn);

    next.classList.add('swiper-button-disabled');

    const activateBtn = () => {
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
