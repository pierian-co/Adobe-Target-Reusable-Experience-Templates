var config = {
    'quickBanner': {
        'background': 'linear-gradient(to right, #e60000 0%, #820000 100%)',
        'position': 'before', // before | after
        'selector': 'body .container'
    },
    'itemStyle': {
        'img': {
            'width': '60px',
            'height': 'auto'
        },
        'title': {
            'fontSize': '16px',
            'fontFamily': 'inherit',
            'color': '#fff'
        }
    },
    'items': [
        {
            href: '#',
            image: 'https://i.imgur.com/GxPLq3W.png',
            title: 'Know More'
        },
        {
            href: '#',
            image: 'https://i.imgur.com/GxPLq3W.png',
            title: 'Know More'
        },
        {
            href: '#',
            image: 'https://i.imgur.com/GxPLq3W.png',
            title: 'Know More'
        },
        {
            href: '#',
            image: 'https://i.imgur.com/GxPLq3W.png',
            title: 'Know More'
        },
        {
            href: '#',
            image: 'https://i.imgur.com/GxPLq3W.png',
            title: 'Know More'
        },
        {
            href: '#',
            image: 'https://i.imgur.com/GxPLq3W.png',
            title: 'Know More'
        },
    ]
};

var createQuickItemHTML = () => {
    var html = '';
    for(var i = 0; i < config.items.length; i++) {
        html += ''+
        ' <div class="pie-quick-item">'+
        '     <a href="'+config.items[i].href+'" class="pie-quick-link">'+
        '         <img src="'+config.items[i].image+'" alt="" />'+
        '         <p>'+config.items[i].title+'</p>'+
        '     </a>'+
        '</div>'
    }
    return html;
}

var init = function() {
    document.head.insertAdjacentHTML('beforeend', '<style>.pie-quick-container { margin-right: auto; margin-left: auto; max-width: 1440px; display: flex; justify-content: center; align-items: center; padding-top: 20px; padding-bottom: 20px; flex-wrap: wrap; } @media (min-width: 48em) { .pie-quick-container { padding-right: 1.25em; padding-left: 1.25em; } } .pie-quick-wrapper { background: '+config.quickBanner.background+'; } .pie-quick-item > a { color: #fff; text-decoration: none; cursor: pointer; } a.pie-quick-link > img { width: '+config.itemStyle.img.width+'; height: '+config.itemStyle.img.height+'; display: block; margin: auto; margin-bottom: 10px; } .pie-quick-item { padding: 0 20px; } a.pie-quick-link > p { margin: 0; font-size: '+config.itemStyle.title.fontSize+'; font-family: '+config.itemStyle.title.fontFamily+'; color: '+config.itemStyle.title.color+'; }</style>')
    
    var quickItemHTML = ''+
        '   <div class="pie-quick-wrapper">'+
        '       <div class="pie-quick-container">'+createQuickItemHTML()+'</div>'+
        '   </div>';
    
    if(config.quickBanner.position == 'before') {
        document.querySelector(config.quickBanner.selector).insertAdjacentHTML('beforebegin', quickItemHTML);
    } else {
        document.querySelector(config.quickBanner.selector).insertAdjacentHTML('afterend', quickItemHTML);
    }
    
}

var interval = setInterval(function() {
    if(document.querySelectorAll(config.quickBanner.selector).length > 0) {
        clearInterval(interval);
        init();
    }
}, 50);
setTimeout(function() {
    clearInterval(interval);
}, 5000);
