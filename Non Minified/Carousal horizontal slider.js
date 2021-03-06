var config_carousal_v1 = {
	"initialDelay": {
		"time": 100
	},
	"bannerPosition": {
		"selector": "#root > div.container"
	},
	"background": {
		"backgroundColour": "lightgrey"
	},
	"title": {
		"fontFamily": "sans-serif",
	},
	"description": {
		"fontFamily": "sans-serif"
	},
	"message": {
		"fontFamily": "sans-serif"
	},
	"amount": {
		"fontFamily": "sans-serif"
	},
	"Product1": {
		"title": {
			"text": "Product 1"
		},
		"image": {
			"imageUrl": "https://cdn.optimizely.com/img/21401470059/3dfcd6c145be4ac39e482cf823f31bac.png"
		},
		"amount": {
			"text": "20000"
		},
		"description": {
			"text": "Interested in our ideas?" // Not more than 40 char
		},
		"message": {
			"text": "High performing digital solutions by bringing data, design and technology together" // Not more than 60 char
		},
		"Cta": {
			"text": "Buy Now", // Not more than 20 char
			"url": "google.com",
			"fontFamily": "inherit",
			"borderRadius": "0px"
		},
		"Offer": {
			"flag": "yes",
			"text": "Special Offer",
			"backgroundColor": "red",
			"fontFamily": "inherit"
		}
	},
	"Product2": {
		"title": {
			"text": "Product 2"
		},
		"image": {
			"imageUrl": "https://cdn.optimizely.com/img/21401470059/3dfcd6c145be4ac39e482cf823f31bac.png"
		},
		"amount": {
			"text": "10000"
		},
		"description": {
			"text": "Interested in our ideas?" // Not more than 40 char
		},
		"message": {
			"text": "High performing digital solutions by bringing data, design and technology together"  // Not more than 60 char
		},
		"Cta": {
			"text": "Buy Now", // Not more than 20 char
			"url": "",
			"fontFamily": "inherit",
			"borderRadius": "0px"
		},
		"Offer": {
			"flag": "",
			"text": "Special Offer",
			"backgroundColor": "green",
			"fontFamily": "inherit"
		}
	},
	"Product3": {
		"title": {
			"text": "Product 3"
		},
		"image": {
			"imageUrl": "https://cdn.optimizely.com/img/21401470059/3dfcd6c145be4ac39e482cf823f31bac.png"
		},
		"amount": {
			"text": "30000"
		},
		"description": {
			"text": "Interested in our ideas?" // Not more than 40 char
		},
		"message": {
			"text": "High performing digital solutions by bringing data, design and technology together" // Not more than 60 char
		},
		"Cta": {
			"text": "Buy Now", // Not more than 20 char
			"url": "",
			"fontFamily": "inherit",
			"borderRadius": "0px"
		},
		"Offer": {
			"flag": "",
			"text": "Special Offer",
			"backgroundColor": "yellow",
			"fontFamily": "inherit"
		}
	}
}
var fun = setInterval(function() {
	document.querySelector(config_carousal_v1.bannerPosition.selector).insertAdjacentHTML("afterend", '<div class="spring" style="overflow: hidden;background: ' + config_carousal_v1.background.backgroundColour + ';padding: 20px 20px;margin-top: 20px;margin-bottom: 30px;"> <div class="carousel"><div class="slides"><div class="slide"><div id="a" style=" " class="P1"><span class="offer-div offerDivP1" style="display:none;">' + config_carousal_v1.Product1.Offer.text + '</span><div id="header"><a>' + config_carousal_v1.Product1.title.text + '</a></div><div id="image-container"> <a class="images" href="" title="Samsung Galaxy S20 FE DS" style="background-image: url(' + config_carousal_v1.Product1.image.imageUrl + ');background-position: center;background-size: contain;/* min-width: 300px; */width: 100%;height:100%;background-size: contain;background-repeat: no-repeat;background-position:center center;"> &nbsp; </a></div><div id="information"> <strong id="price">' + config_carousal_v1.Product1.amount.text + '</strong><br> <span class="device__price-details"> ' + config_carousal_v1.Product1.description.text + '<br> <small style="font-family: '+config_carousal_v1.message.fontFamily+';">' + config_carousal_v1.Product1.message.text + '</small> </span></div><div class="device__footer padding-top--15px"> <a class="button button--secondary" data-analytics="link_name=Recommendation:Device1:Samsung Galaxy S21 Ultra 5G DS:CTA" style="border-radius: '+config_carousal_v1.Product1.Cta.borderRadius+';font-family: '+config_carousal_v1.Product1.Cta.fontFamily+';" href="'+config_carousal_v1.Product1.Cta.url+'"> ' + config_carousal_v1.Product1.Cta.text + ' </a></div></div></div><div class="slide"><div id="a" style=" " class="P2"><span class="offer-div offerDivP2" style="display:none;">' + config_carousal_v1.Product2.Offer.text + '</span><div id="header"><a>' + config_carousal_v1.Product2.title.text + '</a></div><div id="image-container"> <a class="images" href="" title="Samsung Galaxy S20 FE DS" style="background-image: url(' + config_carousal_v1.Product2.image.imageUrl + ');background-position: center;background-size: contain;/* min-width: 300px; */width: 100%;height:100%;background-size: contain;background-repeat: no-repeat;background-position:center center;"> &nbsp; </a></div><div id="information"> <strong id="price">' + config_carousal_v1.Product2.amount.text + '</strong><br> <span class="device__price-details">' + config_carousal_v1.Product2.description.text + '<br> <small style="'+config_carousal_v1.message.fontFamily+'">' + config_carousal_v1.Product2.message.text + ' </small> </span></div><div class="device__footer padding-top--15px"> <a class="button button--secondary" data-analytics="link_name=Recommendation:Device1:Samsung Galaxy S21 Ultra 5G DS:CTA" style="border-radius: '+config_carousal_v1.Product2.Cta.borderRadius+';font-family: '+config_carousal_v1.Product2.Cta.fontFamily+';" href="'+config_carousal_v1.Product2.Cta.url+'"> ' + config_carousal_v1.Product2.Cta.text + ' </a></div></div></div><div class="slide"><div id="a" style=" " class="P3"><span class="offer-div offerDivP3" style="display:none;">' + config_carousal_v1.Product3.Offer.text + '</span><div id="header"><a>' + config_carousal_v1.Product3.title.text + '</a></div><div id="image-container"> <a class="images" href="" title="Samsung Galaxy S20 FE DS" style="background-image: url(' + config_carousal_v1.Product3.image.imageUrl + '); background-position: center;background-size: contain;/* min-width: 300px; */width: 100%;height:100%;background-size: contain;background-repeat: no-repeat;background-position:center center;"> &nbsp; </a></div><div id="information"> <strong id="price">' + config_carousal_v1.Product3.amount.text + '</strong><br> <span class="device__price-details">' + config_carousal_v1.Product3.description.text + '<br> <small style="'+config_carousal_v1.message.fontFamily+'">' + config_carousal_v1.Product3.message.text + ' </small> </span></div><div class="device__footer padding-top--15px"> <a class="button button--secondary" data-analytics="link_name=Recommendation:Device1:Samsung Galaxy S21 Ultra 5G DS:CTA" style="border-radius: '+config_carousal_v1.Product3.Cta.borderRadius+';font-family: '+config_carousal_v1.Product3.Cta.fontFamily+';" href="'+config_carousal_v1.Product3.Cta.url+'">' + config_carousal_v1.Product3.Cta.text + ' </a></div></div></div></div><div class="controls"><div class="control prev-slide"><span style="position: absolute;  width: 15px; height: 15px; border-top: 3px solid #fff; border-right: 3px solid #fff; -webkit-transform: rotate(-135deg); transform: rotate(-135deg);  border-radius: 2px; right: 9px; "></span></div><div class="control next-slide"><span style="position: absolute;  width: 15px; height: 15px; border-top: 3px solid #fff; border-right: 3px solid #fff; -webkit-transform: rotate(45deg); transform: rotate(45deg);  border-radius: 2px; left: 9px; content: "";"></span></div></div></div></div><style>.new-offer { border:1px solid #e60000;} .new-offer .offer-div { color: #fff; position: absolute; top: 0px; right: 0; background-color: #e60000; box-shadow: none;   background-image: none; padding: 5px 10px; font-size: 20px; left: 0px;  text-align: center; } .carousel{/*width:100vw;*/height:600px;border-radius:3px;position:relative;}.carousel:hover .controls{opacity:1}.carousel .controls{opacity:0;display:flex;position:absolute;top:50%;left:0;justify-content:space-between;width:100%;z-index:99999;transition:all ease 0.5s}.carousel .controls .control{  margin:0 -30px; display: flex;align-items:center;justify-content:center;height:40px;width:40px;border-radius:50%;transition:ease 0.3s;cursor:pointer; background-color: #4A4D4E;border-color: #333; color: #fff;}.carousel .controls .control:hover{ opacity:1} .carousel .prev-slide {animation: pulse 1s ease infinite alternate, nudge 1s linear infinite alternate;} .carousel .next-slide {animation: pulse 1s ease infinite alternate, nudge2 1s linear infinite alternate;} .carousel .slides{position:absolute;top:50%;left:0;transform:translateY(-50%);display:flex;width:33%;transition:1s ease-in-out all}.carousel .slides .slide{position: relative; min-width:100%;min-height:auto;height:auto;background-color:white;padding: 0px 20px;}#header{ font-family: '+config_carousal_v1.description.fontFamily+';text-align:center;font-size:25px;margin-top:50px}.images{display:block;height:100%;width:100%;background-size:contain}#image-container{height:250px;margin-top:20px}#information{margin-top:20px;text-align:center}#price{font-size:35px; font-family:'+config_carousal_v1.amount.fontFamily+' }.device__price-details{ font-family:'+config_carousal_v1.title.fontFamily+'; font-size:20px}.device__footer{padding-top:15px;text-align:center;margin-bottom:20px;position: absolute; left: 0; right: 0; bottom: 0;}.button{appearance:none;border:1px solid transparent;cursor:pointer;display:inline-block;font-size:20px;padding:11px 37px;text-align:center;color:#fff;background-color:#666}#a{ border-radius: 5px; display:block;width:100%;height:624px;overflow:hidden;position:relative;}@media (min-width: 601px) and (max-width: 900px){.carousel .slides{width:50%}.controls{display:block;opacity:1 !important}}@media (max-width: 600px){#image-container{height:200px}#a{height:550px}.carousel{height:550px}.carousel .slides{width:100%}.controls{display:block;opacity:1 !important}.button{max-width:200px}}@media (min-width: 901px){.controls{display:none !important}}   @keyframes nudge { 0% { -webkit-transform: translateX(0); transform: translateX(0); } 2% { -webkit-transform: translateX(3px); transform: translateX(3px); } 6% {  -webkit-transform: translateX(-9px); transform: translateX(-9px); } 12% { -webkit-transform: translateX(2px); transform: translateX(2px); } 13% {  -webkit-transform: translateX(0); transform: translateX(0); } 100% { -webkit-transform: translateX(0);  transform: translateX(0); } }  @keyframes nudge2 { 0% { -webkit-transform: translateX(0); transform: translateX(0); } 2% { -webkit-transform: translateX(-3px); transform: translateX(-3px); } 6% {  -webkit-transform: translateX(9px); transform: translateX(9px); } 12% { -webkit-transform: translateX(-2px); transform: translateX(-2px); } 13% {  -webkit-transform: translateX(0); transform: translateX(0); } 100% { -webkit-transform: translateX(0);  transform: translateX(0); } }</style>');
	if(config_carousal_v1.Product1.Offer.flag == "yes") {
		document.querySelector(".P1").classList.add('new-offer');
		document.querySelector(".P1").style.border = "1px solid " + config_carousal_v1.Product1.Offer.backgroundColor + "";
		document.querySelector(".offerDivP1").style.backgroundColor = config_carousal_v1.Product1.Offer.backgroundColor;
		document.querySelector(".offerDivP1").style.display = "block";
		document.querySelector(".offerDivP1").style.fontFamily = config_carousal_v1.Product1.Offer.fontFamily;
	}
	if(config_carousal_v1.Product2.Offer.flag == "yes") {
		document.querySelector(".P2").classList.add('new-offer');
		document.querySelector(".P2").style.border = "1px solid " + config_carousal_v1.Product2.Offer.backgroundColor + "";
		document.querySelector(".offerDivP2").style.backgroundColor = config_carousal_v1.Product2.Offer.backgroundColor;
		document.querySelector(".offerDivP2").style.display = "block";
		document.querySelector(".offerDivP2").style.fontFamily = config_carousal_v1.Product2.Offer.fontFamily;
	}
	if(config_carousal_v1.Product3.Offer.flag == "yes") {
		document.querySelector(".P3").classList.add('new-offer');
		document.querySelector(".P3").style.border = "1px solid " + config_carousal_v1.Product3.Offer.backgroundColor + "";
		document.querySelector(".offerDivP3").style.backgroundColor = config_carousal_v1.Product3.Offer.backgroundColor;
		document.querySelector(".offerDivP3").style.display = "block";
		document.querySelector(".offerDivP3").style.fontFamily = config_carousal_v1.Product3.Offer.fontFamily;
	}
	if(window.innerWidth >= 601 && window.innerWidth < 901) {
		document.querySelector(".prev-slide").style.opacity = 0;
		document.querySelector(".next-slide").style.opacity = 1;
	}
	if(window.innerWidth < 900) {
		document.querySelector(".prev-slide").style.opacity = 0;
		document.querySelector(".next-slide").style.opacity = 1;
	}
	const slides = document.querySelector(".slides");
	const slidesCountMob = slides.childElementCount;
	const maxLeftMob = (slidesCountMob - 1) * 100 * -1;
	let currentMob = 0;
	const delayMob = 3000; //ms

	const slidesCountTab = slides.childElementCount;
	const maxLeftTab = (1) * 100 * -1;
	let currentTab = 0;

	function changeSlideTab(next = true) {
		if(next) {
			currentTab += currentTab > -50 ? -50 : 0;
		} else {
			currentTab = currentTab < 0 ? currentTab + 50 : 0;
		}
		slides.style.left = currentTab + "%";
		if(slides.style.left == "0%") {
			document.querySelector(".prev-slide").style.opacity = 0;
			document.querySelector(".next-slide").style.opacity = 1;
		}
		if(slides.style.left == "-50%") {
			document.querySelector(".prev-slide").style.opacity = 1;
			document.querySelector(".next-slide").style.opacity = 0;
		}
	}
	function changeSlideMob(next = true) {
		if(next) {
			currentMob += currentMob > maxLeftMob ? -100 : currentMob * -1;
		} else {
			currentMob = currentMob < 0 ? currentMob + 100 : maxLeftMob;
		}
		slides.style.left = currentMob + "%";
		if(slides.style.left == "0%") {
			document.querySelector(".prev-slide").style.opacity = 0;
			document.querySelector(".next-slide").style.opacity = 1;
		}
		if(slides.style.left == "-100%") {
			document.querySelector(".prev-slide").style.opacity = 1;
			document.querySelector(".next-slide").style.opacity = 1;
		}
		if(slides.style.left == "-200%") {
			document.querySelector(".prev-slide").style.opacity = 1;
			document.querySelector(".next-slide").style.opacity = 0;
		}
	}
	document.addEventListener('click', (e) => {
		if(e.target.matches('.next-slide') || e.target.closest('.next-slide')) {
			if(window.innerWidth >= 601 && window.innerWidth < 901) {
				changeSlideTab();
			} else {
				changeSlideMob();
			}
		}
	}, { capture: true })

	document.addEventListener('click', (e) => {
		if(e.target.matches('.prev-slide') || e.target.closest('.prev-slide')) {
			if(window.innerWidth >= 601 && window.innerWidth < 901) {
				changeSlideTab(false);
			} else {
				changeSlideMob(false);
			}
		}
	}, { capture: true })

	clearInterval(fun)
}, config_carousal_v1.initialDelay.time);
