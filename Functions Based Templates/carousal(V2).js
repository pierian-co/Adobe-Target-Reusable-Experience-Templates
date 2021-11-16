
var passed_JSON = {

 

                   "initialDelay":{

 

                                             "time":100

 

                              },

 

                              "bannerPosition": {

 

            "selector": "#root > div:nth-child(3)"

 

        },

 

        "background": {

 

            "backgroundColour": "lightgrey"

 

        }
}

showBanner();


function showBanner() {
var config_carousal_V2 = {

 

                   "initialDelay":{

 

                                             "time":100

 

                              },

 

                              "bannerPosition": {

 

            "selector": "#root > div:nth-child(3)"

 

        },

 

        "background": {

 

            "backgroundColour": "lightgrey"

 

        },

 

                              "Product1":{

 

                                             "title":{

 

                                                            "text":"Product 1"

 

                                             },

 

                                             "image":{

 

                                             "imageUrl":"https://cdn.vodafone.co.uk/en/assets/images/desktop/Samsung_Galaxy_S21+_5G_phantom_black-full-product-front-600.png"

 

                                             },

 

                                             "amount":{

 

                                                            "text":"20000"

 

                                             },

 

                                             "description":{

 

                                                            "text":"Galaxy S21 Ultra 5G Galaxy S21 Ultra 5G "

 

                                             },

 

                                             "message":{

 

                                                            "text":"Ultra-fast 5G speeds Ultra-fast"

 

                                             },

 

                                             "Cta":{

 

                                                            "text":"Buy Now",

 

                                                            "url":""

 

                                             },

 

                                             "Offer":{

 

                                                            "flag":"yes",

 

                                                            "text":"Special Offer",

 

                                                            "backgroundColor":"green"

 

                                             }

 

                              },

 

                              "Product2":{

 

                                             "title":{

 

                                                            "text":"Product 2"

 

                                             },

 

                                             "image":{

 

                                             "imageUrl":"https://cdn.vodafone.co.uk/en/assets/images/desktop/Apple_iPhone_12_Pro_Max_pacific_blue-full-product-front-600.png"

 

                                             },

 

                                             "amount":{

 

                                                            "text":"10000"

 

                                             },

 

                                             "description":{

 

                                                            "text":"iPhone 12 Pro Max iPhone "

 

                                             },

 

                                             "message":{

 

                                                            "text":"Capture life's moments perfectly Capture life's moments perfectly"

 

                                             },

 

                                             "Cta":{

 

                                                            "text":"Buy Now",

 

                                                            "url":""

 

                                             },

 

                                             "Offer":{

 

                                                            "flag":"",

 

                                                            "text":"Special Offer",

 

                                                            "backgroundColor":"black"

 

                                             }

 

                              },

 

                              "Product3":{

 

                                             "title":{

 

                                                            "text":"Product 3"

 

                                             },

 

                                             "image":{

 

                                             "imageUrl":"https://cdn.vodafone.co.uk/en/assets/images/desktop/Motorola_Moto_g5G_Plus_surfing_blue-full-product-front-600.png"

 

                                             },

 

                                             "amount":{

 

                                                            "text":"30000"

 

                                             },

 

                                             "description":{

 

                                                            "text":"Moto g 5G Plus Moto g 5G"

 

                                             },

 

                                             "message":{

 

                                                            "text":"Bionic chip and a pro camera Bionic chip and a pro camera"

 

                                             },

 

                                             "Cta":{

 

                                                            "text":"Buy Now",

 

                                                            "url":""

 

                                             },

 

                                             "Offer":{

 

                                                            "flag":"",

 

                                                            "text":"Special Offer",

 

                                                            "backgroundColor":"red"

 

                                             }

 

}}

 

 

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
	config_carousal_V2[myArr[0]][myArr[1]]=v;
	console.log(config_carousal_V2[myArr[0]][myArr[1]]);
	
	
  }
};

