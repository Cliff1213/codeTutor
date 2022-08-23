// language
const languageSwiper = new Swiper(".language-swiper", {
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  slidesPerView: "auto",
  centeredSlides: true,
  spaceBetween: 16,
});

// comments
const commentSwiper = new Swiper('.comments-swiper', {
  loop: true,
  slidesPerView: 1,
  slidesPerColumn: 1,
  effect: 'fade',
  // spaceBetween: 30,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});