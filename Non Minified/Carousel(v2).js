var config_carousal_v2 = {
    "initialDelay":{
        "time":100
    },
    "bannerPosition": {
        "selector": "#root" // div was not appending but corrected
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
            "text":"Galaxy S21 Ultra 5G"
        },
        "message":{
            "text":"Ultra-fast 5G speeds"
        },
        "Cta":{
            "text":"Buy Now", //cta was not showing corrected
            "url":"https://dwao.in/"
        },
        "Offer":{
            "flag":"yes",
            "text":"Special Offer",
            "backgroundColor":"red"
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
            "text":"iPhone 12 Pro Max"
        },
        "message":{
            "text":"Capture life's moments perfectly"
        },
        "Cta":{
            "text":"Buy Now", //cta was not showing corrected
            "url":"https://dwao.in/"
        },
        "Offer":{
            "flag":"yes",
            "text":"Special Offer",
            "backgroundColor":"red"
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
            "text":"Moto g 5G Plus"
        },
        "message":{
            "text":"Bionic chip and a pro camera"
        },
        "Cta":{
            "text":"Buy Now",  //cta was not showing corrected
            "url":"https://dwao.in/"
        },
        "Offer":{
            "flag":"",
            "text":"Special Offer"
        }
}}
try{
 var fun=setInterval(function(){
document.querySelector(config_carousal_v2.bannerPosition.selector).insertAdjacentHTML("afterend", '<div class="spring" style="background: '+config_carousal_v2.background.backgroundColour+';padding: 20px;margin-top: 20px;margin-bottom: 30px;"> <div class="carousel"><div class="slides" style="left: 0%;"><div class="slide"><div id="a" style=" " class=""><div id="header"><a>'+config_carousal_v2.Product1.title.text+'</a></div><div id="image-container"> <a class="images" href='+config_carousal_v2.Product1.image.imageUrl+' title="Samsung Galaxy S20 FE DS" style="background-image: url('+config_carousal_v2.Product1.image.imageUrl+');background-position: center;background-size: cover;/* min-width: 300px; */width: 100%;height:100%;background-size: contain;background-repeat: no-repeat;background-position:center center;"> &nbsp; </a></div><div id="information"> <strong id="price">'+config_carousal_v2.Product1.amount.text+'</strong><br> <span class="device__price-details"> '+config_carousal_v2.Product1.description.text+'<br> <small>'+config_carousal_v2.Product1.message.text+'</small> </span></div><div class="device__footer padding-top--15px"> <a class="button button--secondary" data-analytics="link_name=Recommendation:Device1:Samsung Galaxy S21 Ultra 5G DS:CTA" href="https://shop.vodafone.hu/lakossagi/samsung_galaxy_s21_ultra_5g_ds/elofizeteses/fantomfekete/256/red_infinity_world/1">'+config_carousal_v2.Product1.Cta.text+'</a></div></div></div><div class="slide"><div id="a" style=" "><div id="header"><a>'+config_carousal_v2.Product2.title.text+'</a></div><div id="image-container"> <a class="images" href='+config_carousal_v2.Product2.image.imageUrl+' title="Samsung Galaxy S20 FE DS" style="background-image: url('+config_carousal_v2.Product2.image.imageUrl+');background-position: center;background-size: cover;/* min-width: 300px; */width: 100%;height:100%;background-size: contain;background-repeat: no-repeat;background-position:center center;"> &nbsp; </a></div><div id="information"> <strong id="price">'+config_carousal_v2.Product2.amount.text+'</strong><br> <span class="device__price-details"> '+config_carousal_v2.Product2.description.text+'<br> <small>'+config_carousal_v2.Product2.message.text+'</small> </span></div><div class="device__footer padding-top--15px"> <a class="button button--secondary" data-analytics="link_name=Recommendation:Device1:Samsung Galaxy S21 Ultra 5G DS:CTA" href="https://shop.vodafone.hu/lakossagi/samsung_galaxy_s21_ultra_5g_ds/elofizeteses/fantomfekete/256/red_infinity_world/1">'+config_carousal_v2.Product2.Cta.text+'</a></div></div></div><div class="slide"><div id="a" style=" "><div id="header"><a>'+config_carousal_v2.Product3.title.text+'</a></div><div id="image-container"> <a class="images" href='+config_carousal_v2.Product3.image.imageUrl+' title="Samsung Galaxy S20 FE DS" style="background-image: url('+config_carousal_v2.Product3.image.imageUrl+');background-position: center;background-size: cover;/* min-width: 300px; */width: 100%;height:100%;background-size: contain;background-repeat: no-repeat;background-position:center center;"> &nbsp; </a></div><div id="information"> <strong id="price">'+config_carousal_v2.Product3.amount.text+'</strong><br> <span class="device__price-details"> '+config_carousal_v2.Product3.description.text+'<br> <small>'+config_carousal_v2.Product3.message.text+'</small> </span></div><div class="device__footer padding-top--15px"> <a class="button button--secondary" data-analytics="link_name=Recommendation:Device1:Samsung Galaxy S21 Ultra 5G DS:CTA" href="https://shop.vodafone.hu/lakossagi/samsung_galaxy_s21_ultra_5g_ds/elofizeteses/fantomfekete/256/red_infinity_world/1">'+config_carousal_v2.Product3.Cta.text+'</a></div></div></div></div><div class="controls" style="display: none;"><div class="control prev-slide">â—„</div><div class="control next-slide">â–º</div></div></div></div><style>.new-offer { border:1px solid #e60000;} .new-offer .offer-div { color: #fff; position: absolute; top: 0px; right: 0; background-color: #e60000; box-shadow: none;   background-image: none; padding: 5px 10px; font-size: 20px; left: 0px;  text-align: center; } .carousel{border-radius:3px;position:relative; text-align: center; }.carousel:hover .controls{opacity:1}.carousel .controls{opacity:0;display:flex;position:absolute;top:50%;left:0;justify-content:space-between;width:100%;z-index:99999;transition:all ease 0.5s}.carousel .controls .control{  margin:0 5px; display: flex;align-items:center;justify-content:center;height:40px;width:40px;border-radius:50%;background-color:rgba(255, 255, 255, 0.7);opacity:0.5;transition:ease 0.3s;cursor:pointer; background: #222; color: #fff;}.carousel .controls .control:hover{ opacity:1} .carousel .prev-slide {animation: pulse 1s ease infinite alternate, nudge 1s linear infinite alternate;} .carousel .next-slide {animation: pulse 1s ease infinite alternate, nudge2 1s linear infinite alternate;} .carousel .slides{position:relative;transition:1s ease-in-out all; }.carousel .slides .slide{position: relative; display: inline-block; margin: 10px; padding: 10px 30px; width: 30.33%; min-height:auto;height:auto;background-color:white;margin-bottom: 20px;border-radius: 5px;}#header{text-align:center;font-size:25px;margin-top:50px}.images{display:block;height:100%;width:100%;background-size:cover}#image-container{height:250px;margin-top:20px}#information{margin-top:20px;text-align:center}#price{font-size:35px}.device__price-details{font-size:20px}.device__footer{padding-top:15px;text-align:center;margin-bottom:20px}.slides .button{appearance:none;border:1px solid;cursor:pointer;display:inline-block;font-size:20px;padding:11px 37px;text-align:center;}#a{ border-radius: 5px; display:block;width:100%;height:auto;overflow:hidden;position:relative;}@media (min-width: 601px) and (max-width: 900px){.carousel .slides{}.controls{display:block;opacity:1 !important}}@media (max-width: 600px){.carousel .slides{width:100%}.controls{display:block;opacity:1 !important}.slides .button{max-width:200px}}@media (min-width: 901px){.controls{display:none !important}} @keyframes nudge { 0%, 100% { transform: translate(0, 0); } 50% { transform: translate(-5px, 0);} 50% { transform: translate(3px, 0); }} @keyframes nudge2 { 0%, 100% { transform: translate(0, 0); } 50% { transform: translate(5px, 0);} 50% { transform: translate(-3px, 0); }} @media (max-width: 901px) { .carousel .slides .slide {  width: 100% !Important; margin: 10px 0px;} } </style>');
function setSpecialOffer(){
if(config_carousal_v2.Product1.Offer.flag=="yes"){
    let sel= document.querySelectorAll(".slide")[0];
    sel.classList.add("new-offer");
    sel.insertAdjacentHTML("afterbegin",'<span class="offer-div" style="background-color: '+config_carousal_v2.Product1.Offer.backgroundColor+';">'+config_carousal_v2.Product1.Offer.text+'</span>');
}
else{
    let s=document.querySelectorAll(".slide")[0].childNodes[0].childNodes[0].style.marginTop="25px"
}
if(config_carousal_v2.Product2.Offer.flag=="yes"){
    let sel= document.querySelectorAll(".slide")[1];
    sel.classList.add("new-offer");
    sel.insertAdjacentHTML("afterbegin",'<span class="offer-div" style="background-color: '+config_carousal_v2.Product2.Offer.backgroundColor+';">'+config_carousal_v2.Product2.Offer.text+'</span>');
}
else{
    let s=document.querySelectorAll(".slide")[1].childNodes[0].childNodes[0].style.marginTop="25px"
}
if(config_carousal_v2.Product3.Offer.flag=="yes"){
    let sel= document.querySelectorAll(".slide")[2];
    sel.classList.add("new-offer");
    sel.insertAdjacentHTML("afterbegin",'<span class="offer-div" style="background-color: '+config_carousal_v2.Product3.Offer.backgroundColor+';">'+config_carousal_v2.Product3.Offer.text+'</span>');
}
else{
    let s=document.querySelectorAll(".slide")[2].childNodes[0].childNodes[0].style.marginTop="25px"
}
}
setSpecialOffer();
clearInterval(fun)

     },config_carousal_v2.initialDelay.time);
  }
  
  catch(e){}
