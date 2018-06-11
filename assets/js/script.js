$(document).ready(function () {
    "use strict";
    $(window).scroll(function () {
        if ($(this).scrollTop() > 150)
            $('.btnx').fadeIn('slow');
        else
            $('.btnx').fadeOut('slow');
    });
    $(document).on('click', '.jump', function () {
        $('html, body').animate({ scrollTop: 900 }, 800);
        return false;
    });
    $(document).on('click', '.btnx', function () {
        $('html, body').animate({ scrollTop: 0 }, 800);
        return false;
    });
});
