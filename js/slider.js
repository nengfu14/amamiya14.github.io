$(document).on('ready', function() 
{
    $('.slider-nav').slick(
    {
        slidesToShow: 1,
        slidesToScroll: 3,
        asNavFor: '.slider-for',
        dots: false,
        arrows:false,
        centerMode: true,
        focusOnSelect: true
    });

    $('.slider-for').slick(
    {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav'
    });

});