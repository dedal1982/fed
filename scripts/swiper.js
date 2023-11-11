new Swiper(".purchase__swiper", {
  slidesPerView: 4,
  spaceBetween: 20,
  loop: false,
  allowTouchMove: true,
  freeMode: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 0,
      slideToClickedSlide: true,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 1,
      spaceBetween: 0,
      slideToClickedSlide: true,
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 4,
      spaceBetween: 0,
      slideToClickedSlide: true,
    },
  },
});
