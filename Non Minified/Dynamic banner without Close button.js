let config_banner_v2 = {
	"initialDelay": {
		"time": 100
	},
	"bannerPosition": {
		"selector": "#root",
		"location": "before" //before/after
	},
	"background": {
		"imageUrl": "",
		"backgroundColour": "#efefef"
	},
	"autoHide": {
		"flag": "yes", // yes to activate
		"countDownText": "Ends in",
		"time": 100
	},
	"title": {
		"text": "Heading Text", // char limit 30
		"colour": "black",
		"fontFamily": "Arial, Helvetica, sans-serif"
	},
	"message": {
		"text": "Samsung Galaxy S10 mit dem Red S 10 GB",  // char limit 50
		"fontSize": "20px",
		"colour": "#333",
		"fontFamily": "Arial, Helvetica, sans-serif"
	},
	"ctaCount": {
		"singleCTA": "none" //type "none" to show 2 buttons
	},
	"ctaLink1": {
		"text": "Check Offer",  // char limit 20
		"href": "",
		"fontSize": "16px",
		"backgroundColour": "#e60000",
		"textColour": "white",
		"fontFamily":"Arial, Helvetica, sans-serif",
		"borderRadius": "0px"
	},
	"ctaLink2": {
		"text": "Close Offer", // char limit 20
		"href": "",
		"fontSize": "16px",
		"backgroundColour": "#fff",
		"textColour": "black",
		"fontFamily": "Arial, Helvetica, sans-serif",
		"closeButton": "yes",
		"borderRadius": "0px"
	},
	"subHeading": {
		"subHeading1Text": "Offer 1", // char limit 20
		"subHeading1Href": "",
		"subHeading2Text": "Offer 2", // char limit 20
		"subHeading2Href": "",
		"subHeading3Text": "Offer 3", // char limit 20
		"subHeading3Href": "",
		"fontSize": "16px",
		"textColour": "#000",
		"fontFamily": "Arial, Helvetica, sans-serif"
	},
	"logoImage": {
		"flag": "yes",
		"url": "https://images.squarespace-cdn.com/content/v1/5b8ce9038ab7225fc2c98c25/1543833481328-3JHHF3WR6TP4I5BVL5J2/Pierian-logo-icon1-darkgreen.jpg?format=1500w",
		"width": "30px",
	}
};
var delay = setInterval(function() {
	if(0 == document.querySelectorAll(".mid").length) {
		if(document.querySelectorAll(config_banner_v2.bannerPosition.selector).length > 0) {
			var e = "";
			"before" == config_banner_v2.bannerPosition.location && (e = "beforebegin"), "after" == config_banner_v2.bannerPosition.location && (e = "afterend"), document.querySelector(config_banner_v2.bannerPosition.selector).insertAdjacentHTML(e, "<style>p.offerbadge_timer { width: 80%; max-width: 960px; margin: 0 auto; padding: 12px 20px 10px 20px; color: #000 !important; font-weight: 400 !important; } .offerbadge_out_sticky{background-color:#efefef;height:0;opacity:0;overflow:hidden;position:fixed;top:60px;box-shadow:0 0 20px #000;border-bottom:2px solid #e60000;z-index:10;width:100%;transition:all .2s ease-out}.offerbadge_out_sticky--visible{height:60px;opacity:1;overflow:visible;transition:all .2s ease-out}.offerbadge{display:flex;width:80%;max-width:960px;margin:auto;justify-content:space-between;padding:12px 20px 10px 20px;cursor:pointer}.inflex1{display:flex;align-items:center}.inflex2{display:flex;align-items:center;transition:all .5s}.arrowChecked{transform:rotateX(180deg);transition:all .5s}.openedBox{color:#e60000;font-weight:700}.badgeicon{height:30px;width:30px;filter:brightness(.5)}span.badgeHeadline{font-family:" + config_banner_v2.title.fontFamily + ";color:#000;font-size:18px;margin-left:10px;padding-top:3px}span.notification_badge{background-color:#e60000;color:#fff;border-radius:50%;border:2px solid #efefef;text-align:center;font-size:11px;font-weight:700;line-height:17px;margin-left:-14px;margin-bottom:12px;height:22px;width:22px;z-index:2}@media only screen and (max-width:800px){.offerbadge{width:95%;padding:12px 10px 10px 10px}span.giftbox{font-size:18px}span.badgeHeadline{font-size:18px;margin-left:5px}}.offerbox_out{margin:auto;border-bottom:2px solid #e60000;height:0;overflow: hidden;transition:all 1s}.fadecontent{opacity:0;transition:all .2s}.offerbox_headline{width:80%;max-width:960px;margin:auto;padding:15px 20px 0 20px}.offerbox_in{display:flex;width:80%;max-width:960px;margin:auto;justify-content:space-between;padding:0 10px}.innerflex1{padding:10px 10px}.innerflex2{display:flex;align-self:flex-end;flex-direction:column;flex-shrink:0;padding:10px 0;text-align:right}span.s_headline{font-family:" + config_banner_v2.message.fontFamily + ";font-size:" + config_banner_v2.message.fontSize + ";font-weight:700}.inner_benefits{display:flex;align-items:center;padding:10px 0 0 0}span.innerspan{font-family:" + config_banner_v2.subHeading.fontFamily + ";font-size:" + config_banner_v2.subHeading.fontSize + ";margin-left:10px;color:" + config_banner_v2.subHeading.textColour + "}button.red-cta{height: 45px; border-radius: "+config_banner_v2.ctaLink1.borderRadius+";font-family:" + config_banner_v2.ctaLink1.fontFamily + ";width:200px;margin:5px 0;padding:10px 20px;font-size:" + config_banner_v2.ctaLink1.fontSize + ";font-weight:600;background-color:" + config_banner_v2.ctaLink1.backgroundColour + ";border:0;box-shadow:0 1px 3px rgba(51,51,51,.6);cursor:pointer;color:"+  config_banner_v2.ctaLink1.textColour +"}button.red-cta:hover{background-color:#b60000}button.white-cta{border-radius: "+config_banner_v2.ctaLink2.borderRadius+";font-family:" + config_banner_v2.ctaLink2.fontFamily + ";width:200px;margin-top:5px;margin-bottom:12px;padding:10px 20px;font-size:" + config_banner_v2.ctaLink2.fontSize + ";font-weight:600;background-color:" + config_banner_v2.ctaLink2.backgroundColour + ";border:0;box-shadow:0 1px 3px rgba(51,51,51,.6);cursor:pointer;color: "+config_banner_v2.ctaLink2.textColour+" }button.white-cta:hover{background-color:#ebebeb}a#ignoreRET{font-size:12px;text-decoration:underline;margin-right:3px}.slide-from-top{animation:slide-from-top 1s both;transition:all 1s}@keyframes slide-from-top{0%{height:0;}100%{height:170px;}}.slide-from-bottom{animation:slide-from-bottom 1s both; overflow: hidden;transition:all 1s}@keyframes slide-from-bottom{0%{height:170px}100%{height:0}}.fade-in{animation:fade-in 1s both;transition:all 1s}@keyframes fade-in{70%{opacity:0}100%{opacity:1}}.fade-out{animation:fade-out .2s both;transition:all .2s}@keyframes fade-out{0%{opacity:1}100%{opacity:0}}.ring-top{animation:ring-top .8s ease-out both}@keyframes ring-top{0%,100%{transform:rotate(0);transform-origin:50% 0}10%{transform:rotate(2deg)}20%,40%,60%{transform:rotate(-4deg)}30%,50%,70%{transform:rotate(4deg)}80%{transform:rotate(-2deg)}90%{transform:rotate(2deg)}}@media only screen and (max-width:800px){.offerbox_headline{width:95%;margin:auto}.offerbox_in{width:95%}@keyframes slide-from-top{0%{height:0}100%{height:200px}}@keyframes slide-from-bottom{0%{height:200px}100%{height:0}}}@media only screen and (max-width:600px){.offerbox_in{display:block}.innerflex2{display:block;text-align:center}button.red-cta{width:100%}button.white-cta{width:100%}span.s_headline{font-size:18px}@keyframes slide-from-top{0%{height:0}100%{height:340px}}@keyframes slide-from-bottom{0%{height:340px}100%{height:0}}}.chevron_per{box-sizing:border-box;position:relative;display:block;color:#e60000;transform:scale(1.6);width:22px;height:22px;border:2px solid transparent;border-radius:100px}.chevron_per::after{content:'';display:block;box-sizing:border-box;position:absolute;width:10px;height:10px;border-bottom:1px solid;border-right:1px solid;transform:rotate(45deg);left:4px;top:2px}.check_per{box-sizing:border-box;position:relative;display:block;transform:scale(1.8);width:22px;height:22px;border:2px solid transparent;border-radius:100px;color:#427d00}.check_per::after{content:'';display:block;box-sizing:border-box;position:absolute;left:3px;top:-1px;width:6px;height:10px;border-width:0 2px 2px 0;border-style:solid;transform-origin:bottom left;transform:rotate(45deg)}</style><div class='mid'><div class='offerbadge_out'> <div class='offerbadge'> <div class='inflex1'><img id='logoImage' src=" + config_banner_v2.logoImage.url + " style='width:" + config_banner_v2.logoImage.width + "'>  <span class='badgeHeadline' style='color:" + config_banner_v2.title.colour + "'>" + config_banner_v2.title.text + "</span>  </div><div class='inflex2'><i class='chevron_per'></i> </div></div></div></div>"), "" != config_banner_v2.background.imageUrl && (document.querySelector(".mid").style.backgroundImage = "url('" + config_banner_v2.background.imageUrl + "')"), "" == config_banner_v2.background.imageUrl && (document.querySelector(".mid").style.backgroundColor = config_banner_v2.background.backgroundColour);
			let o = config_banner_v2.message.text,
				t = config_banner_v2.subHeading.subHeading1Text,
				i = config_banner_v2.subHeading.subHeading2Text,
				n = config_banner_v2.subHeading.subHeading3Text,
				a = config_banner_v2.ctaLink1.text,
				r = config_banner_v2.ctaLink2.text,
				s = config_banner_v2.ctaLink1.href,
				d = (config_banner_v2.ctaLink2.href, document.querySelector(".offerbadge_out")),
				l = document.querySelector(".offerbadge"),
				f = document.querySelector(".inflex2");
			d.insertAdjacentHTML("afterend", '<div class="offerbox_out"> <div class="fadecontent fade-in"><div class="offerbox_headline"><span class="s_headline" style="color:' + config_banner_v2.message.colour + '">' + o + '</span> </div><div class="offerbox_in"><div class="innerflex1"> <div class="benefits"> <div class="inner_benefits"> <i class="check_per"></i> <a href=' + config_banner_v2.subHeading.subHeading1Href + '><span class="innerspan">' + t + '</span></a> </div><div class="inner_benefits"><i class="check_per"></i> <a href=' + config_banner_v2.subHeading.subHeading2Href + '><span class="innerspan">' + i + '</span></a> </div><div class="inner_benefits"><i class="check_per"></i> <a href=' + config_banner_v2.subHeading.subHeading3Href + '><span class="innerspan">' + n + '</span></a> </div></div></div><div class="innerflex2"> <a class="red-cta-link" href="' + s + '"><button type="button" class="red-cta">' + a + '</button></a> <a class="white-cta-link" href="' + config_banner_v2.ctaLink2.href + '"><button type="button" class="white-cta">' + r + '</button></a> </div></div></div></div>');
			if(config_banner_v2.ctaCount.singleCTA != "none") {
				document.querySelector(".white-cta-link").style.display = "none";
			}
			if(config_banner_v2.ctaCount.singleCTA == "none") {
				if(config_banner_v2.ctaLink2.closeButton == "yes") {
					document.querySelector(".white-cta-link").setAttribute("href", "javascript:void(0)");
					document.querySelector(".white-cta-link").onclick = function() {
						document.querySelector(".mid").classList.add("slide-from-bottom")
					}
				}
			}
			let c = document.querySelector(".offerbox_out"),
				g = document.querySelector(".fadecontent");
			document.getElementById("ignoreRET");
			l.onclick = function() {
				f.classList.toggle("arrowChecked"), d.classList.toggle("openedBox"), c.classList.contains("slide-from-top") ? (c.classList.remove("slide-from-top"), c.classList.add("slide-from-bottom")) : (c.classList.remove("slide-from-bottom"), c.classList.add("slide-from-top"))
			}, "yes" != config_banner_v2.logoImage.flag && (document.querySelector("#logoImage").style.display = "none"), "yes" == config_banner_v2.autoHide.flag && setTimeout(function() {
				document.querySelector(".mid").classList.add("slide-from-bottom")
			}, 1e3 * config_banner_v2.autoHide.time)
			var sec = 0;
			if("yes" == config_banner_v2.autoHide.flag) {
				document.querySelector(".mid .offerbadge_out").insertAdjacentHTML('afterbegin', '<p class="offerbadge_timer"></p>');
				var e = 0;
				var timer = setInterval(function() {
					if(++e === config_banner_v2.autoHide.time) {
						clearInterval(timer)
					}
					var t = config_banner_v2.autoHide.time - e;
					document.querySelector(".offerbadge_timer").innerHTML = config_banner_v2.autoHide.countDownText + " " + t + " seconds";
				}, 1e3);
			}
		} else {
			console.log("selector where we need to insert banner is not present. Please check the selector")
		}
		clearInterval(delay)
	}
}, config_banner_v2.initialDelay.time);
