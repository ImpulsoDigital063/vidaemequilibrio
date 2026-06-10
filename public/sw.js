// KILL-SWITCH · 10/06/2026
// Havia um service worker (PWA) de build antigo registrado nos navegadores,
// servindo a página em cache e prendendo o usuário numa versão velha do site.
// Este sw.js substitui o antigo: ao ativar, apaga TODOS os caches, se
// desregistra e força o reload das janelas abertas. Some o cache fantasma.
self.addEventListener("install", () => {
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      const keys = await caches.keys();
      await Promise.all(keys.map((k) => caches.delete(k)));
      await self.registration.unregister();
      const clients = await self.clients.matchAll({ type: "window" });
      clients.forEach((client) => client.navigate(client.url));
    })()
  );
});
