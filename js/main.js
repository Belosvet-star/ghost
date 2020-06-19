$(document).ready(function () {
  console.log("Привет");
  const mMenuBtn = $(".m-menu-button");
  const mMenu = $(".m-menu");
  mMenuBtn.on("click", function () {
  mMenu.toggleClass('active');
  $('body').toggleClass('no-scroll'); /* это чтобы не прокручивалось боди */
  });
  /* теперь инициализация слайдера свипер */
  var mySwiper = new Swiper ('.swiper-container', {
    // Optional parameters
    slidesPerView: 4,
    spaceBetween: 25,
    loop: true, /* это бесконечная прокрутка */
    breakpoints: {
      992: {
        slidesPerView: 4,
      },
      768: {
        slidesPerView: 2,
      },
      320: {
        slidesPerView: 1,
        slidesOffsetAfter: 50,
       /*  теперь настроим стрелку */
        navigation: {
          nextEl: ".button-next",
        },
      },
    },
  });
});