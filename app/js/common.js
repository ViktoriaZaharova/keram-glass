$('.main-slider').slick({
    slidesToShow: 1,
    dots: true,
    arrows: false,
    fade: true,
    // autoplay: true,
    autoplaySpeed: 2000,
});


$('.btn-burger').click(function () {
   $('.dropDown-menu').fadeToggle();
});

$('.btn-burger__mobile').click(function () {
   $('.navigation').fadeToggle();
});

$('.drop-item__links').hover(function (e) {
    e.preventDefault();
   $(this).siblings('.drop-menu').fadeToggle();
});

$('form label input').focus(function () {
   $(this).siblings('.text-form').hide();
});


$('.product-slider').slick({
    slidesToShow: 4,
    infinite: true,
    arrows: false,
    responsive: [
        {
            breakpoint: 1260,
            settings: {
                slidesToShow: 3
            }
        },
        {
            breakpoint: 960,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 650,
            settings: {
                slidesToShow: 1,
            }
        }
    ]
});


$('.slick-next__arrow').on('click', function() {
    $('.product-slider').slick('slickNext');
});

$('.slick-prev__arrow').on('click', function() {
    $('.product-slider').slick('slickPrev');
});



