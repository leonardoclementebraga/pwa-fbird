const cacheName = "v1"
const resourcesPrecache = [
  '/',
  'index.html',
  'libraries/p5.js',
  'libraries/p5.dom.js',
  'libraries/p5.sound.js',
  'sketch.js',
  'bird.js',
  'pipe.js',
  'main.js',
]

self.addEventListener('install', (event)=>{
  event.waitUntil(
    caches.open(cacheName).then(
      (cache) => {
        cache.addAll(resourcesPrecache)
      }
    )
  )
})

self.addEventListener('fetch', (event)=>{
  event.respondWith(
    caches.match(event.request).then(
      (cacheResponse) => (cacheResponse || fetch(event.request))
    )
  )
})