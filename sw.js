self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('downtime-cache').then(cache => {
      return cache.addAll([
        'index.html',
        'manifest.webmanifest',
        'icon.png'
      ]);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});