const CACHE = 'ministeriapp-v3';

self.addEventListener('install', e => {
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  // Delete ALL old caches including broken ones
  e.waitUntil(
    caches.keys().then(keys => Promise.all(keys.map(k => caches.delete(k))))
  );
  self.clients.claim();
});

// Pass everything straight to network — no interception
self.addEventListener('fetch', e => {
  e.respondWith(fetch(e.request));
});
