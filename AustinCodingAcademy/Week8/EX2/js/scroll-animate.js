$(document).ready(function ()) {
$(window).scroll(function ()) {

    var verticalScroll = $(this).scrollTop();
    if (verticalScroll > 610) {

        $ ('#sandwish').addclass('animated flip');
    }

    console.log(verticalScroll);


});


$(window).scroll(function ()) {

    var verticalScroll = $(this).scrollTop();
    if (verticalScroll > 1074) {

        $ ('#my_1').addclass('animated fadeInDownBig');
        $('my_1').removeClass('hide_me');
         $ ('#my_2').addclass('animated fadeinRightBig');
         $('my_2').removeClass('hide_me');
         $ ('#my_3').addclass('animated fadeinLeftBig');
         $('my_3').removeClass('hide_me');
         $ ('#my_4').addclass('animated fadeinUpBig');
         $('my_4').removeClass('hide_me');
    }

    console.log(verticalScroll);


});




});