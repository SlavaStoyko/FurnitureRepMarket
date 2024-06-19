import {getSwiperPreference} from "./slider/swiper.js";

import {getScrollUp,getOrderCall} from "./scroll/scroll.js";

import {openMassage,closeMassage} from './preference/preference.js'

const bouger = document.querySelectorAll('.burger');
const modal = document.querySelector('.windowModal');
const Mmenu = document.querySelector('.mobileMmenu');
const Smenu = document.querySelector('.mobileSmenu');
const htmlDoc = document.body;

Mmenu.style.display = "none";
Smenu.style.display = "none";
bouger[2].style.display = "none";

bouger[0].onclick = () =>{ openMainMenu ();}
bouger[1].onclick = () =>{ openSubMenu ();}
bouger[2].onclick = () =>{hiddenMenu();}

const openMainMenu = () => {
    bouger[2].classList.add('active');
    bouger[0].classList.add('active');
    modal.classList.add('active');
    Mmenu.style.display = "block";
    Smenu.style.display = "none";
    bouger[2].style.display = "block";
    htmlDoc.style.overflow = 'hidden';
    modal.style.overflowY = 'auto';
}
const openSubMenu = () => {
    bouger[2].classList.add('active');
    bouger[1].classList.add('active');
    modal.classList.add('active');
    Mmenu.style.display = "none";
    Smenu.style.display = "block";
    bouger[2].style.display = "block";
    htmlDoc.style.overflow = 'hidden';
    modal.style.overflowY = 'auto';
}
const hiddenMenu = () =>{
    bouger[2].classList.add('active');
    bouger[0].classList.remove('active');
    bouger[1].classList.remove('active');
    modal.classList.remove('active');
    Mmenu.style.display = "none";
    Smenu.style.display = "none";
    bouger[2].style.display = "none";
    htmlDoc.style.overflow = 'visible';
    modal.style.overflow = 'hidden';
    
}

const orderCall = document.querySelectorAll('.orderCall');
orderCall[0].onclick = e => getOrderCall (e);
orderCall[1].onclick= (e) =>{getOrderCall (e);hiddenMenu();} //mobileMenu


const card = document.querySelectorAll('.preference__list__item__card');
openMassage(card);
closeMassage(card);

getSwiperPreference('.swiper');

const scrollUp = document.querySelector('.scroll_up');
scrollUp.onclick = e => getScrollUp(e);