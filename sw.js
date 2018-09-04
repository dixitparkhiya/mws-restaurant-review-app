var urlTocache = [
    '/',
    'css/styles.css',
    'js/main.js',
    'js/dbhelper.js',
    'js/restaurant_info.js',
    'data/restaurants.json',
    'restaurant.html'
]

self.addEventListener('install',function(event){
    event.waitUntil(
    caches.open('mws-stage-cache-1').then(function(cache){
        return cache.addAll(urlTocache);
    })
    );
});

self.addEventListener('fetch',function(event){
    event.respondWith(
    caches.match(event.request,{ignoreSearch:'true'}).then(function(response){
        if(response) return response;
        return fetch(event.request);
    })
    )
})