const navBtn = document.querySelector('#navBtn');
const nav = document.querySelector('nav.main-nav');

navBtn.addEventListener('click', function () {
    if (navBtn.classList.contains('is-active')) {
        this.classList.remove('is-active');
        nav.classList.remove('opened');
    }
    else {
        this.classList.add('is-active');
        nav.classList.add('opened');
    }
});
