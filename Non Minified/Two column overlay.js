var settings = {
    "overlayStyle": {
        "backgroundColor": "#fff",
        "backdrop": "rgba(0,0,0,0.8)"
    },
    "heading": {
		"title": "Lorem Ipsum", // Max Char limit 15
		"color": "#000",
		"fontFamily": "Arial, Helvetica, sans-serif",
	},
     "message": {
     	"title": "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...", // Max Char limit 95
     	"color": "#000",
     	"fontFamily": "Arial, Helvetica, sans-serif"
     },
    "closeCTA": {
        "backgroundColor": "rgba(0,0,0,0.3)",
        "hoverBackgroundColor": "rgba(0,0,0,0.5)",
        "borderRadius": "50%"
    },
    "ctaLink1": {
		"text": "Download Now", // char limit 18
		"href": "#",
		"backgroundColor": "#4eb2ed",
                "hoverbackgroundColor": "#0078be",
		"textColor": "#fff",
		"hoverTextColor": "#fff",
		"borderRadius": "4px",
		"fontFamily": "Arial, Helvetica, sans-serif",
                "fontSize": "16px"
	},
	"ctaLink2": {
		"text": "Register Now", // char limit 18
		"href": "#",
		"backgroundColor": "#4eb2ed",
                "hoverbackgroundColor": "#0078be",
		"textColor": "#fff",
		"hoverTextColor": "#fff",
		"borderRadius": "4px",
		"fontFamily": "Arial, Helvetica, sans-serif",
                "fontSize": "16px"
	},
    "leftColumn": {
        "backgroundImageDesk": "https://cdn.optimizely.com/img/21401470059/f13e42e6a2164d4283b23cf1a2678ec6.jpg", // size 1280 X 1919
        "backgroundImageMob": "https://cdn.optimizely.com/img/21401470059/d61c54eaf9b246c892cca323e5708295.jpg" // size 1280 X 855
    },
    "trigger": {
        "scroll": {
            "flag": "true", // true | false
            "depth": "50" // 25 | 50 | 75
        },
        "timed": {
            "flag": "false", // true | false
            "time": "0" // Miliseconds
        },
        "exitIntent": {
            "flag": "false", // true | false
        }
    }
}

document.head.insertAdjacentHTML('beforeend', '<style>.pie-content > h2 { font-family: '+settings.message.fontFamily+' ; color: '+settings.message.color+' } .pie-content > h1 { font-family: '+settings.heading.fontFamily+' ; color: '+settings.heading.color+' } .pie-modal-container{ display: none; align-items: center; justify-content: center; position: fixed; top: 0; left: 0; height: 100%; width: 100%; } .pie-modal-overlay{ position: absolute; top: 0; left: 0; height: 100%; width: 100%; background-color: '+settings.overlayStyle.backdrop+'; } .pie-modal-container.pie-show-modal { display: flex; } .pie-modal{ display: flex; align-items: center; justify-content: center; width: 720px; position: relative; background-color: '+settings.overlayStyle.backgroundColor+'; } .pie-left-column{ width: 50%; } .pie-left-column img{ width: 100%; display: block; } .pie-right-column{ width: 50%; } .pie-content{ padding: 35px 20px; text-align: center; font-family: Roboto; } .pie-right-column .pie-close-cta img { width: 100%; vertical-align: unset; } .pie-right-column .pie-close-cta{ transition: all 0.3s ease-in-out; font-size: 20px; background-color: '+settings.closeCTA.backgroundColor+'; border-radius: '+settings.closeCTA.borderRadius+'; border: none; color: white; cursor: pointer; position: absolute; right: 10px; top: 10px; height: 30px; width: 30px; padding: 8px; line-height: 13px; } .pie-right-column .pie-close-cta:hover { background-color: '+settings.closeCTA.hoverBackgroundColor+'; } .pie-left-column img.pie-mob { display: none; } .pie-content a{ text-decoration: none; padding: 10px; width: 200px; display: block; margin: 0 auto; margin-top: 25px; transition: all 0.3s ease-in-out;w } .pie-content .pie-button1 {font-size: '+settings.ctaLink1.fontSize+'; border-radius: '+settings.ctaLink1.borderRadius+'; font-family: '+settings.ctaLink1.fontFamily+'; color: '+settings.ctaLink1.textColor+';background-color: '+settings.ctaLink1.backgroundColor+';} .pie-content .pie-button1:hover {color: '+settings.ctaLink1.hoverTextColor+';background-color: '+settings.ctaLink1.hoverbackgroundColor+';} .pie-content .pie-button2 {font-size: '+settings.ctaLink2.fontSize+'; border-radius: '+settings.ctaLink2.borderRadius+';font-family: '+settings.ctaLink2.fontFamily+'; color: '+settings.ctaLink2.textColor+';background-color: '+settings.ctaLink1.backgroundColor+';} .pie-content .pie-button2:hover {color: '+settings.ctaLink2.hoverTextColor+';background-color: '+settings.ctaLink2.hoverbackgroundColor+';} .pie-content h2{ font-size: 20px; } @media screen and (max-width: 767px){ .pie-modal{ display: flex; flex-direction: column; max-width: 480px; } .pie-left-column{ width: 100%; height: 50% } .pie-right-column{ width: 100%; height: 50%; } .pie-left-column img { height: 100%; object-fit: cover; } .pie-left-column img.pie-mob { display: block; } .pie-left-column img.pie-desk {display: none;} } @media (max-width: 550px) { .pie-modal-container .pie-modal { max-width: 90%; } } </style>');

