//Overlay
var config_overlay = {
	"overlayStyle": {
		"imgUrl": "",
		"backgroundColor": "red"
	},
	"autoHide": {
		"activator": "", // yes to activate
		"countDown": "yes", // yes to activate countdown part with autohide
		"countDownText": "Ends in",
		"time": 6
	},
	"closeButton": {
		"activator": "yes", // yes to activate
		"imageUrl": "https://iili.io/2zu8Zl.md.png"
	},
	"collapseButton": {
		"activator": "", // yes to activate
		"imageUrl": "https://i.imgur.com/KqHD37h.png",
	},
	"borderStyle": {
		"width": "5px",
		"style": "solid",
		"color": "white"
	},
	"heading": {
		"text": "This is Heading Offer",
		"fontSizeDesktop": "25px",
		"fontSizeMobile": "20px",
		"color": "white",
		"fontFamily": "Arial, Helvetica, sans-serif"
	},
	"message": {
		"text": "Samsung Galaxy S10 mit dem Red S 10 GB",
		"fontSizeDesktop": "25px",
		"fontSizeMobile": "20px",
		"color": "white",
		"fontFamily": "Arial, Helvetica, sans-serif"
	},
	"ctaNo": {
		"singleCTA": "none" //type "none" to show 2 buttons
	},
	"ctaLink1": {
		"text": "Check Offer",
		"href": "",
		"fontSize": "18px",
		"backgroundColor": "white",
		"textColor": "black",
		"borderRadius": "0px",
		"fontFamily": "Arial, Helvetica, sans-serif"
	},
	"ctaLink2": {
		"text": "Close Offer",
		"href": "",
		"fontSize": "18px",
		"backgroundColor": "white",
		"textColor": "red",
		"borderRadius": "0px",
		"fontFamily": "Arial, Helvetica, sans-serif",
		"closeButton": ""
	},
	"subHeading": {
		"activator": "yes",
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
		"activator": "yes",
		"url": "https://images.squarespace-cdn.com/content/v1/5b8ce9038ab7225fc2c98c25/1543833481328-3JHHF3WR6TP4I5BVL5J2/Pierian-logo-icon1-darkgreen.jpg?format=1500w",
		"largeScreenLogoWidth": "175px",
		"mediumScreenLogoWidth": "175px",
		"smallScreenLogoWidth": "175px"
	},
	"animation": {
		"activator": "yes",
		"animationType": "slide", //fade/bounce/swing/slide
		"fadeInTime": 3000, //milisecond/"slow"/"fast" if selected "fade" in animationType
		"fadeOutTime": 1000 //milisecond/"slow"/"fast" if selected "fade" in animationType
	}
};
var experience_delayed_time = 1000;
var maxwidth = "5000px";
(function() {
	try {
		var imginsert = setInterval(function() {
			if(document.querySelectorAll(".psb").length == 0) {
				document.querySelector("body").insertAdjacentHTML("beforeend", '<style>.BUYCTA{float: right;position: absolute;right: 10%;z-index: 1000;color: #FFFFFF;font-weight: bold;bottom: 17%;background: rgb(0,73,144);border-radius: 5px;padding: 5px 6px 5px 8px;font-size: 15px;}.crossidentifier{font-family: arial, sans-serif;color: #070707; z-index: 199999990; text-align: center;font-size: 16px; line-height: 1; position: absolute; right: -14px; top: -13px; width: 21px; height: 21px; cursor: pointer; border-radius: 100px; padding: 1px;background:beige }.buttomcta{padding: 6px 15px;border-radius: 5px;background: teal;font-family: sans-serif;}.health-button{position: absolute;margin: 0px auto;z-index: 1000;color: #FFFFFF;bottom: 7px;left: 5px;}.conta{ border: 1px solid #DDDDDD;width: 200px;height: 200px;position: relative;} .twoutemostsection{ background:rgba(0,0,0,70%); display:none; height:100%; position:fixed; text-align:center; top:0px; width:100%; z-index:999; } .BUYCTA:hover{border:1px solid white}.twoutemostsection { display:inline-block; height:100%; vertical-align:middle; } .twoutemostsection > div {  display: inline-block;top:10%;position: relative;vertical-align:middle; margin: 15px;} .oneminuteinsurance{width:100%; max-width:450px}</style><div class="twoutemostsection" style="display: block;"><div class="exitpoptw"><div class="mainoutercontainer"></div></div></div>');

				function ovrly(config_overlay) {
					var cd = document.createElement("div");
					cd.id = "tm";
					cd.style.backgroundColor = "black";
					cd.style.color = "white";
					cd.style.fontSize = "20px";
					cd.style.textAlign = "center";
					var sp = document.createElement("span");
					sp.id = "timer";
					sp.innerHTML = "" + config_overlay.autoHide.countDownText + " " + config_overlay.autoHide.time + " seconds";
					cd.appendChild(sp);
					var overlay = document.createElement("div");
					overlay.className = "psb";
					overlay.id = "tstr1";
					var overlayid = "#" + overlay.id;
					overlay.style.width = "100%";
					overlay.style.display = "block";
					overlay.style.bottom = "0px";
					overlay.style.left = "0px";
					overlay.style.right = "0px";
					overlay.style.zIndex = "57";
					overlay.style.position = "fixed";
					overlay.style.zIndex = "9999";
					if(config_overlay.overlayStyle.imgUrl != "") {
						overlay.style.backgroundImage = "url('" + config_overlay.overlayStyle.imgUrl + "')";
					} else {
						overlay.style.backgroundColor = config_overlay.overlayStyle.backgroundColor;
					}
					overlay.style.borderWidth = config_overlay.borderStyle.width;
					overlay.style.borderStyle = config_overlay.borderStyle.style;
					overlay.style.borderColor = config_overlay.borderStyle.color;
					var heading = document.createElement("h3");
					heading.className = "headingText";
					heading.innerText = config_overlay.heading.text;
					heading.style.textDecoration = "underline";
					heading.style.textAlign = "center";
					// heading.style.padding = "34px 0px 0px 0px";
					heading.style.marginBottom = "10px";
					heading.style.color = config_overlay.heading.color;
					heading.style.fontFamily = config_overlay.heading.fontFamily;
					var description = document.createElement("div");
					description.className = "descriptionText";
					description.style.textAlign = "center";
					description.style.padding = "0px 10px 5px";
					description.style.color = config_overlay.message.color;
					description.style.fontFamily = config_overlay.message.fontFamily;
					var dspan = document.createElement("span");
					dspan.className = "top-text";
					dspan.innerText = config_overlay.message.text;
					description.appendChild(dspan);
					var btn = document.createElement("div");
					btn.classList.add('btn');
					btn.id = "overlayBtn1";
					btn.style.borderRadius = "0px";
					//btn.style.backgroundColor = config_overlay.ctaLink1.backgroundColor;
					var btn_S1 = document.createElement("A");
					btn_S1.setAttribute("href", config_overlay.ctaLink1.href);
					btn_S1.setAttribute("target", "_blank");
					btn_S1.innerHTML = config_overlay.ctaLink1.text;
					btn_S1.style.borderRadius = config_overlay.ctaLink1.borderRadius;
					btn_S1.style.backgroundColor = config_overlay.ctaLink1.backgroundColor;
					btn_S1.style.fontFamily = config_overlay.ctaLink1.fontFamily;
					btn_S1.style.padding = "10px";
					btn_S1.style.display = "inline-block";
					btn_S1.style.color = config_overlay.ctaLink1.textColor;
					btn_S1.style.textDecoration = "none";
					btn_S1.style.fontSize = config_overlay.ctaLink1.fontSize;
					btn.appendChild(btn_S1);
					var btn2 = document.createElement("div");
					btn2.classList.add('btn');
					btn2.id = "overlayBtn1";
					btn2.style.borderRadius = "0px";
					// btn2.style.backgroundColor = config_overlay.ctaLink2.backgroundColor;
					var btn_S2 = document.createElement("A");
					btn_S2.setAttribute("href", config_overlay.ctaLink2.href);
					btn_S2.setAttribute("target", "_blank");
					btn_S2.setAttribute("id", "closeb");
					btn_S2.innerHTML = config_overlay.ctaLink2.text;
					btn_S2.style.borderRadius = config_overlay.ctaLink2.borderRadius;
					btn_S2.style.backgroundColor = config_overlay.ctaLink2.backgroundColor;
					btn_S2.style.fontFamily = config_overlay.ctaLink2.fontFamily;
					btn_S2.style.padding = "10px";
					btn_S2.style.display = "inline-block";
					btn_S2.style.color = config_overlay.ctaLink2.textColor;
					btn_S2.style.textDecoration = "none";
					btn_S2.style.fontSize = config_overlay.ctaLink2.fontSize;
					btn2.appendChild(btn_S2);
					var subheading1 = document.createElement("A");
					subheading1.setAttribute("href", config_overlay.subHeading.subHeading1Href);
					subheading1.setAttribute("target", "_blank");
					subheading1.innerText = config_overlay.subHeading.subHeading1Text + " |";
					subheading1.style.color = config_overlay.subHeading.textColor;
					var subheading2 = document.createElement("A");
					subheading2.setAttribute("href", config_overlay.subHeading.subHeading2Href);
					subheading2.setAttribute("target", "_blank");
					subheading2.innerHTML = "  " + config_overlay.subHeading.subHeading2Text + " |";
					subheading2.style.color = config_overlay.subHeading.textColor;
					var subheading3 = document.createElement("A");
					subheading3.setAttribute("href", config_overlay.subHeading.subHeading3Href);
					subheading3.setAttribute("target", "_blank");
					subheading3.innerHTML = "  " + config_overlay.subHeading.subHeading3Text;
					subheading3.style.color = config_overlay.subHeading.textColor;
					var lnk = document.createElement("div");
					lnk.appendChild(subheading1);
					lnk.appendChild(subheading2);
					lnk.appendChild(subheading3);
					lnk.style.textAlign = "center";
					lnk.style.fontSize = config_overlay.subHeading.fontSize;
					lnk.style.padding = "0px 0px 15px";
					lnk.style.color = config_overlay.subHeading.textColor;
					var closeBtn = document.createElement("span");
					closeBtn.className = "close";
					closeBtn.id = "closebtn1";
					var closeid = "#" + closeBtn.id;
					if(config_overlay.closeButton.imageUrl == "") {
						closeBtn.innerHTML = "x";
						closeBtn.style.fontSize = "25px";
					} else {
						var closeImage = document.createElement("img");
						closeImage.className = "manImg";
						closeImage.setAttribute("src", config_overlay.closeButton.imageUrl);
						closeImage.style.width = "20px";
						closeImage.style.height = "20px";
						closeBtn.appendChild(closeImage);
					}
					var imageLogo = document.createElement("img");
					imageLogo.setAttribute("src", config_overlay.logoImage.url);
					imageLogo.setAttribute("align", "center");
					imageLogo.id = "lImgId";
					if(config_overlay.autoHide.activator == "yes" && config_overlay.autoHide.countDown == "yes") {
						overlay.appendChild(cd);
					}
					if(config_overlay.logoImage.activator == "yes") {
						overlay.appendChild(imageLogo);
					}
					if(config_overlay.closeButton.activator == "yes") {
						overlay.appendChild(closeBtn);
					}
					overlay.appendChild(heading);
					description.appendChild(btn);
					if(config_overlay.ctaNo.singleCTA == "none") {
						description.appendChild(btn2);
					}
					overlay.appendChild(description);
					if(config_overlay.subHeading.activator == "yes") {
						overlay.appendChild(lnk);
					}

					function insertAfter(newNode, existingNode) {
						existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling);
					}

					function insertBefore(newNode, existingNode) {
						existingNode.parentNode.insertBefore(newNode, existingNode);
					}
					if(config_overlay.animation.activator == "yes") {
						if(config_overlay.animation.animationType == "fade") {
							overlay.style.display = "none";
							document.querySelector("body").appendChild(overlay);
							fadeIn(document.querySelector('.psb'), config_overlay.animation.fadeInTime)
							// $(".psb").fadeIn(config_overlay.animation.fadeInTime);asdf
						}
						if(config_overlay.animation.animationType == "bounce") {
							overlay.className += " bounce-in-bottom";
							document.querySelector("body").appendChild(overlay);
						}
						if(config_overlay.animation.animationType == "swing") {
							overlay.className += " swing-in-top-fwd";
							document.querySelector("body").appendChild(overlay);
						}
						if(config_overlay.animation.animationType == "slide") {
							overlay.className += " slide-in-top";
							document.querySelector("body").appendChild(overlay);
						}
					} else {
						document.querySelector(".mainoutercontainer").appendChild(overlay);
					}
					console.log(closeid);
					document.querySelector(closeid).onclick = function() {
						if(config_overlay.animation.activator == "yes") {
							//$(".psb").fadeOut(config_overlay.animation.fadeOutTime);
							fadeOut(document.querySelector('.psb'), config_overlay.animation.fadeOutTime);
							fadeOut(document.querySelector('.twoutemostsection'), config_overlay.animation.fadeOutTime);
							// document.querySelector(".psb").style.display = "none";
						} else {
							document.querySelector(overlayid).style.display = "none";
							document.querySelector(".twoutemostsection").style.display = "none";
							//$(".twoutemostsection").css("display", "none");
						}
					}
					if(config_overlay.ctaNo.singleCTA == "none") {
						if(config_overlay.ctaLink2.closeButton == "yes") {
							document.querySelector("#closeb").setAttribute("href", "javascript:void(0)");
							document.querySelector("#closeb").setAttribute("target", "_self");
							document.querySelectorAll("#overlayBtn1")[1].onclick = function() {
								if(config_overlay.animation.activator == "yes") {
									// $(".psb").fadeOut(config_overlay.animation.fadeOutTime);
									document.querySelector(".psb").style.display = "none";
								} else {
									document.querySelector(overlayid).style.display = "none";
									document.querySelector(".twoutemostsection").style.display = "none";
									// $(".twoutemostsection").css("display", "none");
								}
							}
						}
					}
					if(config_overlay.autoHide.activator == "yes" && config_overlay.autoHide.countDown == "") {
						setTimeout(function() {
							document.querySelector(overlayid).style.display = "none";
							// $(overlayid).hide();
							/**if ($(did).length > 0) {
                            $(did).hide();
                        }**/
							document.querySelector(".twoutemostsection").style.display = "none";
							// $(".twoutemostsection").css("display", "none");
						}, config_overlay.autoHide.time * 1000);
					}
					if(config_overlay.autoHide.activator == "yes" && config_overlay.autoHide.countDown == "yes") {
						var i = 0;
						var timer = setInterval(function() {
							i++;
							if(i === config_overlay.autoHide.time) {
								document.getElementById("tm").style.display = "none";
								document.querySelector(".psb").style.display = "none";
								document.querySelector(".twoutemostsection").style.display = "none";
								clearInterval(timer);
							}
							var secs = config_overlay.autoHide.time - i;
							var element = document.getElementById("timer");
							element.innerHTML = config_overlay.autoHide.countDownText + " " + secs + " seconds";
							//document.getElementById("tm").style.backgroundColor = "black";
						}, 1000);
					}
					document.querySelector("body").insertAdjacentHTML("beforeend", "<style>.mod-mph-flex-anchor {z-index: 56;}.dd-button { position: absolute; content: ''; width: 13px; height: 13px; border-top: 3px solid #444; border-right: 3px solid #444; -webkit-transform: rotate(-45deg); transform: rotate(-45deg); border-radius: 2px; left: 8px; top: 10px; transition:0.3s ease; border-color:white;}.dd-main { border: 2px solid #666;width: 34px;height: 34px;position: relative;border-radius: 100%;box-shadow: 0 .125rem .25rem rgba(0,0,0,.075)!important;border-color: white;margin: 0vh auto 0;margin-bottom: -18px;margin-top: -18px;z-index: 2;background: #464343;}.dd-button.down { -moz-transform:rotate(135deg); -webkit-transform:rotate(135deg); transform:rotate(135deg); top: 11px; } .close {float:right;display:inline-block;padding:5px 10px; color:white;}.close:hover {float:right;display:inline-block;color:#fff; cursor: pointer;}#overlayBtn1{margin-left: 10px; padding: 0px; display: inline-block; background: none;} @media only screen and (max-width: " + maxwidth + "){ #overlayBtn1{margin-left:10px; max-width:130px; width: 50%; margin-top: 20px; margin-bottom: 20px;} .top-text{display:block;}}@media only screen and (max-width:1200px ){#lImgId{width:" + config_overlay.logoImage.mediumScreenLogoWidth + "; position: relative; margin-left:0px; margin-top:0px;}}@media only screen and (max-width:814px ){#lImgId{width:" + config_overlay.logoImage.smallScreenLogoWidth + "; position: relative;margin-left:0px; margin-top:0px;}}@media only screen and (min-width:1200px ){#lImgId{width:" + config_overlay.logoImage.largeScreenLogoWidth + "; position: relative; margin-top:14px}}@media only screen and (max-width:600px ){.descriptionText{font-size:" + config_overlay.message.fontSizeMobile + ";}.headingText{font-size:" + config_overlay.heading.fontSizeMobile + ";}}@media only screen and (min-width:601px ){.descriptionText{font-size:" + config_overlay.message.fontSizeDesktop + ";}.headingText{font-size:" + config_overlay.heading.fontSizeDesktop + ";}} @keyframes bounce {0%, 20%, 50%, 80%, 100% {transform: translateY(0);}40% {transform: translateY(-30px);}60% {transform: translateY(-15px);}}.bounce-in-bottom {-webkit-animation: bounce-in-bottom 1.1s both;animation: bounce-in-bottom 1.1s both;}}@-webkit-keyframes bounce-in-bottom {0% {-webkit-transform: translateY(500px);transform: translateY(500px);-webkit-animation-timing-function: ease-in;animation-timing-function: ease-in;opacity: 0;}38% {-webkit-transform: translateY(0);transform: translateY(0);-webkit-animation-timing-function: ease-out;animation-timing-function: ease-out;opacity: 1;}55% {-webkit-transform: translateY(65px);transform: translateY(65px);-webkit-animation-timing-function: ease-in;animation-timing-function: ease-in;}72% {-webkit-transform: translateY(0);transform: translateY(0);-webkit-animation-timing-function: ease-out;animation-timing-function: ease-out;}81% {-webkit-transform: translateY(28px);transform: translateY(28px);-webkit-animation-timing-function: ease-in;animation-timing-function: ease-in;}90% {-webkit-transform: translateY(0);transform: translateY(0);-webkit-animation-timing-function: ease-out;animation-timing-function: ease-out;}95% {-webkit-transform: translateY(8px);transform: translateY(8px);-webkit-animation-timing-function: ease-in;animation-timing-function: ease-in;}100% {-webkit-transform: translateY(0);transform: translateY(0);-webkit-animation-timing-function: ease-out;animation-timing-function: ease-out;}}@keyframes bounce-in-bottom {0% {-webkit-transform: translateY(500px);transform: translateY(500px);-webkit-animation-timing-function: ease-in;animation-timing-function: ease-in;opacity: 0;}38% {-webkit-transform: translateY(0);transform: translateY(0);-webkit-animation-timing-function: ease-out;animation-timing-function: ease-out;opacity: 1;}55% {-webkit-transform: translateY(65px);transform: translateY(65px);-webkit-animation-timing-function: ease-in;animation-timing-function: ease-in;}72% {-webkit-transform: translateY(0);transform: translateY(0);-webkit-animation-timing-function: ease-out;animation-timing-function: ease-out;}81% {-webkit-transform: translateY(28px);transform: translateY(28px);-webkit-animation-timing-function: ease-in;animation-timing-function: ease-in;}90% {-webkit-transform: translateY(0);transform: translateY(0);-webkit-animation-timing-function: ease-out;animation-timing-function: ease-out;}95% {-webkit-transform: translateY(8px);transform: translateY(8px);-webkit-animation-timing-function: ease-in;animation-timing-function: ease-in;}100% {-webkit-transform: translateY(0);transform: translateY(0);-webkit-animation-timing-function: ease-out;animation-timing-function: ease-out;}}.swing-in-top-fwd {-webkit-animation: swing-in-top-fwd 0.5s cubic-bezier(0.175, 0.885, 0.320, 1.275) both;animation: swing-in-top-fwd 0.5s cubic-bezier(0.175, 0.885, 0.320, 1.275) both;}@-webkit-keyframes swing-in-top-fwd {0% {-webkit-transform: rotateX(-100deg);transform: rotateX(-100deg);-webkit-transform-origin: top;transform-origin: top;opacity: 0;}100% {-webkit-transform: rotateX(0deg);transform: rotateX(0deg);-webkit-transform-origin: top;transform-origin: top;opacity: 1;}}@keyframes swing-in-top-fwd {0% {-webkit-transform: rotateX(-100deg);transform: rotateX(-100deg);-webkit-transform-origin: top;transform-origin: top;opacity: 0;}100% {-webkit-transform: rotateX(0deg);transform: rotateX(0deg);-webkit-transform-origin: top;transform-origin: top;opacity: 1;}}.slide-in-top {-webkit-animation: slide-in-top 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;animation: slide-in-top 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;}@-webkit-keyframes slide-in-top {0% {-webkit-transform: translateY(-1000px);transform: translateY(-1000px);opacity: 0;}100% {-webkit-transform: translateY(0);transform: translateY(0);opacity: 1;}}@keyframes slide-in-top {0% {-webkit-transform: translateY(-1000px);transform: translateY(-1000px);opacity: 0;}100% {-webkit-transform: translateY(0);transform: translateY(0);opacity: 1;}}#tm{z-index:57;display:block;bottom:0px;width:100%;}#lImgId{margin-left:33px;}</style>");
				}
				function fadeOut( elem, ms ) {
					if( ! elem )
						return;

					if( ms )
					{
						var opacity = 1;
						var timer = setInterval( function() {
						opacity -= 50 / ms;
						if( opacity <= 0 )
						{
							clearInterval(timer);
							opacity = 0;
							elem.style.display = "none";
							elem.style.visibility = "hidden";
						}
						elem.style.opacity = opacity;
						elem.style.filter = "alpha(opacity=" + opacity * 100 + ")";
						}, 50 );
					}
					else
					{
						elem.style.opacity = 0;
						elem.style.filter = "alpha(opacity=0)";
						elem.style.display = "none";
						elem.style.visibility = "hidden";
					}
				}
				function fadeIn( elem, ms ){
					if( ! elem )
						return;

					elem.style.opacity = 0;
					elem.style.filter = "alpha(opacity=0)";
					elem.style.display = "inline-block";
					elem.style.visibility = "visible";

					if( ms )
					{
						var opacity = 0;
						var timer = setInterval( function() {
						opacity += 50 / ms;
						if( opacity >= 1 )
						{
							clearInterval(timer);
							opacity = 1;
						}
						elem.style.opacity = opacity;
						elem.style.filter = "alpha(opacity=" + opacity * 100 + ")";
						}, 50 );
					}
					else
					{
						elem.style.opacity = 1;
						elem.style.filter = "alpha(opacity=1)";
					}
				}
				ovrly(config_overlay);
				if(config_overlay.subHeading.activator == "") {
					document.querySelector(".descriptionText").style.paddingBottom = "30px";
				}
				clearInterval(imginsert)
			}
		}, experience_delayed_time);
	} catch(e) {}
})();
