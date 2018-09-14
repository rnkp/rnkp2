this.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open('v1').then(function(cache) {
            return cache.addAll([
                '/',
                '/css/main.css',
                '/js/main.js',
                '/images/bg1.jpg',
                '/images/bg1_blur.jpg',
                '/images/gerb_black_big.png',
                '/images/logo.jpg',
                '/images/logo-color-big.png',
                '/images/logo-color-min.png',
                '/images/logo-black-min.png',
                '/images/logo_min.png',
                '/images/page2_img1.png',
                '/images/russia.png',
                '/images/articles/Kurskaya.jpg',
                '/images/articles/Lissner.jpg',
                '/images/articles/Varyagi.jpg',
                '/favicon.ico',
                '/fonts/sf-ui-display-bold.eot',
                '/fonts/sf-ui-display-bold.ttf',
                '/fonts/sf-ui-display-bold.woff',
                '/fonts/sf-ui-display-light.eot',
                '/fonts/sf-ui-display-light.ttf',
                '/fonts/sf-ui-display-light.woff',
                '/fonts/sf-ui-display-medium.eot',
                '/fonts/sf-ui-display-medium.ttf',
                '/fonts/sf-ui-display-medium.woff',
                '/fonts/sf-ui-display-regular.eot',
                '/fonts/sf-ui-display-regular.ttf',
                '/fonts/sf-ui-display-regular.woff'
            ]);
        })
    );
});

this.addEventListener('fetch', function(event) {
    event.respondWith(caches.match(event.request).catch(function() {
        return fetch(event.request);
    }).then(function(response) {
        if(!response) return false;

        caches.open('v1').then(function(cache) {
            cache.put(event.request, response);
        });
        return response.clone();
    }).catch(function() {
        return caches.match('/images/bg1.jpg');
    }));
});
