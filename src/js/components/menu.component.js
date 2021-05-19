const menu = () => {
    const menuBtn = document.querySelector('#menu-btn');

    function openMenu() {
        menuBtn.classList.add('active');
    }

    function closeMenu() {
        menuBtn.classList.remove('active');
    }

    menuBtn.addEventListener('click', () => {
        if (menuBtn.classList.contains('active')) {
            closeMenu();
        } else {
            openMenu();
        }
    })
}

export {menu};
