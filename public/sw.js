// Askoda service worker — caches built assets for instant loading.
const CACHE = "askoda-v1";
const ASSETS = ["/", "/manifest.json", "/icon.svg"];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE).then((cache) => cache.addAll(ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(clients.claim());
});

self.addEventListener("fetch", (event) => {
  const url = new URL(event.request.url);

  // Only cache same-origin GET requests
  if (event.request.method !== "GET" || url.origin !== location.origin) return;

  // Don't cache API calls
  if (url.pathname.startsWith("/api/")) return;

  // Network-first for HTML, cache-first for assets
  if (url.pathname === "/" || url.pathname.endsWith(".html")) {
    event.respondWith(networkFirst(event.request));
  } else {
    event.respondWith(cacheFirst(event.request));
  }
});

async function networkFirst(request) {
  try {
    const res = await fetch(request);
    const cache = await caches.open(CACHE);
    cache.put(request, res.clone());
    return res;
  } catch {
    return caches.match(request);
  }
}

async function cacheFirst(request) {
  const cached = await caches.match(request);
  if (cached) return cached;
  try {
    const res = await fetch(request);
    const cache = await caches.open(CACHE);
    cache.put(request, res.clone());
    return res;
  } catch {
    return new Response("Offline", { status: 503 });
  }
}
