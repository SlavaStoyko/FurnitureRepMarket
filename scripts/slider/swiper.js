export function getSwiperPreference(className) {
return new Swiper(className, {
    // Optional parameters
    direction: 'horizontal',
    loop: false,
    slidesPerView: 3,
    spaceBetween: 18,
    // Navigation arrows
    navigation: {
      nextEl: '.Right',
      prevEl: '.Left',
    },
  
    breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 1,
          spaceBetween: 10
        },
        // when window width is >= 480px
        860: {
          slidesPerView: 2,
          spaceBetween: 10
        },
        // when window width is >= 640px
        1280: {
          slidesPerView: 3,
          spaceBetween: 20
        }
      },
  });
}