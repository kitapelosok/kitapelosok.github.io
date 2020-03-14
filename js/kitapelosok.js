var firebaseConfig = {
    apiKey: "AIzaSyDuQiWkzJ4YrZnS-gGWgQHJ99kdU9eMMY0",
    authDomain: "kita-pelosok-web.firebaseapp.com",
    databaseURL: "https://kita-pelosok-web.firebaseio.com",
    projectId: "kita-pelosok-web",
    storageBucket: "kita-pelosok-web.appspot.com",
    messagingSenderId: "310682620830",
    appId: "1:310682620830:web:df75138a2695854d26fc8f",
    measurementId: "G-KLQYVXE6M9"
};

firebase.initializeApp(firebaseConfig);

var db = firebase.firestore();


(function ($) {
    "use strict"; // Start of use strict

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: (target.offset().top - 54)
                }, 1000, "easeInOutExpo");
                return false;
            }
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $('.js-scroll-trigger').click(function () {
        $('.navbar-collapse').collapse('hide');
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $('body').scrollspy({
        target: '#mainNav',
        offset: 56
    });

    // Collapse Navbar
    var navbarCollapse = function () {
        if ($("#mainNav").offset().top > 100) {
            $("#mainNav").addClass("navbar-shrink");
            $("#mainNav").css("background-color", "#256a81");
        } else {
            $("#mainNav").removeClass("navbar-shrink");
            $("#mainNav").css("background-color", "transparent");
        }
    };
    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);

})(jQuery); // End of use strict

var togglerClicked = false;

$("#toggler-btn").click(function () {

    // if page on top only change the bg
    if ($("#mainNav").offset().top < 100) {
        // if it's not clicked before (bg should be transparent)
        // set bg to solid colod
        if (!togglerClicked) {
            $("#mainNav").css("background-color", "#256a81");
            togglerClicked = true;
        } else {
            // if btn already clicked (bg should be solid)
            // and user click btn again to colapse the navbar
            // set bg to transparent again
            $("#mainNav").css("background-color", "transparent");
            togglerClicked = false;
        }
    }
});

$("#subscribe-btn").click(function () {

    // set button to loading
    var loading = '<span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>Loading...'
    $("#subscribe-btn").html(loading)

    var email = $("#subscribe-email").val();
    if (email=="") {
        alert("email can't be empty")
    } else {
        db.collection("subscriber_emails").add({
            email: email,
            created_at: firebase.firestore.Timestamp.now()
        })
            .then(function (docRef) {
                alert("successfully subscribed");
            })
            .catch(function (error) {
                alert("fail to subscribe");
            });
    }
    $("#subscribe-btn").html("Subscribe")
});