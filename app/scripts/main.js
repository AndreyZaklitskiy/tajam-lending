$(document).ready(function () {
  $('.header-slider').slick({
    arrows: false,
    dots: true
  });
});
$(document).ready(function(){
  $('.second-slider-table').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.second-slider',
  });
  $('.second-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.second-slider-table',
    dots: false,
    centerMode: true,
    focusOnSelect: true
  });
});

$(document).ready(function() {
  $('.hamburger').click(function () {
    $('.hamburger').toggleClass('is-active');
    $('.hamburger-menu').toggleClass('visible');
  });
});
//menu
$('.header-menu-list a').on("click", function (event) {
  event.preventDefault();
  let scrollLink  = $(this).attr('href'),
    offsetTop = $(scrollLink).offset().top,
    time = 3000;
  $('body,html').animate({scrollTop: offsetTop}, time);
});
