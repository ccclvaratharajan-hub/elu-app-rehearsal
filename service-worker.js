// Retire the earlier rehearsal cache at this app's scope. V7 uses the network.
self.addEventListener('install',()=>self.skipWaiting());
self.addEventListener('activate',event=>event.waitUntil((async()=>{const keys=await caches.keys();await Promise.all(keys.filter(k=>/^elu-rehearsal-v[1-6]$/.test(k)).map(k=>caches.delete(k)));await self.clients.claim();await self.registration.unregister()})()));
