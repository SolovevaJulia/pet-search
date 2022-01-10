const CACHE = 'network-or-cache-v1';
const timeout = 400;


self.addEventListener('beforeinstallprompt', function(event) {
    // Prevent Chrome 67 and earlier from automatically showing the prompt
    event.preventDefault();
});


// При установке воркера мы должны закешировать часть данных (статику).
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE).then((cache) => cache.addAll([
                'header/img/dog-logo.png'
            ])
        ));
});

// при событии fetch, мы и делаем запрос, но используем кэш, только после истечения timeout.
self.addEventListener('fetch', (event) => {
    event.respondWith(fromNetwork(event.request, timeout)
        .catch((err) => {
            console.log(`Error: ${err.message()}`);
            return fromCache(event.request);
        }));
});

// Временно-ограниченный запрос.
function fromNetwork(request, timeout) {
    return new Promise((fulfill, reject) => {
        const timeoutId = setTimeout(reject, timeout);
        fetch(request).then((response) => {
            clearTimeout(timeoutId);
            fulfill(response);
        }, reject);
    });
}

function fromCache(request) {
// Открываем наше хранилище кэша (CacheStorage API), выполняем поиск запрошенного ресурса.
// Обратите внимание, что в случае отсутствия соответствия значения Promise выполнится успешно, но со значением `undefined`
    return caches.open(CACHE).then((cache) =>
        cache.match(request).then((matching) =>
            matching || Promise.reject('no-match')
        ));
}
