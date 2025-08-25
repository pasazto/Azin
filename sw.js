self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('downtime-cache').then(cache => {
      return cache.addAll([
        'index.html',
        'manifest.webmanifest',
        'icon.png',
        'web-app-manifest-192x192',
        'web-app-manifest-512x512',
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
