var passed_json = {
    trigger: {
        pageOffset: '10'
    },
    ctaStyle: {
        position: 'right', // right | left
        offsetRight: '20px',
        offsetBottom: '20px',
        boxShadow: '',
        borderStyle: '1px solid #3f51b5',
        background: 'transparent',
        width: '50px',
        heigth: '50px',
        borderRadius: '50%'
    },
    svgStyle: {
        width: '20px',
        height: '20px',
        color: '#3f51b5'
    },
};

triggerScrollTop();

function triggerScrollTop() {

    var config = {
        trigger: {
            pageOffset: '10'
        },
        ctaStyle: {
            position: 'right', // right | left
            offsetRight: '20px',
            offsetBottom: '20px',
            boxShadow: '',
            borderStyle: '1px solid #3f51b5',
            background: 'transparent',
            width: '50px',
            heigth: '50px',
            borderRadius: '50%'
        },
        svgStyle: {
            width: '20px',
            height: '20px',
            color: '#3f51b5'
        },
    };

    ObjectValues = function(v, k) {
		if(typeof v == "object") {
			for(var kp in v) {
				if(Object.hasOwnProperty.call(v, kp)) {
					ObjectValues(v[kp], k != undefined ? k + "." + kp : kp);
				}
			}
		} else {
			console.log(k + ":" + v);
			let str = k;
			let myArr = str.split(".");
			config[myArr[0]][myArr[1]] = v;
			console.log(config[myArr[0]][myArr[1]]);
		}
	};
	ObjectValues(passed_json);

    var getScrollPercent = function() {
        var h = document.documentElement, 
            b = document.body,
            st = 'scrollTop',
            sh = 'scrollHeight';
        return (h[st]||b[st]) / ((h[sh]||b[sh]) - h.clientHeight) * 100;
    }
    
    var init = function() {
        document.head.insertAdjacentHTML('beforeend', '<style>body .pie-arrow-cta { display: flex; justify-content: center; align-items: center; border: '+config.ctaStyle.borderStyle+'; background: '+config.ctaStyle.background+'; width: '+config.ctaStyle.width+'; height: '+config.ctaStyle.heigth+'; border-radius: '+config.ctaStyle.borderRadius+'; padding: 0; } .pie-arrow-cta svg { fill: '+config.svgStyle.color+'; width: '+config.svgStyle.width+'; height: '+config.svgStyle.height+'; } .pie-sticky-cta { position: fixed; '+(config.ctaStyle.position == 'right' ? config.ctaStyle.position+':'+config.ctaStyle.offsetRight : config.ctaStyle.position+':'+config.ctaStyle.offsetLeft)+'; bottom: 20px; z-index: 9999; opacity: 0; visibility: hidden; transition: opacity 0.3s ease-in-out; } .pie-sticky-cta.pie-show-arrow { opacity: 1; visibility: visible; } </style>')
        
        var topBarHTML = ''+
            '   <div class="pie-sticky-cta">'+
            '       <button class="pie-arrow-cta"><?xml version="1.0" encoding="iso-8859-1"?> <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 483.12 483.12" style="enable-background:new 0 0 483.12 483.12;" xml:space="preserve"> <g> <g> <path d="M2.728,366.416c6.8,4.9,21.5-1.2,37.2-15.5c28.1-25.7,56.6-51.4,83.4-78.6c41.4-41.9,81.7-84.9,122.4-127.4 c67,79.4,145.5,150,217.8,225.4c3.4,3.6,11.4,6.6,14.9,6.6c6.9,0,5.3-7.4,0.9-16.3c-14.7-29.3-38.2-59.1-64.4-87.1 c-51-54.3-101.2-109.2-154.5-161.7l-0.2-0.2l0,0c-7.4-7.3-19.3-7.2-26.6,0.2c-12.6,12.8-25.2,25.8-37.5,39 c-8.4,7.9-16.8,15.7-25.1,23.6c-52.7,50.4-104.6,101.6-153,155.8C4.128,345.716-4.772,361.116,2.728,366.416z"/> </g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> </svg></button>'+
            '   </div>';
        
        document.body.insertAdjacentHTML('afterbegin', topBarHTML);
    
        window.addEventListener('scroll', function() {
            if(config.trigger.pageOffset < getScrollPercent()) {
                document.querySelector('.pie-sticky-cta').classList.add('pie-show-arrow')
            } else {
                document.querySelector('.pie-sticky-cta').classList.remove('pie-show-arrow')
            }
        })
    
        document.querySelector('.pie-sticky-cta button').addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            })
        })
        
    }
    
    var interval = setInterval(function() {
        if(document.body != null) {
            clearInterval(interval);
            if(window.sessionStorage.getItem('pie-top-message') == null) {
                init();
            }
        }
    }, 50);
    setTimeout(function() {
        clearInterval(interval);
    }, 5000);
}




