$(document).ready(function () {
    $.getJSON("data.json", function (data) {
        console.log(data.posts[0]); // Prints: Harry
        // console.log(data.age); // Prints: 14
    }).fail(function () {
        console.log("An error has occurred.");
    });
    if (window.location.href.split("?")[1])
   
});
