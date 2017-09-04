$(document).ready(function() {
    easingFunctions();
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
                    opacity: 1
                }, 2000);
        }, 3000
    );

}
