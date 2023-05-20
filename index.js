
let wave1 = document.getElementById('wave1');
let wave2 = document.getElementById('wave2');
let wave3 = document.getElementById('wave3');
let wave4 = document.getElementById('wave4');
let text = document.getElementById('text_main');
let btn = document.getElementById('btn_main');




window.addEventListener('scroll',function(){
    let value = window.scrollY;

    wave1.style.backgroundPositionX = 400 + value * 4 + 'px';
    wave2.style.backgroundPositionX = 300 + value * -4 + 'px';
    wave3.style.backgroundPositionX = 200 + value * 2 + 'px';
    wave4.style.backgroundPositionX = 100 + value * -2 + 'px';
    text.style.marginTop= value * 1.5 + 'px';
    btn.style.marginTop= value * 0.8 + 'px';
    

})

const progressCircle = document.querySelector(".autoplay-progress svg");
const progressContent = document.querySelector(".autoplay-progress span");
  
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
      
});

