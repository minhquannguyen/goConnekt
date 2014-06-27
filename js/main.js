var jumboHeight = $('.jumbotron').outerHeight();
function parallax(){
    var scrolled = $(window).scrollTop();
    $('.bg').css('top', (jumboHeight-scrolled) + 'px');
}

$(window).scroll(function(e){
    parallax();
});