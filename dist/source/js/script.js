$(function(){

  // jQuery //

  // Slick slider
  $('.reviwes__slider').slick({
      centerMode: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      centerPadding: 0,
      responsive: [
        {
          breakpoint: 1215,
          settings: {
            arrows: false,
            dots: true
          }
        },
        {
          breakpoint: 824,
          settings: {
            centerMode: true,
            arrows: false,
            dots: true,
            slidesToShow: 1,
          }
        },
      ]
  });

  // JS //

  //burger
  const body = document.querySelector('.body');
  const burger = document.querySelector('.burger');

  burger.addEventListener('click', () => {
  body.classList.toggle('lock-scroll');
  burger.classList.toggle('burger__active');
  });
})

// Learning

