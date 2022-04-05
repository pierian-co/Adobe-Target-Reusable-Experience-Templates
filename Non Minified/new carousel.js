var carousel_settings = {
  'headline': {
    'title': 'H3 Uberschrift',
    'color': '',
    'fontSize': '',
  },
  'slideBgColor': '#eee',
  'slideHoverBgColor': 'red',
  'slide1': {
    'href': '',
    'img': '',
    'headline': '',
    'price': '',
    'ctaText': 'Zu den Angeboten',
    'label': true,
    'labelName': 'Loream Ipsum'
  },
  'slide2': {
    'href': '',
    'img': '',
    'headline': '',
    'price': '',
    'ctaText': 'Zu den Angeboten',
    'label': false,
    'labelName': 'Loream Ipsum'
  },
  'slide3': {
    'href': '',
    'img': '',
    'headline': '',
    'price': '',
    'ctaText': 'Zu den Angeboten',
    'label': false,
    'labelName': ''
  },
  'initSlider': {
    'carousel': '#carousel-one-by-one',
    'slide': '.slide',
    'oneByOne': true,
    'btnNext': '',
    'btnRight': '',
    'speed': '400', // time in ms
    'delay': '', // time in ms
    'effect': '', // linear|ease-in|ease-out|ease-in-out
    'infinite': '', // true|false
    'autoplay': 'true', // true|false
    'autoplayDelay': '400', // time in ms
    'autoplayDirection': 'next', // next|prev
  }
}

