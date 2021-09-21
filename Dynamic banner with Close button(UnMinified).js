var config_temp1 = {
    "initialDelay":{
        "time":100
    },
    "bannerPosition": {
        "selector": "#root > div > div:nth-child(1) > div > div",
        "location": "before" //before/after
    },
    "background": {
        "imageUrl": "https://www.vodafone.de/media/img/teaser/hero-navigation-bg-2560x432.jpg",//"https://www.vodafone.de/media/img/teaser/hero-navigation-bg-2560x432.jpg", // image url of banner  https://cdn.pixabay.com/photo/2015/11/10/08/31/banner-1036483__340.jpg
        "backgroundColour": "red"
    },
    "autoHide": {
        "flag": "", // yes to activate
        "countDown": "", // yes to activate countdown part with autohide
        "countDownText": "Ends in",
        "time": 10
    },
    "closeButton": {
        "flag": "", // yes to activate
        "imageUrl": "https://iili.io/2zu8Zl.md.png"//"https://iili.io/2zu8Zl.md.png"
    },
   
    "collapseAndExpandButton": {
        "flag": "yes", // yes to activate
        "imageUrl": "", //"https://i.imgur.com/KqHD37h.png"
    },
    "borderStyle": {
        "width": "2px",
        "style": "solid",
        "colour": "white"
    },
    "title": {
        "text": "Heading Text",
        "fontSizeDesktop": "25px",
        "fontSizeMobile": "20px",
        "colour": "white"
    },
    "message": {
        "text": "Samsung Galaxy S10 mit dem Red S 10 GB",
        "fontSizeDesktop": "25px",
        "fontSizeMobile": "20px",
        "colour": "yellow"
    },
    "ctaCount": {
        "singleCTA": "none" //type "none" to show 2 buttons
    },
    "ctaLink1": {
        "text": "Check Offer",
        "href": "",
        "fontSize": "18px",
        "backgroundColour": "white",
        "textColor": "black",
        "borderRadius": "6px",
        "fontFamily": "VodafoneRegular"
    },
    "ctaLink2": {
        "text": "Close Offer",
        "href": "",
        "fontSize": "18px",
        "backgroundColour": "white",
        "textColor": "red",
        "fontFamily": "VodafoneRegular",
        "closeButton":"yes"
    },
    "subHeading": {
        "flag": "yes",
        "subHeading1Text": "Offer 1",
        "subHeading1Href": "",
        "subHeading2Text": "Offer 2",
        "subHeading2Href": "",
        "subHeading3Text": "Offer 3",
        "subHeading3Href": "",
        "fontSize": "15px",
        "textColor": "white"
    },
    "logoImage": {
        "flag": "yes",
        "url": "https://www.freepnglogos.com/uploads/vodafone-png-logo/vodafone-ghana-14.png"
    },
    "animation": {
        "flag": "",
        "animationType": "bounce", //fade/bounce/swing/slide
        "occurance": "first"
    }
},
maxwidth = "860px";
!function() {
    try {
        var t = setInterval(function() {
            if (0 == document.querySelectorAll(".psb_temp1").length) {
                if(document.querySelectorAll(config_temp1.bannerPosition.selector).length>0){
                if (function(t, e) {
                        var n = document.createElement("div");
                        n.className = "psb_temp1", n.id = "bnr1_temp1";
                        var i = "#" + n.id;
                        n.style.width = "100%", n.style.display = "block", "" != t.background.imgUrl ? n.style.backgroundImage = "url('" + t.background.imgUrl + "')" : n.style.backgroundColor = t.background.backgroundColour;
                        var o = document.createElement("div");
                        o.className = "descriptionText_temp1", o.style.textAlign = "center", o.style.padding = "0px 10px 10px", o.style.color = t.message.colour;
                        var r = document.createElement("span");
                        r.className = "top-text_temp1", r.innerText = t.message.text, o.appendChild(r);
                        var s = document.createElement("div");
                        s.classList.add("btn_temp1"), s.id = "bannerBtn1_temp1";
                        var l = document.createElement("A");
                        l.setAttribute("href", t.ctaLink1.href), l.setAttribute("target", "_blank"), l.innerHTML = t.ctaLink1.text, l.style.borderRadius = t.ctaLink1.borderRadius, l.style.backgroundColor = t.ctaLink1.backgroundColour, l.style.fontFamily = t.ctaLink1.fontFamily, l.style.padding = "5px 10px", l.style.color = t.ctaLink1.textColor, l.style.textDecoration = "none", l.style.fontSize = t.ctaLink1.fontSize, s.appendChild(l);
                        var d = document.createElement("div");
                        d.classList.add("btn_temp1"), d.id = "bannerBtn1_temp1";
                        var m = document.createElement("A");
                        m.setAttribute("href", t.ctaLink2.href), m.setAttribute("id", "closeb_temp1"), m.setAttribute("target", "_blank"), m.innerHTML = t.ctaLink2.text, m.style.borderRadius = "6px", m.style.backgroundColor = t.ctaLink2.backgroundColour, m.style.fontFamily = t.ctaLink2.fontFamily, m.style.padding = "5px 10px", m.style.color = t.ctaLink2.textColor, m.style.textDecoration = "none", m.style.fontSize = t.ctaLink2.fontSize, d.appendChild(m);
                        var c = document.createElement("A");
                        c.setAttribute("href", t.subHeading.subHeading1Href), c.setAttribute("target", "_blank"), c.innerText = t.subHeading.subHeading1Text + " |", c.style.color = t.subHeading.textColor;
                        var p = document.createElement("A");
                        p.setAttribute("href", t.subHeading.subHeading2Href), p.setAttribute("target", "_blank"), p.innerHTML = "  " + t.subHeading.subHeading2Text + " |", p.style.color = t.subHeading.textColor;
                        var g = document.createElement("A");
                        g.setAttribute("href", t.subHeading.subHeading3Href), g.setAttribute("target", "_blank"), g.innerHTML = "  " + t.subHeading.subHeading3Text, g.style.color = t.subHeading.textColor;
                        var b = document.createElement("div");
                        b.appendChild(c), b.appendChild(p), b.appendChild(g), b.style.textAlign = "center", b.style.fontSize = t.subHeading.fontSize, b.style.padding = "0px 0px 30px", b.style.color = t.subHeading.textColor;
                        var f = document.createElement("span");
                        f.className = "close_temp1", f.id = "closebtn1_temp1";
                        var u = "#" + f.id;
                        if ("" == t.closeButton.imageUrl) f.innerHTML = "x", f.style.fontSize = "25px";
                        else {
                            var x = document.createElement("img");
                            x.className = "manImg_temp1", x.setAttribute("src", t.closeButton.imageUrl), x.style.width = "20px", x.style.height = "20px", x.style.display = "none", f.appendChild(x)
                        }
                        var y = document.createElement("div");
                        if ("" == t.collapseAndExpandButton.imageUrl) {
                            y.className = "dd-main_temp1", y.id = "did1_temp1";
                            var h = "#" + y.id,
                                w = document.createElement("div");
                            w.className = "dd-button_temp1", w.id = "dd-buttonID_temp1", y.appendChild(w)
                        } else {
                            y.className = "dd-main1_temp1", y.id = "did1_temp1", h = "#" + y.id, y.style.width = "34px", y.style.position = "relative", y.style.margin = "0vh auto 0", y.style.marginBottom = "-18px", y.style.marginTop = "-18px", y.style.zIndex = "2";
                            var k = document.createElement("div");
                            k.id = "dbtnid1_temp1", k.id;
                            var v = document.createElement("img");
                            v.className = "downImg_temp1", v.id = "dimageid1_temp1";
                            var H = "#" + v.id;
                            v.setAttribute("src", t.collapseAndExpandButton.imageUrl), v.style.width = "35px", v.style.height = "35px", k.appendChild(v), y.appendChild(k)
                        }
                        var C = document.createElement("img");
                        if (C.setAttribute("src", t.logoImage.url), C.setAttribute("align", "left"), C.id = "2ImgId_temp1", C.style.display = "none", "yes" == t.animation.flag)
                            if ("bounce" == t.animation.animationType) {
                                n.className += " bounce-in-bottom";
                                var Y = "bounce-in-bottom"
                            } else "swing" == t.animation.animationType ? (n.className += " swing-in-top-fwd", Y = "swing-in-top-fwd") : "slide" == t.animation.animationType && (n.className += " slide-in-top", Y = "slide-in-top");
                        "yes" == t.logoImage.flag && n.appendChild(C), "yes" == t.closeButton.flag && n.appendChild(f), o.appendChild(s), "none" == t.ctaCount.singleCTA && o.appendChild(d), n.appendChild(o), "yes" == t.subHeading.flag && n.appendChild(b);
                        var mid = document.createElement("div");
                        mid.id = "mid_temp1";
                        mid.style.borderWidth = t.borderStyle.width;
                        mid.style.borderStyle = t.borderStyle.style;
                        mid.style.borderColor = t.borderStyle.colour;
                        if (config_temp1.background.imageUrl != "") {
                            mid.style.backgroundImage = "url('" + config_temp1.background.imageUrl + "')"
                        } else {
                            mid.style.backgroundColor = t.background.backgroundColour
                        }
                        mid.appendChild(n);
                        var S = document.querySelector(e);

                        function T(t, e) {
                            e.parentNode.insertBefore(t, e.nextSibling)
                        }

                        function z(t, e) {
                            e.parentNode.insertBefore(t, e)
                        }
                        let slideUp = (target, duration = 500) => {
                            target.style.transitionProperty = 'height, margin, padding';
                            target.style.transitionDuration = duration + 'ms';
                            target.style.boxSizing = 'border-box';
                            target.style.height = target.offsetHeight + 'px';
                            target.offsetHeight;
                            target.style.overflow = 'hidden';
                            target.style.height = 0;
                            target.style.paddingTop = 0;
                            target.style.paddingBottom = 0;
                            target.style.marginTop = 0;
                            target.style.marginBottom = 0;
                            window.setTimeout(() => {
                                target.style.display = 'none';
                                target.style.removeProperty('height');
                                target.style.removeProperty('padding-top');
                                target.style.removeProperty('padding-bottom');
                                target.style.removeProperty('margin-top');
                                target.style.removeProperty('margin-bottom');
                                target.style.removeProperty('overflow');
                                target.style.removeProperty('transition-duration');
                                target.style.removeProperty('transition-property')
                            }, duration)
                        }
                        let slideDown = (target, duration = 500) => {
                            target.style.removeProperty('display');
                            let display = window.getComputedStyle(target).display;
                            if (display === 'none') display = 'block';
                            target.style.display = display;
                            let height = target.offsetHeight;
                            target.style.overflow = 'hidden';
                            target.style.height = 0;
                            target.style.paddingTop = 0;
                            target.style.paddingBottom = 0;
                            target.style.marginTop = 0;
                            target.style.marginBottom = 0;
                            target.offsetHeight;
                            target.style.boxSizing = 'border-box';
                            target.style.transitionProperty = "height, margin, padding";
                            target.style.transitionDuration = duration + 'ms';
                            target.style.height = height + 'px';
                            target.style.removeProperty('padding-top');
                            target.style.removeProperty('padding-bottom');
                            target.style.removeProperty('margin-top');
                            target.style.removeProperty('margin-bottom');
                            window.setTimeout(() => {
                                target.style.removeProperty('height');
                                target.style.removeProperty('overflow');
                                target.style.removeProperty('transition-duration');
                                target.style.removeProperty('transition-property')
                            }, duration)
                        }
                        var slideToggle = (target, duration = 500) => {
                            if (window.getComputedStyle(target).display === 'none') {
                                return slideDown(target, duration)
                            } else {
                                return slideUp(target, duration)
                            }
                        }
                        if ("before" == t.bannerPosition.location ? z(mid, S) : "after" == t.bannerPosition.location && T(mid, S), "yes" == t.collapseAndExpandButton.flag) {
                            var L = document.createElement("hr");
                            L.id = "horizontalLine_temp1", L.style.margin = "0px", L.style.borderTopWidth = "0px", L.style.borderTopStyle = "solid", L.style.borderTopColor = "white", L.style.display = "none";
                            var B = document.querySelector(i);
                            T(y, B), T(L, B)
                        }
                        "yes" == t.autoHide.flag && "" == t.autoHide.countDown && setTimeout(function() {
                            slideToggle(document.getElementById("mid_temp1"), 2000);
                            if (document.querySelectorAll(h).length > 0) {
                                document.querySelector(h).style.display = "none"
                            }
                        }, 1e3 * t.autoHide.time);
                        var E = document.createElement("div");
                        E.id = "tm_temp1", E.style.bacgroundColor = "red", E.style.color = "white", E.style.fontSize = "20px", E.style.textAlign = "center";
                        var I = document.createElement("span");
                        I.id = "timer_temp1", E.appendChild(I), z(E, document.querySelector(i)), document.querySelector("body").insertAdjacentHTML("beforeend", "<style>.mod-mph-flex-anchor_temp1 {z-index: 56;}.dd-button_temp1 { position: absolute; content: ''; width: 13px; height: 13px; border-top: 3px solid #444; border-right: 3px solid #444; -webkit-transform: rotate(-45deg); transform: rotate(-45deg); border-radius: 2px; left: 8px; top: 10px; border-color:white;}.dd-main_temp1 { border: 2px solid #666;width: 34px;height: 34px;position: relative;border-radius: 100%;box-shadow: 0 .125rem .25rem rgba(0,0,0,.075)!important;border-color: white;margin: 0vh auto 0;margin-bottom: -18px;margin-top: -18px;z-index: 2;background: #464343;transition: 0.5s ease;}.down_temp1 { -moz-transform:rotate(135deg); -webkit-transform:rotate(135deg); transform:rotate(180deg); top: 11px; } .close_temp1 {float:right;display:inline-block;padding:5px 10px; color:white;}.close_temp1:hover {float:right;display:inline-block;color:#fff; cursor: pointer;}#bannerBtn1_temp1{ margin-left: 10px; padding: 0px; display: inline-block; background: none;} .top-text_temp1 {display: inline-block; margin-right:10px;} @media only screen and (max-width: " + maxwidth + "){ #bannerBtn1_temp1{margin-left:0px; max-width:130px; width: 50%;    margin-top: 10px; margin-bottom: 10px;} .top-text_temp1{display:block;}}@media only screen and (max-width:1200px ){#lImgId_temp1{width:" + t.logoImage.mediumScreenLogoWidth + "; position: absolute; margin-left:0px; margin-top:0px;}}@media only screen and (max-width:814px ){#lImgId_temp1{width:" + t.logoImage.smallScreenLogoWidth + "; position: absolute;margin-left:0px; margin-top:0px;}}@media only screen and (min-width:1200px ){#lImgId_temp1{width:" + t.logoImage.largeScreenLogoWidth + "; position: absolute; margin-top:14px}}@media only screen and (max-width:600px ){.descriptionText_temp1{font-size:" + t.message.fontSizeMobile + "; padding: 0px 10px !important}}@media only screen and (min-width:601px ){.descriptionText_temp1{font-size:" + t.message.fontSizeDesktop + ";}}@keyframes bounce {0%, 20%, 50%, 80%, 100% {transform: translateY(0);}40% {transform: translateY(-30px);}60% {transform: translateY(-15px);}}.bounce-in-bottom {-webkit-animation: bounce-in-bottom 1.1s both;animation: bounce-in-bottom 1.1s both;}}@-webkit-keyframes bounce-in-bottom {0% {-webkit-transform: translateY(500px);transform: translateY(500px);-webkit-animation-timing-function: ease-in;animation-timing-function: ease-in;opacity: 0;}38% {-webkit-transform: translateY(0);transform: translateY(0);-webkit-animation-timing-function: ease-out;animation-timing-function: ease-out;opacity: 1;}55% {-webkit-transform: translateY(65px);transform: translateY(65px);-webkit-animation-timing-function: ease-in;animation-timing-function: ease-in;}72% {-webkit-transform: translateY(0);transform: translateY(0);-webkit-animation-timing-function: ease-out;animation-timing-function: ease-out;}81% {-webkit-transform: translateY(28px);transform: translateY(28px);-webkit-animation-timing-function: ease-in;animation-timing-function: ease-in;}90% {-webkit-transform: translateY(0);transform: translateY(0);-webkit-animation-timing-function: ease-out;animation-timing-function: ease-out;}95% {-webkit-transform: translateY(8px);transform: translateY(8px);-webkit-animation-timing-function: ease-in;animation-timing-function: ease-in;}100% {-webkit-transform: translateY(0);transform: translateY(0);-webkit-animation-timing-function: ease-out;animation-timing-function: ease-out;}}@keyframes bounce-in-bottom {0% {-webkit-transform: translateY(500px);transform: translateY(500px);-webkit-animation-timing-function: ease-in;animation-timing-function: ease-in;opacity: 0;}38% {-webkit-transform: translateY(0);transform: translateY(0);-webkit-animation-timing-function: ease-out;animation-timing-function: ease-out;opacity: 1;}55% {-webkit-transform: translateY(65px);transform: translateY(65px);-webkit-animation-timing-function: ease-in;animation-timing-function: ease-in;}72% {-webkit-transform: translateY(0);transform: translateY(0);-webkit-animation-timing-function: ease-out;animation-timing-function: ease-out;}81% {-webkit-transform: translateY(28px);transform: translateY(28px);-webkit-animation-timing-function: ease-in;animation-timing-function: ease-in;}90% {-webkit-transform: translateY(0);transform: translateY(0);-webkit-animation-timing-function: ease-out;animation-timing-function: ease-out;}95% {-webkit-transform: translateY(8px);transform: translateY(8px);-webkit-animation-timing-function: ease-in;animation-timing-function: ease-in;}100% {-webkit-transform: translateY(0);transform: translateY(0);-webkit-animation-timing-function: ease-out;animation-timing-function: ease-out;}}.swing-in-top-fwd {-webkit-animation: swing-in-top-fwd 0.5s cubic-bezier(0.175, 0.885, 0.320, 1.275) both;animation: swing-in-top-fwd 0.5s cubic-bezier(0.175, 0.885, 0.320, 1.275) both;}@-webkit-keyframes swing-in-top-fwd {0% {-webkit-transform: rotateX(-100deg);transform: rotateX(-100deg);-webkit-transform-origin: top;transform-origin: top;opacity: 0;}100% {-webkit-transform: rotateX(0deg);transform: rotateX(0deg);-webkit-transform-origin: top;transform-origin: top;opacity: 1;}}@keyframes swing-in-top-fwd {0% {-webkit-transform: rotateX(-100deg);transform: rotateX(-100deg);-webkit-transform-origin: top;transform-origin: top;opacity: 0;}100% {-webkit-transform: rotateX(0deg);transform: rotateX(0deg);-webkit-transform-origin: top;transform-origin: top;opacity: 1;}}.slide-in-top {-webkit-animation: slide-in-top 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;animation: slide-in-top 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;}@-webkit-keyframes slide-in-top {0% {-webkit-transform: translateY(-1000px);transform: translateY(-1000px);opacity: 0;}100% {-webkit-transform: translateY(0);transform: translateY(0);opacity: 1;}}@keyframes slide-in-top {0% {-webkit-transform: translateY(-1000px);transform: translateY(-1000px);opacity: 0;}100% {-webkit-transform: translateY(0);transform: translateY(0);opacity: 1;}}.slider_temp1{position:absolute;width:100%;top:0;height:100%;overflow:hidden;transition:all 1s}.slider_temp1.close_temp1{top:100%;height:0}</style>")
                    }(config_temp1, config_temp1.bannerPosition.selector), "" == config_temp1.subHeading.flag && (document.querySelector(".descriptionText_temp1").style.paddingBottom = "30px"), "yes" == config_temp1.autoHide.flag && "yes" == config_temp1.autoHide.countDown) var e = 0,
                    n = setInterval(function() {
                        ++e === config_temp1.autoHide.time && (slideToggle(document.getElementById("mid_temp1"), 2000), clearInterval(n));
                        var t = config_temp1.autoHide.time - e;
                        document.getElementById("timer_temp1").innerHTML = config_temp1.autoHide.countDownText + " " + t + " seconds", document.getElementById("tm_temp1").style.backgroundColor = "black"
                    }, 1e3);
                if (config_temp1.title.flag = "yes") {
                    document.querySelector(".psb_temp1").insertAdjacentHTML('beforebegin', '<style>@media only screen and (max-width:600px ){#heading_temp1{font-size:' + config_temp1.title.fontSizeMobile + ';}#lImgId1_temp1{width:30px;}}@media only screen and (min-width:601px ){#heading_temp1{font-size:' + config_temp1.title.fontSizeDesktop + ';}#lImgId1_temp1{width:35px;}}</style><div id="mid1_temp1" style="overflow: hidden;z-index: 1010;display: block;"><img src=' + config_temp1.logoImage.url + ' align="left" id="lImgId1_temp1" style="position: relative;top: 3px;left: 2px;"><span class="close_temp1" id="closebtn2_temp1"><img class="manImg_temp1" src=' + config_temp1.closeButton.imageUrl + ' style="width: 20px; height: 20px;"></span><h1 id="heading_temp1" style="text-align: center;color: ' + config_temp1.title.colour + ';padding: 5px 0px 5px;margin: 0px;">' + config_temp1.title.text + '</h1></div>')
                    if (config_temp1.logoImage.flag != "yes") {
                        document.querySelector("#lImgId1_temp1").style.display = "none";
                    }
                    let slideUp = (target, duration = 500) => {
                        target.style.transitionProperty = 'height, margin, padding';
                        target.style.transitionDuration = duration + 'ms';
                        target.style.boxSizing = 'border-box';
                        target.style.height = target.offsetHeight + 'px';
                        target.offsetHeight;
                        target.style.overflow = 'hidden';
                        target.style.height = 0;
                        target.style.paddingTop = 0;
                        target.style.paddingBottom = 0;
                        target.style.marginTop = 0;
                        target.style.marginBottom = 0;
                        window.setTimeout(() => {
                            target.style.display = 'none';
                            target.style.removeProperty('height');
                            target.style.removeProperty('padding-top');
                            target.style.removeProperty('padding-bottom');
                            target.style.removeProperty('margin-top');
                            target.style.removeProperty('margin-bottom');
                            target.style.removeProperty('overflow');
                            target.style.removeProperty('transition-duration');
                            target.style.removeProperty('transition-property')
                        }, duration)
                    }
                    let slideDown = (target, duration = 500) => {
                        target.style.removeProperty('display');
                        let display = window.getComputedStyle(target).display;
                        if (display === 'none') display = 'block';
                        target.style.display = display;
                        let height = target.offsetHeight;
                        target.style.overflow = 'hidden';
                        target.style.height = 0;
                        target.style.paddingTop = 0;
                        target.style.paddingBottom = 0;
                        target.style.marginTop = 0;
                        target.style.marginBottom = 0;
                        target.offsetHeight;
                        target.style.boxSizing = 'border-box';
                        target.style.transitionProperty = "height, margin, padding";
                        target.style.transitionDuration = duration + 'ms';
                        target.style.height = height + 'px';
                        target.style.removeProperty('padding-top');
                        target.style.removeProperty('padding-bottom');
                        target.style.removeProperty('margin-top');
                        target.style.removeProperty('margin-bottom');
                        window.setTimeout(() => {
                            target.style.removeProperty('height');
                            target.style.removeProperty('overflow');
                            target.style.removeProperty('transition-duration');
                            target.style.removeProperty('transition-property')
                        }, duration)
                    }
                    var slideToggle = (target, duration = 500) => {
                        if (window.getComputedStyle(target).display === 'none') {
                            return slideDown(target, duration)
                        } else {
                            return slideUp(target, duration)
                        }
                    }
                    var el = document.getElementById("did1_temp1")
                }
                if (config_temp1.collapseAndExpandButton.flag == "yes") {
                    document.querySelector("#did1_temp1").onclick = function() {
                        document.querySelector("#did1_temp1").classList.toggle("down_temp1");
                        slideToggle(document.getElementById("bnr1_temp1"), 2000)
                    }
                }
                if (config_temp1.closeButton.flag != "yes") {
                    document.querySelector("#closebtn2_temp1").style.display = "none";
                }
                document.querySelector("#closebtn2_temp1").onclick = function() {
                    slideToggle(document.getElementById("mid_temp1"), 2000)
                }
                if(config_temp1.ctaCount.singleCTA ==  "none"){
                if (config_temp1.ctaLink2.closeButton == "yes") {
                    document.querySelector("#closeb_temp1").setAttribute("href", "javascript:void(0)");
                    document.querySelector("#closeb_temp1").setAttribute("target", "_self");
                    document.querySelectorAll(".btn_temp1")[1].onclick = function() {
                        slideToggle(document.getElementById("mid_temp1"), 2000)
                    }
                }}
            }
            else{
                console.log("selector where we need to insert banner is not present. Please check the selector")
            }      
                clearInterval(t)
        }
        }, config_temp1.initialDelay.time)
    } catch (t) {}
}()
