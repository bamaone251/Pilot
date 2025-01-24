const CACHE_NAME = "weather-dashboard-cache-v1";
const urlsToCache = [
    "./",
    "./index.html",
    "./EUS.html",
    "./GREATLAKES.html",
    "./NE.html",
    "./ROCKIES.html",
    "./style.css",
    "./script.js",
    "./manifest.json"
];

self.addEventListener("install", event => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            return cache.addAll(urlsToCache);
        })
    );
});

self.addEventListener("fetch", event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request);
        })
    );
});
