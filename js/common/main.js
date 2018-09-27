;
(function() {

    'use strict';

    // iPad and iPod detection	
    var isiPad = function() {
        return (navigator.platform.indexOf("iPad") != -1);
    };

    var isiPhone = function() {
        return (
            (navigator.platform.indexOf("iPhone") != -1) ||
            (navigator.platform.indexOf("iPod") != -1)
        );
    };

    // OffCanvass
    var offCanvass = function() {
        $('body').on('click', '.js-fh5co-menu-btn, .js-fh5co-offcanvass-close', function() {
            $('#fh5co-offcanvass').toggleClass('fh5co-awake');
        });
    };

    // Click outside of offcanvass
    var mobileMenuOutsideClick = function() {
        $(document).click(function(e) {
            var container = $("#fh5co-offcanvass, .js-fh5co-menu-btn");
            if (!container.is(e.target) && container.has(e.target).length === 0) {
                if ($('#fh5co-offcanvass').hasClass('fh5co-awake')) {
                    $('#fh5co-offcanvass').removeClass('fh5co-awake');
                }
            }
        });

        $(window).scroll(function() {
            if ($(window).scrollTop() > 500) {
                if ($('#fh5co-offcanvass').hasClass('fh5co-awake')) {
                    $('#fh5co-offcanvass').removeClass('fh5co-awake');
                }
            }
        });
    };

    // Magnific Popup

    var magnifPopup = function() {
        $('.image-popup').magnificPopup({
            type: 'image',
            removalDelay: 300,
            mainClass: 'mfp-with-zoom',
            titleSrc: 'title',
            gallery: {
                enabled: true
            },
            zoom: {
                enabled: true, // By default it's false, so don't forget to enable it

                duration: 300, // duration of the effect, in milliseconds
                easing: 'ease-in-out', // CSS transition easing function

                // The "opener" function should return the element from which popup will be zoomed in
                // and to which popup will be scaled down
                // By defailt it looks for an image tag:
                opener: function(openerElement) {
                    // openerElement is the element on which popup was initialized, in this case its <a> tag
                    // you don't need to add "opener" option if this code matches your needs, it's defailt one.
                    return openerElement.is('img') ? openerElement : openerElement.find('img');
                }
            }
        });
    };



    var animateBoxWayPoint = function() {

        if ($('.animate-box').length > 0) {
            $('.animate-box').waypoint(function(direction) {

                if (direction === 'down' && !$(this).hasClass('animated')) {
                    $(this.element).addClass('bounceIn animated');
                }

            }, { offset: '75%' });
        }

    };




    $(function() {
        magnifPopup();
        offCanvass();
        mobileMenuOutsideClick();
        animateBoxWayPoint();
    });


}());
$(document).ready(function() {
        $("nav .nav").append("<li><a href ='index.html'>Index</a><i></i></li><li><a href ='page2.html'>Photos</a><i></i></li><li><a href = 'page3.html'>Basketball</a><i></i></li><li><div id='tp-weather-widget' style='width:300px;float:left'></div></li>");
        $('.nav li a').each(function() {
            if ($($(this))[0].href == String(window.location))
                $(this).parent().addClass('cur');
        });

    })
    (function(T, h, i, n, k, P, a, g, e) {
        g = function() {
            P = h.createElement(i);
            a = h.getElementsByTagName(i)[0];
            P.src = k;
            P.charset = "utf-8";
            P.async = 1;
            a.parentNode.insertBefore(P, a)
        };
        T["ThinkPageWeatherWidgetObject"] = n;
        T[n] || (T[n] = function() {
            (T[n].q = T[n].q || []).push(arguments)
        });
        T[n].l = +new Date();
        if (T.attachEvent) { T.attachEvent("onload", g) } else { T.addEventListener("load", g, false) }
    }(window, document, "script", "tpwidget", "//widget.seniverse.com/widget/chameleon.js"));
tpwidget("init", {
    "flavor": "slim",
    "location": "WTW3SJ5ZBJUY",
    "geolocation": "enabled",
    "language": "zh-chs",
    "unit": "c",
    "theme": "chameleon",
    "container": "tp-weather-widget",
    "bubble": "enabled",
    "alarmType": "badge",
    "uid": "UE15465C00",
    "hash": "436b4f07f26fb2c11acef727b1eb1e05"
});
tpwidget("show");