document.body.insertAdjacentHTML('beforeend', `<style>.pure-js-carousel { overflow: hidden;} .pure-js-carousel-list:before, .pure-js-carousel-list:after { content: ""; display: table;} .pure-js-carousel-list:after { clear: both;} .pure-js-carousel-slide { float: left;} *, *:after, *:before { box-sizing: border-box;} .carousel { margin: 0px auto; overflow: hidden; position: relative; padding-bottom: 5px; } .carousel:before, .carousel:after { content: ""; display: table;} .carousel:after { clear: both;} .slide { margin-top: 10px; background: #fff; border: 5px solid #fff; color: #fff; float: left; font-size: 20px; text-align: center;position: relative;} .slide>a { background: ${carousel_settings.slideBgColor}; padding: 15px 0px;} .pure-js-carousel-btn { background: transparent; border: 0; b ox-shadow: none; cursor: pointer; height: 20px; margin-top: -35px; position: absolute; top: 50%; width: 20px;} .pure-js-carousel-btn-next { border-bottom: 3px solid #000; border-right: 3px solid #000; right: 5px; -moz-transform: rotate(315deg); -webkit-transform: rotate(315deg); transform: rotate(315deg);} .pure-js-carousel-btn-prev { border-bottom: 3px solid #000; border-left: 3px solid #000; left: 5px; -moz-transform: rotate(45deg); -webkit-transform: rotate(45deg); transform: rotate(45deg);} .pure-js-carousel-dots {float: left; margin-top: 15px; text-align: center; width: 100%;} .pure-js-carousel-dot { display: inline-block; margin: 0 5px;} .pure-js-carousel-dot-btn { background: green; border-radius: 50%; height: 20px; width: 20px;} .active .pure-js-carousel-dot-btn { background: blue;} .purejscarousel-dot { padding: 4px; border-radius: 100%; margin: 0px 7px; border: 3px solid #333; background: #333; } .purejscarousel-dot.active { background: #fff; } .purejscarousel-dots-container { text-align:center; margin-bottom:20px;} .purejscarousel-btn { display:none;} .slide .product-label { position: absolute; box-shadow: 0 3px 0 -2px #333; background: #428600; color: #fff; padding: 0px 6px; font-size: 14px; font-weight: bold; line-height: 28px; left: -12px; top: -15px; height: 28px;} .slide .product-label:before { content: ""; position: absolute; bottom: -8px; left: 0; width: 0; height: 0; border-width: 4px 6px; border-style: solid; border-color: #333 #333 transparent transparent; } .slide .img-p img { width: 100.18px; height: 109px; margin: 0px auto;} .slide .product-heading { font-family: "Vodafone",Arial,sans-serif; font-size: 20px; line-height: 23px; letter-spacing: 0px; padding: 0px 18px 16px; font-weight: bold; color: #333333; min-height: 60px;} .slide p { display: block;} .slide h4 { margin: 0px 0px 19px !important;} .slide .product-price { font-family: "Vodafone",Arial,sans-serif; font-size: 40px; line-height: 50px; letter-spacing: 0px; padding: 0px 10px; font-weight: bold; color: #333333; } .slide .product-price .pre-price { font-size: 20px; line-height: 26px; font-weight: normal; font-family: "Vodafone",Arial,sans-serif; color: #333333;} .slide .product-btn { font-family: "Vodafone",Arial,sans-serif; font-size: 16px; line-height: 20px; letter-spacing: 0px; text-align: center; background: #ffffff; padding: 12px 15px; font-weight: bold; box-shadow: 0px 1px 3px rgb(0 0 0 / 60%) !important; text-decoration: none; border: 1px solid #f3f3f3; height: 46px; color: #333333; display: inline-block; } .slide-heading { margin-top: 36px; font-family: "Vodafone",Arial,sans-serif; font-size: 35px; font-weight: bold; line-height: 46px; letter-spacing: 0px; text-align: center; color: #333333;}  @media (max-width: 767px) { .carousel { padding-top: 10px; } .slide .product-label { box-shadow: 0 3px 0 -2px #333; top: -15px; left: -12px;} .slide .product-label:before {content: ""; position: absolute; bottom: -8px; left: 0; width: 0; height: 0; border-width: 4px 6px; border-style: solid; border-color: #333 #333 transparent transparent; } .slide { background: #fff; width: 100%; border: 10px solid #fff; margin-bottom:10px; } /*.carousel { width: 767px; }*/ /*.slide { max-width:360px } */ } @media (min-width: 768px) { .carousel { /*width: 1200px; */ } .slide .product-label { position: absolute !important; height: 28px !important; font-size: 16px !IMPORTANT; line-height: 28px !IMPORTANT;} .slide .product-label-img { margin-top: -28px !important;} .slide .img-p { margin-top: 38px !important;} .purejscarousel-dots-container { display: none; } .slide { width: 33.333%;} .purejscarousel-slides-container { width:100% !important; /* max-width:1200px; */ padding:5px;  margin:0px auto; } } @media (min-device-width: 720px) and (max-device-width: 768px) { .slide { max-width:340px } } @media (min-device-width: 660px) and (max-device-width: 719px) { .slide { max-width:310px } } @media (min-device-width: 600px) and (max-device-width: 659px) { .slide { max-width:280px } } @media (min-device-width: 520px) and (max-device-width: 599px) { .slide { max-width:480px } } @media (min-device-width: 460px) and (max-device-width: 519px) { .slide { max-width:420px } } @media (min-device-width: 400px) and (max-device-width: 459px) { .slide { max-width:360px } } @media (min-device-width: 375px) and (max-device-width: 399px) { .slide { max-width:300px } } @media (max-device-width: 374px) { .slide { max-width:760px !important; width:auto !important; }}  @media (min-width: 992px) { .slide>a:hover { background: ${carousel_settings.slideHoverBgColor}; } .slide>a:hover .product-btn { /*background: #d7d7d7; border: 1px solid #d7d7d7;}*/ }</style>`);

