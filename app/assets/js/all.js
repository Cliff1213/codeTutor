const scrollTop = document.querySelector('.scrollTop');
const domBanner = document.querySelector('.banner');
scrollTop.addEventListener('click', (e) => {
  if(e.target.classList.contains('active')) {
    e.target.classList.add('text-gradient-y');
  }
})



window.addEventListener('scroll', () => {
  if(window.scrollY > 120) {
    scrollTop.classList.add('active');
  }else {
    scrollTop.classList.remove('active');
  }
})
