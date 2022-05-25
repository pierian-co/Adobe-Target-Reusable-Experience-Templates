var config = {
    message: {
        'title': 'Check out our new courses on Mobile Testing with BrowserStack App Automate. Login to',
        'fontSize': '16px',
        'fontFamily': 'sans-serif',
        'color': '#fff'
    },
    cta: {
        'flag': 'true',
        'copy': 'Test University',
        'link': '#',
        'fontSize': '14px',
        'fontFamily': 'sans-serif',
        'borderRadius': '4px',
        'color': '#fff'
    },
    bar: {
        'backgroundColor': '#004f80',
        'sessionBased': 'false'
    }
};

var init = function() {
    document.head.insertAdjacentHTML('beforeend', '<style>p.pie-top-bar-messaging { margin: 0; font-size: '+config.message.fontSize+'; font-family: '+config.message.fontFamily+'; color: '+config.message.color+'; padding: 10px; } .pie-top-bar { background: '+config.bar.backgroundColor+'; text-align: center; position: relative; } p.pie-top-bar-messaging a { color: '+config.cta.color+'; text-decoration: none; border: 1px solid #fff; display: inline-block; padding: 5px; border-radius: '+config.cta.borderRadius+'; margin-left: 10px; font-size: '+config.cta.fontSize+'; font-family: '+config.cta.fontFamily+'; } button.pie-close-cta { border: none; background: none; position: absolute; display: inline-block; top: 0; right: 10px; bottom: 0; } button.pie-close-cta svg path { fill: #fff !important; }</style>')
    
    var topBarHTML = ''+
        '   <div class="pie-top-bar">'+
        '       <p class="pie-top-bar-messaging">'+config.message.title+''+(config.cta.flag == 'true' ? '<a href="'+config.cta.link+'">'+config.cta.copy+'</a>' : '')+'</p>'+
        '       <button class="pie-close-cta"><svg width="10px" height="10px" viewBox="0 0 10 10" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"> <g> <path d="M6.43835616,5.15981735 C6.34703196,5.06849315 6.34703196,4.93150685 6.43835616,4.84018265 L9.8630137,1.41552511 C9.9543379,1.32420091 10,1.18721461 10,1.09589041 C10,1.00456621 9.9543379,0.867579909 9.8630137,0.776255708 L9.22374429,0.136986301 C9.13242009,0.0456621005 8.99543379,0 8.90410959,0 C8.76712329,0 8.67579909,0.0456621005 8.58447489,0.136986301 L5.15981735,3.56164384 C5.06849315,3.65296804 4.93150685,3.65296804 4.84018265,3.56164384 L1.41552511,0.136986301 C1.32420091,0.0456621005 1.18721461,0 1.09589041,0 C1.00456621,0 0.867579909,0.0456621005 0.776255708,0.136986301 L0.136986301,0.776255708 C0.0456621005,0.867579909 0,1.00456621 0,1.09589041 C0,1.18721461 0.0456621005,1.32420091 0.136986301,1.41552511 L3.56164384,4.84018265 C3.65296804,4.93150685 3.65296804,5.06849315 3.56164384,5.15981735 L0.136986301,8.58447489 C0.0456621005,8.67579909 0,8.81278539 0,8.90410959 C0,8.99543379 0.0456621005,9.13242009 0.136986301,9.22374429 L0.776255708,9.8630137 C0.867579909,9.9543379 1.00456621,10 1.09589041,10 C1.18721461,10 1.32420091,9.9543379 1.41552511,9.8630137 L4.84018265,6.43835616 C4.93150685,6.34703196 5.06849315,6.34703196 5.15981735,6.43835616 L8.58447489,9.8630137 C8.67579909,9.9543379 8.81278539,10 8.90410959,10 C8.99543379,10 9.13242009,9.9543379 9.22374429,9.8630137 L9.8630137,9.22374429 C9.9543379,9.13242009 10,8.99543379 10,8.90410959 C10,8.81278539 9.9543379,8.67579909 9.8630137,8.58447489 L6.43835616,5.15981735 L6.43835616,5.15981735 Z" fill="#dddddd"></path> </g> </svg></button>'+
        '   </div>';
    
    document.body.insertAdjacentHTML('afterbegin', topBarHTML);
    document.querySelector('.pie-close-cta').addEventListener('click', function() {
        this.closest('.pie-top-bar').remove();
        config.bar.sessionBased == 'true' && window.sessionStorage.setItem('pie-top-message', true);
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
