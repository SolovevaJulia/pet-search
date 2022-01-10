self.addEventListener('install', (event) => {
    console.log('Установлен', event);
    event.waitUntil(
        caches.open('v1').then((cache) => {
            return cache.addAll([
                './iconLogoPWA',
                './index.html',
                './style.css'
            ]);
        })
    );
});

self.addEventListener('activate', (event) => {
    console.log('Активирован', event);
});

self.addEventListener('fetch', (event) => {
    console.log('Происходит запрос на сервер', event);
});
