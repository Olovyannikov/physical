import menu from "./components/menu.component";
import menuAccordion from "./components/menu-accordion.component";
import headerAnimation from "./components/header-animation.component";
import accordion from "./components/accordion.component";

menu();
menuAccordion();
headerAnimation();
accordion('wiki-accordion');

window.addEventListener('DOMContentLoaded', () => {
    let mql = window.innerWidth;
    const els = document.querySelectorAll('.exp');
    if (mql >= 1025) {
        els.forEach(el => el.classList.add('open'));
    }

    function screenTest() {
        let mql = window.matchMedia('(min-width: 1025px)');
        if (mql) {
            els.forEach(el => el.classList.add('open'));
        }

        if (window.innerWidth < 1025) {
            els.forEach(el => {
                if (el.classList.contains('open')) {
                    el.querySelector('.wiki-accordion__content').style.height = '100%';
                    el.querySelector('.wiki-accordion__content').style.maxHeight = '100%';
                }
            })
        }

    }

    window.addEventListener('resize', screenTest);
   // window.addEventListener('resize')
})

