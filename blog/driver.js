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
    await loadScript("https://pagination.js.org/dist/2.1.5/pagination.js");
    await loadScript("../js/mainblog.js");
    await loadScript("https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js");
}

$.getJSON("data.json", async function (info) {
    // VARIABLE SETUP STARTS
    var url = window.location.href.replace('#PostFeed', '');
    var loaction = window.location.href.split("#")[0].split("?")[0];
    var query = url.split("?")[1];
    var data = info.posts;
    var totalPosts = data.length;
    var categories = [];
    var catpostId = [];
    var tags = [];
    var tagList = [];

    data.forEach(function (element) {
        categories.push(element.category);
        tagList.push(element.tags)
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
    categories.forEach(function (element) {
        catpostId.push(data.findIndex(function (item, i) {
            return item.category === element
        }));
    })

    console.log(tagList[0][1]);
    console.log(categories)
    console.log(data)
    console.log(uniqueCategories);
    console.log(uniqueCatIDs)
    // VARIABLE SETUP ENDS

    // FUNCTIONS
    function blogdetails(postnum) {
        var html = '';
        data.forEach(function (post, index) {


            if (postnum == index) {
                html += `<div class="col-md-12 mt-5 container  banner-img  "> </div>
                <div class="banner-text">
                <h1 class="font-weight-bold">${data[index].bannerTitle}</h1>
            <p>
               ${data[index].postTitle}
            </p>
            </div>
            <div class="container mt-5">
            <div class="cs-blog-detail">
                <div class="cs-post-title">
                    <div class="cs-author">
                        <figure>
                            <a href="${data[index].gitlink}"><img width="32" height="32"
                                    onload="pagespeed.CriticalImages.checkImageForCriticality(this);"
                                    data-pagespeed-url-hash="1229941675" class="avatar avatar-32 photo"
                                    srcset="http://1.gravatar.com/avatar/7a20fad302fc2dd4b4649dc5bdb3c463?s=64&amp;d=mm&amp;r=g 2x"
                                    src="${data[index].writerPic}" alt="${index}"></a>
                        </figure>
                        <div class="cs-text">
                            <a href="${data[index].gitlink}">${data[index].blogWriter}
                                </a>
                        </div>
                    </div>
                    <div class="post-option">
                        <span class="post-date"><i class="cs-color icon-calendar6"></i>${data[index].date}</a></span>
                        <span class="post-comment"><a href="#"><i class="cs-color icon-chat6"></i>${data[index].category}</a></span>
                    </div>
                </div>
                <div class="cs-post-option-panel">
                    <div class="rich-editor-text">
                        <p>Ravenously while stridently coughed far promiscuously below jeez much yikes bland that
                            salamander cunningly some over abhorrent as house with between ouch that well scurrilously
                            alas capybara massive outdid oh said hello majestically roadrunner lobster much bled alas
                            lighted together waved upheld more far woolly ahead darn far far bore far far saw baneful
                            upset rebound bowed possessive before or indisputably against.</p>
                        <p>After hamster hello less far astride where accordingly much because some far innocently
                            invoked far pre-set or objective this pangolin tendentiously eagle near spread and overlay
                            as abysmal a and before walrus much therefore some close victorious jeepers deeply forward
                            while jeez and overlaid save hey ritually notwithstanding mounted about nonchalantly and
                            less hence far like hey kissed. Hello impotent ravenous hey accordingly well much lopsidedly
                            one far blinked lorikeet sternly futile jeepers strewed well following subconscious far on
                            egregiously and away far alas much forward in but far opposite less editorial some together.
                        </p>
                        <h4>Simple answer is, because other candidates won’t.</h4>
                        <p>Ravenously while stridently coughed far promiscuously below jeez much yikes bland that
                            salamander cunningly some over abhorrent as house with between ouch that well scurrilously
                            alas capybara massive outdid oh said hello majestically roadrunner lobster much bled alas
                            lighted together waved upheld.</p>
                        <div class="cs-main-post">
                            <figure><img onload="pagespeed.CriticalImages.checkImageForCriticality(this);"
                                    data-pagespeed-url-hash="2714250504" alt="jobline-blog (8)"
                                    src="../images/office_kothon1.PNG">
                            </figure>
                        </div>
                        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <blockquote class="text-left-align">
                                <span> Ravenously while stridently coughed far promiscuously below jeez much yikes bland
                                    that salamander cunningly some over abhorrent as house with between ouch that well
                                    scurrilously alas capybara massive outdid oh said hello majestically roadrunner
                                    lobster much bled alas lighted together waved upheld.</span>
                                <span class="author-name"> <a href="#">-- Robert Deneairo</a></span>
                            </blockquote>
                        </div>
                        <p>Ravenously while stridently coughed far promiscuously below jeez much yikes bland that
                            salamander cunningly some over abhorrent as house with between ouch that well scurrilously
                            alas capybara massive outdid oh said hello majestically roadrunner lobster much bled alas
                            lighted together waved upheld.</p>
                    </div>
                    <div class="cs-main-post">
                        <figure><img onload="pagespeed.CriticalImages.checkImageForCriticality(this);"
                                data-pagespeed-url-hash="2714250504" alt="jobline-blog (8)"
                                src="../images/office kothon-1.JPG">
                        </figure>
                    </div>
                </div>

                <div class="cs-tags">
                    <div class="tags">
                        <span>Tags</span>
                        <ul>
                            <li><a rel="tag" href="#">College</a>
                            </li>
                            <li><a rel="tag" href="#">Job</a></li>
                            <li><a rel="tag" href="#">Search</a></li>
                            <li><a rel="tag" href="#">Teacher</a>
                            </li>
                        </ul>
                    </div>
        
                </div>
        
            </div>
        </div>
            
            
            
            
            
            
            
            `

            }

        })
        return html;
    }




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
              <div class="posts" id="posts">${renderselectedCategory(catName)}
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

    function renderselectedTag(tag) {
        var found = false, html = '';
        for (let x = 0; x < tagList.length; x++) {
            for (let y = 0; y < tagList[x].length; y++) {
                if (tag == tagList[x][y]) {
                    found = true;
                }
            }
            if (found) {
                html += `<div class="post-content" data-aos="zoom-in" data-aos-delay="200">
                    <div class="post-image">
                        <div>
                            <img src="${data[x].postImage}" class="img" alt="blog${x}">
                        </div>
                        <div class="post-info flex-row theme_btn">
                            <span> <i class="fa fa-user text-gray" aria-hidden="true"></i>&nbsp;&nbsp;${data[x].blogWriter}</span>
                            <span><i class="fa fa-calendar-check-o text-gray" aria-hidden="true"></i>
                                &nbsp;&nbsp;${data[x].date}</span>
                                <span>${data[x].category}
                        </div>
                    </div>
                    <div class="post-title">
                        <a href="${window.location.href.split("#")[0].split("?")[0] + '?post=' + x}"><span>${data[x].bannerTitle}</a>
                        <p>${data[x].postDescription.substring(0, 294) + "..."}
                        </p>
                        <button class="btn post-btn theme_btn" onclick="window.location.href = '${window.location.href.split("#")[0].split("?")[0] + '?post=' + x}'">Read More &nbsp; <i class="fa fa-arrow-right"
                                aria-hidden="true"></i></button>
                    </div>
                </div>`;
                found = false;
                }
            }
        return html;
    }

    function renderTaggedPosts(tag) {
                $(`
          <div class="col-md-12 mt-5 container  banner-img  "> </div>
        <div class="banner-text">

            <h1 class="font-weight-bold">Blogs related to </h1>
             <h3> "${tag}"</h3>

        </div>
        <main>
          <section class="container mt-5">
          <div class="site-content mt-5">
              <div class="posts" id="posts">
                  <div class="pagination flex-row">${renderselectedTag(tag)}
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

    function renderdetailsPage(postnum) {
        $(`

         ${blogdetails(postnum)}
        
    `).insertAfter("nav");
        loadAllScript()

    }

    function renderselectedCategory(catName) {
        var html = '';
        categories.forEach(function (element, index) {

            if (element == catName) {
                html += `<div class="post-content" data-aos="zoom-in" data-aos-delay="200">
                <div class="post-image">
                    <div>
                        <img src="${data[index].postImage}" class="img" alt="blog${index}">
                    </div>
                    <div class="post-info flex-row theme_btn">
                        <span> <i class="fa fa-user text-gray" aria-hidden="true"></i>&nbsp;&nbsp;${data[index].blogWriter}</span>
                        <span><i class="fa fa-calendar-check-o text-gray" aria-hidden="true"></i>
                            &nbsp;&nbsp;${data[index].date}</span>
                            <span>${data[index].category}
                    </div>
                </div>
                <div class="post-title">
                    <a href="${window.location.href.split("#")[0].split("?")[0] + '?post=' + index}"><span>${data[index].bannerTitle}</a>
                    <p>${data[index].postDescription.substring(0, 294) + "..."}
                    </p>
                    <button class="btn post-btn theme_btn" onclick="window.location.href = '${window.location.href.split("#")[0].split("?")[0] + '?post=' + index}'">Read More &nbsp; <i class="fa fa-arrow-right"
                            aria-hidden="true"></i></button>
                </div>
            </div>`
            }
        })
        return html;
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
                                            <a href="${window.location.href.split("#")[0].split("?")[0] + '?post=' + index}">${post.bannerTitle}</a>
                                            <p>${post.postDescription.substring(0, 294) + "..."}
                                            </p>
                                            <button class="btn post-btn theme_btn" onclick="window.location.href = '${window.location.href.split("#")[0].split("?")[0] + '?post=' + index}'">Read More &nbsp; <i class="fa fa-arrow-right"
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
                                        <a href="${window.location.href.split("#")[0].split("?")[0] + '?post=' + ((data.length - 1) - index)}">${post.bannerTitle}</a>
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
                        <button class="btn btn-blog theme_btn" onclick="window.location.href = '${window.location.href.split("#")[0].split("?")[0] + '?cat=' + data[uniqueCatIDs[index]].category}'">${data[uniqueCatIDs[index]].category}</button>
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
                    <span class="tag theme_btn " data-aos="flip-up" data-aos-delay="${index}00" onclick="window.location.href = '${window.location.href.split("#")[0].split("?")[0] + '?tag=' + element}'">${element}</span>
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
                        <a href="${window.location.href.split("#")[0].split("?")[0] + '?cat=' + data[uniqueCatIDs[index]].category}">${element}</a>
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
                        <div class="posts" >${renderblogTiles('asc')}
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

        $('#posts').pagination({
            dataSource: data,
            callback: function (myData, pagination) {
                // template method of yourself
                var html = template(myData);
                dataContainer.html(html);
            }
        })
    }



    // ROUTING
    if (query == undefined || query == null) {
        renderMainPage();
    }
    else {
        if (query.indexOf("post=") !== -1) {
            var postNumber = parseInt(query.split('post=')[1]);
            if (postNumber > -1 && postNumber < totalPosts) {
                renderdetailsPage(postNumber)
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
            if (tagName != null && tagName != undefined && tagName != '' && tags.indexOf(tagName) !== -1) {
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





