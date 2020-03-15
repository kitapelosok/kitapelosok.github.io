function changeNavColorTheme(theme) {
    switch (theme) {
        case 'light':
            $(".navbar-brand-img").attr("src", "img/logos/kitapelosok-h-tp.png");
            $(".nav-link").css('color', 'white');
            $(".navbar-toggler").css('color', 'white');
            break;
        case 'dark':
            $(".navbar-brand-img").attr("src", "img/logos/kitapelosok-h-color.png");
            $(".nav-link").css('color', 'black');
            $(".navbar-toggler").css('color', 'black');
    }
}

(function($) {
    "use strict"; // Start of use strict

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
        if (
            location.pathname.replace(/^\//, "") ==
            this.pathname.replace(/^\//, "") &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
                $("html, body").animate({
                        scrollTop: target.offset().top - 54
                    },
                    1000,
                    "easeInOutExpo"
                );
                return false;
            }
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $(".js-scroll-trigger").click(function() {
        $(".navbar-collapse").collapse("hide");
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $("body").scrollspy({
        target: "#mainNav",
        offset: 56
    });

    // Collapse Navbar

    // check what navbar is used
    if ($("#mainNav").length) {
        var navbarCollapse = function() {
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
        $(window).scroll(navbarCollapse);
    } else {
        var whiteNavbarCollapse = function() {
            if ($("#whiteNav").offset().top > 100) {
                $("#whiteNav").addClass("navbar-shrink");
                $("#whiteNav").css("background-color", "#256a81");
                changeNavColorTheme("light")
            } else {
                $("#whiteNav").removeClass("navbar-shrink");
                $("#whiteNav").css("background-color", "transparent");
                changeNavColorTheme("dark")
            }
        };

        whiteNavbarCollapse();
        // Collapse the navbar when page is scrolled

        $(window).scroll(whiteNavbarCollapse);
    }
})(jQuery); // End of use strict

// for mobile toggler

var togglerClicked = false;

$("#toggler-btn").click(function() {
    // if page on top only change the bg

    if ($("#mainNav").length) {
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
    } else {
        if ($("#whiteNav").offset().top < 100) {
            // if it's not clicked before (bg should be transparent)
            // set bg to solid colod
            if (!togglerClicked) {
                $("#whiteNav").css("background-color", "#256a81");
                changeNavColorTheme("light")
                togglerClicked = true;
            } else {
                // if btn already clicked (bg should be solid)
                // and user click btn again to colapse the navbar
                // set bg to transparent again
                $("#whiteNav").css("background-color", "transparent");
                changeNavColorTheme("dark")
                togglerClicked = false;
            }
        }
    }
});