$(document).ready(function () {

    $(window).scroll(function () {

        var verticalScroll = $(this).scrollTop();

        if (verticalScroll >= 200) {

            $('#pancakes').addClass('animated flipInX');
        }

    });

    $(window).scroll(function () {

        var verticalScroll = $(this).scrollTop();

        if (verticalScroll >= 800) {

            $('#my_jello').addClass('animated jello');
        }

        console.log(verticalScroll);
    });
});