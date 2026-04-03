// Service Worker for offline support and performance caching
// This enables faster repeat visits and offline access

const CACHE_NAME = 'portfolio-cache-v1';
const RUNTIME_CACHE = 'portfolio-runtime-v1';
const ASSETS_CACHE = 'portfolio-assets-v1';

// Assets to cache on install
const urlsToCache = [
  '/',
  '/index.html',
  '/logo.svg',
];

// Install event - cache critical assets
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache).catch(err => {
        console.warn('Cache addAll error:', err);
      });
    }).then(() => self.skipWaiting())
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME && 
              cacheName !== RUNTIME_CACHE && 
              cacheName !== ASSETS_CACHE) {
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch event - network first, fallback to cache
self.addEventListener('fetch', event => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip cross-origin requests
  if (url.origin !== location.origin) {
    return;
  }

  // Handle GET requests
  if (request.method !== 'GET') {
    return;
  }

  // Cache strategies by request type
  if (request.destination === 'style' || request.destination === 'script') {
    // Assets: cache with network fallback
    event.respondWith(
      caches.open(ASSETS_CACHE).then(cache => {
        return cache.match(request).then(response => {
          return response || fetch(request).then(response => {
            if (response.ok) {
              cache.put(request, response.clone());
            }
            return response;
          });
        });
      }).catch(() => fetch(request))
    );
  } else if (request.destination === 'image' || url.pathname.includes('textures')) {
    // Images & textures: cache with network fallback
    event.respondWith(
      caches.open(ASSETS_CACHE).then(cache => {
        return cache.match(request).then(response => {
          return response || fetch(request, { 
            mode: 'cors',
            cache: 'force-cache'
          }).then(response => {
            if (response.ok) {
              cache.put(request, response.clone());
            }
            return response;
          });
        });
      }).catch(() => {
        // Fallback for images
        return caches.match('/logo.svg');
      })
    );
  } else {
    // HTML & other: network first with cache fallback
    event.respondWith(
      fetch(request, { cache: 'no-cache' }).then(response => {
        if (response.ok) {
          const cache = caches.open(RUNTIME_CACHE);
          cache.then(c => c.put(request, response.clone()));
        }
        return response;
      }).catch(() => {
        return caches.match(request).then(response => {
          return response || caches.match('/index.html');
        });
      })
    );
  }
});
