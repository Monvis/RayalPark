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

  // toUp
  const btn = $('.toUp');
  
  $(window).scroll(function() {
    if ($(window).scrollTop() > 550) {
      btn.addClass('show');
    } else {
      btn.removeClass('show');
    }
  });

  // header fixed
  const headerPlug = $('.header__plug');
  const header = $('.header');

  $(window).scroll(function() {
    if ($(window).scrollTop() > 100) {
      header.addClass('header-fixed');
      headerPlug.addClass('plug-active');
    } else {
      header.removeClass('header-fixed');
      headerPlug.removeClass('plug-active');
    }
  });

  // JS //
  
  //  Variables
  const body = document.querySelector('body');
  const wrapper = document.querySelector('wrapper');
  const preloader = document.getElementById('preloader');
  const burger = document.querySelector('.burger');
  const video = document.querySelector('.video');
  const anchors = document.querySelectorAll('a[href*="#"]');

  //preloader
  window.onload = function() {
    preloader.classList.add('hide-preloader');
    setTimeout(function(){
      preloader.classList.add('preloader-hidden');
      //AOS
      AOS.init();
    }, 1000);
    if (!preloader.classList.contains('preloader-hidden')){
      body.classList.remove('overflow-hidden');
    }
  };

  //burger
  burger.addEventListener('click', () => {
    body.classList.toggle('lock-scroll');
    burger.classList.toggle('burger__active');
  });

  //video
  function videoPausePlayHandler(e) {
    if (e.type == 'playing') {
      video.setAttribute("controls","controls");
    }
  }
  video.addEventListener('playing', videoPausePlayHandler, false);

  //anchors
  for (anchor of anchors) {
    if (anchor) {
      anchor.addEventListener('click', function(e){
          e.preventDefault();
          anchorID = this.getAttribute('href');
          document.querySelector(anchorID).scrollIntoView({
              behavior: 'smooth',
              block: 'start'
          })
      })
    }
  }
})