// $(function() {

$(function() {
    $('.menu__btn').click(function(event) {
        $('.menu__btn,.menu').toggleClass('active');
        $('body').toggleClass('lock');
    });

    $('.arrow').click(function(event) {
        $(this).toggleClass('arrow-active').next().slideToggle(300);
    });
})