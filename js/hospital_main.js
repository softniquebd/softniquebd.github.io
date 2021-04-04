/*! Show Dropdown Menu content on hover */
$(function () {
    $(".dropdown").hover(
        function () { $(this).addClass('open') },
        function () { $(this).removeClass('open') }
    );
});

/*! Automatically Highlight Active Menu Link */
$(document).ready(function () {
    var url = window.location;
    // Will only work if string in href matches with location
    $('ul.nav a[href="' + url + '"]').parent().addClass('active');

    // Will also work for relative and absolute hrefs
    $('ul.nav a').filter(function () {
        return this.href == url;
    }).parent().addClass('active').parent().parent().addClass('active');
});

/*! Preload(Show wow effects after page loads) At Body Starts */
$(window).load(function () {
    $("body").removeClass("preload");
});

/*! Preloader(Show animation before loading page) Starts */
jQuery(document).ready(function ($) {

    // site preloader -- also uncomment the div in the header and the css style for #preloader
    $(window).load(function () {
        $('#preloader').fadeOut('slow', function () { $(this).remove(); });
    });

});
/*! Preloader Ends */

/*! Main Slider */
/* Demo Scripts for Bootstrap Carousel and Animate.css article
* on SitePoint by Maria Antonietta Perna
*/

(function ($) {

    //Function to animate slider captions 
    function doAnimations(elems) {
        //Cache the animationend event in a variable
        var animEndEv = 'webkitAnimationEnd animationend';

        elems.each(function () {
            var $this = $(this),
                $animationType = $this.data('animation');
            // requires you add [data-delay] & [data-dur] in markup. values are in ms
            $animDur = parseInt($this.data('dur'));
            $animDelay = parseInt($this.data('delay'));

            $this.css({ "animation-duration": $animDur + "ms", "animation-delay": $animDelay + "ms", "animation-fill-mode": "both" }).addClass($animationType).one(animEndEv, function () {
                $this.removeClass($animationType);
            });
        });
    }

    //Variables on page load 
    var $myCarousel = $('#carousel-example-generic'),
        $firstAnimatingElems = $myCarousel.find('.item:first').find("[data-animation ^= 'animated']");

    //Initialize carousel 
    $myCarousel.carousel();

    //Animate captions in first slide on page load 
    doAnimations($firstAnimatingElems);

    /*	//Pause carousel  
        $myCarousel.carousel('pause'); */


    //Other slides to be animated on carousel slide event 
    $myCarousel.on('slide.bs.carousel', function (e) {
        var $animatingElems = $(e.relatedTarget).find("[data-animation ^= 'animated']");
        doAnimations($animatingElems);
    });

})(jQuery);


/*! Back To Top */
$(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
        $('.scrolltop:hidden').stop(true, true).fadeIn();
    } else {
        $('.scrolltop').stop(true, true).fadeOut();
    }
});
$('.scrolltop').on("click", function () {
    $('html,body').animate({ scrollTop: 0 }, 'slow', function () {
    });

});


//Slick Initialization for Client List Slideshow
/*$(document).ready(function(){
    $('.our-client').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: false,
        infinite: true,
        arrows: false,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 3,
                infinite: true,
                dots: false
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]
    	
    });
});	*/

//Alert Auto Close
window.setTimeout(function () {
    $(".alert").fadeTo(500, 0).slideUp(500, function () {
        $(this).remove();
    });
}, 6000);


/*[ Play video]
===========================================================*/
var srcOld = $('.video-mo-01').children('iframe').attr('src');

$('[data-target="#modal-video-01"]').on('click', function () {
    $('.video-mo-01').children('iframe')[0].src += "&autoplay=1";

    setTimeout(function () {
        $('.video-mo-01').css('opacity', '1');
    }, 300);
});

$('[data-dismiss="modal"]').on('click', function () {
    $('.video-mo-01').children('iframe')[0].src = srcOld;
    $('.video-mo-01').css('opacity', '0');
});


// Owl Carousel Our Client List 
/*var owl = $('.owl-carousel');
$('#ourClientList').owlCarousel({
    loop:true,
    margin:0,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:false,
    responsive:{
        0:{
            items:2
        },
        479:{
            items:3
        },
        768:{
            items:4,
        },
        992:{
            items:5
        },
        1200:{
            items:5
        }
    }
});
owl.on('mousewheel', '.owl-stage', function (e) {
    if (e.deltaY>0) {
        owl.trigger('next.owl');
    } else {
        owl.trigger('prev.owl');
    }
    e.preventDefault();
});*/