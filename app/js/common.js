$('.main-slider').slick({
    slidesToShow: 1,
    dots: true,
    arrows: false,
    fade: true,
    autoplay: true,
    autoplaySpeed: 2000,
});


$('.btn-burger').click(function () {
   $('.dropDown-menu').fadeToggle();
});

$('.btn-burger__mobile').click(function () {
   $('.navigation').fadeToggle();
});


$('.product-slider1').slick({
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

$('.product-slider2').slick({
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

$('.product-slider3').slick({
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

$('.product-slider4').slick({
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

$('.tabs-wrap li a').click(function (e) {
    e.preventDefault();
    var target = $(this.hash);

    $('.tab_content:visible').fadeOut("100", function () {
        target.fadeIn("100", function() {
            $('.product-slider').slick("reinit");
        });
    });

    $('.tabs-wrap li').removeClass('active');
    $(this).parents('li').addClass('active').closest('.tabs-wrap').find('.tab_content').removeClass('active');

    var selectTab = $(this).attr("href");

    $(selectTab).addClass('active');
});


