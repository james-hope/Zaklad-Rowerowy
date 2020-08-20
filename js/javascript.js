var $arrow = $("#arrow");
var $oNas = $("li#oNas");
var $oferta = $("#oferta");
var $kontakt = $("#kontakt");


$("#arrow").on("click", function () {
    $("body,html").animate({
        scrollTop: $("div#oNas").offset().top
    }, 1000)
})

$("#arrow_up").on("click", function () {
    $("body,html").animate({
        scrollTop: $("div#mainPage").offset().top
    }, 1000)
})

$("li#oNas").on("click", function () {
    $("body, html").animate({
        scrollTop: $("div#oNas").offset().top
    }, 1000)
})

$("li#oferta").on("click", function () {
    $("body, html").animate({
        scrollTop: $("div#oferta").offset().top
    }, 1000)
})

$("li#kontakt").on("click", function () {
    $("body, html").animate({
        scrollTop: $("div#kontakt").offset().top
    }, 1000)
})

$("table tr td#contactUs").on("click", function () {
    $("body, html").animate({
        scrollTop: $("div#kontakt").offset().top
    }, 1000)
})

