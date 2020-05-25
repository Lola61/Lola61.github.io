$(function() {
    $('.slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        adaptiveHeight: true,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,


                }
            },
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 500,
                settings: "unslick"
            }
            // breakpoint: 400,
            // settings: {
            //     centerMode: true,
            //     //текущий слайд по центру
            //     variableWidth: true
            // }
        ]

    });


    $('.menu__btn').click(function(event) {
        $('.menu__btn,.menu').toggleClass('active');
        $('body').toggleClass('lock');
    });

    $('.arrow').click(function(event) {
        $(this).toggleClass('arrow-active').next().slideToggle(300);
    });
})