let passed_JSON = {

"initialDelay": {

"time": 100

},

"background": {

"imageUrl": "", //"https://www.vodafone.de/media/img/teaser/hero-navigation-bg-2560x432.jpg", // image url of banner  https://cdn.pixabay.com/photo/2015/11/10/08/31/banner-1036483__340.jpg

 

"backgroundColour": "#efefef"

},

"autoHide": {

"flag": "yes", // yes to activate

"time": 10

}
}

showBanner();


function showBanner() {

let config_toastr_V2 = {

"initialDelay": {

"time": 100

},

"background": {

"imageUrl": "", //"https://www.vodafone.de/media/img/teaser/hero-navigation-bg-2560x432.jpg", // image url of banner  https://cdn.pixabay.com/photo/2015/11/10/08/31/banner-1036483__340.jpg

 

"backgroundColour": "#efefef"

},

"autoHide": {

"flag": "", // yes to activate

"time": 5

},

"title": {

"text": "Heading Text",

"colour": "black",

"fontFamily": "Vodafone"

},

"message": {

"text": "Samsung Galaxy S10 mit dem Red S 10 GB",

"fontSize": "20px",

"colour": "#333",

"fontFamily": "Vodafone"

},

"ctaCount": {

"singleCTA": "none" //type "none" to show 2 buttons

},

"ctaLink1": {

"text": "Check Offer",

"href": "",

"fontSize": "16px",

"backgroundColour": "#e60000",

"textColour": "white",

"fontFamily": "Vodafone"

},

"ctaLink2": {

"text": "Close Offer",

"href": "",

"fontSize": "16px",

"backgroundColour": "#fff",

"textColour": "black",

"fontFamily": "Vodafone",

"iscloseButton": "yes"

},

"subHeading": {

"subHeading1Text": "Offer 1",

"subHeading1Href": "",

"subHeading2Text": "Offer 2",

"subHeading2Href": "",

"subHeading3Text": "Offer 3",

"subHeading3Href": "",

"fontSize": "16px",

"textColour": "#000",

"fontFamily": "Vodafone"

},

"logoImage": {

"flag": "yes",

"url": "https://www.freepnglogos.com/uploads/vodafone-png-logo/vodafone-ghana-14.png",

 

"width": "30px",

}

}

ObjectValues = function(v, k){
  if (typeof v == "object") {
    for (var kp in v) {
      if (Object.hasOwnProperty.call(v, kp)) {
        ObjectValues(v[kp], k != undefined ? k + "." + kp : kp);
      }
    }
  } else {
    console.log(k + ":" + v);
	let str = k;
    let myArr = str.split(".");
	config_toastr_V2[myArr[0]][myArr[1]]=v;
	console.log(config_toastr_V2[myArr[0]][myArr[1]]);
	
	
  }
};

ObjectValues(passed_JSON);




var delay = setInterval(function() {

document.querySelector("body").insertAdjacentHTML("beforeend", '<style>.offerbadge_out_sticky{background-color:#efefef;height:0;opacity:0;overflow:hidden;position:fixed;top:60px;box-shadow:0 0 20px #000;border-bottom:2px solid #e60000;z-index:10;width:100%;transition:all .2s ease-out}.offerbadge_out_sticky--visible{height:60px;opacity:1;overflow:visible;transition:all .2s ease-out}.offerbadge{display:flex;width:80%;max-width:960px;margin:auto;justify-content:space-between;padding:12px 20px 10px 20px;cursor:pointer}.inflex1{display:flex;align-items:center}.inflex2{display:flex;align-items:center;transition:all .5s}.arrowChecked{transition:all .5s}.openedBox{color:#e60000;font-weight:700}.badgeicon{height:30px;width:30px;filter:brightness(.5)}span.badgeHeadline{font-family:' + config_toastr_V2.title.fontFamily + ';color:#000;font-size:18px;margin-left:10px;padding-top:3px}span.notification_badge{background-color:#e60000;color:#fff;border-radius:50%;border:2px solid #efefef;text-align:center;font-size:11px;font-weight:700;line-height:17px;margin-left:-14px;margin-bottom:12px;height:22px;width:22px;z-index:2}@media only screen and (max-width:800px){.offerbadge{width:95%;padding:12px 10px 10px 10px}span.giftbox{font-size:18px}span.badgeHeadline{font-size:18px;margin-left:5px}}.offerbox_out{margin:auto;border-bottom:2px solid #e60000;height:0;transition:all 1s}.fadecontent{opacity:0;transition:all .2s}.offerbox_headline{width:80%;max-width:960px;margin:auto;padding:15px 20px 0 20px}.offerbox_in{display:flex;width:80%;max-width:960px;margin:auto;justify-content:space-between;padding:0 10px}.innerflex1{padding:10px 10px}.innerflex2{display:flex;align-self:flex-end;flex-direction:column;flex-shrink:0;text-align:right}span.s_headline{font-family:' + config_toastr_V2.message.fontFamily + ';font-size:' + config_toastr_V2.message.fontSize + ';font-weight:700}.inner_benefits{display:flex;align-items:center;padding:10px 0 0 0}span.innerspan{font-family:' + config_toastr_V2.subHeading.fontFamily + ';font-size:' + config_toastr_V2.subHeading.fontSize + ';margin-left:10px;color:' + config_toastr_V2.subHeading.textColour + '}button.red-cta{font-family:' + config_toastr_V2.ctaLink1.fontFamily + ';width:200px;margin:5px 0;padding:10px 20px;font-size:' + config_toastr_V2.ctaLink1.fontSize + ';font-weight:600;background-color:' + config_toastr_V2.ctaLink1.backgroundColour + ';border:0;box-shadow:0 1px 3px rgba(51,51,51,.6);cursor:pointer;color:#fff;margin-bottom: 12px;}button.red-cta:hover{background-color:#b60000}button.white-cta{font-family:' + config_toastr_V2.ctaLink2.fontFamily + ';width:200px;margin-top:5px;margin-bottom:12px;padding:10px 20px;font-size:' + config_toastr_V2.ctaLink2.fontSize + ';font-weight:600;background-color:' + config_toastr_V2.ctaLink2.backgroundColour + ';border:0;box-shadow:0 1px 3px rgba(51,51,51,.6);cursor:pointer;color:#000}button.white-cta:hover{background-color:#ebebeb}a#ignoreRET{font-size:12px;text-decoration:underline;margin-right:3px}.slide-from-top{animation:slide-from-top 1s both;transition:all 1s}@keyframes slide-from-top{0%{height:0}100%{height:170px}}.slide-from-bottom{animation:slide-from-bottom 1s both;transition:all 1s}@keyframes slide-from-bottom{0%{height:170px}100%{height:0}}.fade-in{animation:fade-in 1s both;transition:all 1s}@keyframes fade-in{70%{opacity:0}100%{opacity:1}}.fade-out{animation:fade-out .2s both;transition:all .2s}@keyframes fade-out{0%{opacity:1}100%{opacity:0}}.ring-top{animation:ring-top .8s ease-out both}@keyframes ring-top{0%,100%{transform:rotate(0);transform-origin:50% 0}10%{transform:rotate(2deg)}20%,40%,60%{transform:rotate(-4deg)}30%,50%,70%{transform:rotate(4deg)}80%{transform:rotate(-2deg)}90%{transform:rotate(2deg)}}@media only screen and (max-width:800px){.offerbox_headline{width:95%;margin:auto}.offerbox_in{width:95%}@keyframes slide-from-top{0%{height:0}100%{height:200px}}@keyframes slide-from-bottom{0%{height:200px}100%{height:0}}}@media only screen and (max-width:600px){.offerbox_in{display:block}.innerflex2{display:block;text-align:center}button.red-cta{width:100%}button.white-cta{width:100%}span.s_headline{font-size:18px}@keyframes slide-from-top{0%{height:0}100%{height:250px}}@keyframes slide-from-bottom{0%{height:250px}100%{height:0}}}.chevron_per{box-sizing:border-box;position:relative;display:block;color:#e60000;transform:scale(1.6);width:22px;height:22px;border:2px solid transparent;border-radius:100px}.chevron_per::after{content:"";display:block;box-sizing:border-box;position:absolute;width:10px;height:10px;border-bottom:1px solid;border-right:1px solid;transform:rotate(45deg);left:4px;top:2px}.check_per{box-sizing:border-box;position:relative;display:block;transform:scale(1.8);width:22px;height:22px;border:2px solid transparent;border-radius:100px;color:#427d00}.check_per::after{content:"";display:block;box-sizing:border-box;position:absolute;left:3px;top:-1px;width:6px;height:10px;border-width:0 2px 2px 0;border-style:solid;transform-origin:bottom left;transform:rotate(45deg)}</style><div class="mid" style="display: block;bottom: 0px;left: 0px;right: 0px;z-index: 57;position: fixed;"><div class="offerbadge_out"> <div class="offerbadge"> <div class="inflex1"><img id="logoImage" src=' + config_toastr_V2.logoImage.url + ' style="width:' + config_toastr_V2.logoImage.width + '">  <span class="badgeHeadline" style="color:' + config_toastr_V2.title.colour + '">' + config_toastr_V2.title.text + '</span>  </div><div class="inflex2"><i class="chevron_per"></i> </div></div></div></div>');

if(config_toastr_V2.background.imageUrl != "") {

document.querySelector(".mid").style.backgroundImage = "url('" + config_toastr_V2.background.imageUrl + "')";

}

if(config_toastr_V2.background.imageUrl == "") {

document.querySelector(".mid").style.backgroundColor = config_toastr_V2.background.backgroundColour;

}

let s_headline = config_toastr_V2.message.text;

let s_benefit1 = config_toastr_V2.subHeading.subHeading1Text;

let s_benefit2 = config_toastr_V2.subHeading.subHeading2Text;

let s_benefit3 = config_toastr_V2.subHeading.subHeading3Text;

let s_ctared = config_toastr_V2.ctaLink1.text;

let s_ctawhite = config_toastr_V2.ctaLink2.text;

let s_ctared_link = config_toastr_V2.ctaLink1.href;

let s_ctawhite_link = config_toastr_V2.ctaLink2.href;

let offerBadgeOut = document.querySelector('.offerbadge_out');

let offerBadgeInner = document.querySelector('.offerbadge');

let open_close = document.querySelector('.inflex2');

offerBadgeOut.insertAdjacentHTML('afterend', '<div class="offerbox_out"> <div><div class="offerbox_headline"><span class="s_headline" style="color:' + config_toastr_V2.message.colour + '">' + s_headline + '</span> </div><div class="offerbox_in"><div class="innerflex1"> <div class="benefits"> <div class="inner_benefits"> <i class="check_per"></i> <a href=""><span class="innerspan">' + s_benefit1 + '</span></a> </div><div class="inner_benefits"><i class="check_per"></i> <a href=""><span class="innerspan">' + s_benefit2 + '</span></a> </div><div class="inner_benefits"><i class="check_per"></i> <a href=""><span class="innerspan">' + s_benefit3 + '</span></a> </div></div></div><div class="innerflex2"> <a class="red-cta-link" href="' + s_ctared_link + '"style="color: inherit;display: inline-block;text-decoration: none;"><button type="button" class="red-cta">' + s_ctared + '</button></a> <a class="white-cta-link" href="' + config_toastr_V2.ctaLink2.href + '"style="color: inherit;display: inline-block;text-decoration: none;"><button type="button" class="white-cta">' + s_ctawhite + '</button></a> </div></div></div></div>');

if(config_toastr_V2.ctaCount.singleCTA != "none") {

document.querySelector(".white-cta-link").style.display = "none";

}

   if(config_toastr_V2.ctaCount.singleCTA ==  "none"){

if(config_toastr_V2.ctaLink2.iscloseButton == "yes") {

document.querySelector(".white-cta-link").setAttribute("href", "javascript:void(0)");

document.querySelector(".white-cta-link").onclick = function() {

document.querySelector(".mid").classList.add("slide-from-bottom")

}

} }

let offerBoxOut = document.querySelector('.offerbox_out');

let fadecontent = document.querySelector(".fadecontent");

let igoneRET = document.getElementById('ignoreRET');

document.querySelector(".inflex2").style.transform = "rotateX(180deg)";

offerBadgeInner.onclick = function() {

open_close.classList.toggle('arrowChecked');

if(document.querySelector(".inflex2").classList.contains("arrowChecked") == false) {

document.querySelector(".inflex2").style.transform = "rotateX(180deg)";

} else if(document.querySelector(".inflex2").style.transform == "rotateX(180deg)") {

document.querySelector(".inflex2").style.transform = "initial";

}

offerBadgeOut.classList.toggle('openedBox');

if(offerBoxOut.classList.contains('slide-from-top')) {

offerBoxOut.classList.remove('slide-from-top');

offerBoxOut.classList.add('slide-from-bottom');

} else {

offerBoxOut.classList.remove('slide-from-bottom');

offerBoxOut.classList.add('slide-from-top');

}

}

if(config_toastr_V2.logoImage.flag != "yes") {

document.querySelector("#logoImage").style.display = "none";

}

if(config_toastr_V2.autoHide.flag == "yes") {

setTimeout(function() {

document.querySelector(".mid").style.display = "none";

}, config_toastr_V2.autoHide.time * 1000);

}

clearInterval(delay)

}, config_toastr_V2.initialDelay.time);

}
