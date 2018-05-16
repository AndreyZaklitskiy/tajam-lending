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
