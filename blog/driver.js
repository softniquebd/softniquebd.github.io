function renderCategorizedPosts(categoryName) {
    alert(categoryName)
}


$.getJSON("data.json", function (info) {
    var query = window.location.href.split("?")[1];
    var data = info.posts;
    var totalPosts = data.length;
    var categories = [];

    data.forEach(function(element) {
        categories.push(element.category);
    })

    var uniqueCategories = categories.filter((item, i, ar) => ar.indexOf(item) === i);
    var uniqueCatIDs = [];

    uniqueCategories.forEach(function (element) {
        uniqueCatIDs.push(data.findIndex(function(item, i){
            return item.category === element
        }));
    })

    console.log(uniqueCatIDs)
    console.log(categories)
    console.log(uniqueCategories);


    if (query.indexOf("post=") !== -1) {
        var postNumber = parseInt(query.split('post=')[1]);
        if (postNumber > -1 && postNumber < totalPosts) {
            alert('congratulation. post number = ' + postNumber)
        }
        else {
            alert('aaahaaaa')
        }
    }
    else if (query.indexOf("cat=") !== -1) {
        var categoryName = query.split('cat=')[1]
        if (categoryName != null && categoryName != undefined && categoryName != '' && uniqueCategories.indexOf(categoryName) !== -1) {
           renderCategorizedPosts(categoryName);
        }
        else {
            //alert("blog main page")
        }
    }



}).fail(function () {
    console.log("An error has occurred.");
});



