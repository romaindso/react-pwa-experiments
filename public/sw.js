self.addEventListener('install', function(e){
  console.log("Service Worker : installing...");
  e.waitUntil(
    caches.open('mycache').then(function(cache) {
      console.log("Service Worker : cache app shell");
      return cache.addAll([
        './',
        './manifest.json',
        './index.html',
        './favicon.ico',
        './bootstrap-theme.min.css',
        './bootstrap.min.css',
        './static/js/main.242846c5.js',
        './static/js/main.242846c5.js.map',
        './static/css/main.999d12a1.css',
        './static/css/main.999d12a1.css.map',
        './static/media/footer.f2d9fcde.jpg'
      ])
      .then(() => {
        console.log("Service Worker : installed");
        self.skipWaiting();
      });
   })
 );
});

// intercepts all requests
self.addEventListener('fetch', function(event){
  console.log(event.request.url);
  event.respondWith(
    // look in the cache for a ressource that matches
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
    .catch(err => {
      console.log('Service Worker : fetch error ' + err);
    })
  );
});
