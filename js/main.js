$(function(){

    $('.slider__inner').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    arrows: true,
    fade: true,
    autoplay:true,
    autoplaySpeed: 3000,
    centerMode: true,
    asNavFor: '.slider__preview'
    });

    $('.slider__preview').slick({
    slidesToShow: 5,
    slidesToScroll: 6,
    asNavFor: '.slider__inner',
    dots: false,
    infinite: true,
    centerMode: true,
    focusOnSelect: true,  
    autoplay: true, 
    arrows: false,
    variableWidth: true
   });

    $('.header__menu-btn').on('click', function(){
      $('.header__menu-list').slideToggle();
    });

  });