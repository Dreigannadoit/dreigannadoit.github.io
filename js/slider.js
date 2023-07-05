var swiper = new Swiper(".swiper", {
  breakpoints: {
    600: {
      slidesPerView: 1,
    },
    1000: {
      slidesPerView: 2,
    },
    1300: {
      slidesPerView: 3,
    },
  },
  spaceBetween: 30,
  autoplay: {
    delay: 16500,
    disableOnInteraction: false
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },

});