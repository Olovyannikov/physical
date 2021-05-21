const accordion = (element) => {
    document.addEventListener('DOMContentLoaded', () => {
        const accordions = document.querySelectorAll(`.${element}`);

        accordions.forEach(el => {
            const control = el.querySelector(`.${element}__control`);
            control.addEventListener('click', (e) => {

                const content = el.querySelector(`.${element}__content`);

                el.classList.toggle('open')

                // если открыт аккордеон
                if (el.classList.contains('open')) {
                    control.setAttribute('aria-expanded', true);
                    content.setAttribute('aria-hidden', false);
                    content.style.maxHeight = content.scrollHeight + 'px';
                } else {
                    control.setAttribute('aria-expanded', false);
                    content.setAttribute('aria-hidden', true);
                    content.style.maxHeight = null;
                }
            });
        });
    });
}

export default accordion;
