const burger = document.querySelector('.header__burger');

const menu = document.querySelector('.header__menu')
const headerLinks = document.querySelector('.header__links')

const toggleBurger = (el) => {
    el.addEventListener('click', (e) => {
        e.target.classList.toggle('active')
        document.querySelector('header').style.backgroundColor = '#fff';
        menu.classList.toggle('active');

    })
}


document.addEventListener('DOMContentLoaded', () => {
    toggleBurger(burger);
})