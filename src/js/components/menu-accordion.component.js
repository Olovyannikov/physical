const menuAccordion = () => {
    const navItems = document.querySelectorAll('.nav__item');

    navItems.forEach(item => {

        item.addEventListener('click', () => {
            if (item.querySelector('.nav__submenu')) {
                item.classList.toggle('nav__item--active');
            }
        })
    })
}

export default menuAccordion;