var html = ''+
    '<div class="pie-modal-container">'+
        '<div class="pie-modal-overlay"></div>'+
        '<div class="pie-modal">'+
            '<div class="pie-left-column">'+
                '<img src="'+settings.leftColumn.backgroundImageDesk+'" class="pie-desk" />'+
                '<img src="'+settings.leftColumn.backgroundImageMob+'" class="pie-mob"/>'+
            '</div>'+
            '<div class="pie-right-column">'+
                '<button class="pie-close-cta"><img src="https://cdn.optimizely.com/img/21401470059/83b7fa49071a48ef95888d5600bc5287.svg" /></button>'+
                '<div class="pie-content">'+
                    '<h1>'+settings.heading.title+'</h1>'+
                    '<h2>'+settings.message.title+'</h2>'+
                    '<a class="pie-button1" href="'+settings.ctaLink1.href+'">'+settings.ctaLink1.text+'</a>'+
                    '<a class="pie-button2" href="'+settings.ctaLink2.href+'">'+settings.ctaLink2.text+'</a>'+
                '</div>'+
            '</div>'+
        '</div>'+
    '</div>';
document.body.insertAdjacentHTML('beforeend', html);

document.querySelector('.pie-modal-container .pie-close-cta').addEventListener('click', function() {
    hideModalHandler();
})

function showModalHandler() {
    if(!sessionStorage.getItem('pie-overlay')) {
        sessionStorage.setItem('pie-overlay', true);
        document.querySelector('.pie-modal-container').classList.add('pie-show-modal');
    }
}

function hideModalHandler() {
    document.querySelector('.pie-modal-container').classList.remove('pie-show-modal');
}

function getScrollPercent() {
    var h = document.documentElement, 
        b = document.body,
        st = 'scrollTop',
        sh = 'scrollHeight';
    return (h[st]||b[st]) / ((h[sh]||b[sh]) - h.clientHeight) * 100;
}

if(settings.trigger.timed.flag == "true") {
    setTimeout(function() {
        showModalHandler();
    }, settings.trigger.timed.time)
} else if(settings.trigger.scroll.flag == "true") {
    window.addEventListener('scroll', function() {
        if(settings.trigger.scroll.depth < getScrollPercent()) {
            showModalHandler();
        }
    })
} else if(settings.trigger.exitIntent.flag == "true") {
    document.addEventListener('mouseout', function(e) {
        if (e.toElement == null && e.relatedTarget == null) {
            showModalHandler();
        }
    });
}
