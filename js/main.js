let contr = document.getElementById("contract");
let hd = document.getElementById("hd");
let btn = document.getElementById("srev");
btn.addEventListener("click", function () {
  contr.classList.add("vist");
});

hd.onclick = function () {
  contr.classList.remove("vist");
};



const progressContent = document.querySelector(".autoplay-progress span");
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 20,
  centeredSlides: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
