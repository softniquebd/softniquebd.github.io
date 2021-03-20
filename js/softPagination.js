var dataLength = $('#postList').children().length;
var postsToShow = 2;
var estimatedPages = (dataLength/postsToShow).toFixed();
console.log(estimatedPages)




$('div.post-content').hide();
// $('div.post-content:lt(' + postsToShow + ')').show();
$(".post-content").slice(postsToShow-1 , dataLength).each(function(index) {
    $(this).show()
})




var html = '';
for (let index = 0; index < estimatedPages; index++) {
    html += `<a href="#0" class="pages">${index+1}</a>`;
}
$(html).insertAfter('#routeToFirst')




$('#routeToFirst').click(function(){
        alert("go to first page");
});
$('#routeToLast').click(function(){
        alert("go to last page");
});

