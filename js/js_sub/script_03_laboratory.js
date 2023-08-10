/* First Script for Irowa Medical Centre */

/* Below is the alert box
$(function () {

    var myVariable = "Welcome to Irowa Medical Centre";
    alert(myVariable);
});*/

/* ======================================
|   |   |   Preloader
========================================= */
$(window).on('load', function () {
    $('#status').fadeOut();
    $('#preloader').delay(350).fadeOut();
});


/* ======================================
|   |   |   Smooth scroll
========================================= */
$(function ()  {

    $("a.smooth-scroll").click(function (event) {

        event.preventDefault();
	
        //get section id like #about, #services, #teams etc
        var section_id = $(this).attr("href");
    
        $("html, body").animate({
            scrollTop: $(section_id).offset().top - 0
        }, 1250, "easeInOutExpo");

    });
}); 

/* ======================================
|   |   |   Animation
========================================= */
$(function () {
    new WOW().init();
});

//home animation on page load
$(window).on('load', function() {

    $("#home-heading-1").addClass("animated fadeInDown");
    $("#home-heading-2").addClass("animated fadeInLeft");
    $("#home-text").addClass("animated zoomIn");
    $(".left-section").addClass("animated zoomIn");
    $(".centre-section").addClass("animated zoomIn");
    $(".right-section").addClass("animated zoomIn");
    $("#arrow-down i").addClass("animated fadeInDown infinite");

});