var sliderHTML = `
<div class="carousel-wrapper">
<h2 class="slide-heading" style="color: ${carousel_settings.headline.color}; font-size: ${carousel_settings.headline.fontSize}">${carousel_settings.headline.title}</h2>
<div class="carousel" id="carousel-one-by-one">
  <div class="slide">
    <a href="${carousel_settings.slide1.href}" target="_blank" style=" text-decoration:none;display: inline-block;width: 100%;"
      tabindex="0">
      ${carousel_settings.slide1.label ? `<span class="product-label">${carousel_settings.slide1.labelName}</span>` : ''}
      <p style="margin-bottom:20px;position:relative;margin-top: 10px;" class="img-p"><img src="${carousel_settings.slide1.img}">
      </p>
      <p class="product-heading" style="max-width: 250px;margin: 0px auto;">${carousel_settings.slide1.headline}</p>
      <h4 class="product-price"><span class="pre-price">ab </span>${carousel_settings.slide1.price}</h4>
      <p><span class="product-btn">${carousel_settings.slide1.ctaText}</span></p>
    </a>
  </div>
  <div class="slide">
    <a href="${carousel_settings.slide2.href}" target="_blank" style=" text-decoration:none;display: inline-block;width: 100%;"
      tabindex="0">
      ${carousel_settings.slide2.label ? `<span class="product-label">${carousel_settings.slide2.labelName}</span>` : ''}
      <p style="margin-bottom:20px;position:relative;margin-top: 10px;" class="img-p"><img src="${carousel_settings.slide2.img}">
      </p>
      <p class="product-heading" style="max-width: 250px;margin: 0px auto;">${carousel_settings.slide2.headline}</p>
      <h4 class="product-price"><span class="pre-price">ab </span>${carousel_settings.slide2.price}</h4>
      <p><span class="product-btn">${carousel_settings.slide2.ctaText}</span></p>
    </a>
  </div>
  <div class="slide">
    <a href="${carousel_settings.slide3.href}" target="_blank" style=" text-decoration:none;display: inline-block;width: 100%;"
      tabindex="0">
      ${carousel_settings.slide3.label ? `<span class="product-label">${carousel_settings.slide3.labelName}</span>` : ''}
      <p style="margin-bottom:20px;position:relative;margin-top: 10px;" class="img-p"><img src="${carousel_settings.slide3.img}">
      </p>
      <p class="product-heading" style="max-width: 250px;margin: 0px auto;">${carousel_settings.slide3.headline}</p>
      <h4 class="product-price"><span class="pre-price">ab </span>${carousel_settings.slide3.price}</h4>
      <p><span class="product-btn">${carousel_settings.slide3.ctaText}</span></p>
    </a>
  </div>
</div>
</div>
`;

