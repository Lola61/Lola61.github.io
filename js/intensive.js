$(function() {

    $('.program__header').click(function(event) {
        if ($('.program__item').hasClass('one')) {
            $('.program__header').not($(this)).removeClass('question-active');
            $('.program__block').not($(this).next()).slideUp(300);
        }
        $(this).toggleClass('question-active').next().slideToggle(300);
    });

    $('.menu__btn').click(function(event) {
        $('.menu__btn,.menu').toggleClass('active');
        $('body').toggleClass('lock');
    });

    $('.arrow').click(function(event) {
        $(this).toggleClass('arrow-active').next().slideToggle(300);
    });
})