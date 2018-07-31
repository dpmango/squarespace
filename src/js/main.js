$(document).ready(function($) {

  //////////
  // Global variables
  //////////

  var _window = $(window);
  var _document = $(document);


  ////////////
  // READY - triggered when PJAX DONE
  ////////////
  function pageReady(){
    loadFonts();
    legacySupport();
    initSliders();

    updateHeaderClass();
    _window.on('scroll', throttle(updateHeaderClass, 20));
  }

  // this is a master function which should have all functionality
  pageReady();


  // legacy support
  function legacySupport(){
    // svg support for laggy browsers
    svg4everybody();

    // Viewport units buggyfill
    window.viewportUnitsBuggyfill.init({
      force: false,
      refreshDebounceWait: 150,
      appendToBody: true
    });
  }

  // webfont loader
  function loadFonts(){
    WebFont
      .load({
        google: {
          families: ['Roboto:300,400,500,700'],
        }
      })
  }

  ////////////
  // HEADER SCROLL
  ////////////
  function updateHeaderClass(){
    var height = _window.scrollTop();
    if (height > 150) {
      $('.header.is--white').addClass('is--active');
    } else {
      $('.header.is--white').removeClass('is--active');
    }
  }


  ////////////
  // SLIDERS
  ////////////
  function initSliders(){
    var teamSlider = new Swiper('.team__slider', {
      speed: 1000,

      slidesPerView: 4,
      centeredSlides: true,
      loop: true,
      spaceBetween: 40,
      autoplay: {
        delay: 3000,
      },
      breakpoints: {
        // when window width is <= 320px
        767: {
          slidesPerView: 1.2,
          spaceBetween: 20
        },
        998: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        // when window width is <= 640px
        1024: {
          slidesPerView: 4,
          spaceBetween: 20
        }
      }
    });

    var bgSlider = new Swiper('.desing__bg', {
      speed: 1000,
      effect: 'fade',
      slidesPerView: 1,
      // centeredSlides: true,
      loop: true,
      spaceBetween: 0,

    });

    var desingSlider = new Swiper('.desing__slider', {
      speed: 1000,

      slidesPerView: 1,
      // centeredSlides: true,
      loop: true,
      spaceBetween: 0,
      navigation: {
        nextEl: '.desing--next',
        prevEl: '.desing--prev',
      },
      autoplay: {
        delay: 3000,
      },
      breakpoints: {
        // when window width is <= 320px
        320: {
          slidesPerView: 1,
          spaceBetween: 10
        },
        // when window width is <= 480px
        768: {
          navigation: false
          // spaceBetween: 10
        },
      },
      on: {
        slideChange: function() {
          // this.activeIndex
          // console.log(this.activeIndex)
          bgSlider.slideTo(this.activeIndex)
          // bgSlider.activeIndex
        },
      },

    });


    var mainSlider = new Swiper('.main__slider', {
      slidesPerView: 1,
      speed: 1000,
      loop: true,
      effect: 'fade',
      grabCursor: true,
      spaceBetween: 0,
      on: {
        slideChange: function() {
          indexSlide = this.realIndex
          slide = this.slides[indexSlide]
          textLink = $(slide).data('link')
          $('.link--change').text(textLink)
          $('.link--change').addClass('is--active')
          if ($(slide).data('bg') != 'black') {

            $('.main__content, .header:not(.is--white)').addClass('is--black')
          } else {
            $('.main__content, .header:not(.is--white)').removeClass('is--black')
          }
        },
      },
      autoplay: {
        delay: 10000,
      },
      pagination: {
        // bulletClass: 'line',
        clickable: true,
        el: '.swiper-pagination',
        // type: 'custom',
        renderBullet: function(index, className) {
          return '<span class="' + className + '"><span class="line"></span></span>';
        }
      }

    });

  }


  // click handlers
  _document
    .on('click', '[href="#"]', function(e) {
  		e.preventDefault();
  	})
    .on('click', '.link--dropdown', function(event) {
      popup = $(this).attr('href')
      // console.log(popup)
      $.fancybox.open({
        src: popup,
        type: 'inline',

        opts: {
          touch: false,
          smallBtn: false,
          baseClass: 'drop',
          btnTpl: {

            close: '<button data-fancybox-close class="fancybox-button fancybox-button--close" title="{{CLOSE}}">' +
              '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25">' +
              '<line x1="1.9" y1="1.9" x2="23.1" y2="23.1"></line>' +
              '<line x1="23.1" y1="1.9" x2="1.9" y2="23.1"></line>' +
              '</svg>' +
              '</button>',
          },
        }
      });
      return false

    })
    .on('click', '.dropdown', function(event) {
      return false
    })
    .on('click', '.footer__nav--title', function(event) {
      $(this).toggleClass('active')
      list = $(this).parent().find('.footer__nav--list')
      if (!$('.arrow-down').is(':hidden')) {
        list.slideToggle()
      }
    });

  // DROPDOWN HOVER
  var dropdown;
  $('.dropdown').hover(function() {
    var menu = $(this).find('.is--active:not(:hidden)')
    dropdown = $(this).find('.dropdown__menu[data-drop=' + menu.data('menu') + ']')
    $(dropdown).addClass('is--active')
  }, function() {
    $(dropdown).removeClass('is--active')
  });


});
