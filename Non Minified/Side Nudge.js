//Side Nudge
var config_sideNudge = {
	"mainButton": {
		"text": "Your offer",  // char limit 20
		"background": "red", // linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(227,177,136,1) 35%, rgba(0,212,255,1) 100%) | red
		"textColor": "white",
		"left": "0px"
	},
	"mainButtonImage": {
		"flag": "no", // yes | no
		"imageURL": "https://images.squarespace-cdn.com/content/v1/5b8ce9038ab7225fc2c98c25/1543833481328-3JHHF3WR6TP4I5BVL5J2/Pierian-logo-icon1-darkgreen.jpg?format=1500w"
	},
	"SideBannerStyle": {
		"backgroundImage": "", // image url of side nudge  
		"background": "red" // #464343 | linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(227,177,136,1) 35%, rgba(0,212,255,1) 100%)
	},
	"closeButton": {
		"flag": "yes", // yes to activate
		"imageUrl": "https://iili.io/2zu8Zl.md.png"
	},
	"title": {
		"text": "This is Heading Offer",  // char limit 25
		"fontSizeDesktop": "25px",
		"fontSizeMobile": "24px",
		"colour": "white",
		"fontFamily": "inherit"
	},
	"message": {
		"text": "Samsung Galaxy S10 mit dem Red S 10 GB",  // char limit 40
		"fontSizeDesktop": "25px",
		"fontSizeMobile": "20px",
		"colour": "white",
		"fontFamily": ""
	},
	"ctaNo": {
		"singleCTA": "none" //type "none" to show 2 buttons
	},
	"ctaLink1": {
		"text": "Check Offer", // char limit 15
		"href": "",
		"fontSize": "18px",
		"backgroundColor": "white",
		"textColor": "black",
		"borderRadius": "8px",
		"fontFamily": "Arial, Helvetica, sans-serif"
	}, 
	"ctaLink2": {
		"text": "Close Offer", // char limit 15
		"href": "",
		"fontSize": "18px",
		"backgroundColor": "white",
		"textColor": "red",
		"borderRadius": "8px",
		"fontFamily": "Arial, Helvetica, sans-serif",
		"iscloseButton": "yes"
	},
	"subHeading": {
		"flag": "yes",
		"subHeading1Text": "Offer 1", // char limit 20
		"subHeading1Href": "",
		"subHeading2Text": "Offer 2", // char limit 20
		"subHeading2Href": "",
		"subHeading3Text": "Offer 3", // char limit 20
		"subHeading3Href": "",
		"fontSize": "15px",
		"textColor": "white",
		"fontFamily": "inherit"
	},
	"logoImage": {
		"flag": "yes",
		"url": "https://images.squarespace-cdn.com/content/v1/5b8ce9038ab7225fc2c98c25/1543833481328-3JHHF3WR6TP4I5BVL5J2/Pierian-logo-icon1-darkgreen.jpg?format=1500w"
	},
	"animation": {
		"flag": "no"
	}
};
var maxwidth = "5000px";
document.querySelector("body").insertAdjacentHTML("beforeend", '<style>.sidenav_nudge {width: auto; position: fixed; z-index: 1; top: 20%; left: 0; background-color: #111; overflow-x: hidden; padding-top: 20px;}.sidenav_nudge .closebtn_nudge { position: absolute; top: 0; right: 25px; font-size: 36px; margin-left: 50px; color:#fff; text-decoration:none; } .open-nav-btn_nudge { cursor:pointer; z-index:1;} @media screen and (max-height: 450px) { .sidenav_nudge { padding-top: 15px; } } </style><div class="psb_nudge sidenav_nudge" id="tstr1_nudge" style="bottom: 0px;left: 0px;right: 0px;z-index: 57;border-color: white;border-radius: 0px 10px 10px 0px;overflow: hidden;padding-top: 50px; display:block; width: 0px;"><div id="mid_nudge"><span class="close_nudge" id="closebtn1_nudge"><img class="manImg_nudge" src=' + config_sideNudge.closeButton.imageUrl + ' style="width: 15px; height: 17px; margin-top: 4px;"></span><img src=' + config_sideNudge.logoImage.url + ' align="left" id="lImgId1" style="position: absolute;top: 3px;left: 2px;width: 59px;"><h3 class="headingText_nudge" style="text-decoration: underline;text-align: center;margin-bottom: 10px; font-family: ' + config_sideNudge.title.fontFamily + '; color: ' + config_sideNudge.title.colour + ';font-weight: 100;">' + config_sideNudge.title.text + '</h3><div class="descriptionText_nudge" style="text-align: center; padding: 0px 10px 5px; font-family: ' + config_sideNudge.message.fontFamily + '; color: ' + config_sideNudge.message.colour + '"><span class="top-text_nudge" style="font-weight: 100; font-size: 24px; padding-left: 15px; padding-right: 15px; line-height: 30px; margin-top: 15px;">' + config_sideNudge.message.text + '</span><div class="btn_nudge" id="overlayBtn1_nudge" style="border-radius: 0px;"><a href="' + config_sideNudge.ctaLink1.href + '" target="_blank" style="border-radius: '+config_sideNudge.ctaLink1.borderRadius+';background-color:' + config_sideNudge.ctaLink1.backgroundColor + ';font-family:' + config_sideNudge.ctaLink1.fontFamily + ';padding: 10px;display: inline-block;color:' + config_sideNudge.ctaLink1.textColor + ';text-decoration: none;font-size:' + config_sideNudge.ctaLink1.fontSize + ';width: 100%;margin-top: 20px;margin-bottom: 20px;">' + config_sideNudge.ctaLink1.text + '</a></div><div class="btn_nudge" id="overlayBtn1_nudge" style="border-radius: 0px;"><a href=' + config_sideNudge.ctaLink2.href + ' target="_blank" style="border-radius: ' + config_sideNudge.ctaLink2.borderRadius + ';background-color:' + config_sideNudge.ctaLink2.backgroundColor + ';font-family:' + config_sideNudge.ctaLink2.fontFamily + ';padding: 10px;display: inline-block;color:' + config_sideNudge.ctaLink2.textColor + '; text-decoration: none;font-size:' + config_sideNudge.ctaLink2.fontSize + ';margin-top: 20px;margin-bottom: 20px;" id="closeb_nudge">' + config_sideNudge.ctaLink2.text + '</a></div></div><div id="subHeading_nudge" style="text-align: center; font-family: '+config_sideNudge.subHeading.fontFamily+';font-size: ' + config_sideNudge.subHeading.fontSize + '; padding: 0px 0px 15px; color: ' + config_sideNudge.subHeading.textColor + ';"><a href="' + config_sideNudge.subHeading.subHeading1Href + '" target="_blank" style="color: ' + config_sideNudge.subHeading.textColor + ';">' + config_sideNudge.subHeading.subHeading1Text + ' |</a><a href="' + config_sideNudge.subHeading.subHeading2Href + '" target="_blank" style="color: ' + config_sideNudge.subHeading.textColor + ';" >' + config_sideNudge.subHeading.subHeading2Text + ' |</a><a href="' + config_sideNudge.subHeading.subHeading3Href + '" target="_blank" style="color: ' + config_sideNudge.subHeading.textColor + ';">  ' + config_sideNudge.subHeading.subHeading3Text + '</a></div></div></div><span class="open-nav-btn_nudge" onclick="openNav()" style="position:fixed;background:' + config_sideNudge.mainButton.background + ';color:' + config_sideNudge.mainButton.textColor + ';top:50%;transform: rotate(-90deg);padding-top: 10px;left: ' + config_sideNudge.mainButton.left + ';border-bottom-right-radius: 7px;border-bottom-left-radius: 7px;     transform-origin: top left; font-weight: bold;padding-bottom: 10px;padding-left: 14px;padding-right: 14px;">' + config_sideNudge.mainButton.text + ''+ (config_sideNudge.mainButtonImage.flag == 'yes' ? '<img src="'+config_sideNudge.mainButtonImage.imageURL+'" align="left" id="lImgId1_nudge" style="position: relative;width: 22px;margin-right: 5px;">' : '')+'</span>');
document.querySelector("body").insertAdjacentHTML("beforeend", "<style>.mod-mph-flex-anchor_nudge {z-index: 56;}.dd-button_nudge { position: absolute; content: ''; width: 13px; height: 13px; border-top: 3px solid #444; border-right: 3px solid #444; -webkit-transform: rotate(-45deg); transform: rotate(-45deg); border-radius: 2px; left: 8px; top: 10px; transition:0.3s ease; border-color:white;}.dd-main_nudge { border: 2px solid #666;width: 34px;height: 34px;position: relative;border-radius: 100%;border-color: white;margin: 0vh auto 0;margin-bottom: -18px;margin-top: -18px;z-index: 2;background: #464343;}.dd-button_nudge.down_nudge { -moz-transform:rotate(135deg); -webkit-transform:rotate(135deg); transform:rotate(135deg); top: 11px; } .close_nudge { float: right; display: inline-block; padding: 4px 8px; color: white; position: absolute; right: 0px; top: 0px;}.close_nudge:hover {float:right;display:inline-block;color:#fff; cursor: pointer;}#overlayBtn1_nudge{margin-left: 10px; padding: 0px; display: inline-block; background: none;} @media only screen and (max-width: " + maxwidth + "){ #overlayBtn1_nudge{ margin: 5px; width: auto; margin-top: 10px;} .top-text_nudge{display:block;}}@media only screen and (max-width:1200px ){#lImgId_nudge{width:" + config_sideNudge.logoImage.mediumScreenLogoWidth + "; position: relative; margin-left:0px; margin-top:0px;}}@media only screen and (max-width:814px ){#lImgId_nudge{width:" + config_sideNudge.logoImage.smallScreenLogoWidth + "; position: relative;margin-left:0px; margin-top:0px;}}@media only screen and (min-width:1200px ){#lImgId_nudge{width:" + config_sideNudge.logoImage.largeScreenLogoWidth + "; position: relative; margin-top:14px}}@media only screen and (max-width:600px ){ .sidenav_nudge #mid_nudge img#lImgId1 { width: 45px !important; } .descriptionText_nudge{font-size:" + config_sideNudge.message.fontSizeMobile + ";}.headingText_nudge{font-size:" + config_sideNudge.title.fontSizeMobile + ";}}@media only screen and (min-width:601px ){.descriptionText_nudge{font-size:" + config_sideNudge.message.fontSizeDesktop + ";}.headingText_nudge{font-size:" + config_sideNudge.title.fontSizeDesktop + ";}} @keyframes bounce {0%, 20%, 50%, 80%, 100% {transform: translateY(0);}40% {transform: translateY(-30px);}60% {transform: translateY(-15px);}}.bounce-in-bottom {-webkit-animation: bounce-in-bottom 1.1s both;animation: bounce-in-bottom 1.1s both;}}@-webkit-keyframes bounce-in-bottom {0% {-webkit-transform: translateY(500px);transform: translateY(500px);-webkit-animation-timing-function: ease-in;animation-timing-function: ease-in;opacity: 0;}38% {-webkit-transform: translateY(0);transform: translateY(0);-webkit-animation-timing-function: ease-out;animation-timing-function: ease-out;opacity: 1;}55% {-webkit-transform: translateY(65px);transform: translateY(65px);-webkit-animation-timing-function: ease-in;animation-timing-function: ease-in;}72% {-webkit-transform: translateY(0);transform: translateY(0);-webkit-animation-timing-function: ease-out;animation-timing-function: ease-out;}81% {-webkit-transform: translateY(28px);transform: translateY(28px);-webkit-animation-timing-function: ease-in;animation-timing-function: ease-in;}90% {-webkit-transform: translateY(0);transform: translateY(0);-webkit-animation-timing-function: ease-out;animation-timing-function: ease-out;}95% {-webkit-transform: translateY(8px);transform: translateY(8px);-webkit-animation-timing-function: ease-in;animation-timing-function: ease-in;}100% {-webkit-transform: translateY(0);transform: translateY(0);-webkit-animation-timing-function: ease-out;animation-timing-function: ease-out;}}@keyframes bounce-in-bottom {0% {-webkit-transform: translateY(500px);transform: translateY(500px);-webkit-animation-timing-function: ease-in;animation-timing-function: ease-in;opacity: 0;}38% {-webkit-transform: translateY(0);transform: translateY(0);-webkit-animation-timing-function: ease-out;animation-timing-function: ease-out;opacity: 1;}55% {-webkit-transform: translateY(65px);transform: translateY(65px);-webkit-animation-timing-function: ease-in;animation-timing-function: ease-in;}72% {-webkit-transform: translateY(0);transform: translateY(0);-webkit-animation-timing-function: ease-out;animation-timing-function: ease-out;}81% {-webkit-transform: translateY(28px);transform: translateY(28px);-webkit-animation-timing-function: ease-in;animation-timing-function: ease-in;}90% {-webkit-transform: translateY(0);transform: translateY(0);-webkit-animation-timing-function: ease-out;animation-timing-function: ease-out;}95% {-webkit-transform: translateY(8px);transform: translateY(8px);-webkit-animation-timing-function: ease-in;animation-timing-function: ease-in;}100% {-webkit-transform: translateY(0);transform: translateY(0);-webkit-animation-timing-function: ease-out;animation-timing-function: ease-out;}}.swing-in-top-fwd {-webkit-animation: swing-in-top-fwd 0.5s cubic-bezier(0.175, 0.885, 0.320, 1.275) both;animation: swing-in-top-fwd 0.5s cubic-bezier(0.175, 0.885, 0.320, 1.275) both;}@-webkit-keyframes swing-in-top-fwd {0% {-webkit-transform: rotateX(-100deg);transform: rotateX(-100deg);-webkit-transform-origin: top;transform-origin: top;opacity: 0;}100% {-webkit-transform: rotateX(0deg);transform: rotateX(0deg);-webkit-transform-origin: top;transform-origin: top;opacity: 1;}}@keyframes swing-in-top-fwd {0% {-webkit-transform: rotateX(-100deg);transform: rotateX(-100deg);-webkit-transform-origin: top;transform-origin: top;opacity: 0;}100% {-webkit-transform: rotateX(0deg);transform: rotateX(0deg);-webkit-transform-origin: top;transform-origin: top;opacity: 1;}}.slide-in-top {-webkit-animation: slide-in-top 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;animation: slide-in-top 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;}@-webkit-keyframes slide-in-top {0% {-webkit-transform: translateY(-1000px);transform: translateY(-1000px);opacity: 0;}100% {-webkit-transform: translateY(0);transform: translateY(0);opacity: 1;}}@keyframes slide-in-top {0% {-webkit-transform: translateY(-1000px);transform: translateY(-1000px);opacity: 0;}100% {-webkit-transform: translateY(0);transform: translateY(0);opacity: 1;}}#tm_nudge{z-index:57;display:block;bottom:0px;width:100%;}#lImgId_nudge{margin-left:33px;}@media only screen and (max-width:600px){.psb_nudge{max-width:300px !important;height:350px}}@media only screen and (min-width:601px){.psb_nudge{width:400px;height:350px}}@media (max-width: 600px) { .headingText_nudge { font-size: 22px; } .top-text_nudge { font-size: 20px !important; } #overlayBtn1_nudge a { font-size: 16px !important; } }</style>");
//Sidebar background
if(config_sideNudge.SideBannerStyle.backgroundImage != "") {
	document.querySelector(".psb_nudge").style.backgroundImage = "url(" + config_sideNudge.SideBannerStyle.backgroundImage + ")";
} else if(config_sideNudge.SideBannerStyle.background != "") {
	document.querySelector(".psb_nudge").style.background = config_sideNudge.SideBannerStyle.background;
}
//Show two buttoncta or one
if(config_sideNudge.ctaNo.singleCTA != "none") {
	document.querySelectorAll("#overlayBtn1_nudge")[1].style.display = "none";
}
// close button show
if(config_sideNudge.closeButton.flag != "yes") {
	document.querySelector("#closebtn1_nudge").style.display = "none";
}
//sidebar open banner
function openNav() {
	if(config_sideNudge.animation.flag == "yes") {
		document.querySelector(".psb_nudge").style.display = "block";
		document.querySelector(".psb_nudge").style.overflow = "hidden";
		document.querySelector(".psb_nudge").style.width = "400px";
		document.querySelector("#mid_nudge").style.opacity = 1;
		document.querySelector(".psb_nudge").style.transition = '0.3s';
		//transition-delay: 0.3s;
		document.querySelector("#mid_nudge").style.transitionDelay = "0.3s";
	} else {
		document.querySelector(".psb_nudge").style.display = "block";
		document.querySelector(".psb_nudge").style.width = "400px";
	}
}
//close banner
function closeNav() {
	if(config_sideNudge.animation.flag == "yes") {
		//document.querySelector(".psb_nudge").style.display = "none";
		document.querySelector("#mid_nudge").style.opacity = 0;
		document.querySelector(".psb_nudge").style.width = "0px";
	} else {
		document.querySelector(".psb_nudge").style.display = "none";
	}
}
//closebutton cta
if(config_sideNudge.ctaNo.singleCTA == "none") {
	if(config_sideNudge.ctaLink2.iscloseButton == "yes") {
		document.querySelector("#closeb_nudge").setAttribute("href", "javascript:void(0)");
		document.querySelector("#closeb_nudge").setAttribute("target", "_self");
		//document.querySelectorAll(".btn")[1].onclick=function(){document.querySelector(".psb_nudge").style.display = "none";}}
		document.querySelectorAll(".btn_nudge")[1].onclick = function() {
			if(config_sideNudge.animation.flag == "yes") {
				document.querySelector("#mid_nudge").style.opacity = 0;
				document.querySelector("#mid_nudge").style.transitionDelay = "0.1s";
				document.querySelector(".psb_nudge").style.width = "0px";
			} else {
				document.querySelector(".psb_nudge").style.display = "none";
			}
		}
	}
}
//Close button click
document.querySelector("#closebtn1_nudge").onclick = function() {
		if(config_sideNudge.animation.flag == "yes") {
			//document.querySelector(".psb_nudge").style.display = "none";
			document.querySelector("#mid_nudge").style.opacity = 0;
			document.querySelector("#mid_nudge").style.transitionDelay = "0.1s";
			document.querySelector(".psb_nudge").style.width = "0px";
		} else {
			document.querySelector(".psb_nudge").style.display = "none";
		}
	}
	//subheading flag
if(config_sideNudge.subHeading.flag != "yes") {
	document.querySelector("#subHeading_nudge").style.display = "none";
}
