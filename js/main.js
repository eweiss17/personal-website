$(document).ready(function() {
    easingFunctions();

    // while (true) {
        flashingColors();
    // }

    // $(window).scroll(function(){
    //
    //     // if($(this).scrolling() == true) {
    //     //     $('#menu').fadeOut(500);
    //     // }
    //
    //     if ($(this).scrollTop() > 400) {
    //         $('#menu').fadeIn(500);
    //     } else {
    //         $('#menu').fadeOut(500);
    //     }
    //
    //     // $('#menu').fadeOut(500);
    // });

    //Scrolling
    $(window).scroll($.debounce( 250, true, function(){
        $('#menu').fadeOut(500);
    }));

    //Not scrolling
    $(window).scroll($.debounce( 250, function(){
        if ($(this).scrollTop() > 400) {
            $('#menu').fadeIn(500);
        } else {
            $('#menu').fadeOut(500);
        }
    }));

});

function easingFunctions() {
    $(".ease-one")
        .animate({
            opacity: 1,
            left: "+=50"
        }, 2500);

    setTimeout(function(){
        $(".ease-two")
            .animate({
                opacity: 1,
                left: "+=50"
            }, 2500);
        }, 1000
    );

    setTimeout(function(){
            $(".ease-three")
                .animate({
                    opacity: 1,
                    left: "+=50"
                }, 2500);
        }, 1500
    );

    setTimeout(function() {
        $(".ease-four")
            .animate({
                opacity: 1,
                left: "+=75"
            }, 2500);
        }, 2000
    );

    setTimeout(function() {
            $(".ease-five")
                .animate({
                    opacity: 1,
                }, 2000);
        }, 3000
    );

}

function flashingColors() {

    var white = true;

    for (var i = 5000; i < 100001; i = i + 5000) {
        if (white) {
            setTimeout(function () {
                    $(".ease-five")
                        .animate({
                            color: "#FFFFFF"
                        }, 250);
                }, i
            );

            setTimeout(function () {
                    $(".ease-five")
                        .animate({
                            color: "#191919"
                        }, 1000);
                }, i + 500
            );

            setTimeout(function () {
                    $(".ease-five")
                        .animate({
                            color: "#FFFFFF"
                        }, 250);
                }, i + 2000
            );
            setTimeout(function () {
                $(".ease-five")
                    .animate({
                        color: "#191919"
                    }, 750);
            }, i + 2500
            );
            white = false;
        }
        else
        {
            setTimeout(function () {
                    $(".ease-five")
                        .animate({
                            color: "#191919"
                        }, 1000);
                }, i + 3000
            );
            white = true;
        }
    }
}
