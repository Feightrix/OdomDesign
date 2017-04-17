$(window).scroll(function() {
    if($(this).scrollTop() > 50) {
        $('.afterScroll').addClass('opaque');
        $('.beforeScroll').removeClass('opaque');
    } else {
        $('.afterScroll').removeClass('opaque');
        $('.beforeScroll').addClass('opaque');
    }
});