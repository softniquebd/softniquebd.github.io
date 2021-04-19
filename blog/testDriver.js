
    function generateURL() {
            var urlToPass = 'https://v1.nocodeapi.com/softniquebd_0/medium/huCVrlYIYWadJpFh?'
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
            return urlToPass;
    }

    async function generateDesc(i) {
        var str = 'content:encoded';
        var streamUrl = generateURL();
        console.log("url: " + streamUrl)
        var settings = {
            "url": streamUrl,
            "method": "get",
            "timeout": 0,
            "headers": {
                "Content-Type": "application/json"
            },
        };

        var content='...';
        await $.ajax(settings).done(function (response) {
            if (typeof response == 'string') {response = JSON.parse(response);}
            // response = JSON.parse(response);
            mediumData = response;
            console.log(mediumData[i].title)
            content = response[parseInt(i)][str];
        }).fail(function (response) {
            content = response;
            console.log(response)
        });

        $('.rich-editor-text').append(content);
        $('.rich-editor-text figure, .rich-editor-text h3').each(function () {
            $(this).addClass("text-center");
        });
        $('.rich-editor-text li').each(function () {
            $(this).css("list-style-type", "square");
        });

        $('.rich-editor-text').contents().filter(function(){
        return this.nodeType === 3;
        }).remove();

        return 'Loading..';
    }
    

    