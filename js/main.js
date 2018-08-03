$('.nav-toggle').on('click', function () {
    $('#menu').toggleClass('active');
});
$(window).load(function () {
    $(".loader_inner").fadeOut();
    $(".loader").delay(500).fadeOut("slow");
});