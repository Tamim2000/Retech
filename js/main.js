$(function(){
    "use strict";
// -----------------------------------------------------------------------------

// background imge importer script-
$('[data-background]').each(function(){
    $(this).css('background-image','url('+ $(this).attr('data-background')+')');
});
// video popup activation------------
jQuery(function(){
  jQuery("a.bla-1").YouTubePopUp();
  jQuery("a.bla-2").YouTubePopUp( { autoplay: 0 } ); // Disable autoplay
});

 //=sticky header script========================================= */
 $(window).scroll(function(){
    if ($(window).scrollTop() >= 300) {
        $('header').addClass('fixed-header');
        $('header').addClass('visible-title');
    }
    else {
        $('header').removeClass('fixed-header');
        $('header').removeClass('visible-title');
    }
});

 //= Hero slider activation script========================================= */
 $('.autoplay').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  });

//  scroll to top activation--------------
  $(function(){
    $.scrollUp();
  });

 //= London Skaycrapers slider activation script========================================= */
 $('.london-slider').slick({
  centerMode: true,
  centerPadding: '300px',
  slidesToShow: 1,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
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

 //= testimonial slde activation script========================================= */
 $('.testimonial-slide').slick({
  centerMode: true,
  centerPadding: '100px',
  slidesToShow: 1,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '20px',
        slidesToShow: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '30px',
        slidesToShow: 1
      }
    }
  ]
});
 //= Brand logo slider activation script========================================= */
 $('.brand-item').slick({
  slidesToShow: 5,
  slidesToScroll: 3,
  autoplay: true,
  autoplaySpeed: 500,
});

// number counter-----------------------
$('.count').each(function () {
  $(this).prop('Counter',0).animate({
      Counter: $(this).text()
  }, {
      duration: 3000,
      easing: 'swing',
      step: function (now) {
          $(this).text(Math.ceil(now));
      }
  });
});

//   fade animation activation
AOS.init();


// -----------------------------------------------------------------------------------
})(jQuery);
