self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("green-bounce-cache").then(cache => {
      return cache.addAll([
        "./",
        "./Green_Bounce_Calculator.html",
        "./chart.umd.js",
        "./manifest.json",
        "./icon-192.png",
        "./icon-512.png",
        "./index.html",
      ]);
    })
  );
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(response => {
      return response || fetch(e.request);
    })
  );
});
