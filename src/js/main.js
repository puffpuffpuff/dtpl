//header animation
$('.header__menu--block').hover(function() {
    var i = $(this).data('i');
    var col = "col-" + i;
    $('.header__menu--icon').eq(i).addClass('active');
    $('.header__menu--icon').eq(i).addClass(col);
    $('.header__menu--text').eq(i).addClass('active');
}, function() {
    var i = $(this).data('i');
    var col = "col-" + i;
    $('.header__menu--icon').removeClass('active');
    $('.header__menu--icon').removeClass(col);
    $('.header__menu--text').removeClass('active');
});