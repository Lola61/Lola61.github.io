$(function() {
    $('.goals__tab').on('click', function(event) {
        var id = $(this).attr('data-id');
        $('.goals__inner').find('.goals__content-item').removeClass('active-tab').hide();
        $('.goals__tabs').find('.goals__tab').removeClass('active');
        $(this).addClass('active');
        $('#' + id).addClass('active-tab').fadeIn();
        return false;
    });


    $('.menu__btn').click(function(event) {
        $('.menu__btn,.menu').toggleClass('active');
        $('body').toggleClass('lock');
    });

    $('.arrow').click(function(event) {
        $(this).toggleClass('arrow-active').next().slideToggle(300);
    });
});