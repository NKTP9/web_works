$(document).ready(function () {
    $('.one-post').hover(function (event) {
        $(event.currentTarget).find('.one-post-shadow').animate({
            opacity:
                '0.1'
        }, 300);
    }, function (event) {
        $(event.currentTarget).find('.one-post-shadow').animate({opacity: '0'},
            300);
    })
    $('.header img[class="logo"]').hover(function (event) {
        var NeeWidth = parseInt($(this).css('width').replace('px', '')) + 20 + 'px'
        $(this).animate({width: NeeWidth}, 300);
    }, function (event) {
        var NeeWidth = parseInt($(this).css('width').replace('px', '')) - 20 + 'px'
        $(this).animate({width: NeeWidth}, 300);
    });
});