var dataLength = $('#postList').children().length;
var postsToShow = 3;
var estimatedPages = Math.ceil(dataLength / postsToShow);
var pageState = 0;
console.log(estimatedPages)


var html = '';
for (let index = 0; index < estimatedPages; index++) {
    html += `<a href="#0" class="pages" id="paginate${index}">${index+1}</a>`;
}
$(html).insertAfter('#routeToPrev')
if (dataLength < postsToShow) $('#postList').css('height', 'auto')
$('#postList div.post-content').hide();
$('#paginate0').addClass('active-pagination').siblings('.active-pagination').removeClass('active-pagination');
$("#postList .post-content").slice(0, postsToShow).each(function (index) {
        $(this).show()
    })


function scroller() {
    dataLength < postsToShow ? $('#postList').css('height', 'auto'):
    $('#postList').css('height', '129em');
    setTimeout(function () {

    var scroll = $('#PostFeed').offset().top;
        $('html, body').animate({
        scrollTop: scroll
        }, 400);
    }, 300);

    setTimeout(function() {
        $('#postList').css('height', 'auto');
    }, 1000);
}

$('#routeToPrev').click(function () {
    scroller();
    $('#paginate'+(pageState-1)).click()
});

$(' .pages').click(function (e) {
    scroller();
    var indexValue = parseInt($(this).attr('id').split('paginate')[1]);
    pageState = indexValue;
    $(this).addClass('active-pagination').siblings('.active-pagination').removeClass('active-pagination');
    $('#postList div.post-content').hide();
    $("#postList .post-content").slice(indexValue*postsToShow , (indexValue+1)*postsToShow).each(function(index) {
        if (indexValue < dataLength) {
            $(this).show()
        }
    })
});

$(' #routeToNext').click(function () {
    scroller();
    $('#paginate'+(pageState+1)).click()
});

