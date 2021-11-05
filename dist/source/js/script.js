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

  //video
  const video1 = document.querySelector('.video');

  function videoPausePlayHandler(e) {
    if (e.type == 'playing') {
      video1.setAttribute("controls","controls");
    }
  }

  video1.addEventListener('playing', videoPausePlayHandler, false);

  //anchors
  let anchors = document.querySelectorAll('a[href*="#"]');

  for (anchor of anchors) {
    if (anchor) {
      anchor.addEventListener('click', function(e){
          e.preventDefault();
          anchorID = this.getAttribute('href');
          console.log(anchorID);
          document.querySelector(anchorID).scrollIntoView({
              behavior: 'smooth',
              block: 'start'
          })
      })
    }
  }

})