window.PureJSCarousel = function (settings) {
    this.carousel = document.querySelector(settings.carousel);
    this.slides = this.carousel.querySelectorAll(settings.slide);
    this.btnNext = this.carousel.querySelector(settings.btnNext) || null;
    this.btnPrev = this.carousel.querySelector(settings.btnPrev) || null;
    this.activeIndex = settings.activeIndex || 0;
    this.oneByOne = settings.oneByOne || false;
    this.speed = settings.speed || 400;
    this.delay = settings.delay || 0;
    this.effect = settings.effect || "linear";
    this.infinite = settings.infinite || false;
    this.autoplay = settings.autoplay || false;
    this.autoplayDelay = settings.autoplayDelay || 400;
    this.autoplayDirection = settings.autoplayDirection || "next";

    this.autoplayTimer = null;
    this.minPos = null;
    this.slidesToShow = null;
    this.maxIndex = null;
    this.isEnabled = null;

    this.build();
  };

  PureJSCarousel.prototype.build = function () {
    var _ = this,
      dotsLength,
      i,
      windowResizeTimeout,
      windowWidth = window.innerWidth,
      windowHeight = window.innerHeight;

    _.minPos =
      _.carousel.offsetWidth - _.slides.length * _.slides[0].offsetWidth;
    _.slidesToShow = Math.round(
      _.carousel.offsetWidth / _.slides[0].offsetWidth
    );
    _.maxIndex = 0;
    _.isEnabled = 1;

    _.carousel.className += " purejscarousel";

    //create slides container
    _.slidesContainer = document.createElement("div");
    _.carousel.insertBefore(_.slidesContainer, _.slides[0]);
    _.slidesContainer.className += " purejscarousel-slides-container";
    if (_.infinite === 'true') {
      _.currentXPos = -(_.slides[0].offsetWidth * _.slides.length);
      _.slidesContainer.style.transform = "translateX(" + _.currentXPos + "px)";
      _.slidesContainer.style.width =
        _.slides[0].offsetWidth * _.slides.length * 3 + "px";
    } else {
      _.currentXPos = 0;
      _.slidesContainer.style.transform = "translateX(0px)";
      _.slidesContainer.style.width =
        _.slides[0].offsetWidth * _.slides.length + "px";
    }

    if ("ontouchstart" in window || navigator.maxTouchPoints) {
      _.slidesContainer.addEventListener("touchstart", function (event) {
        this.setAttribute("data-start-touch-x", event.targetTouches[0].pageX);
        this.setAttribute("data-start-margin", parseInt(_.currentXPos));
      });
      _.slidesContainer.addEventListener("touchmove", function (event) {
        this.setAttribute("data-active-touch-x", event.targetTouches[0].pageX);
        _.currentXPos =
          parseInt(this.getAttribute("data-start-margin")) +
          (parseInt(this.getAttribute("data-active-touch-x")) -
            parseInt(this.getAttribute("data-start-touch-x")));
        this.style.transform = "translateX(" + _.currentXPos + "px)";
      });
      _.slidesContainer.addEventListener("touchend", function () {
        var direction =
          parseInt(this.getAttribute("data-active-touch-x")) -
            parseInt(this.getAttribute("data-start-touch-x")) >
            0
            ? "prev"
            : "next",
          blockWidth =
            _.oneByOne === true
              ? _.slides[0].offsetWidth
              : _.carousel.offsetWidth;
        if (
          Math.abs(
            parseInt(this.getAttribute("data-active-touch-x")) -
            parseInt(this.getAttribute("data-start-touch-x"))
          ) >=
          blockWidth / 2
        ) {
          if (_.infinite === true) {
            direction === "next" ? _.goToNextSlide() : _.goToPrevSlide();
          } else {
            if (
              (direction === "next" && _.activeIndex < _.maxIndex) ||
              (direction === "prev" && _.activeIndex > 0)
            ) {
              direction === "next" ? _.goToNextSlide() : _.goToPrevSlide();
            } else {
              if (_.slidesContainer.style.transition !== "undefined") {
                _.slidesContainer.style.transition =
                  "transform " +
                  _.speed +
                  "ms" +
                  " " +
                  _.effect +
                  " " +
                  _.delay +
                  "ms";
              }
              _.currentXPos = parseInt(this.getAttribute("data-start-margin"));
              _.slidesContainer.style.transform =
                "translateX(" + _.currentXPos + "px)";
              if (_.slidesContainer.style.transition === "undefined") {
                if (_.slidesContainer.style.transition !== "undefined") {
                  _.slidesContainer.style.transition = null;
                }
              } else {
                setTimeout(function () {
                  if (_.slidesContainer.style.transition !== "undefined") {
                    _.slidesContainer.style.transition = null;
                  }
                }, _.speed + _.delay);
              }
            }
          }
        } else {
          if (_.slidesContainer.style.transition !== "undefined") {
            _.slidesContainer.style.transition =
              "transform " +
              _.speed +
              "ms" +
              " " +
              _.effect +
              " " +
              _.delay +
              "ms";
          }
          _.currentXPos = parseInt(this.getAttribute("data-start-margin"));
          _.slidesContainer.style.transform =
            "translateX(" + _.currentXPos + "px)";
          if (_.slidesContainer.style.transition === "undefined") {
            if (_.slidesContainer.style.transition !== "undefined") {
              _.slidesContainer.style.transition = null;
            }
          } else {
            setTimeout(function () {
              if (_.slidesContainer.style.transition !== "undefined") {
                _.slidesContainer.style.transition = null;
              }
            }, _.speed + _.delay);
          }
        }
      });
    }

    //create slides dots
    _.dotsContainer = document.createElement("div");
    _.carousel.insertBefore(_.dotsContainer, _.slides[0]);
    _.dotsContainer.className += " purejscarousel-dots-container";
    _.dots = [];
    if (_.oneByOne === true) {
      if (_.infinite === true) {
        dotsLength = _.slides.length;
      } else {
        dotsLength =
          (_.slidesContainer.offsetWidth - _.carousel.offsetWidth) /
          _.slides[0].offsetWidth +
          1;
      }
    } else {
      if (_.infinite === true) {
        dotsLength = Math.ceil(
          _.slidesContainer.offsetWidth / _.carousel.offsetWidth / 3
        );
      } else {
        dotsLength = Math.ceil(
          _.slidesContainer.offsetWidth / _.carousel.offsetWidth
        );
      }
    }
    for (i = 0; i < dotsLength; i++) {
      var dot = document.createElement("button");
      dot.className = "purejscarousel-dot" + (i === 0 ? " active" : "");
      dot.setAttribute("data-index", i);
      dot.setAttribute("type", "button");
      addDotEventListener(dot, _);
      _.dots.push(dot);
      _.dotsContainer.appendChild(dot);
    }

    _.maxIndex = dotsLength - 1;

    //create carousel btn-prev
    if (!_.btnPrev) {
      _.btnPrev = document.createElement("button");
      _.btnPrev.setAttribute("class", "");
      _.btnPrev.setAttribute("type", "button");
      _.btnPrev.setAttribute("data-is-native", 0);
      _.carousel.insertBefore(_.btnPrev, _.slides[0]);
    } else {
      _.btnPrev.setAttribute("data-is-native", 1);
    }
    _.btnPrev.className += " purejscarousel-btn purejscarousel-btn-prev";
    if (window.addEventListener) {
      _.btnPrev.addEventListener("click", function () {
        _.goToPrevSlide();
      });
    } else if (window.attachEvent) {
      _.btnPrev.attachEvent("onclick", function () {
        _.goToPrevSlide();
      });
    } else {
      _.btnPrev.onclick = function () {
        _.goToPrevSlide();
      };
    }

    if (_.activeIndex === 0) {
      _.btnPrev.disabled = true;
    }
    //create carousel btn-next
    if (!_.btnNext) {
      _.btnNext = document.createElement("button");
      _.btnNext.setAttribute("class", "");
      _.btnNext.setAttribute("type", "button");
      _.btnNext.setAttribute("data-is-native", 0);
      _.carousel.insertBefore(_.btnNext, _.slides[0]);
    } else {
      _.btnNext.setAttribute("data-is-native", 1);
    }
    _.btnNext.className += " purejscarousel-btn purejscarousel-btn-next";
    if (window.addEventListener) {
      _.btnNext.addEventListener("click", function () {
        _.goToNextSlide();
      });
    } else if (window.attachEvent) {
      _.btnNext.attachEvent("onclick", function () {
        _.goToNextSlide();
      });
    } else {
      _.btnNext.onclick = function () {
        _.goToNextSlide();
      };
    }
    if (_.activeIndex === _.maxIndex) {
      _.btnNext.disabled = true;
    }

    //build slides
    for (i = 0; i < _.slides.length; i++) {
      _.slides[i].className += " purejscarousel-slide";
      _.slidesContainer.appendChild(_.slides[i]);
    }
    if (_.infinite === true) {
      for (i = 0; i < _.slides.length; i++) {
        var slideClone = _.slides[i].cloneNode(true);
        slideClone.className += " purejscarousel-slide-clone";
        _.slidesContainer.appendChild(slideClone);
      }
      for (i = 0; i < _.slides.length; i++) {
        var slideClone = _.slides[i].cloneNode(true);
        slideClone.className += " purejscarousel-slide-clone";
        _.slidesContainer.insertBefore(
          slideClone,
          _.slidesContainer.querySelectorAll(".purejscarousel-slide")[i]
        );
      }
    }

    if (window.addEventListener) {
      window.addEventListener("resize", windowResize);
    } else if (window.attachEvent) {
      window.attachEvent("onresize", windowResize);
    } else {
      window.onresize = windowResize;
    }

    _.autoplayTimer =
      _.autoplay === true
        ? _.autoplayDirection === "next"
          ? setTimeout(function () {
            _.goToNextSlide();
          }, _.autoplayDelay)
          : setTimeout(function () {
            _.goToPrevSlide();
          }, _.autoplayDelay)
        : null;

    function addDotEventListener(d, c) {
      if (window.addEventListener) {
        d.addEventListener("click", function () {
          c.goToSlide(parseInt(this.getAttribute("data-index")));
        });
      } else if (window.attachEvent) {
        d.attachEvent("onclick", function () {
          c.goToSlide(parseInt(this.getAttribute("data-index")));
        });
      } else {
        d.onclick = function () {
          c.goToSlide(parseInt(this.getAttribute("data-index")));
        };
      }
    }

    function windowResize() {
      if (
        window.innerWidth !== windowWidth ||
        window.innerHeight !== windowHeight
      ) {
        clearTimeout(windowResizeTimeout);
        windowResizeTimeout = setTimeout(function () {
          _.destroy();
          _.build();
        }, 400);
      }
    }
  };

  PureJSCarousel.prototype.enableControl = function () {
    var i;
    this.btnNext.disabled = false;
    this.btnPrev.disabled = false;
    for (i = 0; i < this.dots.length; i++) {
      this.dots[i].disabled = false;
    }
    this.dots[this.activeIndex].disabled = true;
    if (this.infinite === false) {
      if (this.activeIndex === this.maxIndex) {
        this.btnNext.disabled = true;
      }
      if (this.activeIndex === 0) {
        this.btnPrev.disabled = true;
      }
    }
    if ("ontouchstart" in window || navigator.maxTouchPoints) {
      this.slidesContainer.disabled = false;
    }
  };

  PureJSCarousel.prototype.disableControl = function () {
    var i;
    this.btnNext.disabled = true;
    this.btnPrev.disabled = true;
    for (i = 0; i < this.dots.length; i++) {
      this.dots[i].disabled = true;
    }
    if ("ontouchstart" in window || navigator.maxTouchPoints) {
      this.slidesContainer.disabled = true;
    }
  };

  PureJSCarousel.prototype.goToNextSlide = function () {
    var newActiveIndex;
    if (this.btnNext.disabled === false) {
      if (this.infinite === true) {
        newActiveIndex =
          this.activeIndex + 1 > this.maxIndex ? 0 : this.activeIndex + 1;
      } else {
        newActiveIndex = this.activeIndex + 1;
      }
      this.goToSlide(newActiveIndex, "next", "dirBtn");
    }
  };

  PureJSCarousel.prototype.goToPrevSlide = function () {
    var newActiveIndex;
    if (this.btnPrev.disabled === false) {
      if (this.infinite === true) {
        newActiveIndex =
          this.activeIndex - 1 < 0 ? this.maxIndex : this.activeIndex - 1;
      } else {
        newActiveIndex = this.activeIndex - 1;
      }
      this.goToSlide(newActiveIndex, "prev", "dirBtn");
    }
  };

  PureJSCarousel.prototype.goToSlide = function (n, dir, trigger) {
    var _ = this,
      direction = dir ? dir : n > this.activeIndex ? "next" : "prev",
      slidesContainerWidth =
        this.slidesContainer.offsetWidth / (this.infinite === true ? 3 : 1),
      blockWidth =
        this.oneByOne === true
          ? this.slides[0].offsetWidth
          : this.carousel.offsetWidth,
      currentPos =
        this.infinite === true
          ? -slidesContainerWidth
          : Math.max(-blockWidth * this.activeIndex, this.minPos),
      scrollWidth =
        trigger === "dirBtn"
          ? blockWidth
          : Math.abs(blockWidth * (this.activeIndex - n)),
      slidesCount,
      newPos;

    if (
      this.oneByOne === false &&
      ((direction === "next" && n === this.maxIndex) ||
        (direction === "prev" && this.activeIndex === this.maxIndex))
    ) {
      scrollWidth =
        scrollWidth + slidesContainerWidth - (this.maxIndex + 1) * blockWidth;
    }
    slidesCount = scrollWidth / this.slides[0].offsetWidth;
    if (this.infinite === true) {
      newPos =
        direction === "next"
          ? currentPos - scrollWidth
          : currentPos + scrollWidth;
    } else {
      newPos =
        direction === "next"
          ? Math.max(this.minPos, currentPos - scrollWidth)
          : Math.min(0, currentPos + scrollWidth);
    }

    this.disableControl();
    if ("transition" in document.body.style) {
      this.slidesContainer.style.transition =
        "transform " +
        this.speed +
        "ms" +
        " " +
        this.effect +
        " " +
        this.delay +
        "ms";
    }
    _.currentXPos = newPos;
    this.slidesContainer.style.transform =
      "translateX(" + _.currentXPos + "px)";
    if ("transition" in document.body.style) {
      this.slidesContainer.addEventListener("transitionend", scrollEnd);
    } else {
      scrollEnd();
    }

    function scrollEnd() {
      var i;
      if ("transition" in document.body.style) {
        _.slidesContainer.style.transition = null;
        _.slidesContainer.removeEventListener("transitionend", scrollEnd);
      }

      _.dots[_.activeIndex].className = _.dots[_.activeIndex].className.replace(
        " active",
        ""
      );
      _.activeIndex = n;
      _.dots[_.activeIndex].className += " active";

      if (_.infinite === true) {
        for (i = 0; i < slidesCount; i++) {
          if (direction === "next") {
            _.slidesContainer.appendChild(_.slidesContainer.children[0]);
          } else {
            _.slidesContainer.insertBefore(
              _.slidesContainer.lastElementChild,
              _.slidesContainer.children[0]
            );
          }
        }
        _.currentXPos = -(_.slidesContainer.offsetWidth / 3);
        _.slidesContainer.style.transform =
          "translateX(" + _.currentXPos + "px)";
      }
      _.enableControl();
      _.autoplayTimer =
        _.autoplay === true
          ? _.autoplayDirection === "next"
            ? setTimeout(function () {
              _.goToNextSlide();
            }, _.autoplayDelay)
            : setTimeout(function () {
              _.goToPrevSlide();
            }, _.autoplayDelay)
          : null;
    }
  };

  PureJSCarousel.prototype.startAutoplay = function () {
    _.enableControl();
    _.autoplayTimer =
      _.autoplay === true
        ? _.autoplayDirection === "next"
          ? setTimeout(function () {
            _.goToNextSlide();
          }, _.autoplayDelay)
          : setTimeout(function () {
            _.goToPrevSlide();
          }, _.autoplayDelay)
        : null;
  };

  PureJSCarousel.prototype.stopAutoplay = function () {
    if (_.autoplay === true) {
      clearTimeout(_.autoplayTimer);
      _.autoplayTimer = null;
    }
  };

  PureJSCarousel.prototype.destroy = function () {
    var slideClones, i;

    if (this.isEnabled === 1) {
      this.isEnabled = 0;

      this.carousel.className = this.carousel.className.replace(
        " purejscarousel",
        ""
      );
      this.carousel.removeChild(this.dotsContainer);

      if (this.btnNext.getAttribute("data-is-native").toString() === "1") {
        this.btnNext.className = this.btnNext.className.replace(
          " purejscarousel-btn purejscarousel-btn-next",
          ""
        );
      } else {
        this.carousel.removeChild(this.btnNext);
        this.btnNext = null;
      }
      if (this.btnPrev.getAttribute("data-is-native").toString() === "1") {
        this.btnPrev.className = this.btnPrev.className.replace(
          " purejscarousel-btn purejscarousel-btn-prev",
          ""
        );
      } else {
        this.carousel.removeChild(this.btnPrev);
        this.btnPrev = null;
      }

      if (this.infinite === true) {
        slideClones = this.carousel.querySelectorAll(
          ".purejscarousel-slide-clone"
        );
        for (i = 0; i < slideClones.length; i++) {
          slideClones[i].parentNode.removeChild(slideClones[i]);
        }
      }
      for (i = 0; i < this.slides.length; i++) {
        this.slides[i].className = this.slides[i].className.replace(
          " pure-js-carousel-slide",
          ""
        );
        this.carousel.insertBefore(this.slides[i], this.slidesContainer);
      }
      this.carousel.removeChild(this.slidesContainer);

      this.minPos = null;
      this.slidesToShow = null;
      this.maxIndex = null;
      this.isEnabled = null;
      if (this.autoplay === true) {
        clearTimeout(this.autoplayTimer);
        this.autoplayTimer = null;
      }
    }
};


document.body.insertAdjacentHTML('beforeend', sliderHTML);

var carouselOneByOne = new PureJSCarousel({
  carousel: carousel_settings.initSlider.carousel || undefined,
  slide: carousel_settings.initSlider.slide || undefined,
  oneByOne: carousel_settings.initSlider.oneByOne || undefined,
  btnNext: carousel_settings.initSlider.btnNext || undefined,
  btnRight: carousel_settings.initSlider.btnRight || undefined,
  speed: carousel_settings.initSlider.speed || undefined,
  delay: carousel_settings.initSlider.delay || undefined,
  effect: carousel_settings.initSlider.effect || undefined,
  infinite: carousel_settings.initSlider.infinite || undefined,
  autoplay: carousel_settings.initSlider.autoplay || undefined,
  autoplayDelay: carousel_settings.initSlider.autoplayDelay || undefined,
  autoplayDirection: carousel_settings.initSlider.autoplayDirection || undefined
});

console.log(carousel_settings.initSlider.infinite == 'true')