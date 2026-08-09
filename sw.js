// SonicFlow Service Worker
self.addEventListener('install', event => {
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', event => {
  // Simple network-first passthrough. No caching for now to keep things simple.
  event.respondWith(
    fetch(event.request).catch(() => new Response('', {
      status: 503,
      statusText: 'Offline'
    }))
  );
});
