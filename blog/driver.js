




$.getJSON("data.json", async function (info) {
    // VARIABLE SETUP STARTS
    var url = window.location.href.replace('#PostFeed','');
    var loaction = url.split("?")[0];
    var query = url.split("?")[1];
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
    // VARIABLE SETUP ENDS

    // FUNCTIONS
    function renderCategorizedPosts(catName) {
        //alert(catName)
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
        //alert(data)
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
                    <div class="posts">
                        <div class="post-content" data-aos="zoom-in" data-aos-delay="200">
                            <div class="post-image">
                                <div>
                                    <img src="../assets/Blog-post/blog1.png" class="img" alt="blog1">
                                </div>
                                <div class="post-info flex-row theme_btn">
                                    <span> <i class="fa fa-user text-gray" aria-hidden="true"></i>&nbsp;&nbsp;Admin</span>
                                    <span><i class="fa fa-calendar-check-o text-gray" aria-hidden="true"></i>
                                        &nbsp;&nbsp;January 14, 2019</span>
                                    <span>2 Commets</span>
                                </div>
                            </div>
                            <div class="post-title">
                                <a href="#">Why should boys have all the fun? it's the women who are making india an
                                    alcohol-loving contry</a>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque voluptas deserunt beatae
                                    adipisci iusto totam placeat corrupti ipsum, tempora magnam incidunt aperiam tenetur a
                                    nobis, voluptate, numquam architecto fugit. Eligendi quidem ipsam ducimus minus magni
                                    illum similique veniam tempore unde?
                                </p>
                                <button class="btn post-btn theme_btn">Read More &nbsp; <i class="fa fa-arrow-right"
                                        aria-hidden="true"></i></button>
                            </div>
                        </div>
                        <hr>
                        <div class="post-content" data-aos="zoom-in" data-aos-delay="200">
                            <div class="post-image">
                                <div>
                                    <img src="../assets/Blog-post/blog2.png" class="img" alt="blog1">
                                </div>
                                <div class="post-info flex-row theme_btn">
                                    <span><i class="fa fa-user text-gray" aria-hidden="true"></i>&nbsp;&nbsp;Admin</span>
                                    <span><i class="fa fa-calendar-check-o text-gray" aria-hidden="true"></i>
                                        &nbsp;&nbsp;January 16, 2019</span>
                                    <span>7 Commets</span>
                                </div>
                            </div>
                            <div class="post-title">
                                <a href="#">Why should boys have all the fun? it's the women who are making india an
                                    alcohol-loving contry</a>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque voluptas deserunt beatae
                                    adipisci iusto totam placeat corrupti ipsum, tempora magnam incidunt aperiam tenetur a
                                    nobis, voluptate, numquam architecto fugit. Eligendi quidem ipsam ducimus minus magni
                                    illum similique veniam tempore unde?
                                </p>
                                <button class="btn post-btn theme_btn">Read More &nbsp; <i class="fa fa-arrow-right"
                                        aria-hidden="true"></i></button>
                            </div>
                        </div>
                        <hr>
                        <div class="post-content" data-aos="zoom-in" data-aos-delay="200">
                            <div class="post-image">
                                <div>
                                    <img src="../assets/Blog-post/blog3.png" class="img" alt="blog1">
                                </div>
                                <div class="post-info flex-row theme_btn">
                                    <span><i class="fa fa-user text-gray" aria-hidden="true"></i>&nbsp;&nbsp;Admin</span>
                                    <span><i class="fa fa-calendar-check-o text-gray"
                                            aria-hidden="true"></i>&nbsp;&nbsp;January 19, 2019</span>
                                    <span>5 Commets</span>
                                </div>
                            </div>
                            <div class="post-title">
                                <a href="#">New data recording system to better analyse road accidents</a>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque voluptas deserunt beatae
                                    adipisci iusto totam placeat corrupti ipsum, tempora magnam incidunt aperiam tenetur a
                                    nobis, voluptate, numquam architecto fugit. Eligendi quidem ipsam ducimus minus magni
                                    illum similique veniam tempore unde?
                                </p>
                                <button class="btn post-btn theme_btn">Read More &nbsp; <i class="fa fa-arrow-right"
                                        aria-hidden="true"></i></button>
                            </div>
                        </div>
                        <hr>
                        <div class="post-content" data-aos="zoom-in" data-aos-delay="200">
                            <div class="post-image">
                                <div>
                                    <img src="../assets/Blog-post/blog4.png" class="img" alt="blog1">
                                </div>
                                <div class="post-info flex-row theme_btn">
                                    <span><i class="fa fa-user text-gray" aria-hidden="true"></i>&nbsp;&nbsp;Admin</span>
                                    <span><i class="fa fa-calendar-check-o text-gray"
                                            aria-hidden="true"></i>&nbsp;&nbsp;January 21, 2019</span>
                                    <span>12 Commets</span>
                                </div>
                            </div>
                            <div class="post-title">
                                <a href="#">New data recording system to better analyse road accidents</a>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque voluptas deserunt beatae
                                    adipisci iusto totam placeat corrupti ipsum, tempora magnam incidunt aperiam tenetur a
                                    nobis, voluptate, numquam architecto fugit. Eligendi quidem ipsam ducimus minus magni
                                    illum similique veniam tempore unde?
                                </p>
                                <button class="btn post-btn theme_btn">Read More &nbsp; <i class="fa fa-arrow-right"
                                        aria-hidden="true"></i></button>
                            </div>
                        </div>
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
                            <div class="post-content" data-aos="flip-up" data-aos-delay="200">
                                <div class="post-image">
                                    <div>
                                        <img src="../assets/popular-post/m-blog-1.jpg" class="img" alt="blog1">
                                    </div>
                                    <div class="post-info flex-row ">
                                        <span><i class="fa fa-calendar-check-o text-gray"
                                                aria-hidden="true"></i>&nbsp;&nbsp;January 14,
                                            2019</span>
                                        <span>2 Commets</span>
                                    </div>
                                </div>
                                <div class="post-title">
                                    <a href="#">New data recording system to better analyse road accidents</a>
                                </div>
                            </div>
                            <div class="post-content" data-aos="flip-up" data-aos-delay="300">
                                <div class="post-image">
                                    <div>
                                        <img src="../assets/popular-post/m-blog-2.jpg" class="img" alt="blog1">
                                    </div>
                                    <div class="post-info flex-row ">
                                        <span><i class="fa fa-calendar-check-o text-gray"
                                                aria-hidden="true"></i>&nbsp;&nbsp;January 14,
                                            2019</span>
                                        <span>2 Commets</span>
                                    </div>
                                </div>
                                <div class="post-title">
                                    <a href="#">New data recording system to better analyse road accidents</a>
                                </div>
                            </div>
                            <div class="post-content" data-aos="flip-up" data-aos-delay="400">
                                <div class="post-image">
                                    <div>
                                        <img src="../assets/popular-post/m-blog-3.jpg" class="img" alt="blog1">
                                    </div>
                                    <div class="post-info flex-row ">
                                        <span><i class="fa fa-calendar-check-o text-gray"
                                                aria-hidden="true"></i>&nbsp;&nbsp;January 14,
                                            2019</span>
                                        <span>2 Commets</span>
                                    </div>
                                </div>
                                <div class="post-title">
                                    <a href="#">New data recording system to better analyse road accidents</a>
                                </div>
                            </div>
                            <div class="post-content" data-aos="flip-up" data-aos-delay="500">
                                <div class="post-image">
                                    <div>
                                        <img src="../assets/popular-post/m-blog-4.jpg" class="img" alt="blog1">
                                    </div>
                                    <div class="post-info flex-row ">
                                        <span><i class="fa fa-calendar-check-o text-gray"
                                                aria-hidden="true"></i>&nbsp;&nbsp;January 14,
                                            2019</span>
                                        <span>2 Commets</span>
                                    </div>
                                </div>
                                <div class="post-title">
                                    <a href="#">New data recording system to better analyse road accidents</a>
                                </div>
                            </div>
                            <div class="post-content" data-aos="flip-up" data-aos-delay="600">
                                <div class="post-image">
                                    <div>
                                        <img src="../assets/popular-post/m-blog-5.jpg" class="img" alt="blog1">
                                    </div>
                                    <div class="post-info flex-row ">
                                        <span><i class="fa fa-calendar-check-o text-gray"
                                                aria-hidden="true"></i>&nbsp;&nbsp;January 14,
                                            2019</span>
                                        <span>2 Commets</span>
                                    </div>
                                </div>
                                <div class="post-title">
                                    <a href="#">New data recording system to better analyse road accidents</a>
                                </div>
                            </div>
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
                                <span class="tag theme_btn " data-aos="flip-up" data-aos-delay="100">Software</span>
                                <span class="tag theme_btn" data-aos="flip-up" data-aos-delay="200">technology</span>
                                <span class="tag theme_btn" data-aos="flip-up" data-aos-delay="300">travel</span>
                                <span class="tag theme_btn" data-aos="flip-up" data-aos-delay="400">illustration</span>
                                <span class="tag theme_btn" data-aos="flip-up" data-aos-delay="500">design</span>
                                <span class="tag theme_btn" data-aos="flip-up" data-aos-delay="600">lifestyle</span>
                                <span class="tag theme_btn" data-aos="flip-up" data-aos-delay="700">love</span>
                                <span class="tag theme_btn" data-aos="flip-up" data-aos-delay="800">project</span>
                            </div>
                        </div>
                    </aside>
                </div>
            </section>

            <!-- -----------x---------- Site Content -------------x------------>

        </main>`).insertAfter("nav");
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
    }




}).fail(function () {
    renderMainPage();
    console.log("An error has occurred during loading data.");
});



