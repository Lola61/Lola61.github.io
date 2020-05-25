$(function() {
    $('.slider').slick({
        arrows: false,
        dots: true,
        dotsClass: 'header-dots',
        autoplay: true,
        autoplaySpeed: 2000

    });

    $('.reviews__slider').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        dots: true,
        dotsClass: 'reviews-dots',
    });

    $('.menu__btn').click(function(event) {
        $('.menu__btn,.menu').toggleClass('active');
        $('body').toggleClass('lock');
    });

    $('.arrow').click(function(event) {
        $(this).toggleClass('arrow-active').next().slideToggle(300);
    });

    $('.question__title').click(function(event) {
        if ($('.cover').hasClass('one')) {
            $('.question__title').not($(this)).removeClass('question-active');
            $('.content').not($(this).next()).slideUp(300);
        }
        $(this).toggleClass('question-active').next().slideToggle(300);
    });

})