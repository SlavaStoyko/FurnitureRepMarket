import {getSwiperPreference} from "./slider/swiper.js";

import {getScrollUp,getOrderCall} from "./scroll/scroll.js";

getSwiperPreference('.swiper');

const scrollUp = document.querySelector('.scroll_up');
const orderCall = document.querySelector('#orderCall');
const question = document.querySelector('#question');
const page = document.querySelector('#header');

scrollUp.onclick = e => getScrollUp(e,page)
orderCall.onclick = e => getOrderCall (e,question)





const bouger = document.querySelectorAll('.burger');


const modal = document.querySelector('.windowModal');
const Mmenu = document.querySelector('.mobileMmenu');
const Smenu = document.querySelector('.mobileSmenu');

    Mmenu.style.display = "none";
    Smenu.style.display = "none";
    bouger[2].style.display = "none";
    
bouger[0].onclick = () =>{
    bouger[2].classList.add('active');
    bouger[0].classList.add('active');
    modal.classList.add('active');
    Mmenu.style.display = "block";
    Smenu.style.display = "none";
    bouger[2].style.display = "block";
    }
    bouger[1].onclick = () =>{
        bouger[2].classList.add('active');
        bouger[1].classList.add('active');
        modal.classList.add('active');
        Mmenu.style.display = "none";
    Smenu.style.display = "block";
        bouger[2].style.display = "block";
        }
        bouger[2].onclick = () =>{
            bouger[2].classList.add('active');
            bouger[0].classList.remove('active');
            bouger[1].classList.remove('active');
            modal.classList.remove('active');
            Mmenu.style.display = "none";
            Smenu.style.display = "none";
            bouger[2].style.display = "none";
        
}




const card = document.querySelectorAll('.preference__list__item__card');
card.forEach(element => {
    element.addEventListener('mouseover',()=>{
        element.children[0].style.cssText = "transform:translateY(0px);transition: all 0.5s ease";
        element.children[1].style.cssText="transform:translateY(0px);transition: all 0.5s ease;visibility: visible;";
        
    })
    element.addEventListener('mouseout',()=>{
        element.children[0].style.cssText = "transform:translateY(70px);transition: all 0.2s ease";
        element.children[1].style.cssText="transform:translateY(70px);transition: all 0.2s ease;visibility: hidden;";
    
    })
});



//----------------------scrooll

