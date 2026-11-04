// Android app build: no fetch handler, so every request goes straight to the
// app's bundled files. (The website keeps its own sw.js.)
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
