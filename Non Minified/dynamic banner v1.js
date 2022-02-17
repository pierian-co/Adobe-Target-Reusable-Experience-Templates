var config_banner_v1 = {
		"initialDelay": {
			"time": 100
		},
		"bannerPosition": {
			"selector": "#root > div.container",
			"location": "before" //before/after
		},
		"background": {
			"imageUrl": "https://www.vodafone.de/media/img/teaser/hero-navigation-bg-2560x432.jpg", //"https://www.vodafone.de/media/img/teaser/hero-navigation-bg-2560x432.jpg", // image url of banner  https://cdn.pixabay.com/photo/2015/11/10/08/31/banner-1036483__340.jpg
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
			"imageUrl": "https://iili.io/2zu8Zl.md.png" //"https://iili.io/2zu8Zl.md.png"
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
			"closeButton": "yes"
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
! function() {
	try {
		var t = setInterval(function() {
			if(0 == document.querySelectorAll(".psb_temp1").length) {
				if(document.querySelectorAll(config_banner_v1.bannerPosition.selector).length > 0) {
					if(function(t, e) {
							var n = document.createElement("div");
							n.className = "psb_temp1", n.id = "bnr1_temp1";
							var o = "#" + n.id;
							n.style.width = "100%", n.style.display = "block", "" != t.background.imgUrl ? n.style.backgroundImage = "url('" + t.background.imgUrl + "')" : n.style.backgroundColor = t.background.backgroundColour;
							var i = document.createElement("div");
							i.className = "descriptionText_temp1", i.style.textAlign = "center", i.style.padding = "0px 10px 10px", i.style.color = t.message.colour;
							var a = document.createElement("span");
							a.className = "top-text_temp1", a.innerText = t.message.text, i.appendChild(a);
							var r = document.createElement("div");
							r.classList.add("btn_temp1"), r.id = "bannerBtn1_temp1";
							var s = document.createElement("A");
							s.setAttribute("href", t.ctaLink1.href), s.setAttribute("target", "_blank"), s.innerHTML = t.ctaLink1.text, s.style.borderRadius = t.ctaLink1.borderRadius, s.style.backgroundColor = t.ctaLink1.backgroundColour, s.style.fontFamily = t.ctaLink1.fontFamily, s.style.padding = "5px 10px", s.style.color = t.ctaLink1.textColor, s.style.textDecoration = "none", s.style.fontSize = t.ctaLink1.fontSize, r.appendChild(s);
							var l = document.createElement("div");
							l.classList.add("btn_temp1"), l.id = "bannerBtn1_temp1";
							var m = document.createElement("A");
							m.setAttribute("href", t.ctaLink2.href), m.setAttribute("id", "closeb_temp1"), m.setAttribute("target", "_blank"), m.innerHTML = t.ctaLink2.text, m.style.borderRadius = "6px", m.style.backgroundColor = t.ctaLink2.backgroundColour, m.style.fontFamily = t.ctaLink2.fontFamily, m.style.padding = "5px 10px", m.style.color = t.ctaLink2.textColor, m.style.textDecoration = "none", m.style.fontSize = t.ctaLink2.fontSize, l.appendChild(m);
							var d = document.createElement("A");
							d.setAttribute("href", t.subHeading.subHeading1Href), d.setAttribute("target", "_blank"), d.innerText = t.subHeading.subHeading1Text + " |", d.style.color = t.subHeading.textColor;
							var p = document.createElement("A");
							p.setAttribute("href", t.subHeading.subHeading2Href), p.setAttribute("target", "_blank"), p.innerHTML = "  " + t.subHeading.subHeading2Text + " |", p.style.color = t.subHeading.textColor;
							var g = document.createElement("A");
							g.setAttribute("href", t.subHeading.subHeading3Href), g.setAttribute("target", "_blank"), g.innerHTML = "  " + t.subHeading.subHeading3Text, g.style.color = t.subHeading.textColor;
							var c = document.createElement("div");
							c.appendChild(d), c.appendChild(p), c.appendChild(g), c.style.textAlign = "center", c.style.fontSize = t.subHeading.fontSize, c.style.padding = "0px 0px 30px", c.style.color = t.subHeading.textColor;
							var y = document.createElement("span");
							y.className = "close_temp1", y.id = "closebtn1_temp1";
							y.id;
							if("" == t.closeButton.imageUrl) y.innerHTML = "x", y.style.fontSize = "25px";
							else {
								var u = document.createElement("img");
								u.className = "manImg_temp1", u.setAttribute("src", t.closeButton.imageUrl), u.style.width = "20px", u.style.height = "20px", u.style.display = "none", y.appendChild(u)
							}
							var f = document.createElement("div");
							if("" == t.collapseAndExpandButton.imageUrl) {
								f.className = "dd-main_temp1", f.id = "did1_temp1";
								var b = "#" + f.id,
									x = document.createElement("div");
								x.className = "dd-button_temp1", x.id = "dd-buttonID_temp1", f.appendChild(x)
							} else {
								f.className = "dd-main1_temp1", f.id = "did1_temp1", b = "#" + f.id, f.style.width = "34px", f.style.position = "relative", f.style.margin = "0vh auto 0", f.style.marginBottom = "-18px", f.style.marginTop = "-18px", f.style.zIndex = "2";
								var h = document.createElement("div");
								h.id = "dbtnid1_temp1", h.id;
								var w = document.createElement("img");
								w.className = "downImg_temp1", w.id = "dimageid1_temp1";
								w.id;
								w.setAttribute("src", t.collapseAndExpandButton.imageUrl), w.style.width = "35px", w.style.height = "35px", h.appendChild(w), f.appendChild(h)
							}
							var k = document.createElement("img");
							if(k.setAttribute("src", t.logoImage.url), k.setAttribute("align", "left"), k.id = "2ImgId_temp1", k.style.display = "none", "yes" == t.animation.flag)
								if("bounce" == t.animation.animationType) {
									n.className += " bounce-in-bottom"
								} else "swing" == t.animation.animationType ? (n.className += " swing-in-top-fwd", "swing-in-top-fwd") : "slide" == t.animation.animationType && (n.className += " slide-in-top", "slide-in-top");
								"yes" == t.logoImage.flag && n.appendChild(k), "yes" == t.closeButton.flag && n.appendChild(y), i.appendChild(r), "none" == t.ctaCount.singleCTA && i.appendChild(l), n.appendChild(i), "yes" == t.subHeading.flag && n.appendChild(c);
							var _ = document.createElement("div");
							_.id = "mid_temp1", _.style.borderWidth = t.borderStyle.width, _.style.borderStyle = t.borderStyle.style, _.style.borderColor = t.borderStyle.colour, "" != config_banner_v1.background.imageUrl ? _.style.backgroundImage = "url('" + config_banner_v1.background.imageUrl + "')" : _.style.backgroundColor = t.background.backgroundColour, _.appendChild(n);
							var v = document.querySelector(e);

							function H(t, e) {
								e.parentNode.insertBefore(t, e.nextSibling)
							}

							function S(t, e) {
								e.parentNode.insertBefore(t, e)
							}
							var C = (t, e = 500) => "none" === window.getComputedStyle(t).display ? ((t, e = 500) => {
								t.style.removeProperty("display");
								let n = window.getComputedStyle(t).display;
								"none" === n && (n = "block"), t.style.display = n;
								let o = t.offsetHeight;
								t.style.overflow = "hidden", t.style.height = 0, t.style.paddingTop = 0, t.style.paddingBottom = 0, t.style.marginTop = 0, t.style.marginBottom = 0, t.offsetHeight, t.style.boxSizing = "border-box", t.style.transitionProperty = "height, margin, padding", t.style.transitionDuration = e + "ms", t.style.height = o + "px", t.style.removeProperty("padding-top"), t.style.removeProperty("padding-bottom"), t.style.removeProperty("margin-top"), t.style.removeProperty("margin-bottom"), window.setTimeout(() => {
									t.style.removeProperty("height"), t.style.removeProperty("overflow"), t.style.removeProperty("transition-duration"), t.style.removeProperty("transition-property")
								}, e)
							})(t, e) : ((t, e = 500) => {
								t.style.transitionProperty = "height, margin, padding", t.style.transitionDuration = e + "ms", t.style.boxSizing = "border-box", t.style.height = t.offsetHeight + "px", t.offsetHeight, t.style.overflow = "hidden", t.style.height = 0, t.style.paddingTop = 0, t.style.paddingBottom = 0, t.style.marginTop = 0, t.style.marginBottom = 0, window.setTimeout(() => {
									t.style.display = "none", t.style.removeProperty("height"), t.style.removeProperty("padding-top"), t.style.removeProperty("padding-bottom"), t.style.removeProperty("margin-top"), t.style.removeProperty("margin-bottom"), t.style.removeProperty("overflow"), t.style.removeProperty("transition-duration"), t.style.removeProperty("transition-property")
								}, e)
							})(t, e);
							if("before" == t.bannerPosition.location ? S(_, v) : "after" == t.bannerPosition.location && H(_, v), "yes" == t.collapseAndExpandButton.flag) {
								var T = document.createElement("hr");
								T.id = "horizontalLine_temp1", T.style.margin = "0px", T.style.borderTopWidth = "0px", T.style.borderTopStyle = "solid", T.style.borderTopColor = "white", T.style.display = "none";
								var P = document.querySelector(o);
								H(f, P), H(T, P)
							}
							"yes" == t.autoHide.flag && "" == t.autoHide.countDown && setTimeout(function() {
								C(document.getElementById("mid_temp1"), 2e3), document.querySelectorAll(b).length > 0 && (document.querySelector(b).style.display = "none")
							}, 1e3 * t.autoHide.time);
							var I = document.createElement("div");
							I.id = "tm_temp1", I.style.bacgroundColor = "red", I.style.color = "white", I.style.fontSize = "20px", I.style.textAlign = "center";
							var Y = document.createElement("span");
							Y.id = "timer_temp1", I.appendChild(Y), S(I, document.querySelector(o)), document.querySelector("body").insertAdjacentHTML("beforeend", "<style>.mod-mph-flex-anchor_temp1 {z-index: 56;}.dd-button_temp1 { position: absolute; content: ''; width: 13px; height: 13px; border-top: 3px solid #444; border-right: 3px solid #444; -webkit-transform: rotate(-45deg); transform: rotate(-45deg); border-radius: 2px; left: 8px; top: 10px; border-color:white;}.dd-main_temp1 { border: 2px solid #666;width: 34px;height: 34px;position: relative;border-radius: 100%;box-shadow: 0 .125rem .25rem rgba(0,0,0,.075)!important;border-color: white;margin: 0vh auto 0;margin-bottom: -18px;margin-top: -18px;z-index: 2;background: #464343;transition: 0.5s ease;}.down_temp1 { -moz-transform:rotate(135deg); -webkit-transform:rotate(135deg); transform:rotate(180deg); top: 11px; } .close_temp1 {float:right;display:inline-block;padding:5px 10px; color:white;}.close_temp1:hover {float:right;display:inline-block;color:#fff; cursor: pointer;}#bannerBtn1_temp1{ margin-left: 10px; padding: 0px; display: inline-block; background: none;} .top-text_temp1 {display: inline-block; margin-right:10px;} @media only screen and (max-width: " + maxwidth + "){ #bannerBtn1_temp1{margin-left:0px; max-width:130px; width: 50%;    margin-top: 10px; margin-bottom: 10px;} .top-text_temp1{display:block;}}@media only screen and (max-width:1200px ){#lImgId_temp1{width:" + t.logoImage.mediumScreenLogoWidth + "; position: absolute; margin-left:0px; margin-top:0px;}}@media only screen and (max-width:814px ){#lImgId_temp1{width:" + t.logoImage.smallScreenLogoWidth + "; position: absolute;margin-left:0px; margin-top:0px;}}@media only screen and (min-width:1200px ){#lImgId_temp1{width:" + t.logoImage.largeScreenLogoWidth + "; position: absolute; margin-top:14px}}@media only screen and (max-width:600px ){.descriptionText_temp1{font-size:" + t.message.fontSizeMobile + "; padding: 0px 10px !important}}@media only screen and (min-width:601px ){.descriptionText_temp1{font-size:" + t.message.fontSizeDesktop + ";}}@keyframes bounce {0%, 20%, 50%, 80%, 100% {transform: translateY(0);}40% {transform: translateY(-30px);}60% {transform: translateY(-15px);}}.bounce-in-bottom {-webkit-animation: bounce-in-bottom 1.1s both;animation: bounce-in-bottom 1.1s both;}}@-webkit-keyframes bounce-in-bottom {0% {-webkit-transform: translateY(500px);transform: translateY(500px);-webkit-animation-timing-function: ease-in;animation-timing-function: ease-in;opacity: 0;}38% {-webkit-transform: translateY(0);transform: translateY(0);-webkit-animation-timing-function: ease-out;animation-timing-function: ease-out;opacity: 1;}55% {-webkit-transform: translateY(65px);transform: translateY(65px);-webkit-animation-timing-function: ease-in;animation-timing-function: ease-in;}72% {-webkit-transform: translateY(0);transform: translateY(0);-webkit-animation-timing-function: ease-out;animation-timing-function: ease-out;}81% {-webkit-transform: translateY(28px);transform: translateY(28px);-webkit-animation-timing-function: ease-in;animation-timing-function: ease-in;}90% {-webkit-transform: translateY(0);transform: translateY(0);-webkit-animation-timing-function: ease-out;animation-timing-function: ease-out;}95% {-webkit-transform: translateY(8px);transform: translateY(8px);-webkit-animation-timing-function: ease-in;animation-timing-function: ease-in;}100% {-webkit-transform: translateY(0);transform: translateY(0);-webkit-animation-timing-function: ease-out;animation-timing-function: ease-out;}}@keyframes bounce-in-bottom {0% {-webkit-transform: translateY(500px);transform: translateY(500px);-webkit-animation-timing-function: ease-in;animation-timing-function: ease-in;opacity: 0;}38% {-webkit-transform: translateY(0);transform: translateY(0);-webkit-animation-timing-function: ease-out;animation-timing-function: ease-out;opacity: 1;}55% {-webkit-transform: translateY(65px);transform: translateY(65px);-webkit-animation-timing-function: ease-in;animation-timing-function: ease-in;}72% {-webkit-transform: translateY(0);transform: translateY(0);-webkit-animation-timing-function: ease-out;animation-timing-function: ease-out;}81% {-webkit-transform: translateY(28px);transform: translateY(28px);-webkit-animation-timing-function: ease-in;animation-timing-function: ease-in;}90% {-webkit-transform: translateY(0);transform: translateY(0);-webkit-animation-timing-function: ease-out;animation-timing-function: ease-out;}95% {-webkit-transform: translateY(8px);transform: translateY(8px);-webkit-animation-timing-function: ease-in;animation-timing-function: ease-in;}100% {-webkit-transform: translateY(0);transform: translateY(0);-webkit-animation-timing-function: ease-out;animation-timing-function: ease-out;}}.swing-in-top-fwd {-webkit-animation: swing-in-top-fwd 0.5s cubic-bezier(0.175, 0.885, 0.320, 1.275) both;animation: swing-in-top-fwd 0.5s cubic-bezier(0.175, 0.885, 0.320, 1.275) both;}@-webkit-keyframes swing-in-top-fwd {0% {-webkit-transform: rotateX(-100deg);transform: rotateX(-100deg);-webkit-transform-origin: top;transform-origin: top;opacity: 0;}100% {-webkit-transform: rotateX(0deg);transform: rotateX(0deg);-webkit-transform-origin: top;transform-origin: top;opacity: 1;}}@keyframes swing-in-top-fwd {0% {-webkit-transform: rotateX(-100deg);transform: rotateX(-100deg);-webkit-transform-origin: top;transform-origin: top;opacity: 0;}100% {-webkit-transform: rotateX(0deg);transform: rotateX(0deg);-webkit-transform-origin: top;transform-origin: top;opacity: 1;}}.slide-in-top {-webkit-animation: slide-in-top 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;animation: slide-in-top 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;}@-webkit-keyframes slide-in-top {0% {-webkit-transform: translateY(-1000px);transform: translateY(-1000px);opacity: 0;}100% {-webkit-transform: translateY(0);transform: translateY(0);opacity: 1;}}@keyframes slide-in-top {0% {-webkit-transform: translateY(-1000px);transform: translateY(-1000px);opacity: 0;}100% {-webkit-transform: translateY(0);transform: translateY(0);opacity: 1;}}.slider_temp1{position:absolute;width:100%;top:0;height:100%;overflow:hidden;transition:all 1s}.slider_temp1.close_temp1{top:100%;height:0}</style>")
						}(config_banner_v1, config_banner_v1.bannerPosition.selector), "" == config_banner_v1.subHeading.flag && (document.querySelector(".descriptionText_temp1").style.paddingBottom = "30px"), "yes" == config_banner_v1.autoHide.flag && "yes" == config_banner_v1.autoHide.countDown) var e = 0,
						n = setInterval(function() {
							++e === config_banner_v1.autoHide.time && (o(document.getElementById("mid_temp1"), 2e3), clearInterval(n));
							var t = config_banner_v1.autoHide.time - e;
							document.getElementById("timer_temp1").innerHTML = config_banner_v1.autoHide.countDownText + " " + t + " seconds", document.getElementById("tm_temp1").style.backgroundColor = "black"
						}, 1e3);
					if(config_banner_v1.title.flag = "yes") {
						document.querySelector(".psb_temp1").insertAdjacentHTML("beforebegin", "<style>@media only screen and (max-width:600px ){#heading_temp1{font-size:" + config_banner_v1.title.fontSizeMobile + ";}#lImgId1_temp1{width:30px;}}@media only screen and (min-width:601px ){#heading_temp1{font-size:" + config_banner_v1.title.fontSizeDesktop + ';}#lImgId1_temp1{width:35px;}}</style><div id="mid1_temp1" style="overflow: hidden;z-index: 1010;display: block;"><img src=' + config_banner_v1.logoImage.url + ' align="left" id="lImgId1_temp1" style="position: relative;top: 3px;left: 2px;"><span class="close_temp1" id="closebtn2_temp1"><img class="manImg_temp1" src=' + config_banner_v1.closeButton.imageUrl + ' style="width: 20px; height: 20px;"></span><h1 id="heading_temp1" style="text-align: center;color: ' + config_banner_v1.title.colour + ';padding: 5px 0px 5px;margin: 0px;">' + config_banner_v1.title.text + "</h1></div>"), "yes" != config_banner_v1.logoImage.flag && (document.querySelector("#lImgId1_temp1").style.display = "none");
						let t = (t, e = 500) => {
								t.style.transitionProperty = "height, margin, padding", t.style.transitionDuration = e + "ms", t.style.boxSizing = "border-box", t.style.height = t.offsetHeight + "px", t.offsetHeight, t.style.overflow = "hidden", t.style.height = 0, t.style.paddingTop = 0, t.style.paddingBottom = 0, t.style.marginTop = 0, t.style.marginBottom = 0, window.setTimeout(() => {
									t.style.display = "none", t.style.removeProperty("height"), t.style.removeProperty("padding-top"), t.style.removeProperty("padding-bottom"), t.style.removeProperty("margin-top"), t.style.removeProperty("margin-bottom"), t.style.removeProperty("overflow"), t.style.removeProperty("transition-duration"), t.style.removeProperty("transition-property")
								}, e)
							},
							e = (t, e = 500) => {
								t.style.removeProperty("display");
								let n = window.getComputedStyle(t).display;
								"none" === n && (n = "block"), t.style.display = n;
								let o = t.offsetHeight;
								t.style.overflow = "hidden", t.style.height = 0, t.style.paddingTop = 0, t.style.paddingBottom = 0, t.style.marginTop = 0, t.style.marginBottom = 0, t.offsetHeight, t.style.boxSizing = "border-box", t.style.transitionProperty = "height, margin, padding", t.style.transitionDuration = e + "ms", t.style.height = o + "px", t.style.removeProperty("padding-top"), t.style.removeProperty("padding-bottom"), t.style.removeProperty("margin-top"), t.style.removeProperty("margin-bottom"), window.setTimeout(() => {
									t.style.removeProperty("height"), t.style.removeProperty("overflow"), t.style.removeProperty("transition-duration"), t.style.removeProperty("transition-property")
								}, e)
							};
						var o = (n, o = 500) => "none" === window.getComputedStyle(n).display ? e(n, o) : t(n, o);
						document.getElementById("did1_temp1")
					}
					"yes" == config_banner_v1.collapseAndExpandButton.flag && (document.querySelector("#did1_temp1").onclick = function() {
						document.querySelector("#did1_temp1").classList.toggle("down_temp1"), o(document.getElementById("bnr1_temp1"), 2e3)
					}), "yes" != config_banner_v1.closeButton.flag && (document.querySelector("#closebtn2_temp1").style.display = "none"), document.querySelector("#closebtn2_temp1").onclick = function() {
						o(document.getElementById("mid_temp1"), 2e3)
					}, "none" == config_banner_v1.ctaCount.singleCTA && "yes" == config_banner_v1.ctaLink2.closeButton && (document.querySelector("#closeb_temp1").setAttribute("href", "javascript:void(0)"), document.querySelector("#closeb_temp1").setAttribute("target", "_self"), document.querySelectorAll(".btn_temp1")[1].onclick = function() {
						o(document.getElementById("mid_temp1"), 2e3)
					})
				} else console.log("selector where we need to insert banner is not present. Please check the selector");
				clearInterval(t)
			}
		}, config_banner_v1.initialDelay.time)
	} catch(t) {}
}();
