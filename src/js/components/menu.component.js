const menu = () => {
    const $menuBtn = document.querySelector('#menu-btn');
    const $navigation = document.querySelector('#nav');

    function openMenu() {
        $menuBtn.classList.add('active');
        $navigation.classList.add('active')
    }

    function closeMenu() {
        $menuBtn.classList.remove('active');
        $navigation.classList.remove('active');
    }

    $menuBtn.addEventListener('click', () => {
        if ($menuBtn.classList.contains('active')) {
            closeMenu();
        } else {
            openMenu();
        }
    })
}

export default menu;