ObjectValues(passed_JSON);


 

 

 

    try{

 

     var fun=setInterval(function(){

 

                            

 

if (screen.width < 601){

 

document.querySelector("#root > div > div:nth-child(2)").insertAdjacentHTML("afterend", '<div class="spring" style="background: '+config_carousal_V2.background.backgroundColour+';padding: 20px;margin-top: 20px;margin-bottom: 30px;"> <div class="carousel"><div class="slides" style="left: 0%;"><div class="slide"><div id="a" style=" " class=""><div id="header"><a>'+config_carousal_V2.Product1.title.text+'</a></div><div id="image-container"> <a class="images" href='+config_carousal_V2.Product1.image.imageUrl+' title="Samsung Galaxy S20 FE DS" style="background-image: url('+config_carousal_V2.Product1.image.imageUrl+');background-position: center;background-size: cover;/* min-width: 300px; */width: 100%;height:100%;background-size: contain;background-repeat: no-repeat;background-position:center center;"> &nbsp; </a></div><div id="information"> <strong id="price">'+config_carousal_V2.Product1.amount.text+'</strong><br> <span class="device__price-details"> '+config_carousal_V2.Product1.description.text+'<br> <small>'+config_carousal_V2.Product1.message.text+'</small> </span></div><div class="device__footer padding-top--15px"> <a class="button button--secondary" data-analytics="link_name=Recommendation:Device1:Samsung Galaxy S21 Ultra 5G DS:CTA" href="https://shop.vodafone.hu/lakossagi/samsung_galaxy_s21_ultra_5g_ds/elofizeteses/fantomfekete/256/red_infinity_world/1">'+config_carousal_V2.Product1.Cta.text+'</a></div></div></div><div class="slide"><div id="a" style=" "><div id="header"><a>'+config_carousal_V2.Product2.title.text+'</a></div><div id="image-container"> <a class="images" href='+config_carousal_V2.Product2.image.imageUrl+' title="Samsung Galaxy S20 FE DS" style="background-image: url('+config_carousal_V2.Product2.image.imageUrl+');background-position: center;background-size: cover;/* min-width: 300px; */width: 100%;height:100%;background-size: contain;background-repeat: no-repeat;background-position:center center;"> &nbsp; </a></div><div id="information"> <strong id="price">'+config_carousal_V2.Product2.amount.text+'</strong><br> <span class="device__price-details"> '+config_carousal_V2.Product2.description.text+'<br> <small>'+config_carousal_V2.Product2.message.text+'</small> </span></div><div class="device__footer padding-top--15px"> <a class="button button--secondary" data-analytics="link_name=Recommendation:Device1:Samsung Galaxy S21 Ultra 5G DS:CTA" href="https://shop.vodafone.hu/lakossagi/samsung_galaxy_s21_ultra_5g_ds/elofizeteses/fantomfekete/256/red_infinity_world/1">'+config_carousal_V2.Product2.Cta.text+'</a></div></div></div><div class="slide"><div id="a" style=" "><div id="header"><a>'+config_carousal_V2.Product3.title.text+'</a></div><div id="image-container"> <a class="images" href='+config_carousal_V2.Product3.image.imageUrl+' title="Samsung Galaxy S20 FE DS" style="background-image: url('+config_carousal_V2.Product3.image.imageUrl+');background-position: center;background-size: cover;/* min-width: 300px; */width: 100%;height:100%;background-size: contain;background-repeat: no-repeat;background-position:center center;"> &nbsp; </a></div><div id="information"> <strong id="price">'+config_carousal_V2.Product3.amount.text+'</strong><br> <span class="device__price-details"> '+config_carousal_V2.Product3.description.text+'<br> <small>'+config_carousal_V2.Product3.message.text+'</small> </span></div><div class="device__footer padding-top--15px"> <a class="button button--secondary" data-analytics="link_name=Recommendation:Device1:Samsung Galaxy S21 Ultra 5G DS:CTA" href="https://shop.vodafone.hu/lakossagi/samsung_galaxy_s21_ultra_5g_ds/elofizeteses/fantomfekete/256/red_infinity_world/1">'+config_carousal_V2.Product3.Cta.text+'</a></div></div></div></div><div class="controls" style="display: none;"><div class="control prev-slide">◄</div><div class="control next-slide">►</div></div></div></div><style>.new-offer { border:1px solid #e60000;} .new-offer .offer-div { color: #fff; position: absolute; top: 0px; right: 0; background-color: #e60000; box-shadow: none;   background-image: none; padding: 5px 10px; font-size: 20px; left: 0px;  text-align: center; } .carousel{border-radius:3px;position:relative;}.carousel:hover .controls{opacity:1}.carousel .controls{opacity:0;display:flex;position:absolute;top:50%;left:0;justify-content:space-between;width:100%;z-index:99999;transition:all ease 0.5s}.carousel .controls .control{  margin:0 5px; display: flex;align-items:center;justify-content:center;height:40px;width:40px;border-radius:50%;background-color:rgba(255, 255, 255, 0.7);opacity:0.5;transition:ease 0.3s;cursor:pointer; background: #222; color: #fff;}.carousel .controls .control:hover{ opacity:1} .carousel .prev-slide {animation: pulse 1s ease infinite alternate, nudge 1s linear infinite alternate;} .carousel .next-slide {animation: pulse 1s ease infinite alternate, nudge2 1s linear infinite alternate;} .carousel .slides{position:relative;transition:1s ease-in-out all}.carousel .slides .slide{position: relative; min-width:100%;min-height:auto;height:auto;background-color:white;margin-bottom: 20px;border-radius: 5px;}#header{text-align:center;font-size:25px;margin-top:50px}.images{display:block;height:100%;width:100%;background-size:cover}#image-container{height:250px;margin-top:20px}#information{margin-top:20px;text-align:center}#price{font-size:35px}.device__price-details{font-size:20px}.device__footer{padding-top:15px;text-align:center;margin-bottom:20px}.button{appearance:none;border:1px solid transparent;cursor:pointer;display:inline-block;font-size:20px;padding:11px 37px;text-align:center;color:#fff;background-color:#666}#a{ border-radius: 5px; display:block;width:100%;height:auto;overflow:hidden;position:relative;}@media (min-width: 601px) and (max-width: 900px){.carousel .slides{width:50%}.controls{display:block;opacity:1 !important}}@media (max-width: 600px){.carousel .slides{width:100%}.controls{display:block;opacity:1 !important}.button{max-width:200px}}@media (min-width: 901px){.controls{display:none !important}} @keyframes nudge { 0%, 100% { transform: translate(0, 0); } 50% { transform: translate(-5px, 0);} 50% { transform: translate(3px, 0); }} @keyframes nudge2 { 0%, 100% { transform: translate(0, 0); } 50% { transform: translate(5px, 0);} 50% { transform: translate(-3px, 0); }}</style>');

 

 

function setSpecialOffer(){

 

               if(config_carousal_V2.Product1.Offer.flag=="yes"){

 

                              let sel= document.querySelectorAll(".slide")[0];

 

                              sel.classList.add("new-offer");

 

                              sel.style.border="1px solid "+config_carousal_V2.Product1.Offer.backgroundColor+"";

 

                              sel.insertAdjacentHTML("afterbegin",'<span class="offer-div offerDivP1">'+config_carousal_V2.Product1.Offer.text+'</span>');

 

               document.querySelector(".offerDivP1").style.backgroundColor=config_carousal_V2.Product1.Offer.backgroundColor;

 

               }

 

               else{

 

                              let s=document.querySelectorAll(".slide")[0].childNodes[0].childNodes[0].style.marginTop="25px"

 

               }

 

               if(config_carousal_V2.Product2.Offer.flag=="yes"){

 

                              let sel= document.querySelectorAll(".slide")[1];

 

                              sel.classList.add("new-offer");

 

                              sel.style.border="1px solid "+config_carousal_V2.Product2.Offer.backgroundColor+"";

 

                              sel.insertAdjacentHTML("afterbegin",'<span class="offer-div offerDivP2">'+config_carousal_V2.Product2.Offer.text+'</span>');

 

               document.querySelector(".offerDivP2").style.backgroundColor=config_carousal_V2.Product2.Offer.backgroundColor;

 

               }

 

               else{

 

                              let s=document.querySelectorAll(".slide")[1].childNodes[0].childNodes[0].style.marginTop="25px"

 

               }

 

               if(config_carousal_V2.Product3.Offer.flag=="yes"){

 

                              let sel= document.querySelectorAll(".slide")[2];

 

                              sel.classList.add("new-offer");

 

                              sel.style.border="1px solid "+config_carousal_V2.Product3.Offer.backgroundColor+"";

 

                              sel.insertAdjacentHTML("afterbegin",'<span class="offer-div offerDivP3">'+config_carousal_V2.Product3.Offer.text+'</span>');

 

               document.querySelector(".offerDivP3").style.backgroundColor=config_carousal_V2.Product3.Offer.backgroundColor;

 

               }

 

               else{

 

                              let s=document.querySelectorAll(".slide")[2].childNodes[0].childNodes[0].style.marginTop="25px"

 

               }

 

}

 

setSpecialOffer();

 

 

clearInterval(fun)}                        

 

                              

 

else if (screen.width > 601 && screen.width <=900){

 

document.querySelector("#root > div > div:nth-child(2)").insertAdjacentHTML("afterend", '<div class="spring" style="overflow: hidden;background-color:'+config_carousal_V2.background.backgroundColour+';padding: 20px 20px;"> <div class="carousel"><div class="slides"><div class="slide"><div id="a" style=" " class="P1"><span class="offer-div offerDivP1" style="display:none;">'+config_carousal_V2.Product1.Offer.text+'</span><div id="header"><a>'+config_carousal_V2.Product1.title.text+'</a></div><div id="image-container"> <a class="images" href="" title="Samsung Galaxy S20 FE DS" style="background-image: url('+config_carousal_V2.Product1.image.imageUrl+');background-position: center;background-size: contain;/* min-width: 300px; */width: 100%;height:100%;background-size: contain;background-repeat: no-repeat;background-position:center center;"> &nbsp; </a></div><div id="information"> <strong id="price">'+config_carousal_V2.Product1.amount.text+'</strong><br> <span class="device__price-details"> '+config_carousal_V2.Product1.description.text+'<br> <small>'+config_carousal_V2.Product1.message.text+'</small> </span></div><div class="device__footer padding-top--15px"> <a class="button button--secondary" data-analytics="link_name=Recommendation:Device1:Samsung Galaxy S21 Ultra 5G DS:CTA" href="https://shop.vodafone.hu/lakossagi/samsung_galaxy_s21_ultra_5g_ds/elofizeteses/fantomfekete/256/red_infinity_world/1"> '+ config_carousal_V2.Product1.Cta.text+' </a></div></div></div><div class="slide"><div id="a" style=" " class="P2"><span class="offer-div offerDivP2" style="display:none;">'+config_carousal_V2.Product2.Offer.text+'</span><div id="header"><a>'+config_carousal_V2.Product2.title.text+'</a></div><div id="image-container"> <a class="images" href="" title="Samsung Galaxy S20 FE DS" style="background-image: url('+config_carousal_V2.Product2.image.imageUrl+');background-position: center;background-size: contain;/* min-width: 300px; */width: 100%;height:100%;background-size: contain;background-repeat: no-repeat;background-position:center center;"> &nbsp; </a></div><div id="information"> <strong id="price">'+config_carousal_V2.Product2.amount.text+'</strong><br> <span class="device__price-details">'+config_carousal_V2.Product2.description.text+'<br> <small>'+config_carousal_V2.Product2.message.text+' </small> </span></div><div class="device__footer padding-top--15px"> <a class="button button--secondary" data-analytics="link_name=Recommendation:Device1:Samsung Galaxy S21 Ultra 5G DS:CTA" href="https://shop.vodafone.hu/lakossagi/samsung_galaxy_s21_ultra_5g_ds/elofizeteses/fantomfekete/256/red_infinity_world/1"> '+ config_carousal_V2.Product2.Cta.text+' </a></div></div></div><div class="slide"><div id="a" style=" " class="P3"><span class="offer-div offerDivP3" style="display:none;">'+config_carousal_V2.Product3.Offer.text+'</span><div id="header"><a>'+config_carousal_V2.Product3.title.text+'</a></div><div id="image-container"> <a class="images" href="" title="Samsung Galaxy S20 FE DS" style="background-image: url('+config_carousal_V2.Product3.image.imageUrl+': center;background-size: contain;/* min-width: 300px; */width: 100%;height:100%;background-size: contain;background-repeat: no-repeat;background-position:center center;"> &nbsp; </a></div><div id="information"> <strong id="price">'+config_carousal_V2.Product3.amount.text+'</strong><br> <span class="device__price-details">'+config_carousal_V2.Product3.description.text+'<br> <small>'+config_carousal_V2.Product3.message.text+' </small> </span></div><div class="device__footer padding-top--15px"> <a class="button button--secondary" data-analytics="link_name=Recommendation:Device1:Samsung Galaxy S21 Ultra 5G DS:CTA" href="https://shop.vodafone.hu/lakossagi/samsung_galaxy_s21_ultra_5g_ds/elofizeteses/fantomfekete/256/red_infinity_world/1">'+ config_carousal_V2.Product3.Cta.text+' </a></div></div></div></div><div class="controls"><div class="control prev-slide"><span style="position: absolute;  width: 15px; height: 15px; border-top: 3px solid #fff; border-right: 3px solid #fff; -webkit-transform: rotate(-135deg); transform: rotate(-135deg);  border-radius: 2px; right: 9px; "></span></div><div class="control next-slide"><span style="position: absolute;  width: 15px; height: 15px; border-top: 3px solid #fff; border-right: 3px solid #fff; -webkit-transform: rotate(45deg); transform: rotate(45deg);  border-radius: 2px; left: 9px; content: "";"></span></div></div></div></div><style>.new-offer { border:1px solid #e60000;} .new-offer .offer-div { color: #fff; position: absolute; top: 0px; right: 0; background-color: #e60000; box-shadow: none;   background-image: none; padding: 5px 10px; font-size: 20px; left: 0px;  text-align: center; } .carousel{/*width:100vw;*/height:600px;border-radius:3px;position:relative;}.carousel:hover .controls{opacity:1}.carousel .controls{opacity:0;display:flex;position:absolute;top:50%;left:0;justify-content:space-between;width:100%;z-index:99999;transition:all ease 0.5s}.carousel .controls .control{  margin:0 -30px; display: flex;align-items:center;justify-content:center;height:40px;width:40px;border-radius:50%;transition:ease 0.3s;cursor:pointer; background-color: #4A4D4E;border-color: #333; color: #fff;}.carousel .controls .control:hover{ opacity:1} .carousel .prev-slide {animation: pulse 1s ease infinite alternate, nudge 1s linear infinite alternate;} .carousel .next-slide {animation: pulse 1s ease infinite alternate, nudge2 1s linear infinite alternate;} .carousel .slides{position:absolute;top:50%;left:0;transform:translateY(-50%);display:flex;width:33%;transition:1s ease-in-out all}.carousel .slides .slide{position: relative; min-width:100%;min-height:auto;height:auto;background-color:white;padding: 0px 20px;}#header{text-align:center;font-size:25px;margin-top:50px}.images{display:block;height:100%;width:100%;background-size:contain}#image-container{height:250px;margin-top:20px}#information{margin-top:20px;text-align:center}#price{font-size:35px}.device__price-details{font-size:20px}.device__footer{padding-top:15px;text-align:center;margin-bottom:20px}.button{appearance:none;border:1px solid transparent;cursor:pointer;display:inline-block;font-size:20px;padding:11px 37px;text-align:center;color:#fff;background-color:#666}#a{ border-radius: 5px; display:block;width:100%;height:600px;overflow:hidden;position:relative;}@media (min-width: 601px) and (max-width: 900px){.carousel .slides{width:50%}.controls{display:block;opacity:1 !important}}@media (max-width: 600px){#image-container{height:200px}#a{height:550px}.carousel{height:550px}.carousel .slides{width:100%}.controls{display:block;opacity:1 !important}.button{max-width:200px}}@media (min-width: 901px){.controls{display:none !important}}   @keyframes nudge { 0% { -webkit-transform: translateX(0); transform: translateX(0); } 2% { -webkit-transform: translateX(3px); transform: translateX(3px); } 6% {  -webkit-transform: translateX(-9px); transform: translateX(-9px); } 12% { -webkit-transform: translateX(2px); transform: translateX(2px); } 13% {  -webkit-transform: translateX(0); transform: translateX(0); } 100% { -webkit-transform: translateX(0);  transform: translateX(0); } }  @keyframes nudge2 { 0% { -webkit-transform: translateX(0); transform: translateX(0); } 2% { -webkit-transform: translateX(-3px); transform: translateX(-3px); } 6% {  -webkit-transform: translateX(9px); transform: translateX(9px); } 12% { -webkit-transform: translateX(-2px); transform: translateX(-2px); } 13% {  -webkit-transform: translateX(0); transform: translateX(0); } 100% { -webkit-transform: translateX(0);  transform: translateX(0); } }</style>');

 

               if(config_carousal_V2.Product1.Offer.flag=="yes")

 

               {

 

                              document.querySelector(".P1").classList.add('new-offer');

 

                              document.querySelector(".P1").style.border="1px solid "+config_carousal_V2.Product1.Offer.backgroundColor+"";

 

               document.querySelector(".offerDivP1").style.backgroundColor=config_carousal_V2.Product1.Offer.backgroundColor;

 

                              document.querySelector(".offerDivP1").style.display="block";

 

               }

 

               if(config_carousal_V2.Product2.Offer.flag=="yes")

 

               {

 

                              document.querySelector(".P2").classList.add('new-offer');

 

                              document.querySelector(".P2").style.border="1px solid "+config_carousal_V2.Product2.Offer.backgroundColor+"";

 

               document.querySelector(".offerDivP2").style.backgroundColor=config_carousal_V2.Product2.Offer.backgroundColor;

 

                              document.querySelector(".offerDivP2").style.display="block";

 

                            

 

               }

 

               if(config_carousal_V2.Product3.Offer.flag=="yes")

 

               {

 

                              document.querySelector(".P3").classList.add('new-offer');

 

                              document.querySelector(".P3").style.border="1px solid "+config_carousal_V2.Product3.Offer.backgroundColor+"";

 

               document.querySelector(".offerDivP3").style.backgroundColor=config_carousal_V2.Product3.Offer.backgroundColor;

 

                              document.querySelector(".offerDivP3").style.display="block";

 

                            

 

               }

 

               if (screen.width >= 601 && screen.width < 901){

 

               const delay = 3000; //ms

 

               const slides = document.querySelector(".slides");

 

               const slidesCount = slides.childElementCount;

 

               const maxLeft = (1) * 100 * -1;

 

               let current = 0;

 

               document.querySelector(".prev-slide").style.opacity=0;

 

               document.querySelector(".next-slide").style.opacity=1;

 

               function changeSlide(next = true) {

 

                 if (next) {

 

                              current += current > -50 ? -50 : 0;

 

                 } else {

 

                              current = current < 0 ? current + 50 : 0;

 

                 }

 

                 slides.style.left = current + "%";

 

                 if(slides.style.left=="0%"){

 

                              document.querySelector(".prev-slide").style.opacity=0;

 

                              document.querySelector(".next-slide").style.opacity=1;

 

               }

 

               if(slides.style.left=="-50%"){

 

                              document.querySelector(".prev-slide").style.opacity=1;

 

                              document.querySelector(".next-slide").style.opacity=0;

 

               }

 

               }

 

             

 

             

 

               document.querySelector(".next-slide").addEventListener("click", function() {

 

                 changeSlide();

 

 

             

 

 

               });

 

               document.querySelector(".prev-slide").addEventListener("click", function() {

 

                 changeSlide(false);

 

 

             

 

 

               });

 

               }

 

               if (screen.width < 601) {

 

               const delay = 3000; //ms

 

               const slides = document.querySelector(".slides");

 

               const slidesCount = slides.childElementCount;

 

               const maxLeft = (slidesCount - 1) * 100 * -1;

 

               let current = 0;

 

               document.querySelector(".prev-slide").style.opacity=0;

 

               document.querySelector(".next-slide").style.opacity=1;

 

 

               function changeSlide(next = true) {

 

                 if (next) {

 

                              current += current > maxLeft ? -100 : current * -1;

 

                 } else {

 

                              current = current < 0 ? current + 100 : maxLeft;

 

                 }

 

                 slides.style.left = current + "%";

 

                 if(slides.style.left=="0%"){

 

                              document.querySelector(".prev-slide").style.opacity=0;

 

                              document.querySelector(".next-slide").style.opacity=1;

 

               }

 

               if(slides.style.left=="-100%"){

 

                              document.querySelector(".prev-slide").style.opacity=1;

 

                              document.querySelector(".next-slide").style.opacity=1;

 

               }

 

               if(slides.style.left=="-200%"){

 

                              document.querySelector(".prev-slide").style.opacity=1;

 

                              document.querySelector(".next-slide").style.opacity=0;

 

               }

 

               }

 

               document.querySelector(".next-slide").addEventListener("click", function() {

 

                 changeSlide();

 

               

 

 

             

 

 

               });

 

               document.querySelector(".prev-slide").addEventListener("click", function() {

 

                 changeSlide(false);

 

               

 

 

 

 

               });

 

               }

 

             

 

clearInterval(fun)}

 

else if(screen.width>900){

 

               document.querySelector("#root > div > div:nth-child(2)").insertAdjacentHTML("afterend", '<div class="spring" style="overflow: hidden;background: lightgrey;padding: 20px 20px;margin-top: 20px;margin-bottom: 30px;"> <div class="carousel"><div class="slides"><div class="slide"><div id="a" style=""><div id="header"><a>Product 1</a></div><div id="image-container"> <a class="images" href="" title="Samsung Galaxy S20 FE DS" style="background-image: url('+config_carousal_V2.Product1.image.imageUrl+');background-position: center;background-size: contain;/* min-width: 300px; */width: 100%;height:100%;background-size: contain;background-repeat: no-repeat;background-position:center center;"> &nbsp; </a></div><div id="information"> <strong id="price">'+config_carousal_V2.Product1.amount.text+'</strong><br> <span class="device__price-details"> '+config_carousal_V2.Product1.description.text+'<br> <small>'+config_carousal_V2.Product1.message.text+'</small> </span></div><div class="device__footer padding-top--15px"> <a class="button button--secondary" data-analytics="link_name=Recommendation:Device1:Samsung Galaxy S21 Ultra 5G DS:CTA" href="https://shop.vodafone.hu/lakossagi/samsung_galaxy_s21_ultra_5g_ds/elofizeteses/fantomfekete/256/red_infinity_world/1"> '+ config_carousal_V2.Product1.Cta.text+' </a></div></div></div><div class="slide"><div id="a" style=" "><div id="header"><a>'+config_carousal_V2.Product2.title.text+'</a></div><div id="image-container"> <a class="images" href="" title="Samsung Galaxy S20 FE DS" style="background-image: url('+config_carousal_V2.Product2.image.imageUrl+');background-position: center;background-size: contain;/* min-width: 300px; */width: 100%;height:100%;background-size: contain;background-repeat: no-repeat;background-position:center center;"> &nbsp; </a></div><div id="information"> <strong id="price">'+config_carousal_V2.Product2.amount.text+'</strong><br> <span class="device__price-details">'+config_carousal_V2.Product2.description.text+'<br> <small>'+config_carousal_V2.Product2.message.text+' </small> </span></div><div class="device__footer padding-top--15px"> <a class="button button--secondary" data-analytics="link_name=Recommendation:Device1:Samsung Galaxy S21 Ultra 5G DS:CTA" href="https://shop.vodafone.hu/lakossagi/samsung_galaxy_s21_ultra_5g_ds/elofizeteses/fantomfekete/256/red_infinity_world/1"> '+ config_carousal_V2.Product2.Cta.text+' </a></div></div></div><div class="slide"><div id="a" style=" "><div id="header"><a>'+config_carousal_V2.Product3.title.text+'</a></div><div id="image-container"> <a class="images" href="" title="Samsung Galaxy S20 FE DS" style="background-image: url('+config_carousal_V2.Product3.image.imageUrl+': center;background-size: contain;/* min-width: 300px; */width: 100%;height:100%;background-size: contain;background-repeat: no-repeat;background-position:center center;"> &nbsp; </a></div><div id="information"> <strong id="price">'+config_carousal_V2.Product3.amount.text+'</strong><br> <span class="device__price-details">'+config_carousal_V2.Product3.description.text+'<br> <small>'+config_carousal_V2.Product3.message.text+' </small> </span></div><div class="device__footer padding-top--15px"> <a class="button button--secondary" data-analytics="link_name=Recommendation:Device1:Samsung Galaxy S21 Ultra 5G DS:CTA" href="https://shop.vodafone.hu/lakossagi/samsung_galaxy_s21_ultra_5g_ds/elofizeteses/fantomfekete/256/red_infinity_world/1">'+ config_carousal_V2.Product3.Cta.text+' </a></div></div></div></div><div class="controls"><div class="control prev-slide"><span style="position: absolute;  width: 15px; height: 15px; border-top: 3px solid #fff; border-right: 3px solid #fff; -webkit-transform: rotate(-135deg); transform: rotate(-135deg);  border-radius: 2px; right: 9px; "></span></div><div class="control next-slide"><span style="position: absolute;  width: 15px; height: 15px; border-top: 3px solid #fff; border-right: 3px solid #fff; -webkit-transform: rotate(45deg); transform: rotate(45deg);  border-radius: 2px; left: 9px; content: "";"></span></div></div></div></div><style>.new-offer { border:1px solid #e60000;} .new-offer .offer-div { color: #fff; position: absolute; top: 0px; right: 0; background-color: #e60000; box-shadow: none;   background-image: none; padding: 5px 10px; font-size: 20px; left: 0px;  text-align: center; } .carousel{/*width:100vw;*/height:600px;border-radius:3px;position:relative;}.carousel:hover .controls{opacity:1}.carousel .controls{opacity:0;display:flex;position:absolute;top:50%;left:0;justify-content:space-between;width:100%;z-index:99999;transition:all ease 0.5s}.carousel .controls .control{  margin:0 -30px; display: flex;align-items:center;justify-content:center;height:40px;width:40px;border-radius:50%;transition:ease 0.3s;cursor:pointer; background-color: #4A4D4E;border-color: #333; color: #fff;}.carousel .controls .control:hover{ opacity:1} .carousel .prev-slide {animation: pulse 1s ease infinite alternate, nudge 1s linear infinite alternate;} .carousel .next-slide {animation: pulse 1s ease infinite alternate, nudge2 1s linear infinite alternate;} .carousel .slides{position:absolute;top:50%;left:0;transform:translateY(-50%);display:flex;width:33%;transition:1s ease-in-out all}.carousel .slides .slide{position: relative; min-width:100%;min-height:auto;height:auto;background-color:white;padding: 0px 20px;}#header{text-align:center;font-size:25px;margin-top:50px}.images{display:block;height:100%;width:100%;background-size:contain}#image-container{height:250px;margin-top:20px}#information{margin-top:20px;text-align:center}#price{font-size:35px}.device__price-details{font-size:20px}.device__footer{padding-top:15px;text-align:center;margin-bottom:20px}.button{appearance:none;border:1px solid transparent;cursor:pointer;display:inline-block;font-size:20px;padding:11px 37px;text-align:center;color:#fff;background-color:#666}#a{ border-radius: 5px; display:block;width:100%;height:600px;overflow:hidden;position:relative;}@media (min-width: 601px) and (max-width: 900px){.carousel .slides{width:50%}.controls{display:block;opacity:1 !important}}@media (max-width: 600px){#image-container{height:200px}#a{height:550px}.carousel{height:550px}.carousel .slides{width:100%}.controls{display:block;opacity:1 !important}.button{max-width:200px}}@media (min-width: 901px){.controls{display:none !important}}   @keyframes nudge { 0% { -webkit-transform: translateX(0); transform: translateX(0); } 2% { -webkit-transform: translateX(3px); transform: translateX(3px); } 6% {  -webkit-transform: translateX(-9px); transform: translateX(-9px); } 12% { -webkit-transform: translateX(2px); transform: translateX(2px); } 13% {  -webkit-transform: translateX(0); transform: translateX(0); } 100% { -webkit-transform: translateX(0);  transform: translateX(0); } }  @keyframes nudge2 { 0% { -webkit-transform: translateX(0); transform: translateX(0); } 2% { -webkit-transform: translateX(-3px); transform: translateX(-3px); } 6% {  -webkit-transform: translateX(9px); transform: translateX(9px); } 12% { -webkit-transform: translateX(-2px); transform: translateX(-2px); } 13% {  -webkit-transform: translateX(0); transform: translateX(0); } 100% { -webkit-transform: translateX(0);  transform: translateX(0); } }</style>');

 

             

 

                function setSpecialOffer(){

 

               if(config_carousal_V2.Product1.Offer.flag=="yes"){

 

                              let sel= document.querySelectorAll(".slide")[0];

 

                              sel.classList.add("new-offer");

 

                              sel.style.border="1px solid "+config_carousal_V2.Product1.Offer.backgroundColor+"";

 

                              sel.insertAdjacentHTML("afterbegin",'<span class="offer-div offerDivP1">'+config_carousal_V2.Product1.Offer.text+'</span>');

 

               document.querySelector(".offerDivP1").style.backgroundColor=config_carousal_V2.Product1.Offer.backgroundColor;

 

               }

 

               else{

 

                              let s=document.querySelectorAll(".slide")[0].childNodes[0].childNodes[0].style.marginTop="50px"

 

               }

 

               if(config_carousal_V2.Product2.Offer.flag=="yes"){

 

                              let sel= document.querySelectorAll(".slide")[1];

 

                              sel.classList.add("new-offer");

 

                              sel.style.border="1px solid "+config_carousal_V2.Product2.Offer.backgroundColor+"";

 

                              sel.insertAdjacentHTML("afterbegin",'<span class="offer-div offerDivP2">'+config_carousal_V2.Product2.Offer.text+'</span>');

 

               document.querySelector(".offerDivP2").style.backgroundColor=config_carousal_V2.Product2.Offer.backgroundColor;

 

               }

 

               else{

 

                              let s=document.querySelectorAll(".slide")[1].childNodes[0].childNodes[0].style.marginTop="50px"

 

               }

 

               if(config_carousal_V2.Product3.Offer.flag=="yes"){

 

                              let sel= document.querySelectorAll(".slide")[2];

 

                              sel.classList.add("new-offer");

 

                              sel.style.border="1px solid "+config_carousal_V2.Product3.Offer.backgroundColor+"";

 

                              sel.insertAdjacentHTML("afterbegin",'<span class="offer-div offerDivP3">'+config_carousal_V2.Product3.Offer.text+'</span>');

 

               document.querySelector(".offerDivP3").style.backgroundColor=config_carousal_V2.Product3.Offer.backgroundColor;

 

               }

 

               else{

 

                              let s=document.querySelectorAll(".slide")[2].childNodes[0].childNodes[0].style.marginTop="50px"

 

               }

 

}

 

setSpecialOffer();

 

             

 

               clearInterval(fun)

 

}

 

 

 

         },config_carousal_V2.initialDelay.time);

 

      }

 

               

 

                

 

      catch(e){}
}
