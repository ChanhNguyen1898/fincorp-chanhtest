$(function () {
    $(".navbar-toggler").click(function () { 
        $(this).toggleClass("collapsed open");
        
    });
    $('.partner-slide').owlCarousel({
        autoplay: true,
        loop: true,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            500: {
                items: 2
            }
        }
    });
});
