// const CACHE = 'network-or-cache-v1';
// const timeout = 400;

// let cacheUrls = [
//     '/',
//     'https://ilyalesunov.gitlab.io/pet-search/static/css/*.css',
//     'https://ilyalesunov.gitlab.io/pet-search/build/static/css/**/*.css',
//     'https://ilyalesunov.gitlab.io/pet-search/build/static/js/*.js',
//     'https://ilyalesunov.gitlab.io/pet-search/build/static/js/**/*.js',
//     'https://ilyalesunov.gitlab.io/pet-search/build/media/**/*.jpg',
//     'https://ilyalesunov.gitlab.io/pet-search/build/media/*.jpg'
// ];

// self.addEventListener('install', (event) => {
//     console.log('Установлен', event);
//     event.waitUntil(
//         caches.open('v1').then((cache) => {
//             console.log('cacheUrls', cacheUrls);
//             return cache.addAll(cacheUrls);
//         })
//     );
// });

// // при событии fetch, мы и делаем запрос, но используем кэш, только после истечения timeout.
// self.addEventListener('fetch', (event) => {
//     event.respondWith(fromNetwork(event.request, timeout)
//         .catch((err) => {
//             console.log(`Error: ${err.message()}`);
//             return fromCache(event.request);
//         }));
// });

// // Временно-ограниченный запрос.
// function fromNetwork(request, timeout) {
//     return new Promise((fulfill, reject) => {
//         var timeoutId = setTimeout(reject, timeout);
//         fetch(request).then((response) => {
//             clearTimeout(timeoutId);
//             fulfill(response);
//         }, reject);
//     });
// }

// function fromCache(request) {
// // Открываем наше хранилище кэша (CacheStorage API), выполняем поиск запрошенного ресурса.
// // Обратите внимание, что в случае отсутствия соответствия значения Promise выполнится успешно, но со значением `undefined`
//     return caches.open(CACHE).then((cache) =>
//         cache.match(request).then((matching) =>
//             matching || Promise.reject('no-match')
//         ));
// }
