const swiper = new Swiper('.swiper', {
    breakpoints: {
        // when window width is >= 320px
        200: {
          slidesPerView: 1,
          spaceBetween: 20
        },
        // when window width is >= 480px
        618: {
          slidesPerView: 2,
          spaceBetween: 30
        },
        // when window width is >= 640px
        1220: {
          slidesPerView: 3,
          spaceBetween: 40
        },
      }, 
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      loop: true,
  });
  const title = document.querySelector(".title ");
  const callback = document.querySelector(".title_callback");
  const header = document.querySelector("header")
  const discont = document.querySelector(".discont");
  const slideitems = document.querySelectorAll(".slider_items");
  const dec = document.querySelectorAll('.dec');
const atag = document.getElementsByTagName('a');
const iconhover = document.querySelectorAll('.svgicon');
const acv = document.querySelectorAll(".burger");
let descontmenu = document.querySelector('.discont_menu_list');
let titlemenu = document.querySelector('.title_menu_list');
const up = document.querySelector(".up");
let windowWidth = document.documentElement.clientWidth;
for (let i=0; i<acv.length;i++){
    btn (acv[i], i);
    function btn(block, numb) {
        if(numb == 0){
        block.addEventListener("click", function (){
            let activebtn = block.classList.toggle("active");
            if (activebtn){
                descontmenu.style.cssText = 'right:0px; top: 6.5%;'
            }else{descontmenu.style.cssText = 'right:0; top: -100%; '}
        }) 
        }
        if(numb == 1){
            block.addEventListener("click", function (){
                let activebtn = block.classList.toggle("active");
                if (activebtn){
                    titlemenu.style.left ="0px";
                }else{titlemenu.style.left = "-100%";}
            }) 
            }
    }
    
       /* let activebtn = acv[i].classList.toggle("active");
        if(i == 0){
            descontmenu.lastElementChild.prepend(acv[0]);  
        }else{descontmenu.prepend(acv[0]);}
        if(i == 1){
            titlemenu.lastElementChild.prepend(acv[1]);  
        }else{titlemenu.prepend(acv[1]);}
       console.log(i); */
        
    
    
}
up.addEventListener("click", function () {
   window.scrollTo(0,0);
   console.log("upok");
})

for (let i=0; i<iconhover.length;i++){
  iconhover[i].addEventListener("mouseover", function (){
    iconhover[i].classList.add('colicon');
  })
   iconhover[i].addEventListener("mouseout", function (){
    iconhover[i].classList.remove('colicon');
  }) 
}

for (let i=0; i<slideitems.length;i++){
  slideitems[i].addEventListener("mouseover", function () {
    slideitems[i].children[0].style.cssText = "position: absolute; bottom: -64px; transform:translateY(-100px); transition: transform 0.3s ease 0s;";
  })
  slideitems[i].addEventListener("mouseout", function (){
    slideitems[i].children[0].style.cssText = "position: absolute; bottom: -64px; transform:translateY(0px); transition: transform 0.3s ease 0s;";
  })
}
if(windowWidth < 720){
  discont.remove();
  callback.remove();
}if(windowWidth >720){
  header.prepend(discont);
  title.append(callback);
}
console.log(header);
console.log(discont);
console.log(windowWidth);

window.addEventListener("resize", function (){
  let windowWidth = document.documentElement.clientWidth;
  if(windowWidth < 720){
    discont.remove();
    callback.remove();
  }if(windowWidth >720){
    header.prepend(discont);
    title.append(callback);
  }
}) 