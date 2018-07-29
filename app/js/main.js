$(document).ready(function($) {
 
var teamSlider = new Swiper('.team__slider', {
    speed: 1000,

    slidesPerView: 4,
    centeredSlides: true,
    loop: true,
     spaceBetween: 40,
  autoplay: {
    delay: 3000,
  },
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
  on: {
    slideChange: function () {
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
     autoplay: {
    delay: 10000,
  },
     pagination: {
     	// bulletClass: 'line',
    	clickable: true,
    el: '.swiper-pagination',
    // type: 'custom',
    renderBullet: function (index, className) {
    return '<span class="'+className+'"><span class="line"></span></span>';
  } 
  },
  
});

$('.link-dropdown').click(function(event) {
	popup = $(this).attr('href')
	// console.log(popup)
	$.fancybox.open({
	src  : popup,
	type : 'inline',

	opts : {
		touch: false,
		smallBtn:false,
		baseClass: 'drop',
		 btnTpl: {

        close:
            '<button data-fancybox-close class="fancybox-button fancybox-button--close" title="{{CLOSE}}">' +
            '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25">'+
            	'<line x1="1.9" y1="1.9" x2="23.1" y2="23.1"></line>'+
            	'<line x1="23.1" y1="1.9" x2="1.9" y2="23.1"></line>'+
          	'</svg>' +
            '</button>',
    },
	}
});
	return false

});





});


$(window).scroll(function() {
		var height = $(window).scrollTop();
if(height > 100){
$('.header.is--white').addClass('is--active');
} else{
$('.header.is--white').removeClass('is--active');
}
});