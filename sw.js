// sw.js
self.addEventListener('install', e => {
 e.waitUntil(
   // after the service worker is installed,
   // open a new cache
   caches.open('my-pwa-cache').then(cache => {
     // add all URLs of resources we want to cache
     return cache.addAll([
       '/',
       '/index.html',
       '/menu.html',
       '/forums.html',
       '/404.html',
       '/favicon.ico',
       '/manifest.json'
       '/sw.js'
     ]);
   })
 );
});