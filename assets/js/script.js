$(document).ready(function () {
    "use strict";
    $(window).scroll(function () {
        if ($(this).scrollTop() > 150)
            $('.btnx').fadeIn('slow');
        else
            $('.btnx').fadeOut('slow');
    });
    $(document).on('click', '.btnx', function () {
        $('html, body').animate({ scrollTop: 0 }, 800);
        return false;
    });
});
