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
    await loadScript("../js/softPagination.js");
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
    url = url.replace('#0', '');
    var loaction = window.location.href.split("#")[0].split("?")[0];
    var query = url.split("?")[1];
    var data = info.posts;
    var mediumData;
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

    console.log(tags);
    console.log(categories)
    console.log(data)
    console.log(uniqueCategories);
    console.log(uniqueCatIDs)
    // VARIABLE SETUP ENDS

    // FUNCTIONS
    function tagGenerator(tagData) {
        var listHtml = '';
        tagData.forEach(function (element, index) {
            listHtml += `<li><a rel="tag" href="${window.location.href.split("#")[0].split("?")[0] + '?tag=' + element}">${element}</a>
                     </li>`
            console.log(element);
        })
        return listHtml;
    }

    function generateURL() {
        var urlToPass = 'https://v1.nocodeapi.com/softniquebd_1/medium/IRXNMmLYulcsChUo?'
        // var URLlist =
        //     [   'https://v1.nocodeapi.com/softniquebd_0/medium/huCVrlYIYWadJpFh?',
        //         'https://v1.nocodeapi.com/softniquebd_1/medium/IRXNMmLYulcsChUo?',
        //         'https://v1.nocodeapi.com/softniquebd_2/medium/cGUQtNTcsWhkcdzm?',
        //         'https://v1.nocodeapi.com/softniquebd_3/medium/JMiuVHRoyiGcInCz?',
        //         'https://v1.nocodeapi.com/softniquebd_4/medium/qqOHryMyXAyHAunE?',
        //         'https://v1.nocodeapi.com/softniquebd_5/medium/zdMkBmHSGKlRRHww?',
        //         'https://v1.nocodeapi.com/softniquebd_6/medium/iCHMlnvzXXkGTuJI?',
        //         'https://v1.nocodeapi.com/softniquebd_7/medium/PTocqYFkzbQmHMmV?',
        //         'https://v1.nocodeapi.com/softniquebd_8/medium/MgQzLKaRiDJLxPZN?',
        //         'https://v1.nocodeapi.com/softniquebd_9/medium/CytJZVeYLhIemECg?'
        //     ]
        // var urlToPass

        // if ( localStorage.getItem("apiUrl") !== null) {
        //     var urlNum = parseInt(localStorage.getItem("apiUrl")[localStorage.getItem("apiUrl").lastIndexOf("_") + 1]);
        //     if (urlNum == (URLlist.length()-1)) { urlNum = -1 }
        //     console.log(urlNum)
        //     localStorage.setItem("apiUrl", URLlist[urlNum + 1]);
        //     console.log('localStorage.getItem("apiUrl"): '+localStorage.getItem("apiUrl"))
        //     urlToPass = URLlist[urlNum + 1];
        // }
        // else {
        //     localStorage.setItem("apiUrl", URLlist[0])
        //     urlToPass = URLlist[0];
        // }
        //return urlToPass;
    }

    async function generateDesc(i) {

        console.log(data[i])
        var settings = {
            "url": data[i].blogPost,
            "method": "get",
            "timeout": 0,
            "headers": {
                "Content-Type": "application/json"
            },
        };

        await $.ajax(settings).done(function (response) {
            var tempString = response.split('<style type="text/css">')[1];
            var responseStyle = tempString.split('</style>')[0]
            response = response.split('</head>')[1]
            var test = responseStyle.replace(/\}/g, '}#richEditor ')
            test = test.substring(0, test.length - 12);
            $('.rich-editor-text').append('<style type="text/css">' + test + '</style>' + response);

            console.log(responseStyle);
        });

        $('.rich-editor-text .title').css("padding", "0");


        $('.rich-editor-text').contents().filter(function () {
            return this.nodeType === 3;
        }).remove();

        return '';

    }

    function blogdetails(postnum) {
        var html = '';
        data.forEach(function (post, index) {
            if (postnum == index) {
                html += `<div class="col-md-12 mt-5 container  banner-img  "> </div>
                <div class="banner-text ">
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
                            <a href="${data[index].gitlink}"><img width="32" height="32" src="${data[index].writerPic}" alt="${index}"></a>
                        </figure>
                        <div class="cs-text">
                            <a href="${data[index].gitlink}">${data[index].blogWriter}
                                </a>
                        </div>
                    </div>
                    <div class="post-option">
                        <span class="post-date"><i class="cs-color icon-calendar6"></i>${data[index].date}</a></span>
                        <span class="post-comment"><a href="${window.location.href.split("#")[0].split("?")[0] + '?cat=' + data[index].category}"><i class="cs-color icon-chat6"></i>${data[index].category}</a></span>
                    </div>
                </div>
                <div class="cs-post-option-panel">
                    <div class="rich-editor-text" id="richEditor">
                          ${generateDesc(index)}
                    </div>
                </div>

                <div class="cs-tags">
                    <div class="tags mt-5">
                        <span>Tags</span>
                        <ul>
                       ${tagGenerator(post.tags)}
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
              <div class="posts" id="posts"><div id="postList">${renderselectedCategory(catName)}</div>
                        <div class="pagination flex-row" id="paginationSection">
                                <a href="#0" id="routeToPrev"><i class="fa fa-chevron-left" aria-hidden="true"></i></a>
                                <a href="#0" id="routeToNext"><i class="fa fa-chevron-right" aria-hidden="true"></i></a>
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
                var tagLower = tagList[x][y].toLowerCase();
                if (tag.toLowerCase() == tagLower) {
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
                                ${data[x].date}</span>
                                <span>${data[x].category}
                        </div>
                    </div>
                    <div class="post-title">
                        <a href="${data[x].blogPost}"><span>${data[x].bannerTitle}</a>
                        <p>${data[x].postDescription.substring(0, 294) + "..."}
                        </p>
                        <button class="btn post-btn theme_btn" onclick="window.location.href = '${data[x].blogPost}'">Read More &nbsp; <i class="fa fa-arrow-right"
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
             <h3> "${tag.replace(/%20/g, " ")}"</h3>

        </div>
        <main>
          <section class="container mt-5">
          <div class="site-content mt-5">
              <div class="posts" id="posts">
                  <div class="pagination flex-row"><div id="postList">${renderselectedTag(tag)}</div>
                        <div class="pagination flex-row" id="paginationSection">
                                <a href="#0" id="routeToPrev"><i class="fa fa-chevron-left" aria-hidden="true"></i></a>
                                <a href="#0" id="routeToNext"><i class="fa fa-chevron-right" aria-hidden="true"></i></a>
                        </div>
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
        $(`${blogdetails(postnum)}`).insertAfter("nav");
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
                            ${data[index].date}</span>
                            <span>${data[index].category}
                    </div>
                </div>
                <div class="post-title">
                    <a href="${data[index].blogPost}"><span>${data[index].bannerTitle}</a>
                    <p>${data[index].postDescription.substring(0, 294) + "..."}
                    </p>
                    <button class="btn post-btn theme_btn" onclick="location.href='${data[index].blogPost}'">Read More &nbsp; <i class="fa fa-arrow-right"
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
                                                ${post.date}</span>
                                                <span>${post.category}</span>
                                            </div>
                                        </div>
                                        <div class="post-title">
                                            <a href="${data[index].blogPost}">${post.bannerTitle}</a>
                                            <p>${post.postDescription.substring(0, 294) + "..."}
                                            </p>
                                            <button class="btn post-btn theme_btn" onclick="location.href='${data[index].blogPost}'">Read More &nbsp; <i class="fa fa-arrow-right"
                                                    aria-hidden="true"></i></button>
                                        </div>
                                         <hr>
                                    </div>`;
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
                                                    aria-hidden="true"></i>${post.date}</span>
                                            <span>${post.category}</span>
                                        </div>
                                    </div>
                                    <div class="post-title">
                                        <a href="${data[index].blogPost}">${post.bannerTitle}</a>
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
                    <span class="tag theme_btn " data-aos="flip-up" data-aos-delay="${index}00" onclick="window.location.href = '${window.location.href.split("#")[0].split("?")[0] + '?tag=' + element}'">${element.replace(/%20/g, " ")}</span>
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
                        <h1 class="title blogt">Where We Implement Our Ideas Into Reality</h1>
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
                        <div class="posts" id="posts"><div id="postList">${renderblogTiles('asc')}</div>
                        <div class="pagination flex-row" id="paginationSection">
                                <a href="#0" id="routeToPrev"><i class="fa fa-chevron-left" aria-hidden="true"></i></a>
                                <a href="#0" id="routeToNext"><i class="fa fa-chevron-right" aria-hidden="true"></i></a>
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
                                                <!-- Begin Sendinblue Form -->
                    <!-- START - We recommend to place the below code in head tag of your website html  -->
                    <link rel="stylesheet" href="https://sibforms.com/forms/end-form/build/sib-styles.css">
                  
                    <!--  END - We recommend to place the above code in head tag of your website html -->

                    <!-- START - We recommend to place the below code where you want the form in your website html  -->
                    <div class="sib-form">
                    <div id="sib-form-container" class="sib-form-container">
                        <div id="error-message" class="sib-form-message-panel" style="font-size:16px; text-align:left;  color:#661d1d; background-color:#ffeded; border-radius:50px; border-color:#ff4949;max-width:540px;">
                        <div class="sib-form-message-panel__text sib-form-message-panel__text--center">
                            <svg viewBox="0 0 512 512" class="sib-icon sib-notification__icon">
                            <path d="M256 40c118.621 0 216 96.075 216 216 0 119.291-96.61 216-216 216-119.244 0-216-96.562-216-216 0-119.203 96.602-216 216-216m0-32C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm-11.49 120h22.979c6.823 0 12.274 5.682 11.99 12.5l-7 168c-.268 6.428-5.556 11.5-11.99 11.5h-8.979c-6.433 0-11.722-5.073-11.99-11.5l-7-168c-.283-6.818 5.167-12.5 11.99-12.5zM256 340c-15.464 0-28 12.536-28 28s12.536 28 28 28 28-12.536 28-28-12.536-28-28-28z"
                            />
                            </svg>
                            <span class="sib-form-message-panel__inner-text">
                                            Your subscription could not be saved. Please try again.
                                        </span>
                        </div>
                        </div>
                        <div></div>
                        <div id="success-message" class="sib-form-message-panel" style="font-size:16px; text-align:left; color:#085229; background-color:#e7faf0; border-radius:50px; border-color:#13ce66;max-width:540px;">
                        <div class="sib-form-message-panel__text sib-form-message-panel__text--center">
                            <svg viewBox="0 0 512 512" class="sib-icon sib-notification__icon">
                            <path d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 464c-118.664 0-216-96.055-216-216 0-118.663 96.055-216 216-216 118.664 0 216 96.055 216 216 0 118.663-96.055 216-216 216zm141.63-274.961L217.15 376.071c-4.705 4.667-12.303 4.637-16.97-.068l-85.878-86.572c-4.667-4.705-4.637-12.303.068-16.97l8.52-8.451c4.705-4.667 12.303-4.637 16.97.068l68.976 69.533 163.441-162.13c4.705-4.667 12.303-4.637 16.97.068l8.451 8.52c4.668 4.705 4.637 12.303-.068 16.97z"
                            />
                            </svg>
                            <span class="sib-form-message-panel__inner-text">
                                            Your subscription has been successful.
                                        </span>
                        </div>
                        </div>
                        <div></div>
                        <div id="sib-container" class="sib-container--large sib-container--vertical" style="text-align:center;">
                        <form id="sib-form" method="POST" action="https://2ac47e81.sibforms.com/serve/MUIEAK_Qd5t1jhnpwyMJ3GAjR06qmAy0PFXVsx6K10KZJaFQ7-9frrW6V53w7vSPAhbrcb721esSBGV-GmfIpVSQlCTuz8aOa8nG5FYog_fdFalbJRcFDN4TeFcSI1Utq5rB8CmgcwyCxBH1vZA52CBKVwGjop_m-e5zcXldJBC_5lkMEoW3lrVQm4sl_a65SiwQRLO6hdBPFDvT"
                            data-type="subscription">
                            <div style="padding: 8px 0;">
                            <div class="sib-form-block" style="font-size:32px; text-align:center; font-weight:700; color:#3C4858; background-color:transparent;">
                                <p>Newsletter</p>
                            </div>
                            </div>
                            <div style="padding: 8px 0;">
                            <div class="sib-form-block" style="font-size:16px; text-align:left; color:#3C4858; background-color:transparent;">
                                <div class="sib-text-form-block">
                                <p>Subscribe to our newsletter and stay updated.</p>
                                </div>
                            </div>
                            </div>
                            <div style="padding: 8px 0;">
                            <div class="sib-input sib-form-block">
                                <div class="form__entry entry_block">
                                <div class="form__label-row ">
                                    <label class="entry__label" style="font-size:16px; text-align:left; font-weight:700; color:#3c4858;" for="EMAIL" data-required="*">
                                    Enter your email address to subscribe
                                    </label>

                                    <div class="entry__field" style="border:0;">
                                    <input class="input" type="text" id="EMAIL" class="input-element form-control m-auto" name="EMAIL" autocomplete="off" placeholder="Email" data-required="true" required style="height: 2.9rem;font-family: var(--Lexend);border-radius: 2em;border: solid 2px fuchsia;"/>
                                    </div>
                                </div>

                                <label class="entry__error entry__error--primary" style="font-size:16px; text-align:left; color:#661d1d; background-color:#ffeded; border-radius:50px; border-color:#ff4949;">
                                </label>
                                <label class="entry__specification" style="font-size:12px; text-align:left; color:#8390A4;">
                                    Provide your email address to subscribe. For e.g abc@xyz..
                                </label>
                                </div>
                            </div>
                            </div>
                            <div style="padding: 8px 0;">
                            <div class="sib-form-block" style="text-align: left">
                                <button class="btn form-btn theme_btn sib-form-block__button sib-form-block__button-with-loader" style="width:100%;font-size:16px;font-weight:700; color:#FFFFFF; background-color:#3E4857; border-width:0px;"
                                form="sib-form" type="submit">
                                <svg class="icon clickable__icon progress-indicator__icon sib-hide-loader-icon" viewBox="0 0 512 512">
                                    <path d="M460.116 373.846l-20.823-12.022c-5.541-3.199-7.54-10.159-4.663-15.874 30.137-59.886 28.343-131.652-5.386-189.946-33.641-58.394-94.896-95.833-161.827-99.676C261.028 55.961 256 50.751 256 44.352V20.309c0-6.904 5.808-12.337 12.703-11.982 83.556 4.306 160.163 50.864 202.11 123.677 42.063 72.696 44.079 162.316 6.031 236.832-3.14 6.148-10.75 8.461-16.728 5.01z"
                                    />
                                </svg>
                                Subscribe
                                </button>
                            </div>
                            </div>

                            <input type="text" name="email_address_check" value="" class="input--hidden">
                            <input type="hidden" name="locale" value="en">
                        </form>
                        </div>
                    </div>
                    </div>
                    <!-- END - We recommend to place the below code where you want the form in your website html  -->

                    <!-- START - We recommend to place the below code in footer or bottom of your website html  -->
                    <script>
                    window.REQUIRED_CODE_ERROR_MESSAGE = 'Please choose a country code';

                    window.EMAIL_INVALID_MESSAGE = window.SMS_INVALID_MESSAGE = "The information provided is invalid. Please review the field format and try again.";

                    window.REQUIRED_ERROR_MESSAGE = "This field cannot be left blank. ";

                    window.GENERIC_INVALID_MESSAGE = "The information provided is invalid. Please review the field format and try again.";




                    window.translation = {
                        common: {
                        selectedList: '{quantity} list selected',
                        selectedLists: '{quantity} lists selected'
                        }
                    };

                    var AUTOHIDE = Boolean(0);
                    </script>
                    <script src="https://sibforms.com/forms/end-form/build/main.js"></script>


                    <!-- END - We recommend to place the above code in footer or bottom of your website html  -->
                    <!-- End Sendinblue Form -->
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
                renderdetailsPage(postNumber)
            }
            else {
                renderMainPage();
            }
        }

        else if (query.indexOf("cat=") !== -1) {
            var categoryName = query.split('cat=')[1]
            if (categoryName != null && categoryName != undefined && categoryName != '' && uniqueCategories.indexOf(categoryName) !== -1) {
                //alert(categoryName)
                renderCategorizedPosts(categoryName);
            }
            else {
                renderMainPage();
            }
        }

        else if (query.indexOf("tag=") !== -1) {
            var tagName = query.split('tag=')[1];
            if (tagName != null && tagName != undefined && tagName != '' && tags.join(' ').toLowerCase().split(' ').indexOf(tagName.toLowerCase()) !== -1) {
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





