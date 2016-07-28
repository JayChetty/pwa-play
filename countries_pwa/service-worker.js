var filesToCache = [
  '/',
  '/index.html',
  '/scripts/app.js'
]

self.addEventListener("install", function(e){
  console.log('[ServiceWorker] installs')
  e.waitUntil(
    caches.open('countriesPWA-step-1-0').then(function(cache){
      console.log('caching app shell')
      return cache.addAll( filesToCache )
    })
  )
})


self.addEventListener("activate", function(e){
  console.log('[ServiceWorker] activate')
})


self.addEventListener('fetch', function(e){
  console.log('[ServiceWorker] fetch', e.request)
  console.log('[ServiceWorker] have the cache', caches.keys())
  e.respondWith(
    caches.match(e.request).then(function(response){
      return response || fetch( e.request )
    })
  )
})
