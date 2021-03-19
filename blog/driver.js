function loadScript(src) {
    return new Promise(function (resolve, reject) {
        if ($("script[src='" + src + "']").length === 0) {
            var script = document.createElement('script');
            script.onload = function () {
                resolve();
            };
            script.onerror = function () {
                reject();
            };
            script.src = src;
            document.body.appendChild(script);
        } else {
            resolve();
        }
    });
}

async function loadAllScript() {
    await loadScript("https://cdnjs.cloudflare.com/ajax/libs/wow/1.1.2/wow.min.js");
    await loadScript("../js/owl.js");
    await loadScript("../js/jquery.fancybox.js");
    await loadScript("https://cdnjs.cloudflare.com/ajax/libs/owl-carousel/1.3.3/owl.carousel.min.js");
    await loadScript("https://cdnjs.cloudflare.com/ajax/libs/gsap/3.2.6/gsap.min.js");
    await loadScript("../js/owl.carousel.min.js");
    await loadScript("../js/aos.js");
    await loadScript("../js/mainblog.js");
    await loadScript("https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js");
}

$.getJSON("data.json", async function (info) {
    // VARIABLE SETUP STARTS
    var url = window.location.href.replace('#PostFeed', '');
    var loaction = url.split("?")[0];
    var query = url.split("?")[1];
    var data = info.posts;
    var totalPosts = data.length;
    var categories = [];
    var tags = [];

    data.forEach(function (element) {
        categories.push(element.category);
        element.tags.forEach(function (tag) {
            tags.push(tag)
        })
    })

    tags = tags.filter((item, i, ar) => ar.indexOf(item) === i);
    var uniqueCategories = categories.filter((item, i, ar) => ar.indexOf(item) === i);
    var uniqueCatIDs = [];

    uniqueCategories.forEach(function (element) {
        uniqueCatIDs.push(data.findIndex(function (item, i) {
            return item.category === element
        }));
    })

    console.log(tags)
    console.log(categories)
    console.log(uniqueCategories);
    // VARIABLE SETUP ENDS

    // FUNCTIONS
    function renderCategorizedPosts(catName) {
        $(`
          <div class="col-md-12 mt-5 container  banner-img  "> </div>
        <div class="banner-text">

            <h1 class="font-weight-bold">category</h1>
             <h3> ${catName}</h3>
    

        

        </div>
        
        
        
        
        <main>
          <section class="container mt-5">
          <div class="site-content mt-5">
              <div class="posts ">${renderblogTiles('asc')}
                  <div class="pagination flex-row">
                      <a href="#"><i class="fa fa-chevron-left" aria-hidden="true"></i></a>
                      <a href="#" class="pages">1</a>
                      <a href="#" class="pages">2</a>
                      <a href="#" class="pages">3</a>
                      <a href="#"><i class="fa fa-chevron-right" aria-hidden="true"></i></a>
                  </div>
              </div>

              <aside class="sidebar">
                  <div class="category">
                      <h2>Category</h2>
                      <ul class="category-list">
                          ${renderCategories()}
                      </ul>
                  </div>
                  <div class="popular-post">
                      <h2>Recent Post</h2>
                      ${renderblogTiles('desc')}
                  </div>
                  <div class="newsletter" data-aos="fade-up" data-aos-delay="300">
                      <h2 class="text-center">Newsletter</h2>
                      <div class="form-element text-center ">
                          <input type="text" class="input-element form-control m-auto" placeholder="Email">
                          <button class="btn form-btn theme_btn">Subscribe</button>
                      </div>
                  </div>
                  <div class="popular-tags">
                      <h2 class="text-center">Popular Tags</h2>
                      <div class="tags flex-row">
                       ${renderTags()}
                      </div>
                  </div>
              </aside>
          </div>
      </section>
      </main>`).insertAfter("nav");
        loadAllScript()
    }

    function renderblogTiles(order) {
        var html = '';
        if (order == 'asc') {
            data.forEach(function (post, index) {
                html += `<div class="post-content" data-aos="zoom-in" data-aos-delay="200">
                                        <div class="post-image">
                                            <div>
                                                <img src="${post.postImage}" class="img" alt="blog${index}">
                                            </div>
                                            <div class="post-info flex-row theme_btn">
                                                <span> <i class="fa fa-user text-gray" aria-hidden="true"></i>&nbsp;&nbsp;${post.blogWriter}</span>
                                                <span><i class="fa fa-calendar-check-o text-gray" aria-hidden="true"></i>
                                                    &nbsp;&nbsp;${post.date}</span>
                                                <span>${post.category}</span>
                                            </div>
                                        </div>
                                        <div class="post-title">
                                            <a href="#">${post.bannerTitle}</a>
                                            <p>${post.postDescription.substring(0, 294) + "..."}
                                            </p>
                                            <button class="btn post-btn theme_btn" onclick="window.location.href = '${url.split("?")[0] + '?post=' + index}'">Read More &nbsp; <i class="fa fa-arrow-right"
                                                    aria-hidden="true"></i></button>
                                        </div>
                                    </div>`;
                if (index + 1 != data.length) { html += `<hr>`; }
            })
        }
        else if (order == 'desc') {
            data.reverse().forEach(function (post, index) {
                if (index < 5) {
                    html += `
                    <div class="post-content" data-aos="flip-up" data-aos-delay="200">
                                    <div class="post-image">
                                        <div>
                                            <img src="${post.postImage}" class="img" alt="blog${index}">
                                        </div>
                                        <div class="post-info flex-row ">
                                            <span><i class="fa fa-calendar-check-o text-gray"
                                                    aria-hidden="true"></i>&nbsp;&nbsp;${post.date}</span>
                                            <span>${post.category}</span>
                                        </div>
                                    </div>
                                    <div class="post-title">
                                        <a href="#">${post.bannerTitle}</a>
                                    </div>
                                </div>
                    `;
                }
            })
        }
        return html;
    }

    function renderUniqueCategories() {
        var html = '', decision = 'fade-right';
        uniqueCategories.forEach(function (element, index) {
            html += `
                    <div class="blog-content" data-aos="${decision}" data-aos-delay="200">
                    <div style="height: 160px;"><img style="max-width: 100%;max-height: 100%;" src="${data[uniqueCatIDs[index]].postImage}" alt="post-${index}"></div> 
                        <div class="blog-title">
                        <h3>${data[uniqueCatIDs[index]].bannerTitle}</h3>
                        <button class="btn btn-blog theme_btn" onclick="window.location.href = '${url.split("?")[0] + '?cat=' + data[uniqueCatIDs[index]].category}'">${data[uniqueCatIDs[index]].category}</button>
                        <span>${data[uniqueCatIDs[index]].date}</span>
                        </div>
                    </div>
                `;
            if (decision == 'fade-in') decision = 'fade-left';
            else if (decision == 'fade-right') decision = 'fade-in';
            else if (decision == 'fade-left') decision = 'fade-right';
        })
        return html;
    }

    function renderTags() {
        var html = '';
        tags.forEach(function (element, index) {
            html += `
                    <span class="tag theme_btn " data-aos="flip-up" data-aos-delay="${index}00" onclick="window.location.href = '${url.split("?")[0] + '?tag=' + element}'">${element}</span>
                    `;
        })
        return html;
    }

    function renderCategories() {
        const countOccurrences = arr => arr.reduce((prev, curr) => (prev[curr] = ++prev[curr] || 1, prev), {});
        var html = '';
        uniqueCategories.forEach(function (element, index) {
            html += `
                    <li class="list-items theme_btn" data-aos="fade-left" data-aos-delay="100">
                        <a href="${url.split("?")[0] + '?cat=' + data[uniqueCatIDs[index]].category}">${element}</a>
                        <span>(${countOccurrences(categories)[element]})</span>
                    </li>
                `;
        })
        return html;
    }

    function renderMainPage() {

        $(`<main>

                <!------------------------ Site Title ---------------------->

                <section class="site-title">
                    <div class="site-background" data-aos="fade-up" data-aos-delay="100">
                        <h3 class="title">Our Blog</h3>
                        <h1 class="title">Where We Implement Our Ideas Into Reality</h1>
                        <a href='#PostFeed'><button class="btn theme_btn">Explore</button></a>

                    </div>
                </section>

                <!------------x----------- Site Title ----------x----------->

                <!-- --------------------- Blog Carousel ----------------- -->

                <section>
                    <div class="blog">
                        <div class="container">
                            <div class="owl-carousel owl-theme blog-post">${renderUniqueCategories()}
                            </div>
                            <div class="owl-navigation" id="PostFeed">
                                <span class="owl-nav-prev"><i class="fa fa-long-arrow-left" aria-hidden="true"></i></span>
                                <span class="owl-nav-next"><i class="fa fa-long-arrow-right" aria-hidden="true"></i></span>
                            </div>
                        </div>
                    </div>
                </section>

                <!-- ----------x---------- Blog Carousel --------x-------- -->

                <!-- ---------------------- Site Content -------------------------->

                <section class="container">
                    <div class="site-content">
                        <div class="posts">${renderblogTiles('asc')}
                            <div class="pagination flex-row">
                                <a href="#"><i class="fa fa-chevron-left" aria-hidden="true"></i></a>
                                <a href="#" class="pages">1</a>
                                <a href="#" class="pages">2</a>
                                <a href="#" class="pages">3</a>
                                <a href="#"><i class="fa fa-chevron-right" aria-hidden="true"></i></a>
                            </div>
                        </div>

                        <aside class="sidebar">
                            <div class="category">
                                <h2>Category</h2>
                                <ul class="category-list">
                                    ${renderCategories()}
                                </ul>
                            </div>
                            <div class="popular-post">
                                <h2>Recent Post</h2>
                                ${renderblogTiles('desc')}
                            </div>
                            <div class="newsletter" data-aos="fade-up" data-aos-delay="300">
                                <h2 class="text-center">Newsletter</h2>
                                <div class="form-element text-center ">
                                    <input type="text" class="input-element form-control m-auto" placeholder="Email">
                                    <button class="btn form-btn theme_btn">Subscribe</button>
                                </div>
                            </div>
                            <div class="popular-tags">
                                <h2 class="text-center">Popular Tags</h2>
                                <div class="tags flex-row">
                                 ${renderTags()}
                                </div>
                            </div>
                        </aside>
                    </div>
                </section>

                <!-- -----------x---------- Site Content -------------x------------>

            </main>`).insertAfter("nav");
        loadAllScript()
    }



    // ROUTING
    if (query == undefined || query == null) {
        renderMainPage();
    }
    else {
        if (query.indexOf("post=") !== -1) {
            var postNumber = parseInt(query.split('post=')[1]);
            if (postNumber > -1 && postNumber < totalPosts) {
                alert('congratulation. post number = ' + postNumber)
            }
            else {
                renderMainPage();
            }
        }

        else if (query.indexOf("cat=") !== -1) {
            var categoryName = query.split('cat=')[1]
            if (categoryName != null && categoryName != undefined && categoryName != '' && uniqueCategories.indexOf(categoryName) !== -1) {
                renderCategorizedPosts(categoryName);
            }
            else {
                renderMainPage();
            }
        }

        else if (query.indexOf("tag=") !== -1) {
            var tagName = query.split('tag=')[1]
            if (tagName != null && tagName != undefined && tagName != '' && tags.indexOf(categoryName) !== -1) {
                renderTaggedPosts(tagName);
            }
            else {
                renderMainPage();
            }
        }
    }




}).fail(function () {
    renderMainPage();
    console.log("An error has occurred during loading data.");
});





