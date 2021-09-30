$(function(){

    // jQuery //

    // Slick slider
    $('.reviwes__slider').slick({
        centerMode: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 3
            }
          },
          {
            breakpoint: 480,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 1
            }
          }
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

