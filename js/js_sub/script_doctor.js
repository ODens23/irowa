/* First Script for Irowa Medical Centre */

//Below is the alert box
$(function () {

    var myVariable = "Welcome to Irowa Medical Centre";
    alert(myVariable);
});

/* ======================================
|   |   |   Preloader
========================================= */
$(window).on('load', function () {
    $('#status').fadeOut();
    $('#preloader').delay(350).fadeOut();
});

/* ======================================
|   |   |   Team
========================================= */
$(function () {
    $("#team-members").owlCarousel({
        items: 2,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        responsive: {
            //breakpoint from 0 up
            0: {
                items: 1
            },
            //breakpoint from 480 up
            480: {
                items: 2
            }
        }
    });
});

/* ======================================
|   |   |   Responsive Tab
========================================= */
$(function () {

    $("#services-tabs").responsiveTabs({
        animation: 'slide'
    });

});

/* ======================================
|   |   |   Testimonials
========================================= */
$(function () {
    $("#testimonial-slider").owlCarousel({
        items: 1,
        autoplay: false,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
    });
});

/* ======================================
|   |   |   Stats
========================================= */
$(function () {

    $(".counter").counterUp({
        delay: 10,
        time: 10000
    });
});

/* ======================================
|   |   |   Google Map
========================================= */
$(window).on('load', function() {

    //Map Variables
    var addressString = '2, Oliha Lane, Off Benin Sapele Road, Opposite Police Microfinance Bank, P.O Box, 12254, Benin City, Edo State';
    var myLatlng = {lat: 6.32066, lng: 5.62776};

    //1. Render Map
    var	map = new google.maps.Map(document.getElementById('map'), {
        zoom: 11,
        center: myLatlng
    });

    //2. Add Marker
    var marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
        title: "Irowa Medical Centre"
    });

    //3. Add Info Window
    var infowindow = new google.maps.InfoWindow({
        content: addressString
    });

    //4. Show info window when user clicks marker
    marker.addListener('click', function() {
        infowindow.open(map, marker);
    });

    //5. Resize function
    google.maps.event.addDomListener(window, 'resize', function() {
	
        var center = map.getCenter();
        google.maps.event.trigger(map, 'resize');
        map.setCenter(center);
    });

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