const question = document.querySelector('#question');
const page = document.querySelector('#header');

export const getScrollUp = (event) => {
    event.preventDefault();
   return page.scrollIntoView({behavior:"smooth"});
}

export const getOrderCall = (event) => {
    event.preventDefault();
    
    return question.scrollIntoView({behavior:"smooth"});
}