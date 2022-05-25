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
    document.head.insertAdjacentHTML('beforeend', '<style></style>')
    
    var topBarHTML = ''+
        '   <div class="pie-top-bar">'+
        '       <button class="pie-close-cta"></button>'+
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
