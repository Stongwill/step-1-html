

const burger = document.querySelector('.header__burger');
const header = document.querySelector('.header');
const menu = document.querySelector('.header__menu');
const headerBody = document.querySelector('.header__body');
const headerLinks = document.querySelector('.header__links');
const initialLogo = document.querySelector('.header__logo > img');

const modalBusiness = document.querySelector('.modal-business');

const btnClose = document.querySelector('.modal-business__btn-closed')
const btnOpenModal = document.querySelector('.profile__btn-tarife');

const toggleBurger = (el) => {
    if(el){
        el.addEventListener('click', (e) => {
            // document.querySelector('.header__contacts-mob').classList.toggle('active');
            // document.body.classList.toggle('noscroll');
            // e.target.classList.toggle('active')
            // document.querySelector('header').style.backgroundColor = '#fff';
            // menu.classList.toggle('active');
            // headerBody.classList.toggle('active')
        })
    }

}


const adaptiveScroll = () => {
    const heightHeader = header.offsetHeight;
    const userScroll = window.scrollY;
    if(userScroll + heightHeader >= window.innerHeight - window.innerHeight){
        header.classList.add('active');
        initialLogo.style.display = 'none';
    }
     if(userScroll === 0){
        header.classList.remove('active');
        initialLogo.style.display = 'block';
    }
}


const closeModal = (btn) => {
    btn && btn.addEventListener('click', () => {
        document.body.classList.remove('noscroll');
        modalBusiness.classList.remove('active');
    })
}

const openModal = (btn) => {
        btn && btn.addEventListener('click', () => {
        document.body.classList.add('noscroll');
        modalBusiness.classList.add('active');
})
    }



document.addEventListener('DOMContentLoaded', (e) => {
    toggleBurger(burger);
    openModal(btnOpenModal);
    closeModal(btnClose);

})

document.addEventListener('scroll', () => {
    adaptiveScroll()
})