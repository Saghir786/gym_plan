const CACHE_NAME='gym-routine-mp-v1';
const ASSETS=['./','./index.html','./day1.html','./day2.html','./day3.html','./manifest.json','./icons/icon-192.png','./icons/icon-512.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE_NAME).then(c=>c.addAll(ASSETS)));self.skipWaiting();});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(keys=>Promise.all(keys.map(k=>k!==CACHE_NAME?caches.delete(k):null))));self.clients.claim();});
self.addEventListener('fetch',e=>{const url=new URL(e.request.url);if(url.origin===location.origin){e.respondWith(caches.match(e.request).then(cached=>cached||fetch(e.request)));}else{e.respondWith(fetch(e.request));}});
