/**
 * LearnAI Service Worker — Offline Caching & PWA Support
 */

const CACHE_NAME = 'learnai-v2';
const STATIC_ASSETS = [
  '/LearnAi/',
  '/LearnAi/index.html',
  '/LearnAi/subjects.html',
  '/LearnAi/css/styles.css',
  '/LearnAi/css/znotes-style.css',
  '/LearnAi/css/effects.css',
  '/LearnAi/js/data.js',
  '/LearnAi/js/app.js',
  '/LearnAi/js/auth.js',
  '/LearnAi/js/theme.js',
  '/LearnAi/js/nav.js',
  '/LearnAi/js/search.js',
  '/LearnAi/js/mascot.js',
  '/LearnAi/images/mascot-new.jpg',
  '/LearnAi/manifest.json'
];

// Install — cache static assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(STATIC_ASSETS);
    }).catch(() => {
      // Silent fail for missing assets
    })
  );
  self.skipWaiting();
});

// Activate — clean old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((name) => name !== CACHE_NAME)
          .map((name) => caches.delete(name))
      );
    })
  );
  self.clients.claim();
});

// Fetch — cache-first strategy for static, network-first for API
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip non-GET requests
  if (request.method !== 'GET') return;

  // API calls — network only
  if (url.pathname.startsWith('/api/')) {
    return;
  }

  // Static assets — cache first, network fallback
  event.respondWith(
    caches.match(request).then((cached) => {
      if (cached) {
        // Refresh cache in background
        fetch(request).then((response) => {
          if (response.ok) {
            caches.open(CACHE_NAME).then((cache) => cache.put(request, response));
          }
        }).catch(() => {});
        return cached;
      }
      return fetch(request).then((response) => {
        if (response.ok && response.type === 'basic') {
          const clone = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(request, clone));
        }
        return response;
      }).catch(() => {
        // Offline fallback for HTML pages
        if (request.headers.get('accept')?.includes('text/html')) {
          return caches.match('/LearnAi/index.html');
        }
        return new Response('Offline', { status: 503 });
      });
    })
  );
});
