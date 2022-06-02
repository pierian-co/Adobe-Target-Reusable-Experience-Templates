var config_toastr_v1 = {
	"initialDelay": {
		"time": 100
	},
	"background": {
		"imageUrl": "", 
		"backgroundColour": "red"
	},
	"autoHide": {
		"flag": "", // yes to activate
		"countDown": "yes", // yes to activate countdown part with autohide
		"countDownText": "Ends in",
		"time": 5
	},
	"collapseAndExpandButton": {
		"flag": "yes", // yes to activate
		"imageUrl": "https://i.imgur.com/KqHD37h.png", //"https://i.imgur.com/KqHD37h.png",
	},
	"borderStyle": {
		"width": "2px",
		"style": "solid",
		"colour": "white"
	},
	"title": {
		"text": "Heading Text", // Char limit 30 char
		"fontSizeDesktop": "25px",
		"fontSizeMobile": "20px",
		"colour": "white",
		"fontFamily": "Arial, Helvetica, sans-serif"
	},
	"message": {
		"text": "Samsung Galaxy S10 mit dem Red S 10 GB", // char limit 50 char
		"fontSizeDesktop": "25px",
		"fontSizeMobile": "20px",
		"colour": "white",
		"fontFamily": "Arial, Helvetica, sans-serif"
	},
	"ctaCount": {
		"singleCTA": "none" //type "none" to show 2 buttons
	},
	"ctaLink1": {
		"text": "Check Offer", // char limit 20 char
		"href": "",
		"fontSize": "18px",
		"backgroundColour": "white",
		"textColor": "black",
		"borderRadius": "6px",
		"fontFamily": "Arial, Helvetica, sans-serif"
	},
	"ctaLink2": {
		"text": "Close Offer", // char limit 20 char
		"href": "",
		"fontSize": "18px",
		"backgroundColour": "white",
		"textColor": "red",
		"borderRadius": "6px",
		"fontFamily": "Arial, Helvetica, sans-serif",
		"closeButton": "yes"
	},
	"subHeading": {
		"flag": "yes",
		"subHeading1Text": "Offer 1", // char limit 20 char
		"subHeading1Href": "",
		"subHeading2Text": "Offer 2", // char limit 20 char
		"subHeading2Href": "",
		"subHeading3Text": "Offer 3", // char limit 20 char
		"subHeading3Href": "",
		"fontSize": "15px",
		"textColor": "white",
		"fontFamily": "inherit"
	},
	"logoImage": {
		"flag": "yes",
		"url": "https://images.squarespace-cdn.com/content/v1/5b8ce9038ab7225fc2c98c25/1543833481328-3JHHF3WR6TP4I5BVL5J2/Pierian-logo-icon1-darkgreen.jpg?format=1500w",
	},
	"animation": {
		"flag": "",
		"animationType": "bounce" //bounce/swing/slide
	}
},
maxwidth = "860px";
! function() {
try {
	var t = setInterval(function() {
		if(0 == document.querySelectorAll(".psb_toastr_V1").length) {
			if(function(t, e) {
					var n = document.createElement("div");
					n.className = "psb_toastr_V1", n.id = "bnr1";
					var i = "#" + n.id;
					n.style.width = "100%", n.style.display = "block", "" != t.background.imgUrl ? n.style.backgroundImage = "url('" + t.background.imgUrl + "')" : n.style.backgroundColor = t.background.backgroundColour;
					var o = document.createElement("div");
					o.className = "descriptionText_toastr_V1", o.style.textAlign = "center", o.style.padding = "0px 10px 0px 10px", o.style.color = t.message.colour;
					var r = document.createElement("span");
					r.className = "top-text", r.innerText = t.message.text, r.style.fontFamily = t.message.fontFamily, o.appendChild(r);
					var s = document.createElement("div");
					s.classList.add("btn"), s.id = "bannerBtn1";
					var l = document.createElement("A");
					l.setAttribute("href", t.ctaLink1.href), l.setAttribute("target", "_blank"), l.innerHTML = t.ctaLink1.text, l.style.borderRadius = t.ctaLink1.borderRadius, l.style.backgroundColor = t.ctaLink1.backgroundColour, l.style.fontFamily = t.ctaLink1.fontFamily, l.style.padding = "6px 10px 6px 10px", l.style.color = t.ctaLink1.textColor, l.style.textDecoration = "none", l.style.fontSize = t.ctaLink1.fontSize, s.appendChild(l);
					var d = document.createElement("div");
					d.classList.add("btn"), d.id = "bannerBtn1";
					var m = document.createElement("A");
					m.setAttribute("href", t.ctaLink2.href), m.setAttribute("id", "closeb_toastr_V1"), m.innerHTML = t.ctaLink2.text, m.style.borderRadius = t.ctaLink2.borderRadius, m.style.backgroundColor = t.ctaLink2.backgroundColour, m.style.fontFamily = t.ctaLink2.fontFamily, m.style.padding = "6px 10px 6px 10px", m.style.color = t.ctaLink2.textColor, m.style.textDecoration = "none", m.style.fontSize = t.ctaLink2.fontSize, d.appendChild(m);
					var c = document.createElement("A");
					c.setAttribute("href", t.subHeading.subHeading1Href), c.setAttribute("target", "_blank"), c.innerText = t.subHeading.subHeading1Text + " |", c.style.color = t.subHeading.textColor;
					var p = document.createElement("A");
					p.setAttribute("href", t.subHeading.subHeading2Href), p.setAttribute("target", "_blank"), p.innerHTML = "  " + t.subHeading.subHeading2Text + " |", p.style.color = t.subHeading.textColor;
					var g = document.createElement("A");
					g.setAttribute("href", t.subHeading.subHeading3Href), g.setAttribute("target", "_blank"), g.innerHTML = "  " + t.subHeading.subHeading3Text, g.style.color = t.subHeading.textColor;
					var b = document.createElement("div");
					b.appendChild(c), b.appendChild(p), b.appendChild(g), b.style.textAlign = "center", b.style.fontSize = t.subHeading.fontSize, b.style.padding = "0px 0px 10px", b.style.color = t.subHeading.textColor, b.style.fontFamily = t.subHeading.fontFamily;
					var f = document.createElement("span");
					f.className = "close_toastr_V1", f.id = "closebtn1_toastr_V1";
					var y = document.createElement("div");
					if("" == t.collapseAndExpandButton.imageUrl) {
						y.className = "dd-main", y.id = "did1_toastr_V1";
						var h = "#" + y.id,
							w = document.createElement("div");
						w.className = "dd-button", w.id = "dd-buttonID", y.appendChild(w)
					} else {
						y.className = "dd-main", y.id = "did1_toastr_V1", h = "#" + y.id;
						var k = document.createElement("div");
						k.id = "dbtnid1", k.id;
						var v = document.createElement("img");
						v.className = "downImg", v.id = "dimageid1";
						v.setAttribute("src", t.collapseAndExpandButton.imageUrl), v.style.width = "100%", v.style.height = "100%", k.appendChild(v), y.appendChild(k)
					}
					var C = document.createElement("img");
					if("yes" == t.animation.flag)
						if("bounce" == t.animation.animationType) {
							n.className += " bounce-in-bottom";
							var Y = "bounce-in-bottom"
						} else "swing" == t.animation.animationType ? (n.className += " swing-in-top-fwd", Y = "swing-in-top-fwd") : "slide" == t.animation.animationType && (n.className += " slide-in-top", Y = "slide-in-top");
						o.appendChild(s), "none" == t.ctaCount.singleCTA && o.appendChild(d), n.appendChild(o), "yes" == t.subHeading.flag && n.appendChild(b);
					var mid_toastr_V1 = document.createElement("div");
					mid_toastr_V1.id = "mid_toastr_V1";
					mid_toastr_V1.style.borderWidth = t.borderStyle.width;
					mid_toastr_V1.style.borderStyle = t.borderStyle.style;
					mid_toastr_V1.style.borderColor = t.borderStyle.colour;
					if(config_toastr_v1.background.imageUrl != "") {
						mid_toastr_V1.style.backgroundImage = "url('" + config_toastr_v1.background.imageUrl + "')"
					} else {
						mid_toastr_V1.style.backgroundColor = t.background.backgroundColour
					}
					mid_toastr_V1.appendChild(n);
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
						if(display === 'none') display = 'block';
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
						if(window.getComputedStyle(target).display === 'none') {
							return slideDown(target, duration)
						} else {
							return slideUp(target, duration)
						}
					}
					if("before" == "before" ? z(mid_toastr_V1, S) : "after" == "after" && T(mid_toastr_V1, S), "yes" == t.collapseAndExpandButton.flag) {
						var L = document.createElement("hr");
						L.id = "horizontalLine", L.style.margin = "0px", L.style.borderTopWidth = "0px", L.style.borderTopStyle = "solid", L.style.borderTopColor = "white", L.style.display = "none";
						var B = document.querySelector(i);
						T(y, B), T(L, B)
					}
					"yes" == t.autoHide.flag && "" == t.autoHide.countDown && setTimeout(function() {
						slideToggle(document.getElementById("mid_toastr_V1"), 500);
						if(document.querySelectorAll(h).length > 0) {
							document.querySelector(h).style.display = "none"
						}
					}, 1e3 * t.autoHide.time);
					var E = document.createElement("div");
					E.id = "tm", E.style.bacgroundColor = "red", E.style.color = "white", E.style.fontSize = "20px", E.style.textAlign = "center";
					var I = document.createElement("span");
					I.id = "timer", E.appendChild(I), z(E, document.querySelector(i)), document.querySelector("body").insertAdjacentHTML("beforeend", "<style>#mid_toastr_V1{display: block;bottom: 0px;left: 0px;right: 0px;z-index: 57;position: fixed;}.mod-mph-flex-anchor {z-index: 56;}.dd-button { position: absolute; content: ''; width: 13px; height: 13px; border-top: 3px solid #444; border-right: 3px solid #444; -webkit-transform: rotate(135deg); transform: rotate(135deg); border-radius: 2px; left: 8px; top: 7px; border-color:white;}.dd-main { border: 2px solid #666;width: 34px;height: 34px;position: relative;border-radius: 100%;box-shadow: 0 .125rem .25rem rgba(0,0,0,.075)!important;border-color: white;margin: 0vh auto 0;margin-top: -33px;z-index: 2;background: #464343;transition: 0.5s ease;}.down { -moz-transform:rotate(135deg); -webkit-transform:rotate(135deg); transform:rotate(180deg);} .close_toastr_V1 {float:right;display:inline-block;padding:5px 10px; color:white;}.close_toastr_V1:hover {float:right;display:inline-block;color:#fff; cursor: pointer;}#bannerBtn1{ margin-left: 10px; padding: 0px; display: inline-block; background: none;} .top-text {display: inline-block; margin-right:10px;} @media only screen and (max-width: " + maxwidth + "){ #bannerBtn1{margin-left:0px; margin-top: 10px; margin-bottom: 10px;} .top-text{display:block;}}@media only screen and (max-width:1200px ){#lImgId{width:" + t.logoImage.mediumScreenLogoWidth + "; position: absolute; margin-left:0px; margin-top:0px;}}@media only screen and (max-width:814px ){#lImgId{width:" + t.logoImage.smallScreenLogoWidth + "; position: absolute;margin-left:0px; margin-top:0px;}}@media only screen and (min-width:1200px ){#lImgId{width:" + t.logoImage.largeScreenLogoWidth + "; position: absolute; margin-top:14px}}@media only screen and (max-width:600px ){.descriptionText_toastr_V1{font-size:" + t.message.fontSizeMobile + ";}}@media only screen and (min-width:601px ){.descriptionText_toastr_V1{font-size:" + t.message.fontSizeDesktop + ";}}@keyframes bounce {0%, 20%, 50%, 80%, 100% {transform: translateY(0);}40% {transform: translateY(-30px);}60% {transform: translateY(-15px);}}.bounce-in-bottom {-webkit-animation: bounce-in-bottom 1.1s both;animation: bounce-in-bottom 1.1s both;}}@-webkit-keyframes bounce-in-bottom {0% {-webkit-transform: translateY(500px);transform: translateY(500px);-webkit-animation-timing-function: ease-in;animation-timing-function: ease-in;opacity: 0;}38% {-webkit-transform: translateY(0);transform: translateY(0);-webkit-animation-timing-function: ease-out;animation-timing-function: ease-out;opacity: 1;}55% {-webkit-transform: translateY(65px);transform: translateY(65px);-webkit-animation-timing-function: ease-in;animation-timing-function: ease-in;}72% {-webkit-transform: translateY(0);transform: translateY(0);-webkit-animation-timing-function: ease-out;animation-timing-function: ease-out;}81% {-webkit-transform: translateY(28px);transform: translateY(28px);-webkit-animation-timing-function: ease-in;animation-timing-function: ease-in;}90% {-webkit-transform: translateY(0);transform: translateY(0);-webkit-animation-timing-function: ease-out;animation-timing-function: ease-out;}95% {-webkit-transform: translateY(8px);transform: translateY(8px);-webkit-animation-timing-function: ease-in;animation-timing-function: ease-in;}100% {-webkit-transform: translateY(0);transform: translateY(0);-webkit-animation-timing-function: ease-out;animation-timing-function: ease-out;}}@keyframes bounce-in-bottom {0% {-webkit-transform: translateY(500px);transform: translateY(500px);-webkit-animation-timing-function: ease-in;animation-timing-function: ease-in;opacity: 0;}38% {-webkit-transform: translateY(0);transform: translateY(0);-webkit-animation-timing-function: ease-out;animation-timing-function: ease-out;opacity: 1;}55% {-webkit-transform: translateY(65px);transform: translateY(65px);-webkit-animation-timing-function: ease-in;animation-timing-function: ease-in;}72% {-webkit-transform: translateY(0);transform: translateY(0);-webkit-animation-timing-function: ease-out;animation-timing-function: ease-out;}81% {-webkit-transform: translateY(28px);transform: translateY(28px);-webkit-animation-timing-function: ease-in;animation-timing-function: ease-in;}90% {-webkit-transform: translateY(0);transform: translateY(0);-webkit-animation-timing-function: ease-out;animation-timing-function: ease-out;}95% {-webkit-transform: translateY(8px);transform: translateY(8px);-webkit-animation-timing-function: ease-in;animation-timing-function: ease-in;}100% {-webkit-transform: translateY(0);transform: translateY(0);-webkit-animation-timing-function: ease-out;animation-timing-function: ease-out;}}.swing-in-top-fwd {-webkit-animation: swing-in-top-fwd 0.5s cubic-bezier(0.175, 0.885, 0.320, 1.275) both;animation: swing-in-top-fwd 0.5s cubic-bezier(0.175, 0.885, 0.320, 1.275) both;}@-webkit-keyframes swing-in-top-fwd {0% {-webkit-transform: rotateX(-100deg);transform: rotateX(-100deg);-webkit-transform-origin: top;transform-origin: top;opacity: 0;}100% {-webkit-transform: rotateX(0deg);transform: rotateX(0deg);-webkit-transform-origin: top;transform-origin: top;opacity: 1;}}@keyframes swing-in-top-fwd {0% {-webkit-transform: rotateX(-100deg);transform: rotateX(-100deg);-webkit-transform-origin: top;transform-origin: top;opacity: 0;}100% {-webkit-transform: rotateX(0deg);transform: rotateX(0deg);-webkit-transform-origin: top;transform-origin: top;opacity: 1;}}.slide-in-top {-webkit-animation: slide-in-top 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;animation: slide-in-top 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;}@-webkit-keyframes slide-in-top {0% {-webkit-transform: translateY(-1000px);transform: translateY(-1000px);opacity: 0;}100% {-webkit-transform: translateY(0);transform: translateY(0);opacity: 1;}}@keyframes slide-in-top {0% {-webkit-transform: translateY(-1000px);transform: translateY(-1000px);opacity: 0;}100% {-webkit-transform: translateY(0);transform: translateY(0);opacity: 1;}}.slider{position:absolute;width:100%;top:0;height:100%;overflow:hidden;transition:all 1s}.slider.close_toastr_V1{top:100%;height:0}</style>")
				}(config_toastr_v1, "body"), "" == config_toastr_v1.subHeading.flag && (document.querySelector(".descriptionText_toastr_V1").style.paddingBottom = "30px"), "yes" == config_toastr_v1.autoHide.flag && "yes" == config_toastr_v1.autoHide.countDown) var e = 0,
				n = setInterval(function() {
					++e === config_toastr_v1.autoHide.time && (slideToggle(document.getElementById("mid_toastr_V1"), 2000), clearInterval(n));
					var t = config_toastr_v1.autoHide.time - e;
					document.getElementById("timer").innerHTML = config_toastr_v1.autoHide.countDownText + " " + t + " seconds", document.getElementById("tm").style.backgroundColor = "black"
				}, 1e3);
				document.querySelector(".psb_toastr_V1").insertAdjacentHTML('beforebegin', '<style>@media only screen and (max-width:600px ){#heading{font-size:' + config_toastr_v1.title.fontSizeMobile + ';}#lImgId1{width:30px;}}@media only screen and (min-width:601px ){#heading{font-size:' + config_toastr_v1.title.fontSizeDesktop + ';}#lImgId1{width:35px;}}</style><div id="mid1" style="overflow: hidden;z-index: 1010;display: block;">'+(config_toastr_v1.logoImage.flag == 'yes' ? '<img src="'+config_toastr_v1.logoImage.url+'" align="left" id="lImgId1" style="position: relative;top: 3px;left: 2px;">' : '' )+'<span class="close_toastr_V1" id="closebtn2"><img class="manImg" src="https://iili.io/2zu8Zl.md.png" style="width: 20px; height: 20px;"></span><h1 id="heading" style="text-align: center;color: ' + config_toastr_v1.title.colour + ';font-family: ' + config_toastr_v1.title.fontFamily + ';padding: 5px 0px 5px;margin: 0px;">' + config_toastr_v1.title.text + '</h1></div>')
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
					if(display === 'none') display = 'block';
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
					if(window.getComputedStyle(target).display === 'none') {
						return slideDown(target, duration)
					} else {
						return slideUp(target, duration)
					}
				}
				var el = document.getElementById("did1_toastr_V1")
				document.querySelector("#closebtn2").onclick = function() {
					slideToggle(document.getElementById("mid_toastr_V1"), 500)
				}
				document.querySelector("#did1_toastr_V1").onclick = function() {
					document.querySelector("#did1_toastr_V1").classList.toggle("down");
					slideToggle(document.getElementById("bnr1"), 500)
				}
			
			if(config_toastr_v1.ctaCount.singleCTA == "none") {
				if(config_toastr_v1.ctaLink2.closeButton == "yes") {
					document.querySelector("#closeb_toastr_V1").setAttribute("href", "javascript:void(0)");
					document.querySelector("#closeb_toastr_V1").setAttribute("target", "_self");
					document.querySelectorAll(".btn")[1].onclick = function() {
						slideToggle(document.getElementById("mid_toastr_V1"), 500)
					}
				}
			}
			let dd = document.querySelector(".dd-main");
			document.querySelector("#mid_toastr_V1").prepend(dd);
			clearInterval(t)
		}
	}, config_toastr_v1.initialDelay.time)
} catch(t) {}
}()
