
//  sticky nav
$(window).on("scroll", function () {
    if ($(window).scrollTop() > 0) {
        $("nav").addClass("fixed-top");
    } else {
        $("nav").removeClass("fixed-top");
    }
});
$('body').scrollspy({ target: ".navbar", offset: 50 });
$('.carousel').carousel({
    interval: 3000
});

$('.page_nav').owlCarousel({
    items: 8,
    loop: true,
    margin: 1,
    nav: true,
    dots: false,
})