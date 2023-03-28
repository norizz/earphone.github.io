const swiper = new Swiper('.swiper', {
  loop: true,
  CenteredSlides :true,
  SlidesPerView: 3,
  grabCursor: true,
  centeredSlides: true,
  spaceBetween: 15,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    disabledClass: 'disabled_swiper_button'
  },
});