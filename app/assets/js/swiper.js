// programming language swiper settings
var swiper = new Swiper(".language-swiper", {
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  slidesPerView: "auto",
  centeredSlides: true,
  spaceBetween: 16,
});

// comments swiper settings
// var swiper = new Swiper(".comments-swiper", {
//   cssMode: true,
//   // effect: 'fade',
//   pagination: {
//     el: ".swiper-pagination",
//     clickable:true,
//   },
//   mousewheel: true,
//   keyboard: true,
// });

var swiper = new Swiper('.comments-swiper', {
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

// var swiper = new Swiper(".mySwiper", {
//   effect: "coverflow",
//   grabCursor: true,
//   centeredSlides: true,
//   slidesPerView: "auto",
//   coverflowEffect: {
//     rotate: 50,
//     stretch: 0,
//     depth: 100,
//     modifier: 1,
//     slideShadows: true,
//   },
//   pagination: {
//     el: ".swiper-pagination",
//   },
// });