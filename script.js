

const burger = document.querySelectorAll('.header__burger');
const header = document.querySelector('.header');
const menu = document.querySelector('.header__menu');
const headerBody = document.querySelector('.header__body');
const headerLinks = document.querySelector('.header__links');
const initialLogo = document.querySelector('.header__logo');

const menuBurgerLinks = document.querySelectorAll('.modal-burger .header__item');

const modalBurger = document.querySelector('.modal-burger')
const modalBusiness = document.querySelector('.modal-business');

const btnClose = document.querySelectorAll('.modal-business__btn-closed')
const btnOpenModal = document.querySelector('.profile__btn-tarife');

const toggleBurger = (el) => {
    if(el){
        el.forEach(burger => burger.addEventListener('click', (e) => {
            document.body.classList.toggle('noscroll');
            modalBurger.classList.toggle('active');
        })
    )}

}

const adaptiveScroll = () => {
    const heightHeader = header.offsetHeight;
    const userScroll = window.scrollY;
    if(userScroll + heightHeader >= window.innerHeight - window.innerHeight){
        header.classList.add('active');
        initialLogo.classList.add('active');
    }
     if(userScroll === 0){
        header.classList.remove('active');
        initialLogo.classList.remove('active');
    }
}


const closeModal = (btn, modal) => {
    btn && btn.forEach(button => button.addEventListener('click', () => {
        document.body.classList.remove('noscroll');
        modal.classList.remove('active');
    }))
}

const openModal = (btn) => {
        btn && btn.addEventListener('click', () => {
        document.body.classList.add('noscroll');
        modalBusiness.classList.add('active');
})
}


document.addEventListener('DOMContentLoaded', () => {
    toggleBurger(burger);
    openModal(btnOpenModal);
    closeModal(btnClose, modalBusiness);
    closeModal(menuBurgerLinks, modalBurger);
})

document.addEventListener('scroll', () => {
    adaptiveScroll()
})

