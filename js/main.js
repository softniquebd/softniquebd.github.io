$(".nav-link").append("<i class='fa fa-plus'></i>");
// svg computer text manupulation

$(document).ready(function () {
  $(document).resize();
});

$(window).resize(function () {
  var width = $(window).width();
  if (width <= 821) {
    $('[id ="typer"]').removeClass("h1");
    $('[id= "typer"]').addClass("h3");
    // $('[id ="circular"]').css("font-size", "2vw !important");
  } else {
    $('[id ="typer"]').removeClass("h3");
    $('[id="typer"]').addClass("h1");
  }
});

/*=============================================== 
	       Wow Init
    ================================================*/
$(function () {
  new WOW().init();
});
// wow init ends

/*=============================================== 
	       Parallax Init
	  ================================================*/
if ($("#apps_craft_animation").length > 0) {
  $("#apps_craft_animation").parallax({
    scalarX: 10.0,
    scalarY: 5.0,
  });
}
// paralax init ends

// typed.js
$(function () {
  $(".typed").typed({
    strings: ["Websites", "Apps", "Ideas"],
    // Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
    stringsElement: null,
    // typing speed
    typeSpeed: 50,
    // time before typing starts
    startDelay: 1200,
    // backspacing speed
    backSpeed: 20,
    // time before backspacing
    backDelay: 5000,
    // loop
    loop: true,
    // false = infinite
    loopCount: 5,
    // show cursor
    showCursor: false,
    // character for cursor
    cursorChar: "|",
    // attribute to type (null == text)
    attr: null,
    // either html or text
    contentType: "html",
    // call when done callback function
    callback: function () {},
    // starting callback function before each string
    preStringTyped: function () {},
    //callback for every typed string
    onStringTyped: function () {},
    // callback for reset
    resetCallback: function () {},
  });
});

$(function () {
  $(".typed2").typed({
    strings: [" modern flavor.", " better UX.", " ultimate solutions."],
    // Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
    stringsElement: null,
    // typing speed
    typeSpeed: 30,
    // time before typing starts
    startDelay: 2200,
    // backspacing speed
    backSpeed: 20,
    // time before backspacing
    backDelay: 3500,
    // loop
    loop: true,
    // false = infinite
    loopCount: 5,
    // show cursor
    showCursor: false,
    // character for cursor
    cursorChar: "|",
    // attribute to type (null == text)
    attr: null,
    // either html or text
    contentType: "html",
    // call when done callback function
    callback: function () {},
    // starting callback function before each string
    preStringTyped: function () {},
    //callback for every typed string
    onStringTyped: function () {},
    // callback for reset
    resetCallback: function () {},
  });
});
// typed.js ends

//filterizr script
const filterizr = $(".filter-container").filterizr({
  controlsSelector: ".fltr-controls",
  gridItemsSelector: ".filtr-item",
  spinner: {
    enabled: true,
  },
});
$("#shuffle").click(() => {
  filterizr.filterizr("shuffle");
});

const sortFilterizr = (order) => {
  filterizr.filterizr("sort", $("select :selected").val(), order);
};
$("#asc-btn").click(() => sortFilterizr("asc"));
$("#des-btn").click(() => sortFilterizr("desc"));

//  app project carousal
if ($(".screenshot-carousel").length) {
  $(".screenshot-carousel").owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    smartSpeed: 500,
    autoplay: 4000,
    navText: [
      '<span class="fa fa-angle-left"></span>',
      '<span class="fa fa-angle-right"></span>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      480: {
        items: 1,
      },
      600: {
        items: 1,
      },
      800: {
        items: 1,
      },
      1024: {
        items: 1,
      },
    },
  });
}
